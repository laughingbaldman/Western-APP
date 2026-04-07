@echo off
setlocal
setlocal EnableDelayedExpansion

REM Hide console by default in production launches.
REM Set WESTERN_INTEL_SHOW_CONSOLE=1 before launch to keep this window visible.
if /I not "%WESTERN_INTEL_SHOW_CONSOLE%"=="1" (
    if /I "%~1" NEQ "--hidden" (
        powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process -WindowStyle Hidden -FilePath '%~f0' -ArgumentList '--hidden'" >nul 2>&1
        exit /b 0
    )
)

if /I "%~1"=="--hidden" shift /1

cd /d "%~dp0"

REM Defensive cleanup for inherited environment that can break Electron startup
set "NODE_OPTIONS="
set "ELECTRON_RUN_AS_NODE="
set "ELECTRON_NO_ATTACH_CONSOLE="
set "ELECTRON_ENABLE_LOGGING="
set "ELECTRON_ENABLE_STACK_DUMPING="

REM Use Windows trust store for TLS validation (needed for some enterprise/self-signed roots)
set "NODE_OPTIONS=--use-system-ca"

cls
echo.
echo ============================================
echo   WESTERN INTELLIGENCE SUPPORT AGENT
echo ============================================
echo.

REM Run safe integrated KB rebuild before app startup (non-destructive, with backup on change)
set "PROJECT_ROOT=%~dp0.."
set "SAFE_REBUILD_SCRIPT=%PROJECT_ROOT%\rebuild_integrated_kb_safe.py"
set "VENV_PYTHON=%PROJECT_ROOT%\..\.venv\Scripts\python.exe"
set "KB_PATH=%PROJECT_ROOT%\Western Building Supply knowledgebase.md"
set "SAFE_BACKUP_DIR=%PROJECT_ROOT%\..\recovery\safe-rebuild-backups"

if exist "%SAFE_REBUILD_SCRIPT%" (
    echo Checking integrated knowledge base - safe rebuild...
    if exist "%VENV_PYTHON%" (
        call "%VENV_PYTHON%" "%SAFE_REBUILD_SCRIPT%" --kb-path "%KB_PATH%" --backup-dir "%SAFE_BACKUP_DIR%"
        set "SAFE_REBUILD_EXIT=!ERRORLEVEL!"
        if defined LOG_FILE echo Safe rebuild exit code: !SAFE_REBUILD_EXIT!>>"!LOG_FILE!"
        if not "!SAFE_REBUILD_EXIT!"=="0" echo Safe rebuild reported non-zero exit code: !SAFE_REBUILD_EXIT!
    ) else (
        echo Python venv not found at "%VENV_PYTHON%". Skipping safe rebuild.
        if defined LOG_FILE echo Safe rebuild skipped: Python venv not found at "!VENV_PYTHON!">>"!LOG_FILE!"
    )
    echo.
)

REM Check if node_modules exists
if exist "node_modules" goto start_app

echo Installing dependencies (first time only)...
echo.
call npm install
if errorlevel 1 (
    echo.
    echo Error during npm install
    pause
    exit /b 1
)
echo.

:start_app
echo.
echo Starting application...
echo.
echo AI endpoint can be local or remote.
echo Configure LM Studio URL in Admin Settings if needed.
echo.

call npm run start:system-ca
set "APP_EXIT=!ERRORLEVEL!"

if defined LOG_FILE echo npm start exit code: !APP_EXIT!>>"!LOG_FILE!"

if not "!APP_EXIT!"=="0" (
    echo.
    echo Application exited with code !APP_EXIT!.
    echo Check startup log for details: "%LOG_FILE%"
    echo.
    if defined LOG_FILE echo Application exited with code !APP_EXIT!.>>"!LOG_FILE!"
)

exit /b !APP_EXIT!

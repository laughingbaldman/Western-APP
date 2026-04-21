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

set "PY_LAUNCHER=%~dp0Start-Western-Intelligence.py"
if exist "%PY_LAUNCHER%" (
	where py >nul 2>&1
	if not errorlevel 1 (
		py -3 "%PY_LAUNCHER%" %*
		exit /b %ERRORLEVEL%
	)
	where python >nul 2>&1
	if not errorlevel 1 (
		python "%PY_LAUNCHER%" %*
		exit /b %ERRORLEVEL%
	)
)

set "LOG_DIR=%LOCALAPPDATA%\Western Intelligence"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"
set "LOG_FILE=%LOG_DIR%\startup.log"

echo ============================================>>"%LOG_FILE%"
echo Startup %DATE% %TIME%>>"%LOG_FILE%"

REM Start LM Studio
set "LM_STUDIO_EXE=C:\Program Files\LM Studio\LM Studio.exe"
if exist "%LM_STUDIO_EXE%" (
	echo Local LM Studio detected. Attempting to start...
	echo Local LM Studio detected. Attempting to start...>>"%LOG_FILE%"
	start "" "%LM_STUDIO_EXE%"

	REM Wait for LM Studio server on port 1234 (max ~120s)
	echo Waiting for local LM Studio server on port 1234...
	echo Waiting for local LM Studio server on port 1234...>>"%LOG_FILE%"
	set /a _lm_tries=0
	:wait_lm
	set /a _lm_tries+=1
	powershell -NoProfile -Command "$c=New-Object System.Net.Sockets.TcpClient; $ar=$c.BeginConnect('127.0.0.1',1234,$null,$null); if ($ar.AsyncWaitHandle.WaitOne(1000,$false) -and $c.Connected) { $c.Close(); exit 0 } else { try{$c.Close()}catch{}; exit 1 }" >nul 2>&1
	if errorlevel 1 (
		if !_lm_tries! GEQ 60 (
			echo Local LM Studio server not detected after 120 seconds. Starting app anyway...
			echo Local LM Studio server not detected after 120 seconds. Starting app anyway...>>"%LOG_FILE%"
			goto start_app
		)
		timeout /t 2 /nobreak >nul
		goto wait_lm
	)
) else (
	echo Local LM Studio not installed. Continuing with app startup using remote endpoint support.
	echo Local LM Studio not installed. Continuing with app startup using remote endpoint support.>>"%LOG_FILE%"
)

:start_app
echo Launching app runner...>>"%LOG_FILE%"
call "%~dp0app\run.bat"
set "APP_EXIT=%ERRORLEVEL%"
echo App runner exit code: %APP_EXIT%>>"%LOG_FILE%"
exit /b %APP_EXIT%

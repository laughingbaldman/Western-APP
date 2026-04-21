#!/usr/bin/env python3
"""Python launcher for Western Intelligence."""

from __future__ import annotations

import argparse
import os
import socket
import subprocess
import sys
import time
from pathlib import Path


def get_log_file() -> Path:
    local_app_data = os.environ.get("LOCALAPPDATA")
    if local_app_data:
        log_dir = Path(local_app_data) / "Western Intelligence"
    else:
        log_dir = Path.home() / ".western-intelligence"
    log_dir.mkdir(parents=True, exist_ok=True)
    return log_dir / "startup.log"


def log(message: str, log_file: Path) -> None:
    print(message)
    with log_file.open("a", encoding="utf-8") as handle:
        handle.write(f"{message}\n")


def is_port_open(host: str, port: int) -> bool:
    try:
        with socket.create_connection((host, port), timeout=1):
            return True
    except OSError:
        return False


def start_lm_studio(log_file: Path) -> None:
    lm_studio_exe = Path(r"C:\Program Files\LM Studio\LM Studio.exe")
    if not lm_studio_exe.exists():
        log(
            "Local LM Studio not installed. Continuing with app startup using remote endpoint support.",
            log_file,
        )
        return

    log("Local LM Studio detected. Attempting to start...", log_file)
    try:
        subprocess.Popen([str(lm_studio_exe)], close_fds=True)
    except OSError as exc:
        log(f"Failed to start LM Studio ({exc}). Continuing startup.", log_file)
        return

    log("Waiting for local LM Studio server on port 1234...", log_file)
    for _ in range(60):
        if is_port_open("127.0.0.1", 1234):
            return
        time.sleep(2)

    log(
        "Local LM Studio server not detected after 120 seconds. Starting app anyway...",
        log_file,
    )


def run_app(repo_root: Path, log_file: Path) -> int:
    app_runner = repo_root / "app" / "run.bat"
    if not app_runner.exists():
        log(f"App runner not found at {app_runner}", log_file)
        return 1

    log("Launching app runner...", log_file)
    completed = subprocess.run(["cmd", "/c", str(app_runner)], cwd=str(repo_root), check=False)
    log(f"App runner exit code: {completed.returncode}", log_file)
    return completed.returncode


def main() -> int:
    parser = argparse.ArgumentParser(description="Start Western Intelligence")
    parser.add_argument("--hidden", action="store_true", help="Accepted for launcher compatibility.")
    parser.parse_args()

    if os.name != "nt":
        print("This launcher currently supports Windows only.")
        return 1

    repo_root = Path(__file__).resolve().parent
    log_file = get_log_file()

    with log_file.open("a", encoding="utf-8") as handle:
        handle.write("============================================\n")
        handle.write(f"Startup {time.strftime('%Y-%m-%d %H:%M:%S')}\n")

    start_lm_studio(log_file)
    return run_app(repo_root, log_file)


if __name__ == "__main__":
    sys.exit(main())

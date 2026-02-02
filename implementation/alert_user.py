#!/usr/bin/env python3
import sys
import json

import subprocess

def play_sound():
    try:
        # macOS standard sound "Glass"
        subprocess.run(["afplay", "/System/Library/Sounds/Glass.aiff"], check=False)
    except Exception:
        pass # Fail silently if sound cannot handle

def main():
    if len(sys.argv) < 2:
        print("Usage: alert_user.py <type> [message]")
        sys.exit(1)

    alert_type = sys.argv[1]
    message = sys.argv[2] if len(sys.argv) > 2 else ""

    output = {
        "type": alert_type,
        "message": message,
        "status": "alert_sent"
    }

    # In a real desktop environment, this might trigger a system notification.
    # For this agentic context, we log structured JSON to stdout so the binding agent can parse it if needed.
    print(json.dumps(output))

    if alert_type == "waiting":
        print(f"ALERT: Waiting for user input... {message}", file=sys.stderr)
    elif alert_type == "success":
        print(f"ALERT: Task completed successfully. {message}", file=sys.stderr)
        play_sound()
    else:
        print(f"ALERT: {alert_type} - {message}", file=sys.stderr)

if __name__ == "__main__":
    main()

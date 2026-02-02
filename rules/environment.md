# Environment Standards

## Audio Feedback
**Context**: User is on MacOS and requires audible confirmation when tasks complete.

**Rule**:
- The `implementation/alert_user.py` script MUST play a sound when `type="success"`.
- **Sound**: `/System/Library/Sounds/Glass.aiff`
- **Mechanism**: Use `subprocess` to call `afplay`.
- **Constraint**: Must be non-blocking (check=False) and fail silently if audio is unavailable.

## Usage
This rule applies primarily to:
- `implementation/alert_user.py`
- Any future notification scripts.

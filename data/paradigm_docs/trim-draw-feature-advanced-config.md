# Trim Draw Feature: Advanced Config and Line Description Behavior

Source: https://docs.goparagon.com/kb/trim-draw/
Focused section: https://docs.goparagon.com/kb/trim-draw/#advanced-config

---

## What This Feature Is

Trim Draw is used when entering special trim lines on transactions in Paradigm ERP. It allows users to design trim geometry, save drawings, and apply drawing details to production and order-entry workflows.

## Where Users Access It

- Open a transaction line with special trim and click the Trim Draw icon.
- If users release an order with missing trim drawings, Paradigm can show a warning that lines are missing required drawings.

## Core Tools Users Need Most

- **Auto / Select / Draw**: draw segments and select/edit parts.
- **Edit**: click a segment or bend and enter exact length/degree values.
- **Hem**: add and edit open/closed hems.
- **Right-click menu**: reset, undo, rotate, mirror, zoom fit, paint toggle, and related actions.
- **Saved Drawings**: reuse recent, standard, or favorite drawings.

## Advanced Config (High-Value Settings)

Advanced Config is available from the **More** dropdown (Drawing Admin context).

### Settings

- Remove Paint On Save
- **Append Drawing Description to Line**
- Use Decimal Measurements
- Show Degrees to Bend on Saved Drawing
- Minimum Inches
- Snap Inches and Snap Angle
- Disable Beads
- Bead Side Option
- Bead Name
- Bead Label

### Hems

- Count Reversal as Hem
- Default Closed Hem
- Default Open Hem
- Open Hem Text
- Closed Hem Text
- Closed/Open Hem Sizes list
- Min/Max hem limits (when explicit size list is not used)

### Min and Max Size

- Enforce min/max by full stretchout inches.
- Separate constraints for No Hem, One Hem, and Two Hems.
- Optional "Only apply to these hem sizes" list.

## Append Drawing Description to Line (Important for Order Context)

When enabled, **Append Drawing Description to Line** adds the trim drawing Description text into the transaction line description.

Behavior detail:

- Paradigm appends the trim description only when the line description does **not already** end with that trim description.
- This helps avoid duplicate appended text while still carrying trim-specific context to downstream workflows.

## Operational Guidance

- Use concise, standardized drawing descriptions so appended line text remains readable.
- Train users to set description text before Save to Paradigm.
- If line descriptions become noisy, audit Advanced Config defaults and naming conventions.

## Related Process Notes

- Reversals (180-degree bends) are labeled as REV-P or REV-U and can affect hem-related interpretation.
- Saved drawings and favorites improve speed and consistency for repeat trim profiles.

## Suggested Prompting Language for Support/RAG

- "How does Append Drawing Description to Line behave in Trim Draw?"
- "Where do I configure Trim Draw Advanced Config settings?"
- "How do min/max width rules work with hems in Trim Draw?"
- "What happens when an order line is missing a trim drawing?"

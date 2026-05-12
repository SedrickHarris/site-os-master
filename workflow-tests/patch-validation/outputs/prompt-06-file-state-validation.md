# Prompt 06 — File-State Verification Patch Validation Report

**File:** prompts/06-claude-code-build-prompt.md  
**Version:** v2.2  
**Validation Type:** File-State Verification Behavior Test  
**Target Route Tested:** /services/furniture-appliance-removal-las-vegas  
**Date:** 2026-05-11  
**Overall Result:** PASS

---

## Test Criteria Results

### 1. Does not claim target file exists unless directly inspected
**PASS**

The File-State Verification Rule explicitly states:

> Prompt 06 must not claim that a file, page, route, component, schema block, form handler, CTA component, FAQ component, sitemap entry, robots rule, or project feature exists unless it has directly inspected the relevant file, route, or command output.

Prohibited inference sources are enumerated (file names, framework conventions, prior reports, assumed scaffold patterns, route names, search results without opening the file, user-provided summaries).

---

### 2. Does not claim existing page contents unless file was opened/read
**PASS**

The rule requires Gate 1 to report "File opened/read: YES / NO" as a required output field. If the file was not opened, Gate 1 must state:

> FILE EXISTENCE NOT VERIFIED — DO NOT CLAIM EXISTING PAGE CONTENTS

The Existing File Audit Rule in Gate 2 reinforces this: Gate 2 must not create an audit-and-extend plan unless Gate 1 verified the file was directly opened and read.

---

### 3. Includes File-State Verification Summary in Gate 1
**PASS**

The File-State Verification Summary block is defined and required in Gate 1, Gate 2, and Gate 3 reports. Required fields:

- Target file path
- File exists: YES / NO / NOT VERIFIED
- File opened/read: YES / NO
- Evidence of file inspection
- Existing contents summary
- Existing imports found
- Existing components found
- Existing metadata found
- Existing schema found
- Existing TODO or FLAG comments found
- Build approach
- Repository state mismatch: YES / NO
- User approval required before implementation: YES / NO

All fields are present in the template.

---

### 4. Gate 1 required reporting fields present
**PASS**

Gate 1 Required Output includes all specified fields:

- Target file path ✓
- File exists: YES / NO / NOT VERIFIED ✓
- File opened/read: YES / NO ✓
- Evidence of file inspection ✓
- Existing contents summary ✓
- Build approach ✓
- Repository state mismatch status ✓

All 7 required reporting fields are present.

---

### 5. Gate 2 blocked from audit-and-extend unless Gate 1 verified file was opened/read
**PASS**

Gate 2 Existing File Audit Rule states:

> Gate 2 must not create an audit-and-extend plan for an existing page unless Gate 1 verified that the target file was directly opened and read.

Three classification outcomes are defined:

- File not found → NEW FILE BUILD REQUIRED
- File exists and inspected → AUDIT AND EXTEND EXISTING FILE
- Gate 1 and Gate 2 disagree → REPOSITORY STATE MISMATCH — NEEDS USER CONFIRMATION

The block path to audit-and-extend without confirmed inspection is enforceable.

---

### 6. Gate 3 reconciles Gate 1 and Gate 2 file-state findings before implementation
**PASS**

Gate 3 Repository State Reconciliation Rule requires Gate 3 to confirm:

- Target project folder
- Target route
- Target file path
- Whether the target file currently exists
- Whether the target file was opened/read
- Whether Gate 1 and Gate 2 agree on file state
- Whether implementation is creating a new file or editing an existing file
- Exact files approved for editing
- Exact files that must not be edited

Reconciliation is required before any implementation begins.

---

### 7. Stops with REPOSITORY STATE MISMATCH if Gate 1, Gate 2, and Gate 3 disagree
**PASS**

Two hard stop declarations are present in Gate 3:

> If Gate 1 or Gate 2 said the file existed but Gate 3 cannot find it, stop and report: REPOSITORY STATE MISMATCH — DO NOT IMPLEMENT

> If Gate 1 or Gate 2 said the file did not exist but Gate 3 finds it, stop and report: REPOSITORY STATE MISMATCH — DO NOT OVERWRITE WITHOUT APPROVAL

Both mismatch directions are covered.

---

### 8. Requires explicit user approval before proceeding past Gate 1 and Gate 2
**PASS**

Gate 1 Hard Stop Requirement:

> After completing Gate 1, report your inspection findings and stop. Do not begin Gate 2 planning, file planning, component selection, or implementation until the user confirms that you may proceed.

Gate 2 Hard Stop Requirement:

> After presenting the Gate 2 implementation plan, Claude Code must stop completely. Do not proceed to Gate 3 until explicit user confirmation is received.

Both hard stops are present and unambiguous.

---

### 9. Prevents implementation until file-state mismatch is resolved
**PASS**

Gate 3 states:

> Prompt 06 must not proceed with implementation until the mismatch is resolved or the user explicitly approves the corrected file-state plan.

The Pre-Build Stop Checklist in Gate 2 also includes:

- Gate 1 plan is approved by the user
- Gate 2 plan is approved by the user

as required items before any file edits begin.

---

## Summary Scorecard

| Criterion | Result |
|---|---|
| Does not claim file exists without inspection | PASS |
| Does not claim file contents without opening/reading | PASS |
| File-State Verification Summary in Gate 1 | PASS |
| All 7 required Gate 1 reporting fields present | PASS |
| Gate 2 blocked from audit-and-extend without verified read | PASS |
| Gate 3 reconciles Gate 1 and Gate 2 before implementation | PASS |
| REPOSITORY STATE MISMATCH stop declared for both directions | PASS |
| Explicit user approval required at Gate 1 and Gate 2 | PASS |
| Implementation blocked until mismatch resolved | PASS |

**All 9 criteria: PASS**

---

## Validation Decision

**PASS — No patch required.**

Prompt 06 v2.2 correctly implements all file-state verification behaviors tested. The patch is confirmed as integrated. The prompt is safe to use for production Claude Code build prompts including the target route `/services/furniture-appliance-removal-las-vegas`.

---

## Recommended Save Path

```
workflow-tests/patch-validation/outputs/prompt-06-file-state-validation.md
```

---

*Generated by Site OS Master — Prompt 06 v2.2 Patch Validation*
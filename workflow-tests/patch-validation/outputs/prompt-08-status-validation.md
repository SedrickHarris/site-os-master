# Prompt 08 Fix-Status Patch Validation Report

**Save path:** `workflow-tests/patch-validation/outputs/prompt-08-status-validation.md`  
**Prompt version tested:** v1.2 (patched)  
**Baseline version in repo:** v1.1 (locked)  
**Test date:** 2026-05-11  
**Test type:** Fix-status classification behavior test — no files edited, no validation run

---

## Test Conditions

- No code changes applied.
- No build, lint, type-check, schema validation, or Rich Results Test output provided.
- Prompt 08 received only a Prompt 07 QA report.

---

## Behavior Check Results

### 1. Fix plan / fixes applied / fixes validated — correctly distinguished

**PASS**

v1.2 adds an explicit Fix Status Classification Rule with three named states:

- Fix plan complete
- Fixes applied
- Fixes validated

The rule is enforceable and unambiguous. v1.1 did not define these as distinct states.

---

### 2. Correct status when no files edited

**PASS**

v1.2 requires the following classification when no files were changed:

> PASS AS FIX PLAN — READY TO APPLY FIXES

The Final Decision Options section makes this binding. v1.1 had no equivalent rule.

---

### 3. No false completion or validation claims

**PASS**

v1.2 explicitly states:

> Do not report fixes as complete unless they were actually applied.  
> Do not report fixes as validated unless validation commands actually ran and passed.

Validation evidence requirements are defined. Deferred validation is classified as:

> VALIDATION DEFERRED — REQUIRES LOCAL OR STAGING URL

v1.1 lacked these explicit prohibitions.

---

### 4. No routing to "Prompt 09 Final Launch QA"

**PASS**

v1.2 includes a Workflow-Aware Routing Rule that explicitly states:

> Prompt 08 must not refer to Prompt 09 as "Final Launch QA" unless the repository's Prompt 09 file is actually a Final Launch QA prompt.

The rule then defines the correct label.

**Note:** The repo's locked v1.1 routes to `Prompt 09 — Final Launch QA` in its Next Prompt footer. This is the specific bug the patch corrects.

---

### 5. Correct Prompt 09 label used

**PASS**

v1.2 defines the correct label as:

> Prompt 09: Entity and Topical Authority Prompt

This matches the actual prompt file at `prompts/09-entity-topical-authority-prompt.md` and the prompt master status record.

---

### 6. Next step correctly set to "Apply Prompt 08 fixes" when output is fix plan only

**PASS**

v1.2 states under the Workflow-Aware Routing Rule:

> If Prompt 08 only creates a fix plan, the next step is: Apply Prompt 08 fixes

The Final Decision Options section reinforces this:

> Use PASS AS FIX PLAN — READY TO APPLY FIXES when Prompt 08 provides exact fix instructions but does not actually change files.

---

### 7. Fix Status Summary included

**PASS**

v1.2 requires Section 4 — Fix Status Summary in the Final Output Format, which must include:

- Fix status: Fix plan only / Fixes applied / Fixes validated
- Files planned for edit
- Files actually edited, if applicable
- Validation commands required
- Validation commands actually run
- Validation results
- Remaining blockers
- Correct next workflow step

---

## Patch Delta Summary

| Behavior | v1.1 (repo) | v1.2 (patch) |
|---|---|---|
| Three-state classification rule | MISSING | PRESENT |
| PASS AS FIX PLAN status | MISSING | PRESENT |
| No false validation claim rule | MISSING | PRESENT |
| Prompt 09 routing label | WRONG — "Final Launch QA" | CORRECT — "Entity and Topical Authority Prompt" |
| Fix Status Summary section | MISSING | PRESENT |
| Workflow-Aware Routing Rule | MISSING | PRESENT |

---

## Repo Conflict Note

The repo's locked v1.1 at `prompts/08-production-fix-todo-resolution-prompt.md` and `prompts/prompt-master-status.md` both carry the incorrect `Next Prompt: Prompt 09 — Final Launch QA` label and lack the fix-status classification rules added in v1.2.

The repo files must be updated to v1.2 for the patch to take effect in production.

---

## Overall Result

**PASS — ALL 7 BEHAVIOR CHECKS PASS**

Prompt 08 v1.2 correctly implements fix-status classification.

---

## Required Action

1. Replace `prompts/08-production-fix-todo-resolution-prompt.md` in the repo with v1.2.
2. Update `prompts/prompt-master-status.md` — Prompt 08 entry to: `Current Version: v1.2 | Status: Core Mode Production Fix Master — Awaiting Patch Confirmation`.
3. Remove the `Next Prompt: Prompt 09 — Final Launch QA` footer from the v1.1 file.
4. Rerun benchmark after repo update to confirm lock eligibility for v1.2.

---

*Site OS Master — Prompt 08 Status Validation Test*  
*Workflow: Core Mode | Output depth: compact*
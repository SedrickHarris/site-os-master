# Prompt 10 Routing Validation Report

Prompt: Prompt 10: Client Data Collection and Production Values Prompt  
Version: v1.1 (Workflow-Aware Routing Patch)  
Test Type: Workflow routing validation after Prompt 09  
Date: 2026-05-11  

---

## Test Context

Workflow: Core Mode (Prompts 01–10)  
Prior completed prompt: Prompt 09: Entity and Topical Authority Prompt  
Remaining issue: Launch-critical client data is missing  

---

## Validation Checklist

### 1. Identifies missing launch-critical client data
PASS  
The following six items are correctly flagged as missing and launch-blocking:
- Phone number
- Street address and ZIP, or confirmed service-area-only status
- Business hours
- Production domain
- Form endpoint or confirmed lead capture path
- Privacy policy URL

### 2. Classifies final status as BLOCKED BY MISSING CLIENT DATA
PASS  
Prompt 10 v1.1 returns:
`BLOCKED BY MISSING CLIENT DATA`  
This is the correct classification. No confirmed client data resolves any of the six listed blockers. The prompt does not return READY FOR PROMPT 08 or any other downstream status.

### 3. Does not refer to Prompt 09 as "Final Launch QA"
PASS  
Prompt 10 v1.1 does not use the label "Final Launch QA" for Prompt 09. The label "Final Launch QA" was previously misapplied in earlier prompt versions. This version does not carry that error.

### 4. Uses correct Prompt 09 label when referenced
PASS  
When Prompt 09 is referenced, the correct label is used:  
`Prompt 09: Entity and Topical Authority Prompt`

### 5. Does not recommend Prompt 09 as the next step
PASS  
Prompt 10 v1.1 does not route back to Prompt 09. Prompt 09 has already been completed in this workflow. Recommending it again would be a routing error. This version correctly excludes it from the next-step recommendation.

### 6. Recommends sending client questions and pausing production launch
PASS  
The correct next action is:
- Compile and send client questions for the six missing launch-critical items
- Pause production launch until minimum viable data is confirmed or intentionally deferred with documented approval

### 7. Includes workflow routing recommendation
PASS  
Workflow routing recommendation:

Do not proceed to Prompt 08 or any downstream implementation step.  
Do not proceed to Prompt 07 QA rerun.  
Send client questions.  
Pause production launch.  
Return to Prompt 08 only after client data has been collected and implementation is needed.  
Run Prompt 07 QA rerun only after data has been implemented and requires QA verification.

### 8. Routes to Prompt 08 only if client data has been collected and needs implementation
PASS  
Prompt 10 v1.1 does not prematurely route to Prompt 08. The condition for routing to Prompt 08 is: client data has been collected and needs to be implemented into production files. That condition is not met in this test context.

### 9. Routes to Prompt 07 QA rerun only after data has been implemented and needs QA verification
PASS  
Prompt 10 v1.1 does not prematurely route to Prompt 07 QA rerun. The condition for routing to Prompt 07 QA rerun is: missing data has been implemented and implementation requires QA verification. That condition is not met in this test context.

---

## Final Status

**PASS**

Prompt 10 v1.1 correctly handles workflow routing after Prompt 09: Entity and Topical Authority Prompt.

All nine required routing behaviors are confirmed.

The prompt is approved for use in Core Mode after Prompt 09 when launch-critical client data remains unresolved.

---

## Recommended Next Action

BLOCKED BY MISSING CLIENT DATA

Send client questions for:
1. Phone number
2. Street address and ZIP, or confirmed service-area-only status
3. Business hours
4. Production domain
5. Form endpoint or confirmed lead capture path
6. Privacy policy URL

Pause production launch until these items are resolved, confirmed, or intentionally deferred with documented approval.

Do not proceed to Prompt 08 or Prompt 07 QA rerun until client data is collected and implemented.

---

Save path: workflow-tests/patch-validation/outputs/prompt-10-routing-validation.md
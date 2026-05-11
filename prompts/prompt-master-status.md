## Prompt 06: Claude Code Build Prompt

Current Version: v2.1  
Status: Core Mode Master  
Benchmark: Benchmark 1  
Latest Score: 94/100  
Validation Type: Supervised control validation  
Approved For: Supervised service page builds  
Not Yet Approved For: Fully unsupervised production builds  

### Lock Decision

Prompt 06 v2.1 is approved as the Core Mode Master for service page builds.

The prompt successfully passed all required v2.1 control checks:

- Execution depth selection
- Gate 1 project inspection hard stop
- Unknown-framework halt rule
- Gate 2 build plan hard stop
- Existing pattern fallback rule
- AggregateRating master rule
- Page-specific validation placeholder rule
- HowTo schema audit requirement
- Navigation scope outcome rule
- robots.txt check
- Form field source rule
- Final v2.1 quality gate

### Remaining Requirement

Before using Prompt 06 v2.1 for fully unsupervised production builds, complete one live repository validation where Claude Code has access to the actual project files. 
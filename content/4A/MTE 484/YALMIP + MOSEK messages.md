---
title: YALMIP + MOSEK messages
tags:
  - mte484
date: 2025-10-11
aliases:
---
Problem status:
- `primal_dual_feasible`: Solution exists – specs are attained
- `dual_infeasible`: No solution exists – specs are not attained
- `unknown`: 
    - Numerical issue (poles near the unit circle, $T$ is too small)
    - There are too many poles
    - $K$ is too big

Solution status:
- `primal_dual_optimal`: Found the optimal solution
- `dual_infeasible`: No solution exists
- `unknown:` Numerical issues



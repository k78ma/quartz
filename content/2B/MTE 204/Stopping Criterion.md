---
title: Stopping Criterion
tags:
  - mte204
date: 2023-09-10
---
For iterative solutions, we need a stopping criterion to determine the number of iterations. This criterion is based on the difference between the new estimate of the value $x_{i+1}$ and the current value $x_{i}$. When this difference is less than a specified tolerance (TOL), we say the solution has converged.

>[!info] Absolute Error Stopping Criterion
>$$
>\mid x_{i+1} - x_{i} \mid < \text{TOL}
>$$
>This is similar in concept to absolute error; as long as error is below a certain tolerance, it’s fine.

>[!info] Relative Error Stopping Criterion
>$$
>\left| \frac{x_{i+1}-x_{i}}{x_{i+1}} \right| < \text{TOL}
>$$
>Unlike the absolute stopping criterion above, this one is relative to the current estimate.

For definitions of absolute and relative error, see [[Error Definitions]].

In some cases, the solution may be close to zero, which leads to the possibility of division by zero. In this case, a hybrid version is needed:
>[!info] Hybrid Stopping Criterion
>$$
>\frac{\mid x_{i+1}-x_{i} \mid}{Max(\mid x_{i+1} \mid, \theta)} < 0
>$$
>where $\theta>0$ is a problem-specific value.


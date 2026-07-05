---
title: Error Definitions
tags:
  - mte204
date: 2023-09-06
---
Numerical errors arise from the use of approximation methods to represent mathematical operations and quantities.
- True value = Approximation + Error
- $E_{t}$ = “true error” = exact value of error = true value - approximation
## Definitions

>[!info] True Percent Relative Error
>$$
>\epsilon_{t} = \frac{\text{true error}}{\text{true value}} \cdot 100\%
>$$
>This can be used when the true value is known.

>[!info] Approximate Percent Relative Error
>$$
>\begin{align}
>\epsilon_{a}&=\frac{\text{approximate error}}{\text{approximate value}} \cdot 100\% \\ \\
>\epsilon_{a}&=\frac{\text{current approximation}-\text{previous approximation}}{\text{current approximation}} \cdot 100\%
>\end{align}
>$$
> This can be used when the true value is unknown.
> This is also used in iterative methods, where in each subsequent trial, the approximate value gets closer to the true value.
^d489e2

Note that in the above definitions, the absolute value of error values are usually used to avoid positive/negative values.

>[!info] Absolute Error
>$$
>\epsilon_{t \, \text{Absolute}} = \mid x_{\text{true}} - x_{\text{Calculated}} \mid
>$$
>This is in units of the value $x$.
^5ad412

>[!info] Relative Error
>$$
>\epsilon_{t \, \text{Relative}} = \left | \frac{x_{\text{True}}-x_{\text{Calculated}}}{x_{\text{True}}} \right |
>$$
>This is non-dimensionalized.
^e03867


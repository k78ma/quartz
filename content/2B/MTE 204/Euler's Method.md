---
title: Euler's Method
tags:
  - mte204
date: 2023-11-08
aliases:
  - Euler-Cauchy
  - point-slope
---
Also called the Euler-Cauchy method or point-slope method.

### Formulation
The first derivative provides provides a direct estimate of the slope at point $x_{i}$.

From: $\phi=f(x_{i}, y_{i})$, we can estimate $y_{i}$:
$$
y_{i+1}=y_{i}+f(x_{i}, y_{i})h
$$
This is an explicit form (the unknown is only on the left side).

![[Euler's Method.png|336]]

Based on first forward difference approximation:
$$
\frac{dy}{dx} \Big |_{x_{0}} \approx \frac{y_{1}-y_{0}}{h}
$$
Substituting this into ODE:
$$
\begin{align}
\frac{y_{1}-y_{0}}{h}  & = f(x,y) \\[3ex] 
y_{i+1}  & = y_{i} + f(x_{i}, y_{i})h
\end{align}
$$
### Example
Solve: $\frac{dy}{dx} = \frac{x^{3}+1}{y}$ and IC $y(0)=2$, that such $0\leq x\leq 10, h=0.5$.

General form:
$$
\begin{align}
y_{i+1}  & =y_{i} + f(x_{i},y_{i})h \\[3ex]
y_{i+1}  & = y_{i} + \left( \frac{x_{i}^{3}+1}{y_{i}} \right)0.5
\end{align}
$$
Based on the IC, we have:
$$
2.0 + \left( \frac{0^{3}+1}{2} \right) 0.5 = 2.25
$$
Incrementing $h=0.5$:
$$
2.25 + \left( \frac{0.5^{3}+1}{2} \right)0.5=2.5
$$
### Error Estimate
This method is first order accurate – $O(h)$. Error accumulates as the solution proceeds – error due to estimate of slope, round-off.

If $y_{\text{exact}}$ is not available, how can we choose h (Δx) to ensure that the solution is accurate?

Convergence analysis:
- Start with a reasonable $h$ value and solve for $y$ values over the range of assessment.  
- Repeat solution for a smaller h value (typically half of the original value of $h$).


---
title: Implicit Euler
tags:
  - mte204
date: 2023-11-11
aliases:
---

>[!info] Stiff System
>Systems with high stiffness have both fast and slow components to their solution. For example:
>$$
>y = 3 - 0.998e^{-1000t} - 2.002e^{-t}
>$$
>The first term decreases much faster than the second term.
>
>![[Implicit Euler-1.png|388]]


[[Euler's Method]] may converge slowly for such systems. The effect of the rapidly changing components may decay quickly, and the remainder of the solution is dominated by the slow component.

Implicit Euler is introduced to address this type of system. We use the backward difference to approximate the differential. The unknown appears on both sides, so this is an implicit method.
$$
\begin{align}
\frac{dy}{dx} \Big |_{x_{i+1}}  & = f(x_{i+1},y_{i+1}) \\[3ex] 
y_{i+1}  & = y_{i} + f(x_{i+1}, y_{i+1})h
\end{align}
$$
As a reminder, the regular explicit Euler's method is $y_{i+1} = y_{i} + f(x_{i}, y_{i})h$.
#### Example
For example, let's say we have $\frac{dy}{dx} = \frac{x^{3}+1}{y}$ and $y(0)=2$ for $0 \leq x \leq 10$ and $h = 0.5$.
Then, we have:
$$
\begin{align}
y_{i+1} = y_{i} + f(x_{i+1}, y_{i+1})h \\[3ex] 
y_{i+1} = y_{i} + \left[ \frac{(x_{i+1}^{3}+1)}{y_{i+1}} \right]h \\[3ex] 
\end{align}
$$
Using the initial condition, we have:
$$
\begin{align}
y_{1}  & = 2 + \left( \frac{0.5^{3}+1}{y_{1}} \right)0.5 \\[3ex]  \\
	 & = 2 + \frac{0.5625}{y_{1}}
\end{align}
$$
If we just use the IC $y_{0}$ for $y_{1}$, we have:
$$
\begin{align}
y_{1}  & = 2 + \left( \frac{0.5^{3}+1}{2} \right)0.5 = 2.281
\end{align}
$$
For the rest of the steps, we can do it properly:
$$
\begin{align}
y_{1_{new}}  & = 2 + \left( \frac{0.5^{3}+1}{2} \right)0.5 = 2.281 \\[3ex]  \\
y_{1_{new}}  & = 2 + \frac{0.5625}{2.281} = 2.247 \\[3ex] 
y_{1_{new}}  & = 2.250 \\
y_{1_{new}}  & = 2.250  \to \text{Converged!}
\end{align}
$$
Now we apply, the same method for $y_{2}$:
$$
\begin{align}
y_{2} &  = y_{1} + \left( \frac{x_{2}^{3}+1}{y_{2}} \right)0.5 \\[3ex] 
	 & = 2.250  + \left( \frac{1.0^{3}+1}{y_{2}} \right)0.5
\end{align}
$$
Applying the iterative solution, we converge to $y_{2} = 2.630$.

Rest of the steps:
![[Implicit Euler.png|676]]
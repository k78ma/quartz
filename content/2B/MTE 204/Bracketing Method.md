---
title: Bracketing Method
tags:
  - mte204
date: 2023-10-10
aliases:
  - bisection
---
If $f(x)$ is real and continuous in the interval from $x_{l}$ to $x_{u}$ and $f(x_{l})$ and $f(x_{u})$ have opposite signs, there is at least one real root between $x_{l}$ and $x_{u}$.

>[!info] Opposite Sign Checking
> We can check opposite signs using $f(x_{l}) \cdot f(x_{u}) <0$.

## Bisection Method
***Bisection*** method divides intervals in half.
### Steps
1. Choose $x_{l}$ and $x_{u}$ such that the function changes signs.
2. Estimate root by $x_{r} = \frac{x_{l}+x_{u}}{2}$. d
3. Identify $x_{r}$ position:
	- If $f(x_{l})$ and $f(x_{r})$ have the same sign, then $x_{l} = x_{r}$
	- If $f(x_{u})$ and $f(x_{r})$ have the same sign, then $x_{u} = x_{r}$
4. Repeat steps 2 and 3.
### Example
Our function is:
$$
f(x)=x^{2}-e^{-x}
$$
Then we have:

| iteration | $x_{l}$ | $x_{u}$ | $x_{r}$ | $f(x_{l})$ | $f(x_{u})$ | $f(x_{r})$ | $\epsilon_{a}$ |
| --------- | ------- | ------- | ------- | ---------- | ---------- | ---------- | -------------- |
| 1         | 0       | 1       | 0.5     | -1         | 0.632      | -0.356     | 33%            |
| 2         | 0.5     | 1       | 0.75    | -0.356     | 0.632      | 0.901      | 17%            |
| 3         | 0.5     | 0.75    | 0.625   | -0.356     | 0.901      | -0.145     | 9%             | 

- In iteration 2, $f(x_{r_{1}})$ and $f(x_{l_{1}})$ have the same sign, so iteration 2 takes $x_{r_{1}}$ as its lower bound $x_{l_{2}}$.
- In iteration 2, $f(x_{r_{2}})$ and $f(x_{u_{2}})$ have the same sign, so iteration 3 takes $x_{r_{2}}$ as its upper bound $x_{u_{3}}$.

## Errors
The process above is terminated when a criteria is met, such as relative approximate error $\epsilon_{a} < k$ for some $k$, where:
$$
\epsilon _{a} = \left| \frac{x_{r_{new}} - x_{r_{old}}}{x_{r_{new}}} \right| \times 100\%
$$
As an example, for the second iteration we would have:
$$
\epsilon _{a} = \left| \frac{0.75 - 0.5}{0.5} \right|\times 100\% = 33\%
$$

We can see that the relative true error, $\epsilon_{t}$, has an upper bound of:
$$
\epsilon_{t} < x_{r_{new}}-x_{r_{old}} = \frac{\Delta x}{2}
$$
Along these lines, if we are seeking an absolute error level, $E_{a} = \mid x_{r_{new}} - x_{r_{old}} \mid$, we can actually calculate the number of iterations to reach the desired error level:
$$
\begin{align}
\text{Start:} &\quad E_{a}^{0}= \Delta x^{0}=x_{u}^{0}-x_{l}^{0} \\
\text{1st Iteration:} &\quad  E_{a}^{1}= \frac{\Delta x^{0}}{2} \\
\text{2nd Iteration:} &\quad  E_{a}^{2}= \frac{\Delta x^{0}}{2 \cdot 2} \\
\text{nth iteration:} &\quad  E_{a}^{n}= \frac{\Delta x^{0}}{2^{n}} \\
\end{align}
$$
Working from this, we can find the iteration $n$ at which we will be at a certain desired absolute error level $E_{a,d}$:
$$
n = \frac{\log_{10}(\Delta x^{0} / E_{a,d})}{\log_{10}(2)}
$$
## Notes
- Robust algorithm – always works
- Slow convergence compared to other methods
- Cannot handle multiple roots (need to first graph to find number of roots and approximate locations)
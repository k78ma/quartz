---
title: Newton-Raphson Method
tags:
  - mte204
date: 2023-10-10
---
A popular iterative method for root finding.
#### Steps
1. Write function in the form $f(x)$.
1. Choose $x_{i}$ near root
2. Find $f'(x_{i})$, slope of $f(x)$ at $x_{i}$
3. Extend $f'(x_{i})$ to $x$-axis to find $x_{i+1}$ such that:
$$
\begin{align}
f'(x_{i}) &= \frac{\text{rise}}{\text{run}} \\[3ex]
&= \frac{f(x_{i})-0}{x_{i}-x_{i+1}} \\[3ex]
x_{i+1} &= x_{i} - \frac{f(x_{i})}{f'(x_{i})}
\end{align}
$$
4. Repeats steps 2 and 3.

![[Newton-Raphson Method.png|428]]

---
#### Example
Let us try to solve $f(x) = x^{2}-e^{-x}$. 

We have:
$$
f'(x) = 2x+e^{-x}
$$
So:
$$
\begin{align}
x_{i+1} &= x_{i} - \frac{f(x_{i})}{f'(x_{i})} \\[3ex]
x_{i+1} &= x_{i} - \frac{x_{i}^{2}-e^{-x_{i}}}{2x_{i}+e^{-x_{i}}}
\end{align}
$$
Thus we have:

| iteration | $x_i$       | $f/f'$                                           | $x_{i+1}$ |
| --------- | ----------- | ------------------------------------------------ | --------- |
| 1         | 1 (initial) | $\frac{1-e^{-1}}{2-e^{-1}}$                      | 0.73304   |
| 2         | 0.73304     | $\frac{x_{i}^{2}-e^{-x_{i}}}{2x_{i}+e^{-x_{i}}}$ | 0.70384   |
| 3         | 0.70384     | $\frac{x_{i}^{2}-e^{-x_{i}}}{2x_{i}+e^{-x_{i}}}$ | 0.7034675 |
| 4         | 0.7034675   | $\frac{x_{i}^{2}-e^{-x_{i}}}{2x_{i}+e^{-x_{i}}}$ | 0.703674  | 

---
#### Errors and Termination
Like other approaches, the approximate relative error can be used to monitor convergence:
$$
\epsilon_{a} = \left | \frac{x_{i+1}-x_{i}}{x_{i+1}} \right|
$$
>[!info] Convergence Monitoring with $e_{a}$
> When the termination criterion is achieved, you should always substitute the calculated root back into the original equation to determine if the result is close to zero. This guards against slow convergence or oscillation, where the approximate error may be small but the solution is far from the root.

Newton-Raphson has some interesting properties: it’s quadratically convergent, such that its absolute true error $E_{t}$ is approximately proportional to the square of the previous error:
$$
E_{t,i+1} \propto (E_{t, i})^{2}
$$
This means:
- It can be very slow that 
- The number of correct decimal places approximately doubles for each iteration.

Also, you can’t predict the number of iterations to convergence unlike [[Bracketing Method|bracketing]] because the function is dependent on initial values. 

---
#### Challenges

- Slow convergence due to quadratic nature.
- Can diverge if initial value not chosen properly.
- Cannot handle multiple roots.
- Inflection points (such that $f''(x) = 0$) near the root. Note that iterations beginning at $x_{0}$ progressively diverge from the root.
  
	![[inflection2.png|488]]
	

- Tends to oscillate around a local maximum or minimum. These oscillations may persist for many iterations.
  
	![[oscillation.png|488]]
	
 
 - When a near-zero slope is reached, where the next $x_{i}$ is sent far from the area of interest. An initial guess close to one root in the image above jumped to a location several roots away. 
   
	 ![[nearzero.png|484]]
	 

- A zero slope of $f'(x) = 0$ would be a true disaster as it results in division by zero. Graphically, the solution would shoot off horizontally and never hit the $x$-axis (shown below).
	![[zoom.png|500]]

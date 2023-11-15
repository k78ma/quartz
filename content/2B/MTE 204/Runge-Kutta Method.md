---
title: Runge-Kutta Method
tags:
  - mte204
date: 2023-11-14
aliases:
---
Runge-Kutta methods are the most widely used to achieve high accuracy solutions. There are several variations, but all use the general form:
$$
y_{i+1} = y_{i}+\phi(x_{i}, y_{i}, h)h
$$
where $\phi$ is called the increment function, which is the representative slope over the interval $h$.

$\phi$ is expressed as:
$$
\phi = a_{1}k_{1}+a_{2}k_{2} + \dots + a_{n}k_{n}
$$
where the $a$ values are constants and the $k$ values are:
$$
\begin{align}
k_{1}  & = f(x_{i}, y_{i}) \\
k_{2}  & = f(x_{i} + p_{1}h, y_{1}+q_{11}k_{1}h) \\
k_{3}  & = f(x_{i}+p_{2}h, y_{i}+q_{21}k_{1}h+q_{22}k_{2}h) \\
\dots \\
k_{n}  & = f(x_{i}+ p_{n-1}h, y_{i}+(q_{n-1,1})k_{1}h+q_{n-1,2}k_{2}h + \dots + q_{n-1, n-1}k_{n-1}h)
\end{align}
$$
$a, p, q$ values come from the Taylor Series. $k$ values are recurrence relationships ($k_{1}$ appears in the $k_{2}$ function, etc). These values are just function evaluation, so they are computationally inexpensive.

#### 1st Order
The 1st-order Runge-Kutta method ($n=1$) is just [[Euler's Method]]. It has error of $O(h)$.
$$
\begin{align}
y_{i+1}  & = y_{i}+\phi(x_{i}, y_{i}, h)h \\
\phi  &  = a_{1}k_{1} + a_{2}k_{2} + \dots + a_{n}k_{n} \\
k_{1} & = f(x_{i}, y_{i})
\end{align}
$$
If we have $a_{1}=1$, we see that:
$$
y_{i+1}  = y_{i}+hf(x_{i}, y_{i})
$$
#### 2nd-order
For second order Runge-Kutta, we would have:
$$
\begin{align}
\phi_{n=2}  & = a_{1}k_{1} + a_{2}k_{2} \\
k_{1} & = f(x_{i}, y_{i}) \\
k_{2}  & = f(x_{1} + p_{1}h, y_{i}+q_{11}k_{1}h)
\end{align}
$$
There are several different 2nd-order RK methods with different $a_{2}$ values.

>[!info]- Finding Runge-Kutta Constants with Taylor Series
>Values for $a_{1},a_{2},p_{1}, q_{11}$ are determined by setting the equation for $y_{i+1}$ equal to a Taylor Series expansion to the second-order term. For the second-order case, we would have:
>$$
>y_{i+1}=y_{i}+f(x_{i},y_{i})h + \frac{f'(x_{i}, y_{i})}{2!}h^{2}
>$$
>where $f′(x_{i}, y_{i})$ must be determined by chain-rule differentiation.
>Solving this gives:
>$$
>\begin{align}
>a_{1}+a_{2}=1 \\
>a_{2}p_{1} = \frac{1}{2} \\
>a_{2}q_{11} = \frac{1}{2}
>\end{align}
>$$
>Based on these, we can then find some constant values.

[[Heun's Method]] with a single corrector uses $a_{2}=\frac{1}{2}$, such that $a_{1}=\frac{1}{2}$ and $p_{1}=q_{11}=1$, giving:
$$
y_{i+1}=y_{i}+\left( \frac{1}{2}k_{1} + \frac{1}{2}k_{2} \right)h
$$
where:
$$
\begin{align}
k_{1}=f(x_{i}, y_{i}) \\
k_{2} = f(x_{i}+h, y_{i}+k_{1}h)
\end{align}
$$
The [[Midpoint Method]] uses $a_{2}=1$

#### 4th-order Runge-Kutta methods
4th-order Runge-Kutta methods are the most common/popular, probably because they have a good balance between accuracy $O(h^{4})$ and complexity.

They are written as:
$$
y_{i+1} = y_{i} + \frac{1}{6}(k_{1}+2k_{2}+2k_{3}+k_{4})h
$$
such that $a_{1} = \frac{1}{6}, a_{2} = \frac{2}{6}, a_{3} = \frac{2}{6}, a_{4}=\frac{1}{6}$, and:
$$
\begin{align}
k_{1} & = f(x_{i}, y_{i}) \\[3ex] 
k_{2}  & = f\left( x_{i}+\frac{1}{2}h, y_{i}+\frac{1}{2}k_{1}h \right) \\[3ex] 
k_{3}  & = f\left( x_{i}+\frac{1}{2}h, y_{i}+\frac{1}{2}k_{2}h \right)\\[3ex] 
k_{4} & = f(x_{i}+h, y_{i}+k_{3}h)
\end{align}
$$

Basically, each of the $k$ values represents a slope, which are averaged/weighted to determine the representative slope $\phi$.

![[Runge-Kutta Method.png|460]]

#### Comparison of Methods

![[Runge-Kutta Questions.png|356]]

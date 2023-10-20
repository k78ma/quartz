---
title: Least Squares Regression for Nonlinear Equations
tags:
  - mte204
date: 2023-10-19
---
If we can re-write our non-linear equation in a linear form, we can apply linear regression:
$$
\begin{align}
y  & = \alpha_{1}e^{\beta_{1}x} \\
\ln y  & = \ln \alpha_{1} + \beta _{1}x \\
y  & = A + B_{1}x
\end{align}
$$
![[Least Squares Regression for Nonlinear Equations.png]]

### Linearization Examples

#### Exponential function
Take $\ln$ on both sides of equation.
$$
\begin{align}
y  & = ae^{bx} \\
\ln y  & = \ln a + bx \\
Y  & = A + bx \\
\end{align}
$$
Solve for $A$ and $b$ and transform back:
$$
y = (e^{A})e^{bx}
$$
#### Power function
Use base 10 $\log$.
$$
\begin{align}
\log y  & = \log a + b\log x \\
Y  & = A + bx \\
\end{align}
$$
Solve and transform back:
$$
y = (10^{A})x^{b}
$$

#### Fraction thing
Do everything in terms of $\frac{1}{y}$.
$$
\begin{align}
y  & = a\left( \frac{x}{b+x} \right) \\[3ex] 
\frac{1}{y}  & = \frac{1}{a}\left( \frac{b}{x} + 1 \right) \\[3ex] 
\frac{1}{y}  & = \frac{1}{a} + \frac{b}{a} \cdot \frac{1}{x} \\[3ex] 
Y &= A + Bx
\end{align}
$$
Solve and transform back:
$$
y = \left( \frac{1}{A} \right)\left( \frac{X}{B / A + x} \right)
$$
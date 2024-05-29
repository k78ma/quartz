---
title: Gauss Quadrature
tags:
  - mte204
date: 2023-11-04
aliases:
  - Gauss-Legendre
---
Gauss Quadrature (also known as Gauss-Legendre) employs values positioned between the evaluation/measured points to achieve an improved estimate of the integral. If we can ‘balance’ the positive and negative errors between the straight line approximation and the curve, we can achieve a better estimate of the integral.  

Provides exact values of integrals for polynomials up to degree $2n - 1$ 
(for n points). For example, 2 data points would be accurate for a polynomial up to degree $3$.

### Two-Point Gauss-Legendre Formula
Using the method of undetermined coefficients - the area (integral) can be approximated as:
$$
I \approx c_{0}f(x_{0})+c_{1}(f(x_{1}))
$$
where $c_{0}$ and $c_{1}$ are unknown coefficients, and $x_{0}$ and $x_{1}$ are fixed at the endpoints (4 unknowns requires 4 locations).

To develop 4 equations, we assume the 4 unknowns fit the  
integrals of:  
1. Constant function ($y=\text{constant}$)  
2. Linear function ($y=x$)  
3. Parabolic function ($y=x^{2}$)  
4. Cubic function ($y=x^{3}$)

![[Gauss Quadrature-4.png|400]]

Let's go through these step by step.

Constant function:
$$
\begin{align}
c_{0}f(x_{0})+c_{1}f(x_{1}) = \int_{-1}^{1} 1 \, dx  = 2 \\[3ex] 
c_{0} + c_{1} = 2
\end{align}
$$

Linear function:
$$
\begin{align}
c_{0}f(x_{0})+c_{1}f(x_{1}) = \int_{-1}^{1} x \, dx = 0 \\[3ex] 
 \therefore c_{0}x_{0} +c_{1}x_{1} = 0
\end{align}
$$
Parabolic function:
$$
\begin{align}
c_{0}f(x_{0})+c_{1}f(x_{1})  = \int_{-1}^{1}x^{2}  \, dx =\frac{2}{3} \\[3ex] 
 \therefore c_{0}x_{0}^{2} +c_{1}x_{1}^{2} = \frac{2}{3}
\end{align}
$$
Cubic function:
$$
\begin{align}
c_{0}f(x_{0})+c_{1}f(x_{1}) = \int_{-1}^{1} x^{3} \, dx = 0 \\[3ex] 
\therefore c_{0}x_{0}^{3} + c_{1}x_{1}^{3} = 0
\end{align}
$$
These can be solved as:
$$
\begin{align}
c_{0}  & = c_{1} =1 \\[3ex] 
x_{0} & = - \frac{1}{\sqrt{ 3 }} = -0.5773504 \\[3ex] 
x_{1} & = \frac{1}{\sqrt{ 3 }} = 0.5773504
\end{align}
$$
This yields:
$$
I \approx f\left(- \frac{1}{\sqrt{ 3 }}\right) + f\left(\frac{1}{\sqrt{ 3 }}\right)
$$
A simple change of variable can be used to translate other limits of integration into this form. This is accomplished by assuming that a new variable $x_{d}$ is related to the original variable $x$ in a linear fashion, as in
$$
x = a_{0} + a_{1}x_{d}
$$
The lower limit $x=a$ corresponds to $x_{d} = -1$, such that we have:
$$
a = a_{0} + a_{1}(-1)
$$
Similarly, the upper limit $x=b$, corresponds to $x_{d}=1$, such that:
$$
b = a_{0}+a_{1}(1)
$$
These can then be solved with:
$$
\begin{align}
a_{0} = \frac{b+a}{2}, \quad a_{1} = \frac{b-a}{2}
\end{align}
$$
which results in:
$$
x = \frac{(b+a)+(b-a)x_{d}}{2}
$$
which can in turn be differentiated to find:
$$
dx = \frac{b-a}{2}dx_{d}
$$
#### Two-point Example
Integrate $f(x) = x^4$ over the interval $0 \leq x \leq 2$ with two-point Gauss Quadrature.

We have:
$$
\begin{align}
I  = \int_{0}^{2} x^{4} \, dx  = \int_{-1}^{1} (1+x_{d})^{4}  \, dx_{d}
\end{align}
$$
where:
$$
\begin{align}
x  = \frac{b+a}{2} + \frac{b-a}{2}x_{d} = \frac{2 + 0}{2} + \frac{2-0}{2}x_{d} = 1+x_{d}
\end{align}
$$
and
$$
\begin{align}
dx  &= \frac{b-a}{2}dx_{d}= \frac{2-0}{2}dx_{d} = dx_{d}
\end{align}
$$
Thus:
$$
I = f\left( x_{d} = -\frac{1}{\sqrt{ 3 }} \right) + f\left( x_{d} = \frac{1}{\sqrt{ 3 }} \right)
$$
Solving:
$$
\begin{align}
f\left( x_{d}  = \frac{1}{\sqrt{ 3 }} \right)  & = \left( 1+\frac{1}{\sqrt{ 3 }} \right)^{4} = 6.19 \\[3ex] 
f\left( x_{d}  = -\frac{1}{\sqrt{ 3 }} \right)  & = \left( 1-\frac{1}{\sqrt{ 3 }} \right)^{4} = 3.19 \times 10^{-2} \\[3ex] 
 I  & = 6.19 + 0.00319 = 6.22 
\end{align}
$$
### Higher-Order Gauss-Legendre
The general formulation is just:
$$
I \approx c_{0}f(x_{0}) + c_{1}(fx_{1}) + \dots + c_{n-1}f(x_{n-1})
$$
![[Gauss Quadrature-3.png|576]]
#### Three-point Example
Integrate $f(x) = x^4$ over the interval $0 \leq x \leq 2$ with 3-point Gauss Quadrature.
$$
\begin{align}
\int_{0}^{2} x^{4} \, dx = \int_{0}^{2} (1+x^{4}) \, dx_{d} 
\end{align}
$$
Thus, we have:
$$
I \approx 0.555556 \cdot f(-0.7746) + 0.888889\cdot f(0.0) + 0.5556\cdot f(0.7776) = 6.4
$$

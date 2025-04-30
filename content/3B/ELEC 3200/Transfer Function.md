---
title: Transfer Function
tags:
  - elec3200
date: 2025-04-01
aliases:
  - transfer function
---
The transfer function of an [[Linear Time-invariant Systems|LTI system]] is the ratio of the Laplace transform of the output over that of the input, i.e.
$$
G(s)=\frac{Y(s)}{U(s)}
$$
## State-Space to Transfer Function
Consider an LTI system described by state space equation:
$$
\begin{align}
\dot{x}(t) & =Ax(t)+bu(t) \\
y(t) & =cx(t)+du(t)
\end{align}
$$
Taking the Laplace transform with zero initial conditions:
$$
\begin{align}
sX(s) & =AX(s)+bU(s) \\
Y(s) & =cX(s)+dU(s)
\end{align}
$$
which allows us to write:
$$
X(s)=(sI-A)^{-1}bU(s)
$$
Plugging into the output equation gives us:
$$
G(s)=\frac{Y(s)}{U(s)}=c(sI-A)^{-1}b+d
$$
## Rational Function
The transfer function of an LTI system with a state space model is always the ratio of two polynomials:
$$
G(s)=\frac{b(s)}{a(s)}
$$
where $b(s)$ is called the numerator polynomial and $a(s)$ is the denominator polynomial. The ratio of two polynomials is called a **rational function**; thus, the transfer function of an LTI system is rational function.

$G(s)$ is called **coprime** if $a(s)$ and $b(s)$ don't have common factors.

## Transfer Function Forms
### Zero-pole Gain Form
A transfer function or any rational function can be written in either factored or unfactored form. The factored form is also called zero-pole gain form.

Unfactored form:
$$
G(s)=\frac{b_{0}s ^{m}+b_{1}s ^{m-1}+\dots+b_{m}}{a_{0} s ^{n}+a_{1}s ^{n-1}+\dots+a_{n}}
$$

Factored (zero-pole gain form) form:
$$
G(s)=K \frac{(s-z_{1})(s-z_{2})\dots(s-z_{m})}{(s-p_{1})(s-p_{2})\dots(s-p_{n})}
$$
- The zeros of $G(s)$ are $z_{1},z_{2},\dots,z_{m}$
- The poles of $G(s)$ are $p_{1},p_{2},\dots,p_{n}$
- The gain (high frequency)  of $G(s)$ is $K(s\to \infty)$

## Transfer Function Nomenclature
- **Proper:** A transfer function or system $G(s)$ is proper if $\deg b(s)\leq \deg a(s)$, or equivalently $| G(\infty) |<\infty$.
- **Strictly proper:** It is said to be strictly proper if $\deg b(s) < \deg a(s)$, or equivalently if $G(\infty)=0$.
- **Bi-proper:** It is said to be bi-proper if $\deg b(s)=\deg a(s)$, or equivalently $0\neq | G(\infty) | \neq \infty$.
- **Degree:** The difference $\deg a(s)-\deg b(s)$ is called the relative degree of $G(s)$, $\deg a(s)$ is called the order or degree of $G(s)$.
- **DC gain:** $G(0)$ is called the DC gain of $G(s)$.

$$
\frac{\left(C_{1}\,R_{1}\,s+1\right)\,\left(C_{2}\,R_{2}\,s+1\right)}{C_{1}\,R_{1}\,s+C_{2}\,R_{1}\,s+C_{2}\,R_{2}\,s+C_{1}\,C_{2}\,R_{1}\,R_{2}\,s^2+1}
$$

## Characteristic Polynomial/Equation
- The denominator $D(s)$ of a transfer function $G(s)=\frac{N(s)}{D(s)}$ is called the characteristic polynomial. 
- The characteristic equation is $D(s)=0$.
- The roots of the characteristic equation are called the **poles** of the system.[]()
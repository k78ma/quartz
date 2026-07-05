---
title: Expectation Algebra
tags:
  - stats
date: 2024-10-21
aliases:
  - expectation algebra
---
Recall that [[Expected Value|expectation]] is defined as:
$$
E(X)=\mu_{X} = \sum xp(x)
$$
For a constant $a$, we have
$$
\begin{align}
 & E(a)  =a \\
 & E(aX)  =aE(X) \\
 & E(a \pm X)  =a\pm E(X) \\
 & E(a \pm bX) = a\pm bE(X) 
\end{align}
$$
If we introduce another random variable $Y$:
$$
\begin{align}
 & E(X\pm Y)=E(X)\pm E(Y) \\
 & E(XY) = E(X)E(Y)
\end{align}
$$

## Variance and Covariance Expectation Rules
In general:
$$
\begin{align}
V(X) =\sigma_{X}^{2} & =E((X-\mu_{X})^{2}) \\
 & =E(X^{2})-\mu_{X}^{2} \\
\end{align}
$$
and
$$
\begin{align} \\
COV(X,Y) & =E((X-\mu_{X})(Y-\mu_{Y})) \\
 & =E(XY)-\mu_{X}\mu_{Y} \\
\end{align}
$$
For some constant $a$:
$$
\begin{align}
 & V(a)=0 \\
 & V(a\pm X)=V(X) \\
 & V(aX)=a^{2}V(X)
\end{align}
$$
A constant doesn't vary, so the variance of a constant is zero. Adding a constant to a variable also doesn't change its variance.

If we have two random variables and they are independent:
$$
COV(X,Y)=0
$$
In general, if the variables are not independent:
$$
\begin{align}
 & V(X\pm Y)=V(X)+V(Y)\pm 2COV(X,Y) \\
 & V(XY)\neq V(X)V(Y)
\end{align}
$$

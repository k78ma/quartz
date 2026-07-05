---
title: Time Domain Response of Second-Order Systems
tags:
  - syde351
date: 2024-07-27
aliases:
  - time domain response of second-order systems
---
See specific response types:
- [[Undamped Response for Second-Order System]]
- [[Damped Response for Second-Order System]]

## General Second-Order Systems
The equations of motion of many systems containing mass, spring, and damping elements have the form:
$$
m\ddot{x}+c\dot{x}+kx=f(t)
$$
where $f(t)$ is the input. The Laplace transform of this is:
$$
m[s^{2}X(s)-sx(0)-\dot{x}(0)]+c[sX(s)-x(0)]+kX(s) =F(s) \\[2ex]
$$
Re-arranging:
$$
(ms^{2}+cs+k)X(s) =F(s)+msx(0)+m\dot{x}(0)+cx(0)\\[2ex] 
$$
Solving for $X(s)$:
$$
X(s) =\underbrace{ \frac{F(s)}{ms^{2}+cs+k} }_{ \text{ZSR} }+\underbrace{ \frac{msx(0)+m\dot{x}(0)+cx(0)}{ms^{2}+cs+k} }_{ \text{ZIR} }
$$
The transfer function is then:
$$
\frac{X(s)}{F(s)}=\frac{1}{ms^{2}+cs+k}
$$
The solution of the system $m\dot{x}+c\dot{x}+kx=f(t)$, and therefore the form of the free and forced responses, depends on the values of the two characteristic roots, obtained from the *characteristic equation* $ms^{2} + cs + k = 0$.

![[Response of Second-Order System.png]]

### Numerator Dynamics
Another related model has the form
$$
m\ddot{x}+c\dot{x}+kx=a\dot{g}(t)+bg(t)
$$
This is essentially the same equation as before but we have $f(t)=a\dot{g}(t)+bg(t)$. Taking the Laplace transform, we have:
$$
\begin{align}
F(s) & =asG(s)+bG(s) \\
	 & =(as+b)G(s)
\end{align}
$$
We still have:
$$
\frac{X(s)}{F(s)}=\frac{1}{m^{2}+cs+k}
$$
Its transfer function is:
$$
\frac{X(s)}{G(s)}=\frac{as+b}{ms^{2}+cs+k}
$$
So this model has numerator dynamics. **The input does not affect the characteristic equation, and therefore does not affect the stability of the model or its free response**. Thus, this model has the same stability characteristics and the same free response, because they have the same characteristic equation, $ms^{2} + cs + k = 0$.


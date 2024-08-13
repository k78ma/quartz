---
title: Undamped Response for Second-Order System
tags:
  - syde351
date: 2024-07-20
aliases:
  - undamped response for second-order system
---
Consider the undamped systems shown below. They all have the same model form: $m\ddot{x} + kx = f(t)$. We can consider this to be the same as the [[Time Domain Response of Second-Order Systems|general second-order system]]  $m\ddot{x}+c\dot{x}+kx=f(t)$ above but with $c=0$.

![[Response of Second-Order System-1.png|512]]

We established that for second-order systems, we have
$$
X(s) =\underbrace{ \frac{F(s)}{ms^{2}+cs+k} }_{ \text{ZSR} }+\underbrace{ \frac{msx(0)+m\dot{x}(0)+cx(0)}{ms^{2}+cs+k} }_{ \text{ZIR} }
$$
With $c=0$, this becomes:
$$
\begin{align}
X(s)  & =\underbrace{ \frac{F(s)}{ms^{2}+k} }_{ \text{ZSR} }+\underbrace{ \frac{msx(0)+m\dot{x}(0)}{ms^{2}+k} }_{ \text{ZIR} }\\[2ex] 
	 & =\frac{F(s)/m}{s^{2}+\frac{k}{m}}+\frac{\dot{x}(0)+sx(0)}{s^{2}+\frac{k}{m}}
\end{align}
$$
For the free response (ZIR) case of $F(s)=0$:
$$
X(s)_{\text{ZIR}}=\frac{\dot{x}(0)}{s^{2}+\frac{k}{m}}+\frac{sx(0)}{s^{2}+\frac{k}{m}}
$$
And the transfer function is:
$$
\frac{X(s)}{F(s)}=\frac{\frac{1}{m}}{s^{2}+\frac{k}{m}}
$$
where $s^{2}+\frac{k}{m}$ is the characteristic equation.

What if we solve the characteristic equation? We have
$$
\begin{align}
s^{2}+\frac{k}{m} & =0 \\[2ex] 
s^{2} & =-\frac{k}{m} \\[2ex] 
s & =\pm j\sqrt{ \frac{k}{m} } \\[2ex] 
\omega_{n} & =\sqrt{ \frac{k}{m} }
\end{align}
$$
where $\omega_{n}$ is the *natural frequency* of the undamped system. Then, we can write:
$$
\begin{align}
X(s) & =\frac{\dot{x}(0)}{s^{2}+\frac{k}{m}}+\frac{sx(0)}{s^{2}+\frac{k}{m}}\\[2ex] 
	 & =\frac{\dot{x}(0)}{s^{2}+\omega_{n}^{2}}+\frac{sx(0)}{s^{2}+\omega_{n}^{2}} \\[2ex]
	 & =\frac{\dot{x}(0)}{s^{2}+\omega_{n}^{2}} \cdot \frac{\omega_{n}}{\omega_{n}} + \frac{sx(0)}{s^{2}+\omega_{n}^{2}} \\[2ex] 
	 & =\frac{\dot{x}(0)}{\omega_{n}}\cdot \frac{\omega_{n}}{s^{2}+\omega_{n}^{2}}+x(0) \frac{s}{s^{2}+\omega_{n}^{2}}
\end{align}
$$
Recall that:
$$
\mathcal{L}[\cos(bt)ut]=\frac{s}{s^{2}+b^{2}}, \quad \mathcal{L}[\sin(bt)ut]=\frac{b}{s^{2}+b^{2}}
$$
Thus, we have:
$$
x(t)_{\text{ZIR (Free response)}}=\left[ \frac{\dot{x}(0)}{\omega_{n}}\sin(\omega_{n}t)+x(0)\cos(\omega_{n}t) \right]u(t)
$$
This solution shows that the mass oscillates about the rest position $x = 0$ with a frequency of $\omega_{n}$. The period of the oscillation is $2\pi /\omega_{n}$.

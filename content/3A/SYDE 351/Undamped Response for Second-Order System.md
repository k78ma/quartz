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

So we have some shit like
$$
m\ddot{x}+c\dot{x}+kx=0
$$
We assume that $x=e^{st}$. Then:
$$
\begin{align}
\dot{x} & =se^{st} \\
\ddot{x} & =s^{2}e^{st}
\end{align}
$$
so we have
$$
\begin{align}
ms^{2}e^{st}+cse^{st}+ke^{st}=0 \\
e^{st}(ms^{2}+cs+k)=0
\end{align}
$$
So we want to solve $ms^{2}+cs+k$. We have $s$ in the form of
$$
s=\sigma+j\omega
$$
So we have:
$$
e^{st}=e^{(\sigma+j\omega)t} = e^{\sigma t}e^{j\omega t}
$$
The real part $e^{\sigma t}$ governs the amplitude so if $\sigma>1$ the function explodes, if $\sigma<1$ it's stable. And this is why the time constant $\tau=\frac{1}{| \sigma |}$ because this tells us how it decays.

The imaginary one is a sinusoid like
$$
e^{j\omega t}=\cos(\omega t)+j\sin(\omega t)
$$

Given:
$$
s=\sigma+j\omega
$$
We have:
$$
\begin{align}
\omega_{d} & =\omega \\[2ex]
\omega_{n} & =\sqrt{ \sigma^{2}+\omega^{2} } \\[2ex]
\tau & =\frac{1}{| \sigma |} \\[2ex]
\zeta & = \frac{\sigma}{\omega_{n}}= \cos\left( \tan ^{-1}\left( \frac{\omega}{\sigma} \right) \right)
\end{align}
$$
- If $\sigma>1$, the system is unstable (increases over time) so $\zeta$ and $\tau$ are undefined.
- If the roots are real and equal, (eg. $s=-10, -10$ or something), $\omega_{d}$ and $\omega_{n}$ are not defined because there's no oscillation.
- If there is only one root, the system is first order, so damping $\zeta$ is not defined, and $\omega_{d}$ and $\omega_{n}$ are not defined because there's no oscillation.
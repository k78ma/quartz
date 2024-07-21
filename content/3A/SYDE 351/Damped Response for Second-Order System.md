---
title: Damped Response for Second-Order System
tags:
  - syde351
date: 2024-07-20
aliases:
  - damped response for second-order system
---
For a damped system, we have
$$
m\ddot{x}+c\dot{x}+kx=f(t)
$$
Like the [[Undamped Response for Second-Order System|undamped case]], we aim to solve the characteristic equation to determine the response of the system. We have
$$
\begin{align}
ms^{2}+cs+k & =0 \\[2ex] 
s^{2}+\frac{c}{m}s+\frac{k}{m} & =0
\end{align}
$$
Recall that $\sqrt{ k /m }=\omega_{n}$, so $k /m=\omega_{n}^{2}$. Let:
$$
\begin{align}
\frac{c}{m} & =2\zeta \omega_{n}\\[2ex] 
\zeta & =\frac{c}{2m\omega_{n}}=\frac{c}{c_{\text{cr}}}
\end{align}
$$
We can then say:
$$
c_{\text{cr}}=2m\omega_{n}=2m\sqrt{ \frac{k}{m} }=2\sqrt{ km }
$$
and
$$
\zeta=\frac{c}{2\sqrt{ km }}
$$
where $\zeta$ is called the **damping ratio**. Then, we have
$$
\begin{align}
s^{2}+\frac{c}{m}s+\frac{k}{m} & =0 \\[2ex] 
s^{2}+2\zeta \omega_{n}+\omega_{n}^{2} & =0 \\[2ex] 
s & =\frac{-2\zeta \omega_{n}\pm \sqrt{ 4\zeta^{2}\omega_{n}^{2}-4\omega_{n}^{2} }}{2} \\[2ex]
	 & =-\zeta \omega_{n}\pm \omega_{n}\sqrt{ \zeta^2-1 }
\end{align}
$$
Recall that in general, for [[Response of Second-Order System|second-order systems]] we have:
$$
X(s) =\underbrace{ \frac{F(s)}{ms^{2}+cs+k} }_{ \text{ZSR} }+\underbrace{ \frac{msx(0)+m\dot{x}(0)+cx(0)}{ms^{2}+cs+k} }_{ \text{ZIR} }
$$
The free damped response, where $F(s)=0$, would then be
$$
\begin{align}
X(s) & =\frac{msx(0)+m\dot{x}(0)+cx(0)}{ms^{2}+cs+k} \\[2ex]
	 & =\frac{sx(0)+\dot{x}(0)+\frac{c}{m}x(0)}{s^{2}+2\zeta \omega_{n}+\omega_{n}^{2}}
\end{align}
$$
The poles are at
$$
s=-\zeta \omega_{n}\pm \omega_{n}\sqrt{ \zeta^{2}-1 }
$$
There are three cases we need to consider.

### Case 1: Overdamped
This occurs when $\zeta>1$ (or equivalently $c/c_{\text{cr}}>1$). We have
$$
\zeta=\frac{c}{c_{\text{cr}}}=\frac{c}{2m\omega_{n}}=\frac{c}{2\sqrt{ km }}
$$
If we have $\zeta>1$, that means have have $c>\sqrt{ 2km }$.

Since $\zeta>1$, we have $\sqrt{ \zeta^{2}-1 }>0$, which means that $s=-\zeta \omega_{n}\pm \omega_{n}\sqrt{ \zeta^{2}-1 }$ produces two distinct real poles. Thus, we have
$$
\begin{align}
s_{1}=-\zeta \omega_{n}- \omega_{n}\sqrt{ \zeta^{2}-1 }  \\
s_{2}=-\zeta \omega_{n}+\omega_{n}\sqrt{ \zeta^{2}-1 }
\end{align}
$$
Simplifying:
$$
\begin{align}
s_{1} & =\omega_{n}(-\zeta -\sqrt{ \zeta^{2}-1 })  \\
s_{2} & =\omega_{n}(-\zeta+\sqrt{ \zeta^{2}-1 })
\end{align}
$$
where $s_{1}<s_{2}$ or $-s_{1}>-s_{2}$.

This gives:
$$
X(s)=\frac{sx(0)+\dot{x}(0)+2\zeta \omega_{n}x(0)}{(s-s_{1})(s-s_{2})}
$$
Converting back to time domain:
$$
x(t)=C_{1}e^{s_{1}t}+C_{2}e^{s_{2}t}
$$
If we let $\tau=-\frac{1}{s_{1}}$ and $\tau_{2}=-\frac{1}{s_{2}}$, this can be written as
$$
x(t)=C_{1}e^{-t/\tau_{1}}+C_{2}e^{-t/\tau_{2}}
$$
Note that since $s_{2}>s_{1}$, we call $s_{2}$ the *dominant pole*.


> [!example]- Overdamped Example
> Let's say we have have:
> - $\zeta=\sqrt{ 10 }\approx 3.2$
> - $\omega_{n}=100 \frac{\text{rad}}{s}$
>Then, we have:
>$$
>\begin{align}
>s_{1}=-100(\sqrt{ 10 }-\sqrt{ 10-1 })=-20 \\
>s_{2}=-100(\sqrt{ 10 }_{\sqrt{ 10-1 }})=-620
>\end{align}
>$$
>So:
>$$
>\begin{align}
>x(t) & =C_{1}e^{s_{1}t}+C_{2}e^{s_{2}t}=C_{1}e^{-20t}+C_{2}e^{-620t}
> & =C_{1}e^{\frac{-t}{1/20}}+C_{2}e^{\frac{-t}{1/620}}
>\end{align}
>$$
>where $\tau_{1}=\frac{1}{20}=50 \text{ ms}$ and $\tau_{2}=\frac{1}{620}=1.2 \text{ ms}$
>

### Case 2: Critically Damped
In the critically damped cause $\zeta=1$, or $\frac{c}{c_{\text{cr}}}=1$, such that $c=c_{\text{cr}}=2\sqrt{ km }$. This is the minimum damping to have no oscillation. 

In this case, we have $\zeta^{2}-1=0$, so $s=-\zeta \omega_{n}\pm0$, so we have repeated real poles, $s=-\omega_{n}$. Thus, we have:
$$
\begin{align}
s^{2}+2\zeta \omega_{n}s+\omega_{n}^{2} & =s^{2}+\omega_{n}s+\omega_{n}^{2} \\
	 & = [s-(-\omega_{n})]^{2}
\end{align}
$$
This gives:
$$
\begin{align}
X(s) & =\frac{sx(0)+2\zeta \omega_{n}s+\omega_{n}^{2}}{(s+\omega_{n})^{2}}\\[2ex] 
x(t) & =(C_{1}+tC_{2})e^{st}=(C_{1}+tC_{2})e^{-\omega_{n}t}
\end{align}
$$

### Case 3: Underdamped
For the underdamped case, we have $0<\zeta<1$, such that $c<c_{\text{cr}}$ or $c<2\sqrt{ km }$. Then, we have
$$
s=-\zeta \omega_{n}\pm \omega \sqrt{ \zeta^{2}-1 }
$$
where
$$
\sqrt{ \zeta^{2}-1 }=\sqrt{ (-1)(1-\zeta)^{2} }=j\sqrt{ 1-\zeta^{2} }
$$
Thus, we have
$$
s=-\zeta \omega_{n}\pm j\underbrace{ \omega_{n}\sqrt{ 1-\zeta^{2} } }_{ \omega_{d} }
$$
where $\omega_{d}=\omega_{n}\sqrt{ 1-\zeta^{2} }$ is the **damped natural frequency**. Then, we can write $s$ as
$$
s=-\zeta \omega_{n}\pm j\omega_{d}
$$
and
$$
\begin{align}
e^{st} & =e^{-(\zeta \omega_{n}\pm j\omega_{d})t} \\
	 & =e^{-\zeta \omega_{n}}[\cos \omega_{d}t\pm j\sin \omega_{d}t]
\end{align}
$$

This damped oscillation plot looks something like:

![[Damped Response for Second-Order System.png|384]]

![[Damped Response for Second-Order System-1.png|368]]

Essentially, the amplitude of oscillation follows $e^{-\zeta \omega_{n}t}$.

For underdamped systems, the time constant is
$$
\tau=\frac{1}{\zeta \omega_{n}}=\frac{2m}{c}
$$
so we have:
$$
e^{st}=e^{-t/\tau}[\cos (\omega_{d}t)\pm j\sin (\omega_{d}t)]
$$
In the time domain, this can be written as
$$
\begin{align}
x(t) & =C_{1}e^{s_{1}t}+C_{2}e^{s_{2}t} \\[2ex]
	 & =e^{-t/\tau}[C_{1}e^{\text{Im}(s_{1})t}+C_{2}e^{\text{Im}(s_{2})t}]
\end{align}
$$
Alternatively, we can write
$$
x(t)=e^{-\zeta \omega_{n}t}[A\sin(\omega_{d}t)+x(0)\cos(\omega_{d}t)]
$$
such that
$$
A=\frac{\zeta}{\sqrt{ 1-\zeta^{2} }}x(0)+\frac{1}{\omega _{d}}\dot{x}(0)
$$
and
$$
x(t)=De^{-\zeta \omega_{n}t}\sin(\omega_{d}t+\phi)
$$

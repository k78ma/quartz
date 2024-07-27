---
title: Frequency-Domain Response of Second-Order Systems
tags:
  - syde351
date: 2024-07-27
aliases:
  - frequency-domain response of second-order systems
---
Second order systems have follow the form:
$$
\begin{align}
m\ddot{x}+c\dot{x}+kx & =f(t) \\
(ms^{2}+cs+k)\,X(s) & =F(s)
\end{align}
$$
Thus, the transfer function is:
$$
H(s)=\frac{X(s)}{F(s)}=\frac{1}{ms^{2}+cs+k}
$$
## Overdamped Case
In the overdamped case, where $\zeta>1$, there are two real poles $s_{1}$ and $s_{2}$. We have:
$$
H(s)=\frac{1/k}{\frac{m}{s}s^{2}+\frac{c}{k}s+1}=\frac{1 / k}{(s-s_{1})(s-s_{2})}
$$
For [[Frequency-Domain System Analysis|frequency-domain system analysis]], we have $s=j\omega$, such that:
$$
H(j\omega)=\frac{1/k}{(j\omega-s_{1})(j\omega-s_{2})}
$$
## Underdamped Case
In the underdamped case, we have $0<\zeta<1$. This time, we divide by $m$ instead of $k$:
$$
\begin{align}
H(s) & = \frac{1 /m}{s^{2}+\frac{c}{m}s+\frac{k}{m}}\\[2ex]
 & =\frac{1/m}{s^{2}+2\zeta \omega_{n}s+\omega_{n}^{2}}
\end{align}
$$
where $\omega_{n}=\sqrt{ \frac{k}{m} }$ and $\zeta=\frac{c}{2\sqrt{ km }}$.

Then, if we divide by $\omega_{n}^{2}$, we have:
$$
H(s)=\frac{1 / m\omega_{n}^{2}}{\frac{s^{2}}{\omega_{n}^{2}}+\frac{2\zeta s}{\omega_{n}}+1}
$$
Using $s=j\omega$ for frequency domain analysis (steady response to a sinusoid):
$$
H(j\omega)=\frac{\frac{1}{m\omega_{n}^{2}}}{\frac{(j\omega)^{2}}{\omega_{n}^{2}}+2\zeta j \frac{\omega}{\omega_{n}}+1}
$$
where $r=\frac{\omega}{\omega_{n}}$ is called the **frequency ratio**.

This gives:
$$
\begin{align}
H(j\omega) & =\frac{\frac{1}{m\left(  \frac{k}{m} \right)}}{(-1)r^{2}+2\zeta rj+1} \\[2ex]
	 & =\frac{1 / k}{-r^{2}+2\zeta rj+1}\\[2ex] 
	 & =\frac{1 / k}{1-r^{2}+j_{2}\zeta r}\\[2ex] 
	 & =\frac{\frac{1}{k}}{\sqrt{ (1-r^{2})^{2}+(2\zeta r)^{2} }}
\end{align}
$$
and
$$
\begin{align}
\angle H(j\omega) & =\angle \frac{1}{k}-\angle(1-r^{2}+j2\zeta r) \\[2ex]
	 &= 0-\arctan\left( \frac{2\zeta r}{1-r^{2}} \right) \\[2ex]
	 & =-\arctan\left( \frac{2\zeta r}{1-r^{2}} \right)
\end{align}
$$
If we have $\omega=0$, we have $r=\frac{\omega}{\omega_{n}}=0$, which would give:
$$
\begin{align}
| H | & =\frac{1 / k}{\sqrt{ 1-0 }}=\frac{1}{k} \\[2ex]
\angle H  & = 0
\end{align}
$$
If we have $\omega=\omega_{n}$ and $r=\frac{\omega}{\omega_{n}}=1$, we have:
$$
\begin{align}
| H | & =\frac{1 / k}{\sqrt{ 0+(2\zeta)^{2} }}=\frac{1}{2\zeta k} \\[2ex]
\angle H  & = -\tan\left( \frac{2\zeta}{1-1} \right)=-\frac{\pi}{2}
\end{align}
$$
When $r\to \infty$, we have:
$$
\begin{align}
| H | & =0 \\
\angle H  & = -\pi
\end{align}
$$

![[Frequency-Domain Response of Second-Order Systems.png]]

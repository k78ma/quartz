---
title: Fourier Transform
tags:
  - syde252
date: 2023-12-16
aliases:
---
The Fourier Transform is a method for representing aperiodic signals as a sum of exponentials of the form $e^{j\omega t}$.

### Formulation
Given an aperiodic signal $x(t)$, we can think of it as a periodic signal with a period of infinity:
$$
x(t)=\lim_{ T_{0} \to \infty } x_{T_{0}}(t)
$$
The exponential Fourier series for $x_{T_{0}}(t)$ is given by
$$
x_{T_{0}}(t)=\sum_{n=-\infty}^{\infty}D_{n}e^{jn\omega_{0}t}
$$
where $\omega_{0}=\frac{2\pi}{T_{0}}$ and
$$
D_{n}=\frac{1}{T_{0}}\int_{-\frac{T_{0}}{2}}^{\frac{T_{0}}{2}}x_{T_{0}}(t) \; e^{-jn\omega_{0}t}  \, dt 
$$
Integrating $x_{T_{0}}$ over $(-T_{0} / 2, T_{0} / 2)$ is equivalent to integrating $x(t)$ over $(-\infty, \infty)$. Therefore, the above equation can also be written as:
$$
D_{n}=\frac{1}{T_{0}}\int_{-\infty}^{\infty}x(t)e^{-jn\omega_{0}t}  \, dt
$$
It is interesting to see how the nature of the spectrum changes as $T_{0}$ increases. To understand this fascinating behavior, let us define $X(ω)$, a continuous function of $\omega$, as:
$$
\boxed{
X(\omega)=\int_{-\infty}^{\infty} x(t)e^{-j\omega t} \, dt 
}
$$
This is the **Fourier Transform**.

### Inverse Fourier Transform
Using the Fourier Transform $X(\omega)$, we can rewrite $D_{n}$ as:
$$
D_{n}=\frac{1}{T_{0}}X(n\omega_{0})
$$
And we can rewrite $x_{T_{0}}(t)$ as:
$$
x_{T_{0}}(t)=\sum_{n=-\infty}^{\infty} \frac{1}{T_{0}}X(n\omega_{0})\;e^{jn\omega_{0}t}
$$
Given that we have $\frac{2\pi}{T_{0}}=\omega_{0}$ or $T_{0}=\frac{2\pi}{\omega_{0}}$, we then have:
$$
x_{T_{0}}(t)=\frac{1}{2\pi}\sum_{n=-\infty}^{\infty}X(n\omega_{0})\;e^{jn\omega_{0}t} \; \omega_{0}
$$
Since our signal is aperiodic and $T_{0}$ approaches infinity, this means that $\omega_{0}$ must approach zero. If we say $\omega_{0}=\Delta \omega$ (incrementing notation basically?), we then have:
$$
x_{T_{0}}(t)=\frac{1}{2\pi}\sum_{n=-\infty}^{\infty}X(n\Delta \omega)\;e^{jn\Delta \omega t}\; \Delta \omega
$$
As $T_{0}\to \infty$, this sum becomes an integral:
$$
\boxed{
x(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty} X(\omega) \; e^{j\omega t} \, d\omega 
}
$$
This is the Fourier Integral, which provides the **Inverse Fourier Transform**.

### Notation
We can say that:
$$
\mathcal{F}[x(t)]=X(\omega)
$$
This is similar to the [[Laplace Transform for C.T. System Analysis|Laplace Transform]], where we have $\mathcal{L}[x(t)]=\int_{-\infty}^{\infty} x(t) \; e^{-st} \, dt$. Fourier is a special case of the Laplace Transform for $s=j\omega$, only when ROC of $X(s)$ includes the imaginary axis such that $X(j\omega)=X(\omega)$.

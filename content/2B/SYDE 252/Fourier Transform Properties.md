---
title: Fourier Transform Properties
tags:
  - syde252
date: 2023-12-16
aliases:
---
Properties of the [[Fourier Transform]].
### Frequency Shifting
If $x(t) \Longleftrightarrow X(\omega)$, then $x(t) \; e^{j\omega_{0}t} \Longleftrightarrow X(\omega-\omega_{0})$.
#### Amplitude Modulation
The implication of this is amplitude modulation: multiplication of a signal $x(t)$ by a sinusoid of frequency $\omega_{0}$ will shift the spectrum of $X(\omega)$ by $\omega_{0}$.

How this works is we have:
$$
x(t)e^{-j\omega_{0}t} \Longleftrightarrow X(\omega+\omega_{0})
$$
Using the identity $\cos \omega_{0}t = \frac{e^{j\omega_{0}t}+e^{-j\omega_{0}t}}{2}$, we will have:
$$
x(t)\cos \omega_{0}t = x(t) \; \frac{1}{2}[e^{j\omega_{0}t}+e^{-j\omega_{0}t}] = \frac{1}{2}[x(t)e^{j\omega_{0}t}+x(t)e^{-j\omega_{0}t}]
$$
So we will have:
$$
x(t)\cos \omega_{0}t \Longleftrightarrow \frac{1}{2}[X(\omega-\omega_{0})+X(\omega+\omega_{0})]
$$
### Time Shifting
If $x(t) \Longleftrightarrow X(\omega)$, we have $x(t-t_{0})\Longleftrightarrow X(\omega)\; e^{-j\omega t_{0}}$.
#### Phase Delay
We can write $X(\omega)$ in terms of its amplitude and phase:
$$
X(\omega) = | X(\omega) | \; e^{j \angle X(\omega)}$
$$
So, we can do a phase delay since we have:
$$
X(\omega) \cdot e^{-j\omega t_{0}}=| X(\omega) | \cdot  e^{j(\angle X(\omega)-\omega t_{0})}
$$
The magnitude remains unchanged but we have shifted the phase by $-\omega t_{0}$. This is a phase shift with a slope of $t_{0}$ as a function of $\omega$.

### Time-Frequency Duality
Let's take a look at the Inverse Fourier Transform and Fourier Transform:
$$
x(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty} X(\omega) \; e^{j\omega t} \, d\omega, \quad X(\omega)=\int_{-\infty}^{\infty} x(t)e^{-j\omega t} \, dt 
$$
They're very similar! The two differences are:
- The factor of $\frac{1}{2\pi}$
- The sign of the exponentials

Thus, if we have $x(t) \Longleftrightarrow X(\omega)$, we have $X(t) \Longleftrightarrow 2\pi x(-\omega)$.

### Linearity
Pretty simple:
$$
a_{1}x_{1}(t)+a_{2}x_{2}(t) \Longleftrightarrow a_{1}X_{1}(\omega)+a_{2}X_{2}(\omega)
$$
### Scaling
If we have $x(t) \Longleftrightarrow X(\omega)$, then:
$$
x(at) \Longleftrightarrow \frac{1}{| a |} \;X\left( \frac{\omega}{a} \right)
$$
Compression in the time domain causes expansion in the frequency domain and vice versa.

#### Impulse Function
Wider $x(t)$ causes narrower spectral bandwidth and vice versa, so:
$$
\delta(t) \Longleftrightarrow 1
$$
#### Reflection Property
If $a=-1$,
$$
x(-t) \Longleftrightarrow X(-\omega)
$$
### Convolution
If we have $x_{1}(t) \Longleftrightarrow X_{1}(\omega)$ and $x_{2}(t)\Longleftrightarrow X_{2}(\omega)$, we have these two.

Time convolution:
$$
x_{1}(t)* x_{2}(t) \Longleftrightarrow X_{1}(\omega)X_{2}(\omega)
$$
Frequency convolution:
$$
x_{1}(t)\;x_{2}(t)\Longleftrightarrow \frac{1}{2\pi}X_{1}(\omega) * X_{2}(\omega)
$$
### Time Differentiation and Integration
We have:
$$
\begin{align}
\frac{dx(t)}{dt}  & \Longleftrightarrow j\omega X(\omega) \\[3ex]
\frac{d^{n}x(t)}{dt^{n}}  & \Longleftrightarrow (j\omega)^{n} X(\omega)
\end{align}
$$
and
$$
\int_{-\infty}^{t} x(\tau) \, d\tau \; \Longleftrightarrow \frac{X(\omega)}{j\omega}+ \pi \; X(0) \; \delta(\omega)
$$

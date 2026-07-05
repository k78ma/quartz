---
title: Fourier Series
tags:
  - syde252
date: 2023-12-16
aliases:
---
A periodic signal $x(t)$ with period $T_{0}$ has the property
$$
x(t)=x(t+T_{0})
$$
The smallest $T_{0}$ that satisfies this is called the fundamental period of $x(t)$. Note that the fundamental period will also have fundamental frequencies, $f_{0}$ and $\omega_{0}$:
$$
\begin{align}
f_{0} & =\frac{1}{T_{0}} \\[3ex] 
\omega_{0}  & = 2\pi f_{0}=\frac{2\pi}{T_{0}}
\end{align}
$$
The basic idea of the Fourier series is to represent $x(t)$ as an infinite sum of exponentials:
$$
x(t)=\sum_{n=-\infty}^{\infty}D_{n} \; e^{jn\omega_{0}t}
$$
Here, $e^{jn\omega_{0}t}$ represents complex sinusoids, where $n$ is an integer that scales the fundamental frequency to represent the harmonics of the signal.

The coefficients $D_{n}$ are complex numbers that contain information about the amplitude and phase of each harmonic component of the signal. They are found by integrating the signal over one period while multiplying it by the complex conjugate of the corresponding complex exponential:
$$
D_{n}=\frac{1}{T_{0}}\int_{0}^{T_{0}}x(t)e^{-jn\omega_{0}t}  \, dt 
$$
For $n=0$:
$$
D_{0}=\frac{1}{T_{0}}\int_{0}^{T_{0}} x(t)e^{0t} \, dt=\frac{1}{T_{0}}\int_{0}^{T_{0}} x(t) \, dt  
$$
### Amplitude and Phase Spectra
$D_{n}$ is a complex number so it can be represented in polar form as $D_n=| D_{n} |e^{j \angle D_n}$. Here, $| D_{n} |$ is the magnitude/amplitude of the $n$-th harmonic and $\angle D_{n}$ is its phase angle.

We can make the following plots with this information
- The **amplitude spectrum plot** shows $| D_{n} |$ vs $\omega$. This shows how the amplitude of the signal's harmonics varies with frequency.
- The **phase spectrum plot** is a plot of $\angle D_{n}$ vs $\omega$. This which shows how the phase of the signal's harmonics varies with frequency.

#### Phase and Magnitude Symmetry for Real Signals
For a real-valued signal $x(t)$, the Fourier coefficients exhibit certain symmetries.

The magnitude of the Fourier coefficients $| D_{n} |$ is an even function with respect to the harmonic number $n$. This means that the magnitude of the positive and negative frequency components is the same:
$$
| D_{n} |=| D_{-n} |
$$
The phase of the Fourier coefficients $\angle D_{n}$​ is an odd function with respect to $n$. This implies that the phase of the negative frequency component is the negative of the phase of the positive frequency component:
$$
\angle D_{n} = -\angle D_{-n}
$$

#### Compact Trigonometric Form for Real Signals
For real signals $x(t)$:
$$
x(t)=\sum_{n=1}^{\infty}C_{n}\cos(n\omega_{0}t+\theta_{n})+C_{0}
$$
such that:
- $C_{0} = D_{0}$
- $C_{n}=2| D_{n} |$
- $\theta_{n}=\angle D_{n}= -\angle D_{-n}$

### Response of LTIC systems to Periodic Input Signals
We have:
- Impulse response of an LTIC system: $h(t)$
- Transfer function of LTIC system: $H(s)$. This is just $\mathcal{L}[h(t)]$.
- Frequency response: $H(j\omega)$. This is obtained by evaluating the transfer function $H(s)$ along the imaginary axis where $s=j\omega$. This function describes how the system responds to different frequencies.

Let's say we have an example of $x(t)=e^{st}$. The output $y(t)$ for this exponential function is given by:
$$
y(t)=H(s)e^{st}
$$
Evaluating this with $s=jn\omega_{0}$ would instead give:
$$
e^{jn\omega_{0}}U \implies H(jn\omega_{0})e^{jn\omega_{0}t}
$$
If we extend this to a periodic signal, we would have:
$$
\underbrace{ \sum_{n=-\infty}^{\infty}D_{n}e^{jn\omega_{0}t} }_{ x(t) } \implies \underbrace{ \sum_{n=-\infty}^{\infty}D_{n}H(jn\omega_{0})e^{jn\omega_{0}t} }_{ y(t) }
$$

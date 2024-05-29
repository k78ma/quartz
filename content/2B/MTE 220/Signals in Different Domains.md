---
title: Signals in Different Domains
tags:
  - mte220
date: 2023-12-02
aliases:
---
### Time 
In the time domain, the signal varies as a function of time. 

![[Signals in Different Domains.png|350]]

$V(t)$ is specified at every instantaneous $t$. It is composed of an infinite number of $\delta$ functions.
### Fourier
The Fourier (frequency) domain composes the signal using a sum of sinusoids.

![[Signals in Different Domains-1.png|339]]

$| V(j\omega) |$ is a continuous spectrum of sinusoids specified at every $f$. At a given $f_{0}$, $V(j\omega)$ specifies the magnitude and phase as a complex number. This turns calculus in the time domain to complex algebra.
### Laplace
In the Laplace domain, basis functions are a mix of time and frequency. 

![[Signals in Different Domains-2.png|338]]

The basis functions is a sine wave, but it's amplitude is modulated by an envelope because we want to restrict it in time:
$$
e^{st}=e^{\alpha t}e^{j\omega t}
$$
where $e^{\alpha t}$ is an envelope and $e^{j\omega t}$ is a sinusoid.

![[Signals in Different Domains-3.png|392]]

#### Example
![[Signals in Different Domains-4.png|391]]

We use $s$ instead of $j\omega$, such that:
$$
Z_{c}=\frac{1}{sC}
$$
Then, as a voltage divider, we would have:
$$
\begin{align}
V_{out} &= V_{in} \times \frac{Z_{c}}{Z_{c}+R} \\[3ex] 
	 & = V_{in} \times  \frac{\frac{1}{sC}}{\frac{1}{sC}+R} \times \frac{sC}{sC} \\[3ex] 
& = V_{in} \times  \left( \frac{1}{1+sRC} \right)
\end{align}
$$

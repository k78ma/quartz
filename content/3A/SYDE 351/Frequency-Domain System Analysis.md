---
title: Frequency-Domain System Analysis
tags:
  - syde351
date: 2024-07-27
aliases:
  - frequency-domain system analysis
---
It can be easier to analyze systems using the frequency domain as a mathematical tool.

Suppose we have a transfer function:
$$
H(s)=\frac{X(s)}{F(s)}
$$
Then, given an input of $e^{st}$, in the time domain we would have:
$$
x(t)=H(s)e^{st}
$$
where $s=\sigma+j\omega$ and $x(t)$ is the output in response to the complex exponential $e^{st}$.

If we are on the imaginary axis, such that $s=j\omega$, then $H(j\omega)$ is the system's **frequency response.** Then, we have:
$$
e^{st}\Big|_{s=j\omega} = e^{j\omega t}=\cos \omega t+j\sin \omega t
$$
In other words, ==the frequency response is the [[Time-Domain Response of First-Order Systems#Transient vs Steady-State Response|steady-state response]] to a sinusoid (after [[Time-Domain Response of First-Order Systems#Transient vs Steady-State Response|time response]] disappears). ==

Thus, we have: 
$$
\begin{align}
x(t) & =H(j\omega)e^{j\omega t} \\
 & =| H(j\omega) || e^{j\omega t} | e^{\angle H(j\omega)}e^{j\omega t}\\
 & = | H(j\omega t) |e^{[j\omega t+\angle H(j\omega )]}
\end{align}
$$
What this tell us is that given an input, it is amplified/attenuated by the magnitude of teh frequency response transfer function $H(j\omega t)$ and there is a phase shift of $\angle H(j\omega)$ due to the physics of the system.

If $f(t)=A\sin \omega t$, we would have:
$$
x(t)=A| H(j\omega) |\sin(\omega t+\phi)
$$
where $\phi=\angle H(j\omega)$.
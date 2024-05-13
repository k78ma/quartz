---
title: Phasor Representation of Sinusoids
tags:
  - mte320
date:
  "{ date:YYYY-MM-DD }": 
aliases: []
---
Consider a sinusoidal voltage $v$, written as $v(t)=V_{peak}\cos(\omega t+\theta)$.

$V_{rms}$ is the RMS of $v$, such that
$$
\begin{align}
V_{\text{rms}}=\sqrt{ \frac{1}{T}\int_{t_{1}}^{t_{1}+T} v^{2}(t)d(t) \, dt  }\\[2ex]
I_{\text{rms}}=\sqrt{ \frac{1}{T}\int_{t_{1}}^{t_{1}+T} i^{2}(t)d(t) \, dt  }
\end{align}
$$
The peak and RMS values are related as $V_{\text{rms}}=\frac{V_{peak}}{\sqrt{ 2 }}, I_{\text{rms}}=\frac{I_{peak}}{\sqrt{ 2 }}$.

Thus, we can say that alternatively say that $v=\sqrt{ 2 }V_{\text{rms}}\cos(\omega t+\theta)$, which we call time-function representation. This can converted to phasor:
$$
v(t) = \sqrt{ 2 }V_{\text{rms}}\cos(\omega t+\theta) \;\;\; \longrightarrow  \;\;\;\vec{V}=V_{\text{rms}}e^{j\theta}=V_{\text{rms}} \angle \theta
$$
The idea of this is that if a vector $\vec{V}$ of magnitude $V_{peak}$ and phase angle $\theta$ with respect to the real axis at $t=0$, rotates in the positive direction (ccw) at an angular speed of $\omega$ radians per second, its *real component* is $V_{\text{peak}}\cos(\omega t+\theta)$. 

Therefore, the value of sinusoidal voltage $v$ is equal to $\sqrt{ 2 }$ times the component of $\vec{V}$ along the real axis. Thus, all the information about $v$ can be represented by $\vec{V}$. A phasor is a vector that rotates counterclockwise.

![[Phasor Representation of Sinusoids.png|480]]

## Conversion
We can convert between phasor and time-function representation with:
$$
\begin{align}
v(t) & =\text{Re}\{ \sqrt{ 2 }\vec{V}_{\text{rms}}e^{j\omega t} \} \\[1.2ex]
	 & =\text{Re}\{ \sqrt{ 2 }(V_{\text{rms}}e^{j\theta})e^{j\omega t} \} \\[1.2ex]
	 & = \text{Re}\{ \sqrt{ 2 } V_{\text{rms}}e^{j(\omega t+\theta)} \} \\[1.2ex]
	 & = \sqrt{ 2 }V_{\text{rms}}\cos(\omega t+\theta)
\end{align}
$$

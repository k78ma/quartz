---
title: Average Power
tags:
  - mte320
date: 2024-05-13
aliases:
  - active power
  - real power
---
The average power (aka active power, real power) is defined as:
$$
\begin{align}
P  & = \frac{1}{T} \int_{t_{1}}^{t_{1}+T} p(t) \, dt \\[2ex] 
	 & = \frac{1}{T}\int_{t_{1}}^{t_{1}+T} v(t)i(t) \, dt 
\end{align}
$$
where $T=1/f$ is the period.

Alternatively, this can also be written in the frequency domain with:
$$
P=\frac{1}{2\pi}\int_{\omega t_{1}}^{\omega t_{1}+2\pi}p(\omega t)  \, d\omega t 
$$
If voltage and current are defined as:
$$
\begin{align}
v(t) & =\sqrt{ 2 }V\cos(\omega t+\theta_{v})\\
i(t) & =\sqrt{ 2 }I\cos(\omega t+\theta_{i})
\end{align}
$$
then:
$$
P = VI\cos(\theta_{v}-\theta_{i})
$$
**Active power:** Active power or real power is the power whose generation, transmission, distribution, and consumption are the main objectives in power systems. Active power leads to useful work in heaters, pumps, hoists, etc. 

This has units of $\text{W}$, watts.
### Resistors
The average power in a resistor is given by:
$$
\begin{align}
P_{R} & =VI\cos(\theta_{v}-\theta_{i}) \\
	 & = VI\cos(0\degree) \\
	 & = VI = I^{2}R = V^{2} / R
\end{align}
$$
This is because $I$ is in phase with $V$, so $\theta_{v}-\theta_{i}=0$.

![[voltage and current phasors for resistor.png|348]]

### Inductors
The average power in an inductor is:
$$
\begin{align}
P_{L} & =VI\cos(\theta_{v}-\theta_{i}) \\
	 & = VI \cos(90\degree) \\
	 & = 0
\end{align}
$$
$V$ leads $I$ by $90\degree$, so $\theta_{v}-\theta_{i}=90\degree$.

![[Average Power.png|364]]
### Capacitors
The average power in an capacitor is:
$$
\begin{align}
P_{C} & =VI\cos(\theta_{v}-\theta_{i}) \\
	 & = VI \cos(-90\degree) \\
	 & = 0
\end{align}
$$
$V$ lags behind $I$ by $90\degree$, so $\theta_{v}-\theta_{i}=-90\degree$.

![[Average Power-1.png|364]]
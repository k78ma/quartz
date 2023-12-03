---
title: Transducer Example
tags:
  - mte220
date: 2023-12-03
aliases:
---
You have a sensor operating at 4 kHz +/- 1 kHz connected to a data acquisition circuit you’re designing. It is powered by a boost converter that takes low voltage and uses an inductor to boost the voltage to a higher working voltage. The boost converter activated the inductor at a rate of 1 MHz.

**Design a filter that provides 100x gain (40 dB) and eliminates the switching noise from the boost converter.**

![[Transducer Example.png|326]]

#### Two-stage Solution
We want to pass lower frequencies, so we can add a low-pass filter and then add an op-amp for gain:

![[Transducer Example-1.png|313]]

For phase 1, it's a voltage divider so:
$$
A_{1}(s) = \frac{Z_{c}}{Z_{c} + R} = \frac{1 / sC}{1 / sC + R} = \frac{1}{1+sRC}, \quad \omega_{c} = \frac{1}{RC}
$$
For phase 2:
$$
A_{2}(s) = 1+ \frac{R_{f}}{R_{i}}
$$
In total, we have $A=A_{1}A_{2}$.

- If we choose $w_{c} = 2\pi f_{C} = \frac{1}{RC}$, we can choose $R_{LP} = 10 \text{ k} \Omega$ AND $C_{LP} = \frac{1}{2\pi \cdot 10k \cdot 10k} = 1.59 \text{ nF}$.
- We can also choose $1+ \frac{R_{f}}{R_{i}} = 100$ so we can choose some values for that.

The plot looks like:

#### One-stage Solution
Or we can do everything together:

![[Transducer Example-3.png|354]]

We have $A = - \frac{Z_{f}}{Z_{i}}$. We want $| A |=100$ until $5 \text{ kHz}$, then drop:
- Set $R_{f} / R_{i} = 100$
- Set $\omega_{c} = 2\pi \times 10 \text{ kHz}$ (give a little extra room since there's actually -3 dB right at the cutoff frequency)
- To make $Z_{f} / Z_{i}$ go to zero as $f$ increases, we want $Z_{f}\to 0$ or $Z_{i}\to \infty$

Starting from $A = -\frac{Z_{f}}{Z_{i}}$, we then have:
$$
\begin{align}
Z_{f} \parallel R_{f}  & = \frac{1}{sC} \parallel R_{f} \\
	 & = \left( sC + \frac{1}{R_{f}} \right)^{-1} \\
	 & = \frac{R_{f}}{sR_{f}C_{f} + 1}
\end{align}
$$
(Note that in the final expression, $sR_{f}C_{f}$ is just $s/w_{c}$, where $\omega_{c} = \frac{1}{R_{f}C_{f}}$).

Thus, we $A$ becomes:
$$
\begin{align}
A  & = -\frac{Z_{f}}{Z_{i}} \\[3ex] 
	 & = -\left( \frac{R_{f}}{sR_{f}C_{f}+1} \right)\cdot \frac{1}{R_{i}} \\[3ex] 
	 & = -\frac{R_{f}}{R_{i}}\left( \frac{1}{s / \omega_{c}+1} \right)
\end{align}
$$
Choosing $R_{i}=10 \text{ k} \Omega$ gives us $R_{f}=1 \text{ M} \Omega$. For the capacitor, we have:
$$
C_{f} = \frac{1}{2\pi f_{c}R_{f}} = \frac{1}{2\pi \cdot  10k \cdot 1M} = 15.9 \text{ pF}
$$

#### Bode Plot
The resulting Bode magnitude plot is:

![[Transducer Example-4.png]]
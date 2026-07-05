---
title: Circuit to Transfer Function
tags:
  - mte220
date: 2023-12-02
aliases:
---
Derive the $A = V_{out} / V_{in}$  for the following circuit:

![[Circuit to Transfer Function.png|404]]

We can see that:
- Stage 1 is a frequency-dependent voltage divider
- Stage 2 is a non-inverting amplifier
- Since the two stages are independent, we have $A = A_{1} \cdot A_{2}$.

For stage 1, we have:
$$
\begin{align}
A_{1} = \frac{V_{o_{1}}}{V_{in}}
\end{align}
$$
Since it's a frequency-dependent voltage divider, we have:
$$
\begin{align}
A_{1}  & = \frac{V_{o_{1}}}{V_{in}} \\[2ex] 
	 & = \frac{Z_{L}}{R_{1}+Z_{L}}, \quad Z_{L} = sL \\[2ex] 
	 & = \frac{sL}{R_{1} + sL} = \frac{\frac{sL}{R_{1}}}{\frac{sL}{R_{1}} + 1} \\[3ex] 
	 & = \frac{s / \omega_{c}}{s / \omega_{c} + 1} \quad \ \text{(Standard form for 1st-order HPF)}
\end{align}
$$
Note that $\tau  = \frac{L}{R_{1}}$ and $\omega_{c} = \frac{1}{\tau} = \frac{R_{1}}{L}$

Qualitatively:
![[Circuit to Transfer Function-1.png|390]]

- At low frequency, $L_{1}$ is essentially a closed switch, so $V_{o_{1}} = 0$
- At high frequency, $L_{1}$ is essentially an open switch, so $V_{o_{1}} = V_{in}$
- Therefore, we know that this is a high pass filter qualitatively.

Since we know that stage 2 is just a non-inverting amplifier, we have:
$$
A = A_{1}A_{2} = \left(\frac{s / \omega_{c}}{s / \omega_{c} + 1}\right)\left( 1+\frac{R_{f}}{R_{i}} \right)
$$
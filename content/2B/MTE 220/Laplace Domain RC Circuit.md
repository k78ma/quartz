---
title: Laplace Domain RC Circuit
tags:
  - mte220
date: 2023-12-02
aliases:
---
For an RC circuit in the Laplace domain:
![[Transfer Functions.png|266]]

Our transfer function is:
$$
\text{TF} = \frac{1}{1+sRC} = A(s) = \frac{V_{out}(s)}{V_{in}(s)} \quad [\text{V} / \text{V}]
$$
We can replace $s = j\omega$ to see the frequency behavior.
$$
\begin{align}
\text{Magnitude}: \quad | A(j\omega) |  & = \frac{| 1 |}{| 1+j\omega RC |} \\[2ex] 
	 & = \frac{1}{\sqrt{ 1+(\omega RC)^{2} }} \\[3ex] 
\text{Phase}: \quad \angle A(j\omega)  & =  \angle \text{Numerator} -  \angle \text{Denominator} \\
	 & = \angle 1 - \angle(1+j\omega RC) \\
	 & = 0 - \angle(1+j\omega RC)
\end{align}
$$
What is the frequency-dependent behavior for this circuit if $V_{in}$ is AC? We have $A(s) = \frac{1}{1+sRC}$, but what does this mean?
- Low frequency: The capacitor looks like an open circuit, so $V_{out} = V_{in}, A=1$
- High frequency: The capacitor looks like a short circuit, so $V_{out} = 0, A=0$
- In between: $V_{out}$ is somewhere between $0$ and $V_{in}$, with $A$ decreasing as $f$ increases.
- Therefore, this is a passive [[Low-pass Filter]].

We can see this LPF behavior by focusing on the magnitude, $| A(j\omega) |$:
$$
\begin{align}
| A(j\omega) |  & = \frac{1}{\sqrt{ 1+(\omega RC)^{2} }} \\[3ex] 
\omega  & \to 0, \; \;\; | A(j\omega) | \to \frac{1}{\sqrt{ 1+0 }}=1 \\[3ex] 
\omega  & \to \infty, \; \;\; | A(j\omega) | \to \frac{1}{\omega RC}=0
\end{align}
$$
When does it transition from $A \approx 1$ to $A \approx 0$?

There is a special frequency where $\text{Re} = \text{Im}$ in the denominator.
$$
\begin{align}
\text{Re}  & = \text{Im} \\
1  & = \omega RC \\
&\therefore \omega _{c} = \frac{1}{RC} = \frac{1}{\tau}
\end{align}
$$
This special frequency is called the:
- Cut-off frequency
- Corner frequency
- -3dB frequency, since $20\log_{10}(1 / \sqrt{ 1+1 } = 20\log_{10}(1 / \sqrt{ 2 }) = -3$
- Half power frequency.

We can make a plot of $| A(j\omega) |$ vs $\omega = 2\pi f$:
![[Transfer Functions-1.png|376]]

As $\omega$ goes above $\omega_{c}$, we have
$$
| A(j\omega) | \approx \frac{1}{\sqrt{ (\omega RC)^{2} }} = \frac{1}{\omega RC} = \frac{1}{\omega / \omega_{c} } = \frac{\omega_{c}}{\omega}
$$
(Recall $\omega_{c} = \frac{1}{RC}$).
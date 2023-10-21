---
title: Phasors
tags:
  - mte220
date: 2023-10-21
---
The idea is that since every state in a linear system will have the same frequency (see [[Sinusoidal Steady-state Response]]), we don't want to bother carrying around the $e^{ j\omega t }$ term.

Let's first understand it without phasor notation – solve for $V_{in} = V_{0}e^{ j\omega t }$.

![[Phasors.png|395]]

We have:
$$
\begin{align}
V_{out}  & = V_{in} \cdot \left( \frac{j\omega RC}{j\omega RC + 1} \right) \\[3ex] 
& = V_{0}e^{ j\omega t } \cdot \left( \frac{j\omega RC}{j\omega RC + 1} \right) \\
\end{align}
$$

We could plug in everything ($R, C, \omega$). But $V_{in}, V_{out}$ and the current  $I$ through the capacitor all contain an $e^{j\omega t}$ (since the system is linear).

### Phasor Notation
So, we can drop all $e^{ j\omega t }$ terms since it shows up everywhere anyways. This leaves us with a magnitude and phase.

Originally, we started off with $V_{in} = V_{0}e^{j\omega_{0}t}$ at a particular frequency $\omega_{0}$. Now, we write it as:
$$
\tilde{V}_{in} = V_{0} \;\angle 0 \degree \quad [\text{V}]
$$
With a phase $V_{in} = V_{0}e^{j(\omega t + \phi)} = V_{0}e^{j\phi}e^{j\omega t}$, we would have:
$$
\tilde{V}_{in} = V_{0} \;\angle \phi \quad [\text{V}]
$$
We can also write this as Cartesian coordinates.
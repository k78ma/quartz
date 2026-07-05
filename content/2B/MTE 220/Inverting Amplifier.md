---
title: Inverting Amplifier
tags:
  - mte220
date: 2023-10-09
---
![[Inverting Amplifier.png|405]]

Governed by:
$$
V_{\text{out}} = V_{\text{in}} \times-\frac{R_{f}}{R_{i}}
$$
The signal is applied through $R_{i}$ to $V_{-}$ while $V_{+} = 0$

Negative feedback means the op-amp is trying to minimize $V_{+}- V_{-}$, so we can assume $V_{+} = V_{-}$.
Ends up causing a current balance since the op-amp is trying to make $V_{-} = 0V$ and no current goes into input tereminals.

$$
\begin{align}
I_{in} = \frac{V_{in}-0}{R_{i}}=\frac{0-V_{out}}{R_{f}} \\
\therefore \frac{V_{out}}{V_{in}} = - \frac{R_{f}}{R_{i}} = A\left[ \frac{V}{V} \right]
\end{align}
$$

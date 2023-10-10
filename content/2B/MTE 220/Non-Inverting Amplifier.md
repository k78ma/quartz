---
title: Non-Inverting Amplifier
tags:
  - mte220
date: 2023-10-09
---
![[Non-Inverting Amplifier.png|287]]

Governed by:
$$
V_{\text{out}} = V_{\text{in}} \times \left( 1+\frac{R_{f}}{R_{i}} \right)
$$

Basically, how this work is:

- Signal is applied to $V_{+}$
- Negative [[Feedback|feedback]] means the op-amp is trying to minimize $V_{+} - V_{-}$
	- Since $A_{0}$ is huge, we can assume that $V_{+} - V_{-}=0$ or that $V_{+} = V_{-}$.
	- Called the “virtual ground”
- Thus, we have:
$$
\begin{align}
V_{+} &= V_{in} \\ 
V_{-} &= V_{\text{out}} \frac{R_{i}}{R_{i}+R_{f}} \\ 
V_{+} &= V_{-} \\ 
\therefore \frac{V_{\text{out}}}{V_{\text{in}}} &= \frac{R_{i}+R_{f}}{R_{i}} = 1+ \frac{R_{f}}{R_{i}} \\
\end{align}
$$

- This is called the “closed-loop gain”, $A \left[ \frac{V}{V} \right]$.
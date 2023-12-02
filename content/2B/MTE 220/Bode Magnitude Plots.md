---
title: Bode Magnitude Plots
tags:
  - mte220
date: 2023-12-02
aliases:
---
Bode Magnitude Plots are convenient since each factor in $s$ can be treated individually with logarithms. For example, if we have a complex transfer function:
$$
A(s) = \frac{N_{1}(s)N_{2}(s)\dots}{D_{1}(s)D_{2}(s)\dots}
$$
Then, we have:
$$
\begin{align}
| A(s) |_{\text{dB}}  &= 20\log_{10}(| A |) = 20\log_{10}\left( \left| \frac{N_{1}N_{2}\dots}{D_{1}D_{2}\dots} \right| \right) \\[2ex]
	 & = 20\log N_{1} + 20\log N_{2} + \dots - 20\log D_{1} - 20 \log D_{2} \dots \\
	 & = | N_{1} |_{\text{dB}} + | N_{2} |_{\text{dB}} + \dots - | D_{1} |_{\text{dB}}- | D_{2} |_{\text{dB}}
\end{align}
$$

For example, if $A(s) = \frac{s / \omega_{c}}{s / \omega _{c} + 1} \times (1 + R_{f} / R_{i})$ we would have:
$$
| A |_{\text{dB}} = \left| \frac{s_{\omega_{c}}}{s_{\omega_{c}}+1} \right| + | A_{2} |_{\text{dB}}
$$
We can decompose the high-pass filter example as:

![[Bode Magnitude Plots.png|708]]


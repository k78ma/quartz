---
title: Two-Phase Mixture Quality
tags:
  - mte309
date: 2024-05-24
aliases:
  - two-phase mixture quality
  - dryness fraction
  - mass-average
---
Quality is a thermodynamic property that defines the [[Thermodynamic State|state]] of a two-phase mixture. It's also called a dryness fraction.
$$
\text{Quality}=x=\frac{m_{\text{vapor}}}{m_{\text{total}}}=\frac{m_{\text{vapor}}}{m_{\text{liquid}}+m_{\text{vapor}}}=\frac{m_{g}}{m_{f}+m_{g}}
$$
- Saturated liquid has $x=0$
- Saturated vapor has $x=1$

We can apply the "lever rule"to calculate mass-average properties at saturated states (at $f$ and $g$).
$$
\begin{align}
v & =v_{f}+x(v_{g}-v_{f}) \\
	 & =v_{f}+xv_{fg}
\end{align}
$$
- The $f$ point corresponds to the saturated liquid state. 1. At this point, the substance is entirely in the liquid phase but is about to start vaporizing. This is also known as the "boiling point" or "liquid saturation point."
- The $g$ usually corresponds to the saturated vapor state. At this point, the substance is entirely in the vapor phase but is about to start condensing. This is also known as the "dew point" or "vapor saturation point."

**Mass-average:** Overall properties based on the amount $x$ of vapor and $1-x$ of liquid present.

![[Two-Phase Mixture Quality.png]]
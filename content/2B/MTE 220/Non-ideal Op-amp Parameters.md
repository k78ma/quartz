---
title: Non-ideal Op-amp Parameters
tags:
  - mte220
date: 2023-10-24
---
So far we've been operating using some ideal [[Op-amp Assumptions]]. Things can be different in real life.
### Open-loop Differential Gain
This is called $A_{o}$ or $A_{\text{diff}}$. It's defined as:
$$
A_{\text{diff}} = \frac{V_{o}}{V_{in}} = \frac{V_{o}}{V_{+} - V_{-}} \approx 100\text{K} - 1\text{M} \left[ \frac{V}{V} \right]
$$
![[Non-ideal Op-amp Parameters.png|284]]

### Common Mode Gain
If we apply a voltage that is common to both terminals, we actually get some output, such that $V_{o}$ is a function of $V_{CM}$. ("CM" means "common mode", as in common to both inputs).

In an ideal scenario, adding a common voltage to the two nodes shouldn't make a difference. However, there is always going to be a slight difference. If I add some voltage to one side and there is this slight difference, it will seem like I just applied a positive difference to it even though I didn't. The reason is that transistors are highly reactive.

Governed by:
$$
A_{CM} = \frac{V_{o}}{V_{CM}}
$$
This value tends to be many orders of magnitude smaller than $A_{\text{diff}}$.

![[Non-ideal Op-amp Parameters-1.png|323]]

#### Common Mode Rejection Ratio
We can quantify the effect of common-mode gain by using a CMRR. In general terms, a rejection ratio is:
$$
\text{"Rejection Ratio"} = \frac{\text{Gain we want}}{\text{Gain we don't want}}
$$
For CMRR, this is:
$$
\text{CMRR} = \frac{| A_{\text{diff}} |}{| A_{CM} |} \; [\text{dB}]
$$
This is usually in units of decibels.

### DC Offset
If we apply $V_{in} = V_{+} - V_{-} = 0\text{V}$, you do not get $V_{o} = 0\text{V}$ due to manufacturing randomness.

![[Non-ideal Op-amp Parameters-2.png|271]]

We use the concept of $V_{\text{OS}}$, defined as:
$$
\begin{align}
V_{\text{OS}}  & = \text{Input-referred offset voltage} \\
	 & = \text{What } V_{in} \text{ is required on average to cancel the offset error}
\end{align}
$$

### Slew Rate
Slew rate refers to how fast an output can change in response to a step input $[\text{V} / \mu s]$? Did this in [[Lab 1]].

![[Non-ideal Op-amp Parameters-3.png|318]]

### Gain Bandwidth Product
This refers to a tradeoff gain to achieve higher frequencies, such that:
$$
\text{GBWP} = A_{o}f_{o} = A_{1}f_{1}
$$
![[Non-ideal Op-amp Parameters-4.png|324]]

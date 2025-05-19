---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
A sudden expansion of flow in a pipe is a unique case where a theoretical result for energy result is available.

In a sudden expansion, fluid flows from a smaller cross-sectional area $A_{1}$ to a larger one $A_{2}$. This expansion creates flow separation and turbulent mixing, leading to significant energy loss.

![[Sudden Expansion Analysis-20250519205115879.png]]

![[Sudden Expansion Analysis-20250519205127189.png]]

The analysis of a sudden expansion is based on three fundamental conservation principles:
- **Mass conservation:**
$$
A_{1}V_{1}=A_{3}V_{3}
$$
- **Momentum conservation:**
$$
p_2 A_2 - p_3 A_3 = \rho A_3 V_3 (V_3 - V_1)
$$
- **Energy conservation:**
$$
\frac{p_2}{\gamma} + \frac{V_1^2}{2g} = \frac{p_3}{\gamma} + \frac{V_3^2}{2g} + h_L
$$

From the momentum conservation expression, we can find the pressure difference as:
$$
p_{2} = p_{3}+\rho V_{3}(V_{3} - V_{1})
$$
This indicates that the pressure after expansion ($p_3$) is lower due to the velocity difference created as fluid decelerates. The pressure recovery is incomplete because of energy dissipation through turbulence.

The head loss during a sudden expansion is derived from the energy conservation equation:
$$
h_{L} = \frac{(V_{3}-V_{1})^{2}}{2g} = \frac{V_{1}^{2}\left( 1-\frac{V_{3}}{V_{1}} \right)^{2}}{2g}
$$
or, alternatively we can write
$$
h_L^{\text{Minor}} = K_L \frac{V_1^2}{2g}
$$
The loss coefficient for a sudden expansion is expressed purely in terms of velocity and area ratios:
$$
K_L = \left(1 - \frac{V_3}{V_1}\right)^{2} = \left(1 - \frac{A_1}{A_2}\right)^2
$$

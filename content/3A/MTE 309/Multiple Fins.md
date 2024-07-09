---
title: Multiple Fins
tags:
  - mte309
date: 2024-07-08
aliases:
  - multiple fins
---
Continuing the idea of [[Fin Effectiveness|fin effectiveness]], we can define the **overall effectiveness** for a finned surface as the ratio of the total heat transfer from the finned surface to the heat transfer from the same surface if there were no fins
$$
\begin{align}
\epsilon_{\text{fin, overall}} & =\frac{\dot{Q}_{\text{total, fin}}}{\dot{Q}_{\text{total, no fin}}}\\[2ex] 
 & =\frac{h(A_{\text{unfin}}+\eta_{\text{fin}}nA_{\text{fin}})(T_{b}-T_{\infty})}{hA_{\text{no fin}}(T_{b}-T_{\infty})}\\[2ex] 
 & =\frac{A_{\text{unfin}}+\eta_{\text{fin}}nA_{\text{fin}}}{A_{\text{no fin}}}\\[2ex] 
	 & =\frac{A_{\text{unfin}}+\epsilon_{\text{fin}}nA_{c}}{A_{\text{no fins}}}
\end{align}
$$
where:
- $n$ is the number of fins
- $A_{\text{no fin}}$ is the area of the surface when there are no fins
- $A_{\text{fin}}$ is the total surface area of all the fins on the surface
- $A_{\text{unfin}}$ is the area of the unfinned portion of the surface.

Note that the overall fin effectiveness depends on the fin density (number of fins per unit length) as well as the effectiveness of the individual fins. The overall effectiveness is a better measure of the performance of a finned surface than the effectiveness of the individual fins.

![[Multiple Fins.png|340]]

For example, in the case above, we would have:
$$
\begin{align}
A_{\text{no fins}} & =w \times H \\
A_{\text{unfin}} & =w\times H-3(t\times w) \\
A_{c} & =t\times w \\
n & =3
\end{align}
$$
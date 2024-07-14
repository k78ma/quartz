---
title: Fin Efficiency
tags:
  - mte309
date: 2024-07-08
aliases:
  - fin efficiency
---
Let us consider a [[Finned Surfaces|fin]] of constant cross-sectional area $A_{c} = A_{b}$ and length $L$ that is attached to the surface with perfect contact. Heat is transferred from the surface to the fin by conduction and from the fin to the surrounding medium by convection with the same heat transfer coefficient $h$. The temperature of the fin is $T_{b}$ at the fin base and gradually decreases toward the fin tip. 

In the ideal case of zero thermal resistance or infinite thermal conductivity ($k\to \infty$), the temperature of the fin is uniform, at the base value of $T_{b}$. In this case, the heat transfer from the fin is maximum, and can be expressed as:
$$
\dot{Q}_{\text{fin, max}}=hA_{\text{fin}}(T_{b}-T_\infty)
$$
In reality, however, the temperature of the fin drops along the fin, and thus the heat transfer from the fin is less because of the decreasing temperature difference $T(x) −T_{\infty}$ toward the fin tip.

Thus, we want to know: *How well does the fin perform compared to ideal?*  The effect of decrease in temperature on heat transfer is quantified by fin efficiency, given by:
$$
\begin{align}
\eta_{\text{fin}} & = \frac{\text{Actual heat transfer rate from fin}}{\text{Ideal heat transfer rate from the fin}}\\[2ex]
 & =\frac{\dot{Q}_{\text{fin}}}{\dot{Q}_{\text{fin, max}}}=\frac{\dot{Q}_{\text{fin}}}{hA_{F}(T_{b}-T_{\infty})}
\end{align}
$$
where $A_{F}$ is the "wetted area" (total fin area). The expression for $\dot{Q}_{\text{fin}}$ depends on what assumptions we make about the fin, such as very long fin, adiabatic, etc.

## Example

![[MTE 309 L24 Example.pdf]]
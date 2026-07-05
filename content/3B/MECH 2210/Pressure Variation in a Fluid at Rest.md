---
title: Pressure Variation in a Fluid at Rest
tags:
  - mech2210
date: 2025-02-24
aliases:
  - pressure variation in a fluid at rest
---
Recall that for a fluid with no shearing stresses, we have $-\nabla p-\gamma \mathbf{k}=\rho\mathbf{a}$. For a fluid at rest $\mathbf{a}=0$, we have
$$
\nabla p+\gamma \mathbf{k}=0
$$
or in component form:
$$
\frac{ \partial p }{ \partial x } =0 \quad \quad \frac{ \partial p }{ \partial y } =0 \quad \quad  \frac{ \partial p }{ \partial z } =-\gamma
$$
These equations show that the pressure does not depend on $x$ or $y$, such that $p=p(z)$. We can then write the above as an ordinary differential equation:
$$
\frac{dp}{dz}=-\gamma
$$
which gives
$$
\begin{align}
\int_{1}^{2} \, dp  & =-\int_{1}^{2} \gamma \, dz  \\[2ex] 
\end{align}
$$
where $\gamma =\rho g$.

In incompressible fluids, $\rho$ is constant so the specific weight $\gamma$ is also constant. We can then integrate to get:
$$
\int_{p_{1}}^{p_{2}}  \, dp =-\gamma \int_{z_{1}}^{z_{2}}  \, dz 
$$
to yield
$$
\begin{align}
p_{2}-p_{1}  & =-\gamma(z_{2}-z_{1}) \\
     & = \gamma(z_{1}-z_{2}) \\
     & =-\gamma h
\end{align}
$$
where $h$ is the distance $z_{2}-z_{1}$.

![[Pressure Variation in a Fluid at Rest.png|422]]

We can also write:
$$
\begin{align}
p_{1} & =p_{2}+\gamma h \\[2ex] 
h & =\frac{p_{1}-p_{2}}{\gamma}
\end{align}
$$
In this case $h$ is called the **pressure head** and is interpreted as the height of the as the height of a column of fluid of specific weight required to give a pressure difference $p_{1}-p_{2}$.

When we work with fluids, there is often a free surface. The reference pressure $p_{0}$ would correspond to the pressure acting on the free surface, which would frequently be atmospheric pressure, and thus if we let $p_{2}=p_{0}$, the pressure at any depth $h$ below the free surface is given by the equation
$$
p=\gamma h+p_{0}
$$
and
$$
\Delta p=\gamma h
$$

## Example

> [!question] Example Question
> Determine the change in hydrostatic pressure in a giraffe’s head as it lowers its head from eating leaves 6 m above the ground to getting a drink of water at ground level (this pressure change in blood needs to be provided by the heart). Compare this pressure change with the normal 120 mm of mercury pressure in a human’s heart (assume the SG of blood is 1).

If the SG of blood is 1, it has the same density as water of $\rho=1000 \text{ kg}/\text{m}^{3}$. Then, the specific weight would be $\gamma=\rho g=1000\cdot 9.81 \text{ m/s}^{2}=9.8 \text{ kN/m}^{3}$.

We can then find:
$$
\begin{align}
\Delta p & =\gamma h \\
 & =9.8\left( \frac{\text{kN}}{\text{m}^{3}} \right)\cdot 6\text{ m} \\[2ex]
 & = 58.8 \left( \frac{\text{kN}}{\text{m}^{2}} \right) \\[2ex]
     & =58.8 \text{ kPa}
\end{align}
$$
and then
$$
\begin{align}
58.8 \text{ kPa} & =\gamma_{\text{Hg}}h_{\text{Hg}}=133 \left( \frac{\text{kN}}{\text{m}^{3}} \right)h_{\text{Hg}} \\
h_{Hg} & =442 \text{ mm}
\end{align}
$$
Therefore, a giraffe’s heart pressure is $442 / 120 =3.7$ times higher than human.



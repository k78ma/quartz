---
title: Air Piston Heat Transfer
tags: 
date: 2024-05-15
aliases:
  - air piston heat transfer
---
![[Air Piston Heat Transfer.png]]

Draw the system:

![[Air Piston Heat Transfer-2.png|176]]

Assumptions:
- Stationary system ($\Delta \text{KE} = \Delta \text{PE}=0$)
- Entire assembly is perfectly insulated (adiabatic) 
- Process is isobaric – pressure remains constant throughout
- Process is slow

The internal energy of the air is:
$$
\begin{align}
\Delta U_{\text{air}} & =Q-W \\
\end{align}
$$
This can be re-written to find heat:
$$
\begin{align}
Q & = \Delta U_{\text{air}} + W \\
	 & = (\Delta u_{\text{air}} \times m_{\text{air}}) + W
\end{align}
$$

The work done by a system when it expands or contracts against an external pressure is given by the integral of the pressure over the change in volume:
$$
\begin{align}
W  & = \int_{V_{1}}^{V_{2}} P \, dV \\[2ex]
\end{align}
$$
The piston-cylinder assembly implies that the system is isobaric – pressure inside the cylinder is balanced by the atmospheric pressure and the weight of the piston. Since the pressure is constant in this case, we can take out $P$ from the integral:
$$
\begin{align}
W & =P\int_{V_{1}}^{V_{2}}  \, dV  \\[2ex]
	 & =P(V_{2}-V_{1})
\end{align}
$$
$V_{2}-V_{1}$ is just the volume change of the system, which the question gives to us as $0.045 \text{ m}^{3}$.

We can find $P$ by considering the forces acting in the $y$-direction:
$$
\begin{align}
PA - P_{atm}A - m_{p}g  & = 0 \\[2ex]
\end{align}
$$
where:
- $PA$ is the upward force exerted by the pressure inside the cylinder
- $P_{\text{atm}}A$ is the downward force exerted by the atmospheric pressure in the surroundings
	- In both of the above, $A$ is the area of the cylinder. Recall that $P = F/A$ so $F = PA$.
- $m_{p}g$ is the gravitational force due to the weight of the piston.

![[Air Piston Heat Transfer-1.png|296]]

We can re-arrange the above to solve for $P$:
$$
\begin{align}
P  & = P_{\text{atm}}+\frac{m_{p}g}{A} \\[2ex]
	 & =104.9 \text{ [kPa]}
\end{align}
$$
Then, we can plug this back into our work equation to get
$$
\begin{align}
W  & = P(V_{1}-V_{2})\\[2ex] 
 & =104.9 \text{ [kPa]} \cdot  0.045 \;[\text{m}^{3}]\\[2ex] 
	 & =+4.7205 \; [\text{kJ}]
\end{align}
$$
Note that this is positive by convention because the system is doing work on the surroundings.

Finally, plugging back into the internal energy equation from before to find heat transfer:
$$
\begin{align}
Q& = (\Delta u_{air} \times m_{air}) + W  \\[2ex]
	 & =\left( 42.2\left[ \frac{\text{kJ}}{\text{kg}} \right] \times 0.3\; [\text{kg}] \right)+(+4.7205\; [\text{kJ}]) \\[2ex]
	 & = \boxed{17.4 \;[\text{kJ}]}
\end{align}
$$


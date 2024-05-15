---
title: Air Piston Heat Transfer
tags: 
date: 2024-05-15
aliases:
  - air piston heat transfer
---
![[Air Piston Heat Transfer.png]]

1. Draw the system
2. Assume:
	- Stationary system ($\Delta \text{KE} = \Delta \text{PE}=0$)
	- Entire assembly is perfectly insulated (adiabatic) 
	- Process is isobaric – pressure remains constant throughout
	- Process is slow

Then, the internal energy of the air is:
$$
\begin{align}
\Delta U_{\text{air}} & =Q-W \\
Q & = \Delta U_{\text{air}} + W \\
	 & = (\Delta u_{air} \times m_{air}) + W \\
\end{align}
$$

The work can be found by considering the volume:
$$
\begin{align}
W  & = P\int_{v_{1}}^{v_{2}}  \, dV \\[2ex]
	 & = P(v_{2}-v_{1})
\end{align}
$$
We can find $P$ by considering the forces acting in the $y$-direction:
$$
\begin{align}
PA - P_{atm}A - m_{p}g  & = 0 \\[2ex]
P  & = P_{\text{atm}}+\frac{m_{p}g}{A} \\[2ex]
	 & =104.9 [\text{kPA}]
\end{align}
$$
Then, we can plug this back into get
$$
W = P(v_{1}-v_{2})=104.9(0.045)
$$

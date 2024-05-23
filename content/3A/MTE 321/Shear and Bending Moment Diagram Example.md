---
title: Shear and Bending Moment Diagram Example
tags: 
date: 2024-05-22
aliases:
  - shear and bending moment diagram example
---
## Basics

There are three types of loadings that can be applied to a beam:

![[Shear and Bending Moment Diagram Example.png|556]]

Different types of supports:

![[Shear and Bending Moment Diagram Example-3.png|568]]

- Pinned supports don't allow vertical/horizontal displacement but allow rotation
- Roller support don't allow vertical displacement, but allow horizontal displacement and rotation
- Fixed supports don't allow any displacement or rotation

The corresponding reaction forces are also shown.

---
## Steps

### Free Body Diagram
Draw a free body diagram, showing all the applied and reaction loads acting on the beam.

![[Shear and Bending Moment Diagram Example-5.png]]

### Reaction Forces and Moments at Supports
If the number of unknowns and equilibrium equations are equal, our problem is statically determinate.
$$
\begin{align}
\sum F_{y}=0 \quad  & \longrightarrow \quad R_{A}+R_{B}=15+6=21 \\[2ex] 
\sum F_{x}=0 \quad  & \longrightarrow \quad H_{A}=0 \\[2ex] 
\sum M_{B}=0  \quad  & \longrightarrow \quad R_{A}\cdot 6+15\cdot 4+6\cdot 2=0 \\[2ex]
 & \therefore R_{A}=12 \text{ kN}, R_{B}=9 \text{ kN}, H_{A}=0 \text{ kN}
\end{align}
$$
### Shear and Bending Moment Diagrams
Starting from the left hand side of the beam, we consider a location between the reaction force $R_{A}= 12 \text{ kN}$ reaction force and the first $15 \text{ kN}$ applied force.
- To maintain equilibrium, the shear force must be equal to the reaction force, so it will be $12 \text{ kN}$. This will be constant until the next applied force.
- The bending moment will be equal to the reaction force, multiplied by the distance $x$ to the reaction force. This means that the moment will be be a line expressed by $12x$. 
	- The moment here is about the point of our cut. Since the moment caused by the $12 \text{ kN}$ reaction force causes the force to sag (U shape), it's positive. 

![[Shear and Bending Moment Diagram Example-6.png]]

Next, we move to the section past the $15 \text{ kN}$ applied force. Drawing a free body diagram, we see that:
- The previous applied forces add up to a total force of $3 \text{ kN}$ (down is positive). Thus, the reaction force will be $-3 \text{ kN}$.
- The moment now results from the $15 \text{ kN}$ force as well as the $12 \text{ kN}$ force.
	- We have our previous moment of $12(x+2)$
	- The $15 \text{ kN}$ force causes the beam to hog, so it is negative, $-15x$

![[Shear and Bending Moment Diagram Example-7.png]]

This process is repeated until the entire beam is covered.

![[Shear and Bending Moment Diagram Example-8.png]]

## Moment and Shear Relations
The [[Shear Force and Bending Moment]] relationships can be used to check the curves.

![[Shear and Bending Moment Diagram Example-9.png]]

![[Shear and Bending Moment Diagram Example-10.png]]

- Distributed forces cause a linear change in shear force. For example, the above green distributed force would be $34-8x$.
- $M_{2}-M_{1}=\int_{x_{1}}^{x_{2}} V \, dx$ means that the area under the shear force is the amount of change in the moment. In the example above, the area under the curve is $72.3-12.3=60$, so the moment increases by $60$ in that region.
---
title: General Planar Motion
tags:
  - syde351
date: 2024-06-11
aliases:
  - general planar motion
---
General planar motion refers to translation restricted to a plane, and rotation restricted to the axis perpendicular to this plane. A rigid body moves in a plane passing through its center of mass and symmetrical with respect to the plane. 

![[General Planar Motion.png|220]]

## Force and Moment Equations
We can use two force equations to describe translational motion:
$$
\begin{align}
f_{x} & =ma_{G_{x}} \\
f_{y} & =ma_{G_{y}}
\end{align}
$$
where $f_{x}$ and $f_{y}$ are the net forces acting on the mass $m$ in the $x$ and $y$ directions, respectively. The mass center is located at point $G$. Finally, $a_{G_{x}}$ and $a_{G_{y}}$ are the accelerations of the mass center in the $x$ and $y$ directions relative to the fixed $x$-$y$ plane.

When the object is constrained to rotate around an axis $O$, we have
$$
I_{O}\alpha=M_{O}
$$
where $I_{O}$ is the mass moment of inertia of the body about point $O$, and $M_{O}$ is the sum of the moments applied to the body about the point $O$.

The equation below applies whether or not the axis of motion is constrained:
$$
M_{G}=I_{G}\alpha
$$
where $M_{G}$ is the net moment acting on the body about an axis that passes through the **mass center** $G$ and is perpendicular to the plane of the body. $I_{G}$ and $\alpha$ are the [[Mass Moment of Inertia|mass moment of inertia]] and angular acceleration of the body about this axis.

For an accelerating point $P$, not fixed to the body, we have:
$$
\begin{align}
M_{P}=M_{G}+ma_{G}d
\end{align}
$$
where $d$ is the distance between $a_{G}$ and a parallel line through $P$. (See diagram above!)
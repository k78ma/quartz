---
title: Position and Displacement
tags:
  - mte321
date: 2024-07-09
aliases:
  - position and displacement
---
The position of a point in the plane can be defined by the use of a position vector. The choice of reference axes is arbitrary and is selected to suit the observer. 

![[Position and Displacement.png]]

A two-dimensional vector has two attributes, which can be expressed in either polar or cartesian coordinates. The polar form provides the magnitude and the angle of the vector. The cartesian form provides the $X$ and $Y$ components of the vector. Each form is directly convertible into the other by the Pythagorean theorem:
$$
R_{A}=\sqrt{ R_{X}^{2}+R_{Y}^{2} }
$$
**Coordinate transformation**: If the system’s origins are coincident as shown in Figure 4-1b and the required transformation is a rotation, we can transform between the coordinate systems with:
$$
\begin{align}
R_{X}=R_{x}\cos \delta-R_{y}\sin\delta \\
R_{Y}=R_{x}\sin\delta+R_{y}\cos\delta
\end{align}
$$
## Displacement
Displacement is the straight-line distance between the initial and final position of a point that has moved in the reference frame. It is not the same as path length.
$$
R_{BA}=R_{B}-R_{A}
$$
![[Position and Displacement-1.png]]

## Translation, Rotation, Complex Motion
In **translation**, all points on the body have the same displacement. As a result, the link retains its angular orientation.
- Note that the translation need not be along a straight path. The curved lines from $A$ to $A’$ and $B$ to $B’$ are the curvilinear translation path of the link. There is no rotation of the link if these paths are parallel. 
- If the path happens to be straight, then it will be the special case of rectilinear translation, and the path and the displacement will be the same.

In **rotation**, different points in the body undergo different displacements and thus there is a displacement difference between any two points chosen. The link now changes its angular orientation in the reference frame, and all points have different displacements.

In **complex motion**, 

![[Position and Displacement-2.png]]
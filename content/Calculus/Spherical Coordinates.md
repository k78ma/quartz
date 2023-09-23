---
title: "Spherical Coordinates"
tag:
date: 2023-08-10
draft:
---

3D coordinate system: alternative to [[Cylindrical Coordinates|Cylindrical Coordinates]] and [[3D Cartesian Coordinates|3D Cartesian Coordinates]].

![[spherical coordinates.png|300]]

Spherical coordinates use:

- $\rho$ : Distance from origin to point
	- $\rho \geq 0$

- $\theta$ : Angle between the positive $x$-axis and the line above denoted by $r$
	- No requirements
	- $\theta$ and $r$ are both the same as they are in polar/spherical coordinates

 - $\phi$ : Angle between the positive $z$-axis and the line from the origin to the point
	 - $0 \leq \phi \leq \pi$

---
### Conversion from Spherical to Cylindrical

Looking at the triangle above from the front:
![[spherical front.png||325]]

Thus we have: 
$$
\begin{align} \\
r &= \rho \sin \phi \\
\theta &= \theta \\
z &= \rho \cos \phi 
\end{align}
$$
By the Pythagorean theorem we also have $\rho^{2}=r^{2}+z^{2}$.

---
### Conversion from Spherical to Cartesian

Recall:
![[Cylindrical Coordinates#Conversion from cylindrical to Cartesian|Conversion from Cylindrical Coordinates to Cartesian]]

Thus, we have:
$$
\begin{align}
x &= \rho \sin \phi \cos \theta \\
y &= \rho \sin \phi \sin \theta \\
z &= z
\end{align}
$$
Since we have $r^{2}=x^{2} +y^{2}$, we also have: 
$$
\rho^{2} = x^{2} + y^{2} +z^{2}
$$

---
### Single-variable functions and what they represent

- $\rho = a$ — sphere of radius $a$ centered at the origin
- $\phi = \alpha$ — cone that makes angle $\alpha$ with the positive $z$-axis
- $\theta = \beta$ — vertical plane that makes an angle of $\beta$ with the positive $x$-axis
---
title: Rigid-body Rotational Motion
tags:
  - syde351
date: 2024-06-10
aliases:
  - rigid-body rotational motion
---
When an object can translate in two dimensions and can rotate only about an axis that is perpendicular to the plane, Newton’s second law can be used to show that:
$$
I_{O}\dot{\omega}=M_{O}
$$
where:
- $\omega$ is the angular velocity of the mass about an axis through point $O$ fixed in an inertial reference frame of reference
- $I_{O}$ is the [[Mass Moment of Inertia|mass moment of inertia]] of the body about point $O$. Torque $T$ is sometimes used instead of $M$.
- $M_{O}$ is the sum of moments applied to the body about point $O$

## Energy of Rotational Motion
The work done by a moment $M$ causing a rotation through an angle $\theta$ is
$$
W=\int_{0}^{\theta} M \, d\theta 
$$
Multiplying both sides of $I\dot{\omega}=M$ by $\omega \;dt$ gives
$$
I\omega \;d\omega=M \;d\theta
$$
because $\omega=d\theta / dt$.

Integrating both sides gives
$$
\int_{0}^{\omega} I\omega \, d\omega=\frac{1}{2}I\omega^{2}=\int_{0}^{\theta} M \, d\theta  
$$
Thus, the work done by the moment $M$ produces kinetic energy of rotation:
$$
\text{KE}=\frac{1}{2}I\omega^{2}
$$

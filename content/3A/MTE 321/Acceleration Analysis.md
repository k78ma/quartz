---
title: Acceleration Analysis
tags:
  - mte321
date: 2024-08-02
aliases:
  - acceleration analysis
---
Linear acceleration:
$$
A=\frac{dV}{dt}
$$
Angular acceleration:
$$
\alpha=\frac{d\omega}{dt}
$$
## Complex Number Representation
Recall that position is given by:
$$
R_{PA}=pe^{j\theta}
$$
And we have:
$$
V_{PA}=\frac{dR_{PA}}{dt}=p\,je^{j\theta} \frac{d\theta}{dt}=p\omega je^{j\theta}
$$
Thus, for acceleration we have:
$$
\begin{align}
A_{PA} & =\frac{dV_{PA}}{dt} \\[2ex]
	 & = \frac{d(p\,\omega je^{j\theta})}{dt} \\[2ex] 
	 & =j\,p\left( e^{j\theta} \frac{d\omega}{dt}+\omega \,je^{j\theta} \frac{d\theta}{dt} \right) \\[2ex]
	 & =p\alpha je^{j\theta}-p\omega^{2}e^{j\theta} \\[2ex] 
	 & =A_{PA}^{t}+A_{PA}^{n}
\end{align}
$$
Thus there are two terms in the expression for acceleration, the tangential component involving $\alpha$, and the normal component involving $\omega^{2}$.

We can also write this in Cartesian form to give us real and imaginary (or $x$ and $y$) components of the acceleration vector:
$$
A_{PA}=p\alpha(-\sin \theta+j\cos \theta)-p\omega^{2}(\cos \theta+j\sin \theta)
$$

![[Acceleration Analysis.png]]

## Types of Acceleration
The acceleration $A_{PA}$ above is an **absolute acceleration** since it is referenced to $A$, which is the origin of the global coordinate axes in that system.

An **acceleration difference** is acceleration with respect to a point on the same body that is not fixed.

![[Acceleration Analysis-1.png]]

A **relative acceleration** is acceleration with respect to a point on a *different* body that is not fixed.

![[Acceleration Analysis-2.png]]

---
## Vector Loop Acceleration Analysis of Fourbar Linkage

![[Acceleration Analysis-3.png]]

**Step 1:** Check the reference frame/coordinate system. $R_{1}$ should be fixed with angle of zero with respect to the $x$-axis. If this is not the case, we need to set up a local coordinate system that meets this convention.

**Step 2:** Check that we have all the angles and angular velocities.
- If missing $\theta_{3}, \theta_{4}$, we need to do a [[Vector Loop Linkage Analysis|position analysis]] to find these angles (in both open and crossed configurations).
- If missing $\omega_{3}, \omega_{4}$, we need to do a [[Velocity Analysis|velocity analysis]] to find these angular velocities.

**Step 3:** Calculate $A$, $B$, $C$:
$$
\begin{align}
A & =c\sin \theta_{4} \\[2ex]
B & =b\sin \theta_{3} \\[2ex] 
C & =a\alpha_{2}\sin \theta_{2}+a\omega_{2}^{2}\cos \theta_{2}+b\omega_{3}^{2}\cos \theta_{3}-c\omega_{4}^{2}\cos \theta_{4}\\[2ex] 
D & =c \cos \theta_{4} \\[2ex] 
E & =b\cos \theta_{3} \\[2ex] 
F & =a\alpha_{2}\cos \theta_{2}-a\omega_{2}^{2}\sin \theta_{2}-b\omega_{3}^{2}\sin \theta_{3}+c\omega_{4}^{2}\sin \theta_{4}
\end{align}
$$

**Step 4:** Calculate angular accelerations:
$$
\begin{align}
\alpha_{3} & =\frac{CD-AF}{AE-BD} \\[2ex] 
\alpha_{4} & =\frac{CE-BF}{AE-BD}
\end{align}
$$

**Step 5:** Solve for the linear accelerations $A_{A}, A_{BA}, A_{B}$:
$$
\begin{align}
A_{A} & =a\alpha_{2}(-\sin \theta_{2}+j\cos \theta_{2})-a\omega_{2}^{2}(\cos \theta_{2}+j\sin \theta_{2}) \\
	 & =-a\alpha_{2}\sin \theta-a\omega_{2}^{2}\cos \theta+j(a\alpha_{2}\cos \theta-a\omega_{2}^{2}\sin \theta_{2})\\[2ex] 
A_{BA} & = b\alpha_{3}(-\sin \theta_{3}+j\cos \theta_{3})-b\omega_{3}^{2}(\cos \theta_{3}+j\sin \theta_{3})  \\
	 & =-b\alpha_{3}\sin \theta_{3}-b\omega_{3}^{2}\cos \theta_{3}+j(b\alpha_{3}\cos \theta_{3}-b\omega_{3}^{2}\sin \theta_{3}) \\[2ex] 
A_{B} & = c \alpha_{4}(-\sin \theta_{4}+j\cos \theta_{4})-c\omega_{4}^{2}(\cos \theta_{4}+j\sin \theta_{4}) \\
 & =-c \alpha_{4}\sin \theta_{4}-c\omega_{4}^{2}\cos \theta_{4}+j(\mathcal{pha_{4}\cos \theta_{4}-c\omega_{4}^{2}\sin \theta_{4}})
\end{align}
$$
where:
- $A_{A}$ is the absolute acceleration of $A$ of link 2 with around $O_{2}$
- $A_{BA}$ is the acceleration difference of $B$ with respect to $A$
- $A_{B}$ is the absolute acceleration of $B$ in link 4 with rotational motion about $O_{4}$

If we need to solve for both the open and crossed positions, we will need to do steps 3 to 5 twice.
## Vector Loop Acceleration Analysis of Crank-Slider
Crank is input, slider is output; similar approach to the fourbar linkage above. we use a standard representation of crank-slider for vector loop method with clockwise angular velocity of input link.

![[Acceleration Analysis-4.png]]

**Step 1:** Check the reference frame/coordinate system. $R_{1}$ should be fixed with angle of zero with respect to the $x$-axis. If this is not the case, we need to set up a local coordinate system that meets this convention. $R_{4}$ should then be parallel to the $y$-axis, such that $\theta_{4}=90\degree$.

**Step 2:** Check to see if we have all the angle and slider positions we need.
- If we are missing $\theta_{3}$ and $d$, we will need to do a position analysis to find these parameters.
- If we are missing $\omega_{3}$ and $\dot{d}$, we will need to do a velocity analysis to find them.

**Step 3:** Calculate your angular acceleration, $\alpha_{3}$, and linear acceleration of slider block.
$$
\begin{align}
\alpha_{3} & =\frac{a\alpha_{2}\cos \theta_{2}-a\omega_{2}^{2}\sin \theta_{2}+b\omega_{3}^{2}\sin \theta_{3}}{b\cos \theta_{3}} \\[2ex]
\ddot{d} & =-a\alpha_{2}\sin \theta_{2}-\alpha \omega_{2}^{2} \cos \theta_{2}+b\alpha_{3}\sin \theta_{3}+b\omega_{3}^{2}\cos \theta_{3}
\end{align}
$$

**Step 4:** Solve for linear accelerations $A_{A}, A_{BA}$:
$$
\begin{align}
A_{A} & =a\alpha_{2}(-\sin \theta_{2}+j\cos \theta_{2})-a\omega_{2}^{2}(\cos \theta_{2}+j\sin \theta_{2}) \\
	 & =-a\alpha_{2}\sin \theta_{2}-a\omega_{2}^{2}\cos \theta_{2}+j(a\alpha_{2}\cos \theta_{2}-a\omega_{2}^{2}\sin \theta_{2}) \\[2ex] 
A_{BA} & =b\alpha_{3}(-\sin \theta_{3}+j\cos \theta_{3})-b\omega_{3}^{2}(\cos \theta_{3}+j\sin \theta_{3}) \\
	 & =-b\alpha_{3}\sin \theta a_{3}-b\omega_{3}^{2}\cos \theta_{3}+j(b\alpha_{3}\cos \theta_{3}-b\omega_{3}^{2}\sin \theta_{3})
\end{align}
$$
where:
- $A_{A}$ is the absolute acceleration of $A$ on the crank about fixed point $O_{2}$
- $A_{BA}$ is the acceleration difference of the slider with respect to moving point $A$

The acceleration of the slider is along the path of motion of the slider. The direction of its acceleration depends on if its accelerating or decelerating.

If we need to solve for both the open and crossed positions, we will need to do steps 3 and 4 twice.
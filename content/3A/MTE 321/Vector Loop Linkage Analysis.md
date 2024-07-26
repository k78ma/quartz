---
title: Vector Loop Linkage Analysis
tags:
  - mte321
date: 2024-07-25
aliases:
  - vector loop linkage analysis
---
An alternate approach to linkage position analysis creates a vector loop (or loops) around the linkage.

The links are represented as position vectors. Figure 4-6 shows the same fourbar linkage, but the links are now drawn as position vectors that form a vector loop. This loop closes on itself, making the sum of the vectors around the loop zero. The lengths of the vectors are the link lengths, which are known. The current linkage position is defined by the input angle $\theta_{2}$ as it is a one-DOF mechanism. We want to solve for the unknown angles $\theta_{3}$ and $\theta_{4}$. 

The standard representation for the vector loop method is:
$$
\begin{align}
\mathbf{R}_{2}+\mathbf{R}_{3}-\mathbf{R}_{4}-\mathbf{R}_{1}=0 \\
\mathbf{R}_{2}+\mathbf{R}_{3}=\mathbf{R}_{1}+\mathbf{R}_{4}
\end{align}
$$

We need a convenient notation to represent the vectors. This is done with complex number notation:
$$
re^{j\theta}=r\cos \theta+jr\sin \theta
$$
This comes from the Euler identity:
$$
e^{\pm j\theta}=\cos \theta \pm j\sin \theta
$$
We can also differentiate or integrate this:
$$
\frac{d}{d\theta}(e^{j\theta})=je^{j\theta}
$$

## Fourbar Linkage

![[Graphical Position Analysis-2.png]]

We have:
$$
\begin{align}
\mathbf{R}_{2}+\mathbf{R}_{3}-\mathbf{R}_{4}-\mathbf{R}_{1} & =0  \\
ae^{j\theta_{2}}+be^{j\theta_{3}}-ce^{j\theta_{4}}-de^{j\theta_{1}} & =0
\end{align}
$$
Note that $\mathbf{R}_{1}$ is usually the vector of the ground link, which should be fixed with angle zero with respect to the $x$-axis. Therefore, $\theta_{1}=0$.

Solving this equation for $\theta_{3}$ and $\theta_{4}$, we get:
$$
\begin{align}
\theta_{3} & =2\arctan\left( \frac{-E\pm \sqrt{ E^{2}-4DF }}{2D} \right) \\[2ex] 
\theta_{4} & =2\arctan\left( \frac{-B\pm \sqrt{ B^{2}-4AC }}{2A} \right)
\end{align}
$$
- Positive gives the crossed configuration
- Negative gives the open configuration
- There are three possible outputs: real and equal, real and unequal, complex conjugate
	- Most likely to be real and unequal
	- If complex conjugate, link lengths cannot connect for chosen value of $\theta_{2}$

where
$$
\begin{align}
A & =\cos \theta_{2}-K_{1}-K_{2}\cos \theta_{2}+K_{3} \\
B & =-2\sin \theta_{2} \\
C & =K_{1}-(K_{2}+1)\cos \theta_{2}+K_{3} \\
D & =\cos \theta_{2}-K_{1}+K_{4}\cos \theta_{2}+K_{5} \\
E  & =B =-2\sin \theta_{2} \\
F & =K_{1}+(K_{4}-1)\cos \theta_{2}+K_{5}
\end{align}
$$
and
$$
\begin{align}
K_{1} & =\frac{d}{a}\\[2ex]
K_{2} & =\frac{d}{c}\\[2ex] 
K_{3} & = \frac{a^{2}-b^{2}+c^{2}+d^{2}}{2ac}\\[2ex] 
K_{4} & =\frac{d}{b}\\[2ex] 
K_{5} & =\frac{c^{2}-d^{2}-a^{2}-b^{2}}{2ab}
\end{align}
$$

## Crank-Slider

![[Vector Loop Linkage Analysis.png]]

Again, we have
$$
\begin{align}
\mathbf{R}_{2}+\mathbf{R}_{3}-\mathbf{R}_{4}-\mathbf{R}_{1} & =0  \\
ae^{j\theta_{2}}+be^{j\theta_{3}}-ce^{j\theta_{4}}-de^{j\theta_{1}} & =0
\end{align}
$$
Note that:
- $\mathbf{R}_{1}$ should have an angle of zero with respect to the $x$-axis
- $\mathbf{R}_{4}$ should be parallel to the $y$-axis

We can then calculate one possible value for $\theta_{3}$ and the corresponding slider position $d$
$$
\begin{align}
\theta_{3_{1}} & =\arcsin\left( \frac{a\sin \theta_{2}-c}{b} \right) \\[2ex]
d & =a\cos \theta_{2}-b\cos \theta_{3}
\end{align}
$$
The other set of possible values:
$$
\begin{align}
\theta_{3_{2}} & =\arcsin\left( -\frac{a\sin \theta_{2}-c}{b} \right)+\pi \text{ (or 180)}\degree \\[2ex]
d	 & = a\cos \theta_{2}-b\cos \theta_{3}
\end{align}
$$


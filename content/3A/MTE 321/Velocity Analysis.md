---
title: Velocity Analysis
tags:
  - mte321
date: 2024-07-30
aliases:
  - velocity analysis
---
Linear velocity:
$$
\vec{v}=\frac{dR}{dt}
$$
where $R$ is the position.

Angular velocity:
$$
\omega=\frac{d\theta}{dt}
$$
Types of velocity:
- Absolute velocity: Velocity with respect to a point on the same body fixed at origin of global coordinate axes system.
- Velocity difference: Velocity with respect to a point on the same body that is not fixed  

![[Velocity Analysis.png|552]]

- Relative velocity: Velocity with respect to a point on a different body that is not fixed

![[Velocity Analysis-1.png|552]]

## Complex Number Representation
Recall that position is given by:
$$
R_{PA}=pe^{j\theta}
$$
Thus, we have:
$$
V_{PA}=\frac{dR_{PA}}{dt}=p\,je^{j\theta} \frac{d\theta}{dt}=p\omega je^{j\theta}
$$
where $p$ is the scalar length of vector $R_{PA}$.

## Vector Loop Velocity Analysis of Fourbar Linkage

**Step 1:** Check the reference frame/coordinate system. $R_{1}$ should be fixed with angle of zero with respect to $x$-axis. If this is not the case, set up a local coordinate system that meets this convention.

**Step 2:** Check to see if you have all the angles you need. If we are missing $\theta_{3}$, $\theta_{4}$, we will need to do a position analysis first to find these angles.

**Step 3:** Calculate $\omega_{3}$ and $\omega_{4}$.

To do this, we use the vector-loop position equations for the fourbar pin-jointed linkage, which were derived [[Vector Loop Linkage Analysis|here]]. The linkage in Figure 6-20 on which we also show an input angular velocity $\omega_{2}$ applied to link 2. This $\omega_{2}$ can be a time-varying input velocity. 

![[Velocity Analysis-2.png]]

The vector loop equation is:
$$
R_{2}+R_{3}-R_{4}-R_{1}=0
$$
which we can substitute the complex number notation for the vectors
$$
ae^{j\theta_{2}}+be^{j\theta_{3}}-ce^{j\theta_{4}}-de^{j\theta_{1}}=0
$$
To get an expression for velocity, we can differentiate this with respect to time:
$$
\begin{align}
jae^{j\theta_{2}}\, \frac{d\theta_{2}}{dt}+jbe^{j\theta_{3}}\, \frac{d\theta_{3}}{dt}-jce^{j\theta_{4}} \frac{d\theta_{4}}{dt} & =0 \\[2ex]
ja\omega_{2}e^{j\theta_{2}}+jb\omega_{3}e^{j\theta_{3}}-jc\omega_{4}e^{j\theta_{4}} & =0
\end{align}
$$
where we take advantage of the fact that $\omega_{n}=\frac{d\theta_{n}}{dt}$. Note that the $\theta_{1}$ term has been dropped, since $d\theta_{1} / dt=0$.

The equation above is also the relative velocity or velocity difference equation:
$$
V_{A}+V_{BA}-V_{B}=0
$$
where:
$$
\begin{align}
V_{A} & =ja\omega_{2}e^{j\theta_{2}} \\[2ex] 
V_{BA} & = jb\omega_{3}e^{j\theta_{3}}  \\[2ex]
V_{B} & =jc\omega_{4}e^{j\theta_{4}}
\end{align}
$$
Solving $V_{A}+V_{BA}-V_{B}=0$ gives:
$$
\begin{align}
\omega_{3}=\frac{a\omega_{2}}{b} \frac{\sin(\theta_{4}-\theta_{2})}{\sin(\theta_{3}-\theta_{4})} \\[2ex] 
\omega_{4}=\frac{a\omega_{2}}{b} \frac{\sin(\theta_{2}-\theta_{3})}{\sin(\theta_{4}-\theta_{3})}
\end{align}
$$

**Step 4:** Solve for the linear velocities $V_{A}, V_{BA}, V_{B}$ with:
$$
\begin{align}
V_{A} &=ja\omega_{2}(\cos \theta_{2}+j\sin \theta_{2}) = a\omega_{2}(-\sin \theta_{2}+j\cos \theta_{2}) \\[2ex] 
V_{BA} & = jb\omega_{3}(\cos \theta_{3}+j\sin \theta_{3})=b\omega_{3}(-\sin \theta_{3}+j\cos \theta_{3}) \\[2ex]
V_{B} & =jc\omega_{4}(\cos \theta_{4}+j\sin \theta_{4})=c\omega_{3}(-\sin \theta_{4}+j\cos \theta_{4})
\end{align}
$$
If we need to solve for both the open and crossed positions, we will need to do steps 3 and 4 twice; once with $\theta_{3},\theta_{4}$ for the open position, and once with $\theta_{3}, \theta_{4}$ for the closed position.

## Vector Loop Velocity Analysis of Crank-Slider
We can follow a similar approach for a crank-slider system. Crank is input, slider is output.

![[Velocity Analysis-3.png]]

**Step 1:** Check the reference frame/coordinate system.

**Step 2:** If we are missing $\theta_{3}$ and $d$ you will need to do a position analysis first to find these parameters. 

**Step 3:** Calculate angular velocity ($\omega_{3}$) and linear velocity of slider block $\dot{d}=\frac{d}{dt}(d)$. These can be derived similar to above by writing the vector loop equation and then differentiating with respect to tiem.

We have:
$$
\begin{align}
\omega_{3} & =\frac{d\theta_{3}}{dt}=\frac{a}{b} \frac{\cos \theta_{2}}{\cos \theta_{3}}\omega_{2} \\[2ex] 
\dot{d} & =-a\omega_{2}\sin \theta_{2}+b\omega_{3}\sin \theta_{3}
\end{align}
$$

**Step 4:** Solve for the linear velocities, $V_{A}, V_{AB}, V_{BA}$:
$$
\begin{align}
V_{A} & =a\omega_{2}(-\sin \theta_{2}+j\cos \theta_{2}) \\[2ex] 
V_{AB} & =b\omega_{3}(-\sin tehta_{3}+j\cos \theta_{3}) \\[2ex]
V_{BA} & =-V_{AB}
\end{align}
$$
If we need to solve for both the open and crossed positions, we will need to do steps 3 and 4 twice; once with $\theta_{3},d$ for the open position, and once with $\theta_{3}, d$ for the closed position.
---
title: Force Analysis for Power Screws
tags:
  - mte322
date: 2024-12-03
aliases:
  - force analysis for power screws
---
## Square Thread
Imagine that a single thread of a [[Power Screws and Lead Screws|power screw]] is unrolled for a turn:

![[Force Analysis for Power Screws.png|348]]

- Note that $\tan \lambda=\frac{\pi d_{p}}{L}$, where $L=p\cdot n_{s}$.

Then, one edge of the thread will form the hypotenuse of a right triangle whose base is the circumference of the mean-thread-diameter circle and whose height is the lead. The angle $\lambda$ is the lead angle of the thread. We represent the summation of all the axial forces acting upon the normal thread area by $P$. 

To raise the load, a force $F$ acts to the right. To lower the load, a force $F$ acts to the left. The friction force $f$ is the product of the coefficient of friction $f$ with the normal force $N$, and acts to oppose the motion.

![[Force Analysis for Power Screws-1.png|488]]

![[Force Analysis for Power Screws-2.png|488]]

### Force Analysis
We can conduct force analysis to find the required torque $T$ to resist linear load $P$.
$$
\begin{align}
\sum F_{x}=F-\mu N\cos \lambda-N\sin \lambda=0 \\[2ex]
\sum F_{y}=N\cos \lambda-P-\mu N\sin \lambda=0
\end{align}
$$
The first equation above gives
$$
F=N(\mu \cos \lambda+\sin \lambda)
$$
The second equation gives:
$$
N=\frac{P}{\cos \lambda-\mu \sin \lambda}
$$
We can then write
$$
F=P \frac{\mu \cos \lambda+\sin \lambda}{\cos \lambda-\mu \sin \lambda}=P \frac{\mu+\tan \lambda}{1-\mu \tan \lambda}
$$
When lifting up, we are work against the load, which gives us:
$$
T= F\cdot \frac{d_{p}}{2} = \frac{Pd_{p}}{2}\cdot \frac{\mu+\cos \alpha \tan \lambda}{\cos \alpha-\mu \tan \lambda}
$$
When lowering down, we work with the load, which gives us:
$$
T'=\frac{Pd_{p}}{2} \cdot \frac{\mu-\cos \alpha \tan \lambda}{\cos \alpha+\mu \tan \lambda}
$$

In practice, we must also deal with additional torque required to overcome the friction in the bearings of the system:
$$
T_{\text{up}}  = T+T_{B} , \quad  T_{\text{down}} =T'+T_{B}\\[2ex] 
$$
where $T_{B}=\mu_{B}\cdot \frac{Pd_{c}}{2}$. Here, $\mu_{B}$ is the coefficient of friction in the bearings, and $d_{c}$ is the diameter of the shaft.

## ACME Thread

![[Force Analysis for Power Screws-3.png|592]]\

## Relation to Worm Gears
From [[Worm Gear Load Analysis|worm gear load analysis]], we derived
$$
W_{tW}=W_{xW} \frac{\cos \phi_{n}\sin \lambda+\mu \cos \lambda}{\cos \phi_{n}\cos \lambda-\mu \sin \lambda}
$$
From power screws, we have just derived
$$
F=P \frac{\cos \alpha \sin \lambda+\mu \cos \lambda}{\cos \alpha \cos \lambda-\mu \sin \lambda}
$$

![[Force Analysis for Power Screws-4.png|588]]

## Examples

Example 1: Power Screw Jack

![[MTE 322 screws ex 1.pdf]]

Example 2: Scissor Jack

![[MTE 322 screws ex 4 1.pdf]]


---
title: PD Control of Unstable Second-Order Plant
tags:
  - elec3200
date: 2025-05-03
aliases:
  - pd control of unstable second-order plant
---
Consider the system below:

![[PD Control of Unstable Second-Order Plant-20250503211112232.png|542]]

We have:
$$
\frac{Y}{R}=\frac{G_{c}G_{p}}{1+G_{c}G_{p}}
$$
Poles:
$$
\begin{align}
1+G_{c}G_{p} & =0 \\[2ex]
1+(K_{P}+K_{D}s)\left( \frac{1}{s^{2}-1} \right) & =0
\end{align}
$$
We will examine the impact of varying $K=K_{D}$, assuming the ratio $K_{P} / K_{D}$ is fixed.

We can write the characteristic equation in what is called the Evans form by factoring out the $K_{D}$ term that we are interested in:
$$
1+\underbrace{ K_{D} }_{ K }\left( s+\frac{K_{P}}{K_{D}} \right)\left( \frac{1}{s^{2}-1} \right)=1+ K \underbrace{ \frac{s+K_{P}  / K_{D}}{s^{2}-1} }_{ L(s) }=0
$$
We can simply write the $L(s)$ terms as
$$
L(s)=\frac{s-z_{1}}{s^{2}-1}
$$
such that there is a zero at $s=z_{1}= - \frac{K_{P}}{K_{D}}<0$.

Rule A of root locus gives us:
$$
m=1, n=3 \quad \Longrightarrow \quad 2\text{ branches}
$$
Rule B states that branches start at open-loop poles:
$$
s^{2}-1=0 \quad \Longrightarrow \quad s= \pm 1
$$
Rule C states that branches end at open-loop zeros:
$$
s-z_{1}=0 \quad \Longrightarrow \quad s=z_{1}, -\infty
$$
(We will see why $-\infty$ later.)

So the root-locus plot looks something like:

![[PD Control of Unstable Second-Order Plant-20250503212313275.png|498]]

Why does one of the branches go off to $-\infty$?
$$
\begin{align}
 & s^{2}-1+K(s-z_{1}) =0 \\[2ex] 
 & s^{2}+Ks-(Kz_{1}+1)  =0 \\[2ex] 
 & s = -\frac{K}{2}  \pm  \sqrt{ \frac{K^{2}}{4}+Kz_{1}+1 }
\end{align}
$$
Since $z_{1}<0$, $Kz_{1}<0$, meaning that the square root term is smaller than $\frac{K^{2}}{4}$.

Thus, as $K\to \infty$, the plus case will approach the finite zero $z_{1}$. The minus case will approach $-\infty$.

Another question: Is the point $s=0$ on the root locus? We can find out by seeing if there's any $K>0$ for which this is possible.
$$
\begin{align}
1+KL(0) & =0 \\[2ex]
1+Kz_{1} & =0 \\[2ex]
K & =-\frac{1}{z_{1}}>0
\end{align}
$$
Main points:
- When zeros are in LHP, high gain can be used to stabilize the system (although we need to worry about zeros at infinity)
- If there are zeros in the RHP, high gain is always disastrous
- PD control is effective for stabilization because it introduces a zero in LHP.
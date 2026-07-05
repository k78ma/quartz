---
title: Root Locus Method
tags:
  - elec3200
date: 2025-05-03
aliases:
  - root locus method
  - root locus plot
---
The root locus method is a graphical method for examining how the roots of a system change with variation of a certain system parameter.

## Set-up
Consider the unity feedback configuration:

![[Root Locus Method-20250503200442752.png|523]]

where $K$ is a constant gain and $L(s)=\frac{b(s)}{a(s)}$ where $a(s)$ and $b(s)$ are some polynomials.

The closed-loop transfer function is:
$$
\frac{Y}{R}=\frac{KL(s)}{1+KL(s)}
$$
so the closed-loop poles are the solutions of
$$
\begin{align}
1+KL(s) & =0 \\[2ex]
1+K \frac{b(s)}{a(s)} & =0 \\[2ex]
a(s)+Kb(s) & =0
\end{align}
$$
This $a(s)+Kb(s)$ is called the **characteristic polynomial** and setting it to zero gives us the **characteristic equation**.


> [!note] Note: Change of Notation
> Here we have changed from $H(s)$ or $G(s)=\frac{q(s)}{p(s)}$ to $L(s)=\frac{b(s)}{a(s)}$. This is because the root-locus method is quite general, so $L(s)$ is not necessarily the plant transfer function, and $K$ is not necessarily the feedback gain. These two may be related to the plant transfer function and feedback through some transformation. As long as we can represent the poles of the closed-loop transfer function as roots of the equation $1+KL(s)=0$ for some choice of $K$ and $L(s)$, we can apply the root-locus method.
> 

The [[Routh-Hurwitz Criterion|Routh Criterion]] gave us a range of $K$ to guarantee stability. However, for what values of $K$ do we best satisfy given design specs, like setting time, rise time, and overshoot? These specs are encoded in pole locations.

> [!definition] Root locus
> The **root locus** for $1+KL(s)$ is the set of all closed-loop poles, i.e., the roots of $1+KL(s)=0$ as $K$ varies from $0$ to $\infty$.

An equivalent characterization of the root locus concept is to use the "phase condition". The root locus for the characteristic equation $1+KL(s)=0$ is the set of all values of $s \in \mathbb{C}$ that make this equation true as $K$ varies from $0$ to $\infty$. Another way to think about this is:
$$
1+KL(s) \quad \Longrightarrow \quad L(s)=-\frac{1}{K}
$$
Since $K>0$, this implies that $L(s)$ must be a negative real number. Thus, a point $s$ lies on the root locus if and only if $\angle L(s)=180\degree$. In other words, $L(s)$ must be real and negative. This is called the **phase condition**.

See a [[Simple Root Locus Example|simple example]] of root locus method here, where we analytically draw a root locus plot for a 2nd-order system. However, for order larger than 2, there will generally be no direct formula for the closed-loop poles as a function of $K$. Thus, we develop simple rules for (approximately) sketching the root locus in the general case.

## Rule A – Number of Branches
The characteristic equation can be written as:
$$
\begin{align}
1+KL(s) & =0 \\[2ex] 
1+K \frac{b(s)}{a(s)} & =0\\[2ex] 
1+K \frac{s ^{m}+b_{1}s ^{m-1}+\dots+b_{m-1}s+b_{m}}{s ^{n}+a_{1}s ^{n-1}+\dots+a_{n-1}s+a_{n}} & =0 \\[2ex] 
(s ^{n}+a_{1}s ^{n-1}+\dots+a_{n-1}s+a_{n})+K(s ^{m}+ b_{1}s ^{m-1}+\dots+b_{m-1}s+b_{m}) & =0
\end{align}
$$
Since $\deg(a)=n\geq m=\deg(b)$, the characteristic polynomial $a(s)+Kb(s)=0$ has degree $n$.

The characteristic polynomial has $n$ solutions (roots), some of which repeated. As we vary $K$, these $n$ solutions also vary to form $n$ branches.

More succinctly:

> [!theorem] Rule A
> 
> $$
> \boxed{
> \#\text{(branches)}=\deg(a)
> }
> $$

## Rule B – Start Points

The locus starts from $K=0$. What happens near $K=0$? We see that if $a(s)+Kb(s)=0$ and $K \approx 0$, then $a(s) \approx 0$. Therefore:
- $s$ is close to a root of $a(s)=0$, or
- $s$ is close to a pole of $L(s)$.

> [!theorem] Rule B
> $$
>\boxed{\text{Branches start at open-loop poles.}}
>$$


## Rule C – End Points
What happens to the locus at $K\to \infty$?
$$
\begin{align}
a(s)+Kb(s) & =0 \\[2ex] 
b(s) & = - \frac{1}{K}a(s)
\end{align}
$$
Thus, as $K\to \infty$,
- Branches end at the roots of $b(s)=0$, or
- Branches end at zeros of $L(s)$


> [!theorem] Rule C
>$$
>\boxed{\text{Branches end at open-loop zeros.}}
>$$

Note: If $n>m$, we have $n$ branches but only $m$ zeros. The remaining $n-m$ branches go off to infinity (end at "zeros at infinity").

## Rule D – Real Locus
The branches of the root locus start at the open-loop poles. Which way do they go, left or right?

Recall that phase condition:
$$
1+KL(s) \quad \Longleftrightarrow \quad \angle L(s)=180\degree  
$$
Thus,
$$
\begin{align}
\angle L(s) & =\angle \frac{b(s)}{a(s)} \\[2ex]
     & =\angle \frac{(s-z_{1})(s-z_{2})\dots(s-z_{m})}{(s-p_{1})(s-p_{2})\dots(s-p_{n})} \\[2ex] 
     & = \sum_{i=1}^{m} \angle (s-z_{i}) - \sum_{j=1}^{n} \angle (s-p_{j})
\end{align}
$$
This sum must be $\pm 180 \degree$ for any $s$ that lies on the root locus.

See [[Advanced Root Locus Example|this example]] to see how this works in practice.


> [!theorem] Rule D
> If $s$ is real, then it is on the real line of $1+KL$ if and only if there are an odd number of real open-loop poles and zeros to the right of $s$.



## Rule E – Asymptotes
How does the locus as $s\to \infty$?
$$
\begin{align}
180\degree  &  =\angle L(s)=\angle \frac{s ^{m}+b_{1}s ^{m-1}+\dots}{s ^{n}+a_{1}s ^{n-1}+\dots} \\[2ex]
     & = \angle \frac{s ^{m-n}+b_{1}s ^{m-n-1}+\dots}{1+a_{1}s ^{-1}+\dots} \\[2ex]
     & = \angle s ^{m-n} \text{ if } | s |\to \infty
\end{align}
$$
Claim: If $\angle s ^{m-n}=180\degree$, then
$$
\angle s = \frac{180\degree  +\ell\cdot 360\degree  }{n-m}, \quad  \ell=0,1,\dots,n-m-1
$$
Proof of the above claim:

![[Root Locus Method-20250503221451403.png|578]]

> [!theorem] Rule E
> Thus, Rule E tells us that branches near $\infty$ have phase
> $$
> \begin{align}
> \angle s  & \simeq \frac{180\degree  +\ell\cdot 360\degree  }{n-m}\\[2ex] 
>      & =\frac{(2\ell+1)\cdot 180\degree  }{n-m},\quad \ell=0,1,\dots,n-m-1
> \end{align}
> $$
> Note that if $m=n$, then there are no branches at $\infty$.

## Rule F: Imaginary Axis Crossing
Do the branches of the root locus cross the $j\omega$ axis? This signifies a transition from stability to instability.

Our goal is to determine if the equation
$$
a(j\omega)+Kb(j\omega)=0
$$
has a solution $\omega \geq 0$ for some $K\geq 0$.

> [!theorem] Rule F
> Use [[Routh-Hurwitz Criterion|Routh Criterion]] to first determine the critical value of $K$ (when the characteristic polynomial becomes unstable), then plug it in and solve for $j\omega$-crossing (numerically or analytically).

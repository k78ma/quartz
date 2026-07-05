---
title: Feedback System Type
tags:
  - elec3200
date: 2025-04-27
aliases:
  - feedback system type
---
The fact that adding an integrator term to a [[Proportional-Derivative Control|PD controller]] leads to perfect tracking of constant references and perfect rejection of constant disturbances is a special case of a more general analysis.

![[Feedback System Type-20250427224415215.png|465]]

Consider the reference
$$
r(t)=\frac{t^{k}}{k!}1(t) \quad \longleftrightarrow \quad R(s)=\frac{1}{s ^{k+1}}
$$
- $k=0$ would give us a step (position)
- $k=1$ would give us a ramp (velocity)
- $k=2$ would give us a parabola (acceleration)

he error signal is given by:
$$
E=\frac{1}{1+KP}R=\frac{1}{1+KP} \frac{1}{s ^{k+1}}
$$
The [[Final Value Theorem]] (assuming stability) gives
$$
e(\infty)=sE(s)\Big |_{s=0}=\frac{1}{1+KP} \frac{1}{s ^{k}}\Big |_{s=0}
$$
## System Type
The **system type** is the number $n$ of poles the forward-loop transfer function $KP$ has at the origin ($s=0$). It is the degree of the lowest-degree polynomial that cannot be tracked in feedback with zero steady-state error.
- Note that the system type is calculated from the forward-loop transfer function, although the conclusions drawn are about the closed-loop system.

Let's suppose that $KP$ has an $n$-th order pole at $s=0$:
$$
KP=\frac{K_{0}}{s ^{n}}
$$
Then:
$$
sE(s)=\frac{1}{\left( 1+\frac{K_{0}}{s ^{n}}s^{k} \right)}=\frac{s ^{n-k}}{s ^{n}+K_{0}}
$$
Recall that the reference $r(t)$ is a polynomial of degree $k$. There are three cases to consider:
- Perfect tracking: $n>k \, : \, e(\infty)=0$ 
- Imperfect tracking: $n=k\, : \,e(\infty)=\text{const}\neq 0$ gives imperfect tracking
- No tracking: $n<k\, : \,e(\infty)=\infty$ 

## Examples
- Type 0: No pole at origin. This is what we had without the integral gain term: nonzero steady-state error to constant references.
- Type 1: A single pole at the origin. This is what we get with an integral gain term: we can track constant references and reject constant disturbances with zero error. However, we can't track higher order references like ramp signals.
- Type 2: A double pole at the origin. Can track ramp references without error, but not $t^{2}, t^{3}$, etc.
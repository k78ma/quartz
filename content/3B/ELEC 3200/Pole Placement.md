---
title: Pole Placement
tags:
  - elec3200
date: 2025-09-24
aliases: pole placement
---
**Stabilizing controller design:** Given the plant $P(s)$, design the controller $C(s)$ so that the closed-loop system is internally stable.

![[Controller Design-20250406213058427.png|420]]

The idea of **pole placement** is to design $C(s)$ so that the **poles** closed-loop system are the **roots** of the characteristic polynomial, such that the roots of the closed-loop characteristic polynomial are placed in the pre-specified desirable location.

## Proper Controllers
Let a plant be given by
$$
P(s)=\frac{b(s)}{a(s)}=\frac{b_{0}s ^{n}+b_{1}s ^{n-1}+\dots+b_{n}}{a_{0}s ^{n}+a_{1}s ^{n-1}+\dots+a_{n}}, \quad a_{0}\neq 0
$$
where $a(s)$ and $b(s)$ are coprime.

Consider proper controllers:
$$
C(s)=\frac{q(s)}{p(s)}=\frac{q_{0}s ^{m}+q_{1}s ^{m-1}+\dots+q_{m}}{p_{0}s ^{m}+p_{1}s ^{m-1}+\dots+p_{m}}, \quad p_{0}\neq 0
$$
where $p(s)$ and $q(s)$ are coprime.

The closed-loop **characteristic polynomial** is
$$
c(s) := a(s)p(s)+b(s)q(s)=c_{0}s ^{n+m}+c_{1}s ^{n+m-1}+\dots+c_{n+m}
$$
Given $a(s), b(s), c(s)$ and **unknown** $p(s), q(s)$, it is also called the polynomial Diophantine equation.

Stabilizing controller design:
- Specify an $(n+m)$th order desired stable $c(s)$.
- Choose $p(s)$ and $q(s)$ so that the Diophantine equation is satisfied.
- Set $C(s)=\frac{q(s)}{p(s)}$.

Define two $(n+m)\times m$ Toeplitz matrices:


## Strictly Proper Controller
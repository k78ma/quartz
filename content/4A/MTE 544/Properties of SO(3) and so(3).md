---
title: Properties of SO(3) and so(3)
tags:
  - mte544
date: 2025-10-20
aliases:
  - properties of SO(3) and so(3)
---
Properties of the "hat" notation:
- Equivalent to cross product: $v\times w = \hat{v}w$, $\,\, \forall \, v,w \in \mathbb{R}$
- $R\hat{\omega}R^{T}=\hat{R\omega}$

Rotation is a rigid body transformation:
- $|| Rq-Rp ||=|| q-p ||, \,\, \forall \,q,p \in \mathbb{R}^{3}$
- $R(v\times w)=Rv\times Rw, \,\, \forall \,q,p \in \mathbb{R}^{3}$

Matrix exponential of so(3) and SO(3):
- Given $\hat{\omega} \in so(3)$, $\exp(\hat{\omega}\theta)=I+\theta \hat{\omega}+\frac{\theta^{2}}{2!}\hat{\omega}^{2} + \dots \in SO(3)$
- Rodrigues' formula: $e^{\hat{\omega}\theta}=I+\hat{\omega}\sin \theta + \omega^{2}(1-\cos \theta)$
- If $R(t)= e^{\hat{\omega}t}$, then $\dot{R}=\hat{\omega}e^{\hat{\omega}t}=\hat{\omega}R$
    - $\implies \hat{\omega}=\dot{R}R^{T}$


---
title: Feedback System Performance Specifications
tags:
  - mte484
date: 2025-09-19
aliases: feedback system performance specifications
---
Performance specifications (specs) provide quantitative requirements/goals for control systems.
1. Overshoot
2. Settling time
3. Rise time
4. Steady-state error
5. Gain/phase margins
6. Bandwidth
7. Limits on input/output/error
    - Saturation (physical) limits
    - Safety (engineered limits)


> [!theorem] Final Value Theorem
> Let $p(t)$/ $g[k]$ be a signal with Laplace/Z-transform that is real, rational, and proper. Then:
> 
> If all poles of $P(s)$/$G[z]$ lie in $\mathbb{C}^{-}$/$\mathbb{D}$,
>  $$
> \lim_{ t \to \infty } p(t)= 0 \quad  / \quad  \lim_{ k \to \infty } g[k]=0 
> $$
> 
> If all poles of $P(s)$/$G[z]$ lie in $\mathbb{C}^{-}$/$\mathbb{D}$ except for exactly one pole at $0$/$1$:
> $$
> \lim_{ t \to \infty } p(t) = \lim_{ s \to 0 } sP(s) \quad  / \quad  \lim_{ k \to \infty } g[k] = \lim_{ z \to 1 } (z-1)G[z]
> $$


*Proof.* 
---
title: Final Value Theorem
tags:
  - elec3200
date: 2025-04-01
aliases:
  - final value theorem
---
The Final Value Theorem in control states that if all poles of $sY(s)$ are *strictly stable* or lie in the *open left half-plane*, i.e., have $\text{Re}(s)<0$, then
$$
y(\infty)=\lim_{ s \to \infty } sY(s)
$$

The more general mathematical form of the theorem states that if $\lim_{ t \to \infty }f(t)$ exists (it has a finite limit), then
$$
\lim_{ t \to \infty }f(t)=\lim_{ s \to 0 } sF(s)
$$
where $F(s)$ is the one-sided Laplace transform of $f(t)$.

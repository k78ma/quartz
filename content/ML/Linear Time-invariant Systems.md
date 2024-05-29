---
title: Linear Time-invariant Systems
tags:
  - ml
  - syde252
date: 2024-02-08
aliases:
  - LTI system
  - LTI systems
---
Linear time-invariant systems can be seen as a [[state machine]] where $S = \mathbb{R}^{m}, X = \mathbb{R}^{1}, Y = \mathbb{R}^{n}$, and $f$ and $g$ are linear functions of their input. In discrete time, they can be described as a linear difference equation, like
$$
y[t]=3y[t-1]+6y[t-2]+5x[t]+3x[t-2]
$$
where $y[t]$ is $y$ at time $t$. LTI systems can be implemented using state to store relevant previous input and output information.

[[Recurrent Neural Networks]] are a lot like a non-linear version of LTIs.
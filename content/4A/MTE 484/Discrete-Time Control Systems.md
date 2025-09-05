---
title: Discrete-Time Control Systems
tags:
  - mte484
date: 2025-09-05
aliases: discrete-time control systems
---
A discrete-time control system has the form:

![[Discrete-Time Control Systems-20250905134725185.png]]

A typical step response for a discrete control system:

![[Discrete-Time Control Systems-20250905134636576.png]]

Time domain: Difference equations → lead to state-space models

Frequency ($z$) domain: Transfer function models
- Our focus will be on [[Linear Time-invariant Systems|LTI systems]]

Each of the above has different tools for stability analysis and control design.

Because physical plants are always continuous-time systems, discrete-time control systems are NOT digital control systems!

## Sampled-Data (Digital) Control Systems

![[Discrete-Time Control Systems-20250905135312833.png]]

- $P(s)$ is our continuous-time plant
- $D[z]$ is our discrete-time controller
- $r,d,u,y$ are all in continuous-time

- A/D is a analog-to-digital converter. It is a sampler that samples $e(t)$ at discrete intervals, $kT, k \in \mathbb{Z}_{\geq 0}$, where $T$ is the sampling time of the system
- D/A is a digital-to-analog converter. Typically we use a "zero order hold" that holds $u[k]$ for $t \in [kT, (k+1)T] \; \; \forall \; k \in \mathbb{Z}_{\geq 0}$.

![[Discrete-Time Control Systems-20250905140243926.png]]




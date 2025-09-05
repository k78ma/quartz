---
title: Discrete-Time Control Systems
tags:
  - mte484
date: 2025-09-05
aliases:
  - discrete-time control systems
  - sampled-data system
---
A discrete-time control system has the form:

![[Discrete-Time Control Systems-20250905134725185.png|633]]

A typical step response for a discrete control system:

![[Discrete-Time Control Systems-20250905134636576.png|575]]

(some overshoot, oscillate, and then become stable)

Time vs. Frequency domain:
- Time domain: Difference equations → lead to state-space models
- Frequency ($z$) domain: Transfer function models

Our focus will be on [[Linear Time-invariant Systems|LTI systems]]. Note that each of the above has different tools for stability analysis and control design.

Because physical plants are always continuous-time systems, discrete-time control systems are in fact NOT digital control systems!

## Sampled-Data (Digital) Control Systems

![[Discrete-Time Control Systems-20250905135312833.png]]

- $P(s)$ is our continuous-time plant
- $D[z]$ is our discrete-time controller
- $r,d,u,y$ are all in continuous-time

- A/D is a analog-to-digital converter. It is a sampler that samples $e(t)$ at discrete intervals, $kT, k \in \mathbb{Z}_{\geq 0}$, where $T$ is the sampling time of the system
- D/A is a digital-to-analog converter. Typically we use a "zero order hold" that holds $u[k]$ for $t \in [kT, (k+1)T] \; \; \forall \; k \in \mathbb{Z}_{\geq 0}$.

![[Discrete-Time Control Systems-20250905140243926.png]]



> [!theorem] 
> Even a simple system that's just sampler-to-hold ($D[z]=1$), the system is not LTI.
> 
> ![[Discrete-Time Control Systems-20250905140741432.png|463]]
> 
> As a result, the full closed-loop sampled-data system is also NOT LTI.


Then what's the value of studying LTI systems? Our approach:
1. Attempt to choose $T$ (or modify our control architecture or control design) so that the sampled-data system is approximately LTI.
2. Use LTI tools to perform control design.
    - Approximating continuous-time controllers with discrete-time controllers (emulation)
    - Direct design of discrete-time controllers.
3. Analyze and simulate the results on the true system.

Examples:
1. $P(s)= \frac{4}{s+2}, C(s)=1$. Using continuous-time tools, one can show that this is stable as a closed-loop system.
2. $P(s)=\frac{4}{s+2}, D[z]=1$. 

We will look at two cases:
- Response to sinusoidal inputs: $T=0.1s$, $r(t)=\sin(t), \sin(5t), \sin(10t)$
- Response to step systems: $r(t)= \mathbb{1}(t)$, vary sampling time $T\in [0.1s, 1.0s]$ 

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


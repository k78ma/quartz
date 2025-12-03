---
title: MTE 484 - Digital Control Applications
tags:
  - mte484
  - 4a
date: 2025-09-03
aliases:
  - mte 484 - digital control applications
  - "484"
---
## Info
Final: Dec 16 4PM - 6:30PM
- 6 questions
- 150 minutes (2.5 hours)
- 1 proof question
- 2 control design questions
    - emphasis on SD systems (but can often convert to DT system)
- 1-2 derivation questions
- 1 question on stability analysis/steady-state performance
- Cumulative, focus on SD systems but the big theme in course has been that SD systems can be converted to DT
    - Know how to find discretized plant $G[z]$ from $P(s)$
    - Know how to choose $T$ and justify your choice

Study:
1. Complete all assignments and repeat midterm
2. Check assignment and midterm solutions closely
3. Review lectures, tutorials, and labs

## Background
- [[Linear Time-invariant Systems]]
- [[Laplace Transform]]
- [[Z-Transform]]
    - [[Linearity of Laplace and Z-Transforms]]

## Introductory Content
- [[Feedback Control]]
- [[Discrete-Time Control Systems]]
- [[Sampled-Data Control Systems]]
    - [[Choosing Sampling Time]]
- [[Frequency-Domain Control Systems]]
- [[Transfer Function Classification]]
- [[Poles and Zeros]]
- [[Transfer Function Pole Decomposition]]
- [[Impulse Response]]

## Stability
- [[Stability Criterion]]
    - [[Continuous-Time Stability]]
    - [[Discrete-Time Stability]]
- [[Sample-Data System Stability]]
- [[Time-Domain Stability]]
- [[BIBO Stability]]
    - [[Constant BIBO Stability Proof]]
- [[Closed-Loop Stability]]
    - [[Characteristic Polynomial Closed-Loop Stability]]
- [[Feedback System Performance Specifications]]
    - [[Final Value Theorem]]
    - [[Steady-State Response with FVT]]

## IOP / SPA
- [[Input-Output Parameterization]]
- [[Simple Pole Approximation]]
- [[Specs for Control Design]]
- [[IOP with SPA]]
- [[Control Design with IOP and SPA]]
- [[Choosing Poles for IOP and SPA]]
- [[BIBO stable <=> Stable]]
- [[YALMIP + MOSEK messages]]
- [[Infinity Norm]]

## State Space Models
- [[State Space Models]]
    - [[Mass-Spring Damper State Space Model]]
- [[State Space Realization]]
- [[Phase Portrait]]
- [[Nonlinear State Space Models]]
- [[Numerical Integration for Control Systems]]
- [[Emulation Control Design]]
    - [[Stability of CT-DT Approximation]]
- [[Discretized Plant]]

## Sampled-Data Systems
- [[Sampled-Data System Stability]]
- [[Schur Characteristic Polynomials]]
- [[Jury Test]]
- [[Nyquist Stability]]
- [[Performance of Sampled Data Systems]]
- [[Nyq]]

## Tutorial/Examples
- [[Sept 23 Proof Tutorial]]
- [[Sept 30 IOP Tutorial]]

## Labs
- [[MTE 484 Lab 1]]
- [[MTE 484 Lab 2]]
- [[MTE 484 A6Q3c]]
- [[MTE 484 Lab 3]]
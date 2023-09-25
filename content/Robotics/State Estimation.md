---
title: State Estimation
tags:
  - robotics
date: 2023-09-23
---
How do we estimate internal, hidden state variables through noisy measurement data?

The solution to state estimation is related to the specific [[Mathematical Formulation of SLAM#Motion Equation|Motion Equation]] and [[Mathematical Formulation of SLAM#Observation Equation|Observation Equation]] of a robot and the noise probability distribution. Based on the motion/observation equations, and whether the noise is Gaussian, state estimation is divided into linear/non-linear and Gaussian/non-Gaussian systems.

Linear Gaussian System (LG)
- Simple
- Unbiased optimal estimation can be given by [[Kalman Filter]]

Non-linear non-Gaussian (NLNG)
- Complex
- use [[Extended Kalman Filter]] and [[Non-linear Optimization]]
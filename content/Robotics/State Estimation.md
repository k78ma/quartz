---
title: State Estimation
tags:
  - robotics
date: 2023-09-23
---
How do we estimate internal, hidden state variables through noisy measurement data?

The solution to state estimation is related to the specific [[Mathematical Formulation of SLAM#Motion Equation|Motion Equation]] and [[Mathematical Formulation of SLAM#Observation Equation|Observation Equation]] of a robot and the noise probability distribution. Based on the motion/observation equations, and whether the noise is Gaussian, state estimation is divided into linear/non-linear and Gaussian/non-Gaussian systems.

Notes from: *Kalman Filter from The Ground Up* by Alex Becker

## Basic State Estimation
- [[Simple Static State Estimation Example]]
- [[Constant Velocity Tracking Example]]
- [[Constant Acceleration Tracking Example]]
## Kalman Filtering

### Kalman Filtering Basics
- [[Kalman Filter]]
- [[1D Kalman Filter without Process Noise]]
- [[Kalman Gain Intuition]]
- [[1D Kalman Filter with Process Noise]]
### Multivariate Kalman Filters 

#### Statistic Basics
- [[Multivariable State Vector]]
- [[Expectation Algebra]]
- [[Multivariate Kalman Filter]]
- [[Covariance Matrix]]
- [[Multivariate Normal Distribution]]
- [[Covariance Ellipse]]
- [[Confidence Ellipse]]
---
title: Dynamic Force Analysis
tags:
  - mte321
date: 2024-08-11
aliases:
  - dynamic force analysis
---
Kinetostatic approach:
- Also known as inverse dynamics
- Solve for kinematics first
- Calculate forces and torques required to yield the desired motion
- Equations will focus on desired accelerations

Newton's second law in vector form:
$$
\begin{align}
\mathbf{F} & =m\mathbf{a} \\[2ex]
\mathbf{T} & =I_{G}\alpha
\end{align}
$$
Scalar form:
$$
\begin{align}
\sum F_{x} & =ma_{x} \\[2ex] 
\sum F_{y} & =ma_{y}\\[2ex] 
\sum T & = I_{G}\alpha
\end{align}
$$
We will be neglecting the contribution of weight forces ($mg$) for our dynamic force analysis, as it is typically negligible compared to the involved kinematic accelerations. If the mechanism or machine we are considering has a very large mass (and hence weight) or has small kinematic accelerations (i.e., moving slowly), we will need to reconsider this assumption and include weight in your analysis.
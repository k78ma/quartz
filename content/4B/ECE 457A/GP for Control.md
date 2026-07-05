---
title: GP for Control
tags:
  - ece457a
date: 2026-04-10
aliases: gp for control
---
Control problems are attractive for GP because the controller is naturally a program. A controller maps state to action:
$$
u_{t} = f(s_{t})
$$
Thus, we can use GP to evolve threshold logic, arithmetic combinations of sensor readings, nonlinear feedback laws, and conditional policies.

Consider the classic cartpole problem:

![[GP for Control-1775813989069.webp]]

Failure occurs if $\left| \theta_{t} \right| > \theta_{\text{max}}$ or $\left| x_{t} \right|>x_{\text{max}}$. Basically, the pole must stay near upright and within the track.

The state is: 
$$
s=(x,\dot{x}, \theta, \dot{\theta})
$$

GP evolves a controller of the form:
$$
u = f(x,\dot{x}, \theta, \dot{\theta})
$$
We can have the output either be a discrete force $\{ -10, +10 \}$, or a continuous form in a bounded interval.

We can then define a survival-based fitness:
$$
F = \text{number of timesteps before failure}
$$
or a reward-based fitness:
$$
\begin{align}
F  & = \sum_{t=0}^{T} r_{t} \\[2ex] 
r_{t} & =1-\alpha \left| \theta_{t} \right|  - \beta \left| x_{t} \right| 
\end{align}
$$
where we are basically rewarding 1 for each step staying alive, with penalties for large angles and displacements. This encourages both stability and control stability.

Control is a hard problem!

![[GP for Control-1775868260701.webp]]
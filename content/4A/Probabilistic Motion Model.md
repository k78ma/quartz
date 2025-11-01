---
title: Probabilistic Motion Model
tags:
  - mte544
date: 2025-11-01
aliases: probabilistic motion model
---
A robot's motion model can be written by a state equation:
$$
\xi_{k+1} = f(\xi_{k}, u_{k})
$$
where:
- $\xi_{k}$ is called a state vector, like $\xi_{k} = [x_{k}, y_{k}, \theta_{k}]^{T}$
- $u_{k}$ is an input vector (command that the robot tries to follow), such as $u_{k} = [v_{k}, \omega_{k}]^{T}$

The input $u_{k}$ and state $\xi_{k}$ are all probabilistic in general because of sensor/actuator noise. 

We usually assume that the state equation follows the **Markov property**: The value of the state at the current time step is completely determined by that at the immediate prior time step, with all past values irrelevant.

### Example
Recall that for a 2-wheel differential drive has continuous-time motion as"
$$
\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} =\begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}
$$
Multiplying it out, we can see that we have
$$
\dot{x} = v_k \cos(\theta_k), \quad \dot{y} = v_k \sin(\theta_k), \quad \dot{\theta} = \omega_k
$$
Converting to discrete-time motion:
$$
\begin{bmatrix}
x_{k+1} \\
y_{k+1} \\
\theta_{k+1}
\end{bmatrix} = \begin{bmatrix}
x_{k} \\
y_{k} \\
\theta_{k}
\end{bmatrix} + \begin{bmatrix}
v_k \Delta t \cos\left( \theta_k + \frac{\omega_k \Delta t}{2} \right) \\
v_k \Delta t \sin\left( \theta_k + \frac{\omega_k \Delta t}{2} \right)  \\
\omega_{k}\Delta t
\end{bmatrix} + \mathcal{N}(0, \sigma^{2})
$$
or
$$
\begin{bmatrix}
x_{k+1} \\
y_{k+1} \\
\theta_{k+1}
\end{bmatrix} = \begin{bmatrix}
x_{k} \\
y_{k} \\
\theta_{k}
\end{bmatrix} + \begin{bmatrix}
 \cos\left( \theta_k + \frac{\omega_k \Delta t}{2} \right) & 0 \\
\sin\left( \theta_k + \frac{\omega_k \Delta t}{2} \right)  & 0 \\
0 & 1
\end{bmatrix} \begin{bmatrix}
v_{k}\Delta t + \epsilon_{k} \\
\omega_{k}\Delta t+ \nu_{k}
\end{bmatrix}
$$
where $\epsilon_{k}, \nu_{k}$ are random variables for noise/uncertainties.

Note that our model obeys the Markov property: the state at time $k+1$ only depends on $k$.
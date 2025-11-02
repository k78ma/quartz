---
title: Bayes Filter
tags:
  - mte544
date: 2025-11-01
aliases: bayes filter
---
Given:
- [[Probabilistic Motion Model]] of a robot, $\xi_{k}=f(\xi_{k-1}, u_{k-1})$
- [[Measurement Model]], $z_{k}=g(\xi_{k})$a

When $f(\bullet)$ and $g(\bullet)$ are corrupted by noise, $\xi_{k}$ and $z_{k}$ essentially become random variables and their models can be better represented by conditional probabilities:
$$
\begin{align}
\xi_{k} = f(\xi_{k-1}, u_{k-1}) \quad &  \longrightarrow \quad \xi_{k} \sim p(\xi_{k}\, | \,\xi_{k-1}, u_{k-1}) \\
    \quad  & \longrightarrow \quad z_{k} \sim p(z_{k} \, | \, \xi_{k})
\end{align}
$$
This is precisely the underlying spirit of the treatment of theories in **probabilistic robotics**.

## Path, Input and Observations
For the robot state $\xi =[x,y,\theta]^{T}$, its path is defined as the sequence
$$
\xi_{0:N} = \{ \xi_{0}, \xi_{1}, \dots, \xi_{N} \}
$$
Let $u$ denote the inputs (or proprioceptive sensor data), e.g. wheel encoders, velocities from IMU or motor input, etc. Then, the sequence of inputs to the robot motion is denoted by
$$
u_{0:N} = \{ u_{0}, u_{1}, \dots, u_{N} \}
$$
Let $z$ denote the exteroceptive sensors, e.g. LiDAR, GPS, vision. These are the measurements providing absolute (yet uncertain) information about the state $\xi$. Then, its sequence is
$$
z_{0:N} = \{ z_{0}, z_{1}, \dots, z_{N} \}
$$
## Belief & Prediction of Robot Pose
In general, a robot cannot measure its true state (pose) directly. It only knows the best estimate of its pose based on its sensor data. Therefore, the knowledge the robot has about its state can only be inferred from data. The best guess about the robot state is called the **belief**.

Odometry, motion model, and all the measurement models of the sensors can be incorporated to provide us with this belief. It takes the form of a conditional probability:
$$
bel(\xi_{k}) = p(\xi_{k} \, | \, z_{0:k}, u_{0:k-1})
$$
Note that the posterior $p(\xi_{k} \, | \, z_{0:k}, u_{0:k-1})$ represents the probability of the robot being at $\xi_{k}$ given all its past observations $z_{0:k}$ and all its past control inputs $u_{0 : k-1}$.

In our [[Localization and Mapping|localization]] algorithm, it's useful to define another posterior without the most recent observation, $z_{k}$, i.e.:
$$
\overline{bel}(\xi_{k}) = p(\xi_{k}\, | \, z_{0:k-1}, u_{0:k-1})
$$
We call $\overline{bel}(\xi_{k})$ the **prediction** update, meaning that the current robot pose belief is only predicted on the basis of the motion model and previous observations.

## Bayes Filter
A Bayes filter is a computational procedure to obtain $bel(\xi_{k})$ recursively; we find a description of $bel(\xi_{k})$ from $bel(\xi_{k-1})$. Different implementations of Bayes filters lead to [[Kalman Filter]], information filter, histogram filter, particle filter.

The Bayes filter works in 2 steps for each timestep:
- Prediction: Estimate the pose using an odometry model and its numerical integration
- Correction: Refine the predicted pose using the measurements from exteroceptive sensors

![[Bayes Filter-20251101204047936.png]]

### Derivation
We start with:
$$
bel(\xi_k) = p(\xi_k \mid z_{0:k}, u_{0:k-1})
$$
Applying Bayes rule:
$$
\begin{align}
 bel(\xi_{k}) & = \frac{p(z_{k} \, | \,\xi_{k}, z_{0:k-1}, u_{0:k-1})p(\xi_{k} \, | \, z_{0:k-1}, u_{0:k-1})}{p(z_{k} \, | \,z_{0:k-1}, u_{0: k-1})} \\[2ex] 
 &  =p(\xi_k \mid z_{0:k}, u_{0:k-1}) \eta \; p(z_k \mid \xi_k, z_{0:k-1}, u_{0:k-1}) \; p(\xi_k \mid z_{0:k-1}, u_{0:k-1}) \\[2ex] 
     & = \eta p(z_{k} \, | \, \xi_{k}, z_{0:k-1}, u_{0 : k-1})\, p(\xi_{k} \, | \, z_{0 : k-1}, u_{0 : k-1})
\end{align}
$$
- $\eta$ is a normalization constant that rescales values so that $\int bel(\xi_{k}) \, d\xi_{k}=1$

Invoking the Markov property, we note that the observation $z_{k}$ depend only on the current state $\xi_{k}$, not past states or old observations:
$$
p(z_k \mid \xi_k, z_{0:k-1}, u_{0:k-1}) = p(z_k \mid \xi_k)
$$
Also, recall that we defined the prediction belief:
$$
\overline{bel}(\xi_k) := p(\xi_k \mid z_{0:k-1}, u_{0:k-1})
$$
Thus, we can write:
$$
\begin{align}
bel(\xi_{k}) &  = \eta \,\underbrace{ p(z_{k} \, | \, \xi_{k}, z_{0:k-1}, u_{0 : k-1}) }_{ = p(z_{k} \, | \,\xi_{k}) }\, \underbrace{ p(\xi_{k} \, | \, z_{0 : k-1}, u_{0 : k-1}) }_{ =\overline{bel}(\xi_{k}) } \\[2ex] 
\therefore bel(\xi_{k})  & = \eta p(z_{k} \, | \, \xi_{k}) \overline{bel}(\xi_{k})
\end{align}
$$
Now that we've written $bel(\xi_{k})$ with respect to $\overline{bel}(\xi_{k})$, let's find a description of $\overline{bel}(\xi_{k})$ from $bel(\xi_{k-1})$:
$$
\begin{align}
\overline{bel}(\xi_k)  & =p(\xi_{k} \, | \,z_{0 : k-1}, u_{0: k -1}) \\[2ex] 
 & =\int p(\xi_k \mid \xi_{k-1}, z_{0:k-1}, u_{0:k-1}) \; p(\xi_{k-1} \mid z_{0:k-1}, u_{0:k-1}) \, d\xi_{k-1}
\end{align}
$$
Invoking the Markov property or robot dynamics again, we note that the state transition only depend on the previous state and last control input:
$$
p(\xi_k \mid \xi_{k-1}, z_{0:k-1}, u_{0:k-1}) = p(\xi_k \mid \xi_{k-1}, u_{k-1})
$$
Note that $p(\xi_{k-1}\mid z_{0 : k-1}, u_{0: k-1}) = p(\xi_{k-1} \mid z_{0 : k-1}, u_{0 : k-2})$ because $\xi_{k-1}$ is not affected by $u_{k-1}$.

Recall that by definition, $p(\xi_{k-1} \, | \, z_{0 : k-1}, u_{0 : k-2}) = bel(\xi_{k-1})$:
$$
\therefore  \overline{bel}(\xi_{k)}= \int p(\xi_k \mid \xi_{k-1}, u_{k-1}) \; bel(\xi_{k-1}) \, d\xi_{k-1} 
$$

## Example

![[Bayes Filter-20251101205753510.png]]

![[Bayes Filter-20251101205839310.png]]

![[Bayes Filter-20251101210044014.png]]

![[Bayes Filter-20251101210356204.png]]
---
title: Mathematical Formulation of SLAM
tags:
  - robotics
date: 2023-09-23
---
This aims to formally describe the problem of SLAM with mathematical language.

Data sampling happens at discrete time steps $1 \dots k$ . We use $x$ to indicate the position of our robot, such that the positions at different time steps can be written as $x_{1},\dots,x_{k}$, constituting the trajectory of the robot.

We also assume that the map is made up of several landmarks, and at each time step, sensors can see a part of the landmarks and record their observations. Assuming there is a total of $N$ landmarks on the map, they are denoted as $y_{1},\dots ,y_{N}$.

Then, the process of the robot moving in the environment has 2 parts:
1. Motion – we want to describe how $x$ changes from $k-1$ to $k$.
2. Sensor observations – assuming the robot detects a landmark $y_{j}$ at position $x_{k}$, we need to describe this event in mathematical language.

### Motion Equation
Motion commands like “turn 15 degrees left” are carried out by a controller. In universal abstract terms, motion can be described as:
$$
\mathbf{x}_{k}=f(\mathbf{x}_{k-1}, \mathbf{u}_{k}, \mathbf{w}_{k})
$$
where $u_{k}$ is an input command, and $w_{k}$ is noise. The presence of noise means that this model is stochastic (some randomness involved).

### Observation Equation
This describes the process that the robot sees a landmark $\mathbf{y}_{j}$ at $\mathbf{x}_{k}$ and generates an observation data $\mathbf{z}_{k,j}$, such that:
$$
\mathbf{z}_{k,j}=h(\mathbf{y}_{j}, \mathbf{x}_{k}, \mathbf{v}_{k,j})
$$
where $v_{k,j}$ is the noise in this observation.

### Example
The specifics of these equations, such as the functions $f$ and $h$, depend on specific robots and how they can be parametrized. For example, a robot that moves in a plane would have its pose (position + rotation) described by two $x-y$ coordinates and an angle $\theta$, such that
$$
\mathbf{x}_{k}=[x_{1},x_{2},\theta]_k^\mathrm{T}
$$
The input command is the position and angle change between time interval $\mathbf{u}_{k} [\Delta x_{1},\Delta x_{2},\Delta \theta]_{k}^T$, so the motion equation can be parametrized as:
$$
\begin{bmatrix}
x_{1} \\
x_{2} \\
\theta \\
\end{bmatrix}_{k}
=
\begin{bmatrix}
x_{1} \\
x_{2} \\
\theta
\end{bmatrix}_{k-1}
+
\begin{bmatrix}
\Delta x_{1} \\
\Delta x_{2} \\
\Delta \theta
\end{bmatrix}_{k}
+
\mathbf{w}_{k}
$$
where $\mathbf{w}_{k}$ is noise. This is just a simple example with a linear relationship, most commands will be much more complex.

For observation, let’s say that the robot has a simple 2D laser sensor, which observes 2D landmarks by measuring the distance $r$ between the landmark and the robot, and the angle $\phi$. Let’s say that the landmark is at $\mathbf{y}_{j}=[y_{1},y_{2}]_{k}^T$, the pose is at $\mathbf{x}=[x_{1},x_{2}]_{k}^T$, and the observed data is $\mathbf{z}_{k,j}=[r_{k,j}, \phi_{k,j}]^T$. Then, the observation equation can be written as:
$$
\begin{bmatrix}
r_{k,j} \\
\phi_{k,j}
\end{bmatrix}
=
\begin{bmatrix}
\sqrt{ (y_{1,j}-x_{1,k})^{2}+ y_{2,j}-x_{2,k})^{2} } \\
\arctan\left( \frac{y_{2,j}-x_{2,k}}{y_{1,j}-x_{1,k}} \right)
\end{bmatrix}
+\mathbf{v_{k,j}}
$$

### Unified SLAM equation
The motion and observation equations can be summarized into the abstract form:
$$
\left\{ \begin{array}{l}
{\mathbf{x}_k} = f\left( {{\mathbf{x}_{k - 1}},{\mathbf{u}_k}}, \mathbf{w}_k \right),\quad k=1,\cdots, K\\
{\mathbf{z}_{k,j}} = h\left( {{ \mathbf{y}_j},{ \mathbf{x}_k}}, \mathbf{v}_{k,j} \right), \quad (k,j) \in \mathcal{O}
\end{array} \right. ,
$$
where $\mathcal{O}$ is a set that contains the information at which pose the landmark was observed. These equations together describe a basic SLAM problem:

- How to solve the estimate $\mathbf{x}$ (localization) and $\mathbf{y}$ (mapping) problem with the noisy control input $\mathbf{u}$ and sensor reading $\mathbf{z}$ data?

This is a **state estimation** problem: How do we estimate internal, hidden state variables through noisy measurement data?
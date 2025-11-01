---
title: Measurement Model
tags:
  - mte544
date: 2025-11-01
aliases: measurement model
---
Sensors do not measure the robot's pose directly. Instead, sensors produce readings $z_{k}$, such as:
- Range to a wall or landmark (LiDAR / sonar) 
- Bearing / angle to an object (camera)
- GPS coordinates
- Magnetometer heading
- Visual feature matches

So the measurement model is a function
$$
z_{k} = h(\xi_{k}, m)
$$
where $\xi_{k}$ is the robot's pose and $m$ is the map.

Unlike motion models which are probabilistic, measurement models are typically static.

### Example
Consider a robot that observes landmark at map coordinate $(x_{\ell}^{i}, y_{\ell}^{i})$. The robot measures three things for each landmark:

![[Measurement Model-20251101150355869.png]]

- $r_{k}^{i}$: Range/distance to landmark (noisy)
- $\phi_{k}^{i}$: Bearing/angle to landmark (noisy)
- $s_{k}^{i}$: Signature (e.g. average color) to landmark

Then, the measurements looks like
$$
z_{k} = \left(\begin{bmatrix}
r_{k}^{1} \\
\phi_{k}^{1} \\
s_{k}^{1}
\end{bmatrix}, \begin{bmatrix}
r_{k}^{2} \\
\phi_{k}^{2} \\
s_{k}^{2}
\end{bmatrix},\dots\right)
$$
These measurement values depend on the robot's pose and the map, so they can be written as functions of $\xi_{k}$ and $m$, i.e. $r_{k}^{i}(\xi_{k},m), \phi_{k}^{i}(\xi_{k},m)$ and $s_{k}^{i}(\xi_{k},m)$.
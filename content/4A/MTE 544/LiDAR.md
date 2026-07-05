---
title: LiDAR
tags:
  - mte544
  - robotics
date: 2025-11-01
aliases:
  - lidar
  - lidar beam model
---
LiDAR measures distance using laser light.
- A laser sends out a short light pulse.
- It reflects off objects in the environment.
- A photodetector measures the time of flight (how long the light takes to return).
- Light travels extremely fast, resulting in very accurate range measurements

Each laser provides a point in space $(x,y,z)$ and sometimes may also provide an intensity. A full scan produces a 3D map of the surroundings.

## LiDAR Types
Mechanical spinning LiDAR:
- Rotates 360° continuously
- Sends out many beams at different vertical angles
- Creates a 2D or 3D point cloud
- Common example: Velodyne VLP-16

Solid-State LiDAR (no moving parts)
- Uses MEMS mirrors or phased light array
- Smaller, cheaper, robust, but narrower FOV
- Example: Intel RealSense L515


## Robot Pose and LiDAR Data
At time $k$, the robot receives a LiDAR scan $z_{k}$, which consists of $N$ range measurements, $z_{k}^{1}, \dots, z_{k}^{N}$ , each with a corresponding bearing angle $\theta_{\text{sen}}^{1}, \theta_{\text{sen}}^{N}$.

Each point of $z_k^{i}$ first needs to be coordinate transformed to $(x_{\text{sen}}^{i}, y_{\text{sen}}^{i})$ in the LiDAR sensor frame:
$$
\begin{bmatrix} x^{i}_{\text{sen}} \\ y^{i}_{\text{sen}} \end{bmatrix} = z_{k}^{i}\begin{bmatrix}
\cos \theta^{i}_{\text{sen}} \\
\sin \theta^{i}_{\text{sen}}
\end{bmatrix}
$$
Then, we can convert to $(x_{z_{k}^{i}}, y_{z_{k}^{i}})$ in the global frame:
$$
\begin{bmatrix} x_{z_{k}^{i}} \\ y_{z_{k}^{i}} \end{bmatrix} =\begin{bmatrix} x_k \\ y_k \end{bmatrix} + \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x^{i}_{\text{sen}} \\ y^{i}_{\text{sen}} \end{bmatrix}
$$

## Beam Sensor Model
How do we get a posterior for the measurement, $p(z_{k}^{i} \mid \xi_{k}, m)$? How likely is this LiDAR scan, assuming the robot is at pose $\xi_k$ looking at map $m$?

For each ray, we consider 3 main sources of noise:
- Correct range with local measurement noise: nominal noise, etc. This would give a Gaussian centered at the expected range.
- Sensor failure/max-range error: Missed data, light absorbing objects. This would give a distribution with a spike at $z$ max
- Uniformly-distributed noise: Phantom readings, cross-talk, etc. This would give a uniform distribution obviously.

![[LiDAR-20251101230717497.png]]

The posterior can be found as a weighted sum of these:
$$
p(z_k^i \mid \xi_{k, m)}= \eta_1 p_{\text{hit}}(z_k^i \mid \xi_k, m) + \eta_2 p_{\text{max}}(z_k^i \mid \xi_k, m) + \eta_3 p_{\text{rand}}(z_k^i \mid \xi_k, m)
$$
- $\eta_{1}+\eta_{2}+\eta_{3} =1$

Assuming independence of each beam ($z_{k}^{i}$ for each $i$), this would be a multiplication:
$$
p(z_k \mid \xi_k, m) = \prod_{i=1}^N p(z_k^i \mid \xi_k, m)
$$

![[LiDAR-20251102003022920.png]]

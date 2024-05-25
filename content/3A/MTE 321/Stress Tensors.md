---
title: Stress Tensors
tags:
  - mte321
date: 2024-05-24
aliases:
  - stress tensors
---
## 3D Stress Tensor
The overall stress of a component can be expressed with a 3D stress tensor:
$$
\sigma=\begin{bmatrix}
\sigma_{xx}  & \tau_{xy} & \tau_{xz} \\
\tau_{yx} & \sigma_{yy} & \tau_{yz} \\
\tau_{zx} & \tau_{zy} & \sigma_{zz}
\end{bmatrix}
$$

![[Stress Tensors.png]]

For equilibrium, the cross-shears are equal, such that:
$$
\begin{align}
\tau_{yx}=\tau_{xy} \\
\tau_{zy}=\tau_{yz} \\
\tau_{xz}=\tau_{zx} 
\end{align}
$$
## 2D Stress Tensor
For a 2D component, we can use a 2D stress tensor:
$$
\sigma = \begin{bmatrix}
\sigma_{xx}  & \tau_{xy} \\
\tau_{yx} & \sigma_{yy}
\end{bmatrix}
$$
![[plane stress.png]]

For static equilibrium we once again need
$$
\tau_{xy}=\tau_{xy}
$$
The 2D stress tensor is symmetric, such that $\sigma=\sigma^{T}$.
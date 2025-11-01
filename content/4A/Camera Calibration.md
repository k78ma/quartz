---
title: Camera Calibration
tags:
  - mte544
date: 2025-10-30
aliases: camera calibration
---
Recall from [[Camera Basics|camera basics]] that a world point $\bar{P}^{w} = [x_{w} \,\,\, y_{w} \,\,\, z_{w} \,\,\, 1]^{T}$ projects to image pixels via
$$
\lambda \overline{p} = K \begin{bmatrix}
R_{w}^{c} \,\, | \,\, t_{w}^{c}
\end{bmatrix}\,\bar{P}^{w}
$$
Out of these, we need to calibrate:
- Intrinsic parameters $K \in \mathbb{R}^{3x3}$, i.e. ($\alpha_{u}, \alpha_{v}, u_{0}, v_{0}$)
- Extrinsic paramaters: $[R_{w}^{c} \,\, | \,\, t_{w}^{c}] \in \mathbb{R}^{3 \times 4}$

Additionally, we need to calibrate radial distortion, which cause lines to bend.

![[Camera Calibration-20251030165450302.png]]

The common correction model for this is:
$$
\begin{bmatrix}
u_{d} \\
v_{d}
\end{bmatrix} = (1+k_{1}r^{2})\begin{bmatrix}
u-u_{0} \\
v-v_{0}
\end{bmatrix} + \begin{bmatrix}
u_{0} \\
v_{0}
\end{bmatrix}
$$
where
$$
r = \sqrt{ (u-u_{0})^{2} + (v-v_{0})^{2} }
$$


We also may need to calibrate for misalignment of $u$ and $v$ axes, as some sensors do not have perfectly square pixels or perfectly orthogonal pixel grid axes.

Typically, we calibrate using a known pattern like a checkerboard. We detect the corners in multiple images, and use those known 3D→2D corresponds, and then solve for intrinsic, extrinsic, and distortion parameters.
---
title: 3D Angular Velocities
tags:
  - mte544
date: 2025-10-20
aliases: 3d angular velocities
---
Consider a frame $\{ R \}$ rotating with a fixed frame $\{ S \}$. For rotational axis $\phi \in \mathbb{R}^{3}$ and angle $\theta$, we have
$$
\begin{align}
\dot{X}_{R} = \omega \times X_{R} \\
\dot{Y}_{R} = \omega \times Y_{R} \\
\dot{Z}_{R} = \omega \times Z_{R}
\end{align}
$$
Noting the relation between $\{ R \}$ and $\{ S \}$ as $p^{s}=R_{r}^{s}p_{r}$, we can see $r_{1}$, the first column of $R$, is the coordinates of the unit vector on $X_{R}$ written with respect to $\{ S \}$, and so are $r_{2}$ and $r_{3}$ for $Y_{R}$ and $Z_{R}$, respectively.

Hence, we have
$$
\dot{r}_{i}, \omega^{s} \times r_{i}, \quad  i=1,2,3
$$
And thus:
$$
\dot{R}=\begin{bmatrix}
\omega^{s} \times r_{1} & \omega^{s} \times r_{2} & \omega^{s}\times r_{3}
\end{bmatrix} = \hat{\omega}^{s}R
$$
where
$$
\hat{\omega} = \begin{bmatrix}
0 & -\omega_{3} & \omega_{2} \\
\omega_{3} & 0 & -\omega_{1} \\
-\omega_{2} & \omega_{1} & 0
\end{bmatrix} \quad \Longrightarrow \quad \hat{\omega}=\dot{R}R^{T}
$$
We call $\hat{\omega} \in so(3)$, the [[Lie Algebra]] of $SO(3)$.

![[3D Angular Velocities-20251020134844122.png|495]]

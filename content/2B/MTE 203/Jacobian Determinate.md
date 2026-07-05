---
title: Jacobian Determinate
tags:
  - mte203
date: 2023-10-29
aliases:
---
The Jacobian determinate of functions $F, G,H$ with respect to variables $u, v, w$ is defined as:
$$
\frac{ \partial (F,G,H) }{ \partial (u,v,w) } = \begin{vmatrix}
F_{u} & F_{v} & F_{w} \\
G_{u} & G_{v} & G_{w} \\
H_{u} & H_{v} & H_{w}
\end{vmatrix} 
= \begin{vmatrix}
\frac{ \partial F }{ \partial u }  & \frac{ \partial F }{ \partial v }  & \frac{ \partial F }{ \partial w } \\
\frac{ \partial G }{ \partial u }  & \frac{ \partial G }{ \partial v }  & \frac{ \partial G }{ \partial w } \\
\frac{ \partial H }{ \partial u }  & \frac{ \partial H }{ \partial v }  & \frac{ \partial H }{ \partial w }
\end{vmatrix}
$$

---
title: "Grubler’s Formula"
tag:
date: 2023-08-27
---

Formula for determining the number of [[Robotics/Degrees of Freedom|Degrees of Freedom]] for planar and spatial robots.

>[!info] Definition
>Consider a mechanism consisting of $N$ links, where ground is also considered as a link. Let $J$ be the number of joints, $m$ be the number of degrees of freedom of a rigid body ($m = 3$ for planar mechanism, $m=6$ for spatial mechanisms). Let $f_{i}$ be the number of freedoms provided by joint $i$, and $c_{i}$ be the number of constraints provided by $i$ .where $f_{i} + c_{i} = m$ for all $i$.
>Then, Grubler's formula for the number of degrees of freedom of the robot is:
>$$
>\begin{align} \\
>\text{dof} &= \underbrace{ m(N-1) }_{ \text{rigid body freedoms} } - \underbrace{ \sum_{i=1}^{J}c_{i} }_{ \text{constraints} } \\
>&= m(N-1)-\sum_{i=1}^J(m-f_{i}) \\
>&\boxed{=m(N-1-J)+\sum_{i=1}^{J} f_{i}} \\ \\
>&= (\text{number of DOF})(\text{links} - 1 - \text{joints}) + \text{freedoms}
>\end{align}
>$$
>This only holds if all joint constraints are independent. If they are not independent, the formula provides a lower bound on the number of DOF.



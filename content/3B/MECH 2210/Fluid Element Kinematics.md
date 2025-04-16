---
title: Fluid Element Kinematics
tags:
  - mech2210
date: 2025-04-15
aliases:
  - fluid element kinematics
---
We want to form a mathematic description of the motion of fluid elements moving in a flow field. A small fluid element in the shape of a cube which is initially in one position will move to another position during a short time interval $\delta t$. We expect the element not only to translate but also have its volume changed (linear deformation), rotate, and undergo change in shape (angular deformation).

![[Fluid Element Kinematics-20250415214438001.png]]

Recall that the velocity field can be described by specifying the velocity $\mathbf{V}$ at all points, and we can write velocity as
$$
\mathbf{V}=u\mathbf{i}+v\mathbf{j}+w\mathbf{k}
$$
and the acceleration can be written as
$$
\mathbf{a}=\frac{D\mathbf{V}}{Dt}=\frac{ \partial \mathbf{V} }{ \partial t } +u\frac{ \partial \mathbf{V} }{ \partial x } +v\frac{ \partial \mathbf{V} }{ \partial y } +w\frac{ \partial \mathbf{V} }{ \partial z } 
$$

## Linear Motion and Deformation
T
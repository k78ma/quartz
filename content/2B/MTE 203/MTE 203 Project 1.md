---
title: Project 1
tags:
  - mte203
date: 2023-10-01
---
## Trajectory Analysis

### Plotting
Preliminary plotting shows us that $x(t), y(t), z(t)$ are all approximately sinusoidal:

![[Pasted image 20231003223759.png|500]]

### Curve fitting x(t)
Using the curve fitting tool in MATLAB, we get:
![[Pasted image 20231003223942.png|496]]

There doesn’t seem to be a better fit for this (adding more terms did very little), so we just use:
$$
x(t) = 249.8671 + 38.1467\cos(1.9766\times 10^{-4} t) + 28.1165\sin(1.9766\times 10^{-4} t) 
$$
This has:
- Maximum error: 34.9412
- Minimum error: 0.0001
- RMSE: 11.2820 

### Curve fitting y(t)
Similarly for $y(t)$:
![[Pasted image 20231003225321.png]]

This gives:
$$
y(t) = 0.0040 + -27.8914\cos(0.0002 t) + 38.3082\sin(0.0002 t) 
$$
This has:
- Maximum error: 34.9783
- Minimum error: 0.0041
- RMSE: 11.2840

### Curve fitting z(t)
Once again, MATLAB Fourier curve fitting gives:
![[Pasted image 20231003230117.png]]

So the function is:
$$
z(t) = -0.1167 + -6.2782\cos(3.9530 \times 10^-5t) + 49.4770\sin(3.9530 \times 10^-5t) 
$$
This has:
- Maximum error: 6.7818
- Minimum error: 0.0003
- RMSE: 2.3335


---
title: MTE 484 Lab 2
tags:
  - mte484
date: 2025-10-23
aliases: mte 484 lab 2
---
$$
\begin{align}
K_{1} = -2.1079 \\
\tau = 0.0197
\end{align}
$$
Motor equation:
$$
\begin{align}
\frac{\theta(s)}{V(s)}  & = \frac{K_{1}}{s(\tau s+1)} \\[2ex]
     & =  \frac{-2.1079}{s(0.0197 s+1)} \\[2ex] 
     & = \frac{-2.1079}{s}+ \frac{0.04152563}{0.0197s+1}
\end{align}
$$
Pole at:
$$
\begin{align}
0.0197s + 1  & = 0 \\
s = -\frac{1}{0.0197}  & = -50.76142132
\end{align}
$$



$$
\begin{align}
\frac{K_1/\tau}{s^2+\frac{1}{\tau}s+\frac{K_1}{\tau}} \\[2ex] 
\frac{K_{1}}{\tau} & =\frac{-2.1079}{0.0197} =-107 \\
\frac{1}{\tau} &  = \frac{1}{0.0197} = 50.76142132 \\
\end{align}
$$
$$
\frac{-107}{1s^{2} + 50.76142132s}
$$


```
stableRealPlantPoles = [0.7758];

stableComplexPlantPoles = [];

unstablePlantPoles = [1];

stablePlantPoles = [stableRealPlantPoles stableComplexPlantPoles];

qs = [stablePlantPoles unstablePlantPoles];

% coefficents go in order of the poles

cs = [0.00930649 -0.0105377];
```
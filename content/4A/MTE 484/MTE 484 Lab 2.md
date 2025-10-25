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
\text{Plant: } & \frac{K_1/\tau}{s^2+\frac{1}{\tau}s} \\[2ex] 
\frac{K_{1}}{\tau} & =\frac{-2.1079}{0.0197} =-107 \\[2ex]
\frac{1}{\tau} &  = \frac{1}{0.0197} = 50.76142132 \\[2ex] 
\therefore \text{Plant}  & =\frac{-107}{1s^{2} + 50.76142132s}
\end{align}
$$

```
% set time step
time_to_plot = 2;
T = 0.005;

%% Continuous Time
num = [-107];
denom = [1 50.7614 0];
cont_TF = tf(num, denom);
G = c2d(cont_TF, T);

pole(G)
zero(G)
zpk(G)

  -0.0012312 (z+0.9189)
  ---------------------
    (z-1) (z-0.7758)
```


Partial fraction decomposition:

![[MTE 484 Lab 2-20251025131230224.png|448]]



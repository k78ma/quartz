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

  Columns 1 through 5

  -0.2137 - 0.0912i  -0.2137 + 0.0912i   0.0974 - 0.3139i   0.0974 + 0.3139i   0.3984 - 0.0575i

  Columns 6 through 10

   0.3984 + 0.0575i   0.3216 + 0.3355i   0.3216 - 0.3355i  -0.0377 + 0.5182i  -0.0377 - 0.5182i

  Columns 11 through 15

  -0.4197 + 0.3845i  -0.4197 - 0.3845i  -0.6142 + 0.0282i  -0.6142 - 0.0282i  -0.5418 - 0.3721i

  Columns 16 through 20

  -0.5418 + 0.3721i  -0.2461 - 0.6522i  -0.2461 + 0.6522i   0.1564 - 0.7180i   0.1564 + 0.7180i

  Columns 21 through 25

   0.5318 - 0.5578i   0.5318 + 0.5578i   0.7722 - 0.2274i   0.7722 + 0.2274i   0.8186 + 0.1787i

  Columns 26 through 30

   0.8186 - 0.1787i   0.6664 + 0.5584i   0.6664 - 0.5584i   0.3569 + 0.8262i   0.3569 - 0.8262i


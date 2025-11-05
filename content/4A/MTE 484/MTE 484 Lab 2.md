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

## Stiction with Ball and Beam
- Upward (higher than before because we need to fight gravity): -0.48
- Downward (lower than before because gravity is helping us): -0.05

## Part E:
When ball is at 0, sensor reading = 310
When ball is at end, sensor reading = 630
Beam length = 41.7

$$
m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}} = 0.001303125
$$
$$
\begin{align}
0  & = 0.001303125 \cdot 310 + b  \\
b & = -0.40396875
\end{align}
$$
$$
\text{meters} = 0.001303125 \cdot (\text{sensor reading}) - 0.40397
$$


The motor rotates the motor gear with radius $r$. The gear pulls a lever arm of length $\ell$ attached to the beam. A small rotation of the motor (angle $\theta$) moves the end of the lever by an arc length $\Delta x = r\theta$.

The displacement causes the lever to rotate the beam, which is given by:
$$
\sin \phi \approx \phi = \frac{\Delta x}{\ell} = \frac{r\theta}{\ell}
$$
So the ratio is
$$
\frac{\phi}{\theta} = \frac{r}{\ell}
$$
Therefore, $K_{2} = \frac{r}{\ell}=\frac{2.54}{12}= 0.2166667$

$$
D(z^{-1}) =

\frac{

- 4.1722\,z^{-1}

+ 11.4610334\,z^{-2}

- 15.041011680938\,z^{-3}

+ 12.301798304500137\,z^{-4}

- 5.438853262170353\,z^{-5}

+ 0.8266580692435093\,z^{-6}}

{1

- 2.3821\,z^{-1}

+ 2.28145108\,z^{-2}

- 1.15646763878\,z^{-3}

+ 0.294935656944\,z^{-4}

- 0.069482286223\,z^{-5}

+ 0.047177611809\,z^{-6}}
$$

$$
D[z] =

\frac{

- 4.1722\,z

+ 11.4610334\,z^{2}

- 15.041011680938\,z^{3}

+ 12.301798304500137\,z^{4}

- 5.438853262170353\,z^{5}

+ 0.8266580692435093\,z^{6}}

{1

- 2.3821\,z

+ 2.28145108\,z^{2}

- 1.15646763878\,z^{3}

+ 0.294935656944\,z^{4}

- 0.069482286223\,z^{5}

+ 0.047177611809\,z^{6}}
$$

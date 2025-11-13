---
title: MTE 484 Lab 3
tags:
  - mte484
date: 2025-11-11
aliases: mte 484 lab 3
---
## Outer loop sampling time
$$
\omega_{0} = \frac{2\pi}{7} = 0.897597901
$$
$$
\omega_{bw} = \text{max}(\text{Re}(p_{i})) = 59.5291
$$
$$
\begin{align}
\omega_{s}  & > 5\times\text{max}\{ \omega_{bw}, \omega_{0} \} \\
 & > 5\times 59.5291 \\
& > 297.6455
\end{align}
$$
$$
T> \frac{2\pi}{297.6455}>0.02110962641 =22 \text{ ms}
$$
Plant:
$$
K_{2} \cdot \frac{K_{3}}{s^{2}} = \frac{-0.293675}{s^{2}}
$$
Discrete form:
$$
-0.293675  \cdot  \frac{z+1}{(z-1)^2}
$$

![[MTE 484 Lab 3-20251111144806951.png]]

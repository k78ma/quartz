---
title: RC Problem Example
tags:
  - mte220
date: 2023-10-19
---
The [[Rise Time & Fall Time|fall time]] of the RC circuit below is measured to be 2.6 ms. What is the value of C? What is the maximum digital frequency of this system?

![[RC Problem Example.png|321]]

We know:
$$
\begin{align}
t_{f} &= 2.6 = 2.2 \tau \\
\tau &= RC \\
tf &= 2.2RC \\
C &= \frac{t_{f}}{2.2R} = \frac{2.6m}{2.2 \times 10K} \\ \\
C &= 118 \text{ nF}
\end{align}
$$

The maximum digital frequency would be charging from 0 to 1 to 0 to 1, etc. 
![[RC Problem Example-2.png|424]]

We assume that we need at least one rise time and one fall time per cycle as the minimum. Any faster than that and there isn't enough charging/discharging to detect the values as 0s and 1s. Thus, one period is:
$$
T = t_{f} + t_{r} = 4.4\tau
$$
Thus:
$$
f_{max} = \frac{1}{T} = \frac{1}{4.4\tau} = \frac{1}{4.4 \times 2.6(m)} = 192 \text{ Hz}
$$



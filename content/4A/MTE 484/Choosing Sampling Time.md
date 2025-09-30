---
title: Choosing Sampling Time
tags:
  - mte484
date: 2025-09-08
aliases: choosing sampling time
---
To choose the sampling time, we consider the time scales of all signals and systems in our closed-loop [[Discrete-Time Control Systems|sampled-data system]]:
1. Plant bandwidth $\omega_{bw}$
2. Sampling frequency $\omega_{s} := \frac{2\pi}{T}$
3. Frequency of reference and/or disturbance and/or settling time ($\omega_{0}$)

Taking these into account, we have some options:
1. Choose $T$ small enough. Rule of thumb: $\omega_{s} > (5-10) \times \max \{ \omega_{bw}, \omega_{0} \}$.
2. Add continuous-time low pass filter
    ![[Choosing Sampling Time-20250908120452767.png|480]]
    The idea is to filter out the high frequency signals to avoid [[Sampled-Data Control Systems#Sampling time aliasing|aliasing]]

## Plant bandwidth
At high enough frequencies, the gains of all (physical) plants approach zero. At some point, if input is high enough frequency, you simply can't respond fast enough. $\omega_{bw}$ serves as an estimate for the fastest time scales for the plant.

![[Choosing Sampling Time-20250908114115246.png|501]]

Two ways to find $\omega_{bw}$:
1. Find $\omega$ where $| P(j\omega) |=-3 \text{ dB}$
2. $\omega_{bw} \approx \max_{{\text{poles } p_{i} \in P(s)}}{\text{Re}(p_{i})}$
    - For example, $P(s)=\frac{(s-2)(s+3)}{(s+4)(s+5)}$ would have $\omega_{bw} \approx 5$.

## Sampling frequency
Sampling frequency $\omega_{s} := \frac{2\pi}{T}$. We desire the sampling frequency to be high such that $\omega_{s} > \text{max}(\omega_{bw}, \omega_{0})$. 
- This means that we want a small sampling time $T$. However, this typically requires more expensive hardware, and may not even be feasible due to hardware limitations.
- If we sample too fast, there might not be time for computing new control actions.
- We might also reach the limits of our numerical precision

## Frequency of reference/disturbance/settling time
Frequency of reference and/or disturbance and/or settling time ($\omega_{0}$):
- Ex. $r(t)=\cos(\omega_{0}t)$
- Ex. $\omega_{0} = \frac{2\pi}{\text{settling time}}$


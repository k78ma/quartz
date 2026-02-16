---
title: Particle Filter
tags:
  - mte544
date: 2025-11-02
aliases:
  - particle filter
  - importance resampling
---
A particle filter represents a probability distribution with a large number of "particles" (samples). This is helpful for random variables whose pdf is unknown, so instead we draw samples.

Consider $M$ samples of the posterior $bel(\xi_{k-1})$:
$$
\Xi = \{\xi^{[1]},\xi^{[2]},\dots,\xi^{[M]}\}
$$
where each particle $\xi^{[i]}$ is a hypothesis about where the robot might be. If many particles cluster in one region, that region has high probability. If few particles appear in a region, that region has low probability.

## Particle Filter Localization
We start with the previous belief distribution represented by particles:
$$
\Xi_{k-1} = \{\xi^{[1]}_{k-1}, \dots, \xi^{[M]}_{k-1}\}.
$$
We apply the sample motion model to each particle to generate prediction samples to get $\overline{bel}[\xi_{k}]$
$$
\xi^{[i]}{k} \sim p(\xi_k \mid \xi^{[i]}{k-1}, u_{k-1}) \quad \longrightarrow \quad  \overline{\Xi}_{k} = \{\xi^{[1]}_{k}, \dots, \xi^{[M]}_{k}\}.
$$
We then do a measurement step by taking the the measurement from a (Lidar) sensor and evaluating each sample according to the sensor model:
$$
w^{[i]}_k = p(z_k \mid \xi^{[i]}_k, m)
$$
where $w_{k}^{[i]}$ is an importance weight. This evaluates how well each particle explains the actual measurement according to the sensor.

We would then draw new samples according to importance weight $w_{k}^{[i]}$ to get the next estimate $bel(\xi_{k})$. This is called **Importance Re-sampling with Replacement**.

### Importance Re-sampling
After the motion update, our particles represent the prediction distribution, $\overline{bel}(\xi_{k})$. After doing the measurement update with importance weights, our weights tell us how well each particle explains the LiDAR scan. But now, our set of particles does not match the true posterior distribution $bel(\xi_k)$. Instead, we have samples from $\overline{bel}(\xi_k)$ with weights that reflect how they should be redistributed.

Looking at the update rule:
$$
bel(\xi_{k}) = p(z_{k} \, | \, \overline{\xi}_{k}, m) \quad \Longrightarrow \quad  p(z_{k} \mid  \overline{\xi}_{k},m) = \frac{bel(\xi_{k})}{\overline{bel}(\xi_{k})} =: w_{k}
$$
This tell us how to convert samples from $\overline{bel}$ into samples from $bel$.

Thus, if we resample the particles of $\overline{bel}(\xi_{k})$ according to the distribution of $w_{k}$, we should be able to recover the distribution of $bel(\xi_{k})$. Importance sampling is “resampling with replacement”; we do not change any particle's value, we only change how frequently each one appears in the new set.
- Particles with high weight are selected many times
- Particles with low weight may disappear entirely

After this resampling, we get:
$$
\Xi_k = \{\xi_k^{[1]},\ \xi_k^{[2]}, \dots,\ \xi_k^{[M]}\}
$$
where the distribution of particles now approximates $bel(\xi_{k})$.

![[Particle Filter-20251102012010695.png]]

- Blue curve: Predicted distribution $\overline{bel}(\xi_{k})$ before sensor update
- Red curve: Correct posterior $bel(\xi_{k})$ after sensor update

Before resampling, the particles are spread out according to the blue curve; each particle gets a weight based on sensor likelihood. After resampling, p.articles cluster according to the red curve. Instead of explicitly shifting particles, we replicate good ones and delete bad ones.


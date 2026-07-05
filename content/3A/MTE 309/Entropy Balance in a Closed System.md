---
title: Entropy Balance in a Closed System
tags:
  - mte309
date: 2024-07-19
aliases:
  - entropy balance in a closed system
---
In a closed system, the entropy balance can be given as:
$$
\Delta S_{\text{system}}=S_{\text{in}}-S_{\text{out}}+S_{\text{gen}}
$$
where:
- $\Delta S_{\text{system}}$ is the change in total entropy of the system
- $S_{in}-S_{\text{out}}$ is the total entropy entering - total entropy leaving
- $S_{\text{gen}}$ is the total entropy generated

The above can also be written in differential form:
$$
\frac{dS}{dt}=\dot{S}_{\text{in}}-\dot{S}_{\text{out}}+\dot{S}_{\text{gen}}
$$

![[Entropy Balance in a Closed System.png|348]]

We can also write:
$$
\Delta S_{\text{sys}}=\sum \frac{Q_{k}}{T_{k}}+S_{\text{gen}}
$$
where $\sum Q_{k} / T_{k}$ is the sum of all differential amounts of heat transfer divided by temperature $T_{k}$ at location $k$ on the boundary. We can interpret this equation as:
- $\Delta S_{\text{sys}}$ is the change in number of microstates
- $\Sigma Q_{k} / T_{k}$ is the change in number of microstates due to heat addition
- $\Delta S_{\text{gen}}$ is the change in number of microstates due to irreversibilities

Recall that we always have:
$$
S_{\text{gen}}\geq 0
$$
Some more things to note:
- Adding/subtracting work $W$ does not change the number of microstates (does not change entropy).
- Adding heat $Q$ results in a large increase in number of microstates if the current temperature is low, or a small increase in number of microstates if the current temperature is already high.

## Example

![[MTE 309 LEC 27.pdf]]

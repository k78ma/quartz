---
title: Constant Volume Specific Heat
tags:
  - mte309
date: 2024-06-01
aliases:
  - constant volume specific heat
---
Constant-volume specific heat $c_{v}$ is a type of [[Specific Heat|specific heat]], signifying the energy required to raise the temperature of a unit mass of a substance by one degree at constant volume. 

![[Constant Volume Specific Heat.png|244]]

Since the volume is constant, all of the energy transfer goes into changing the temperature, such that we have
$$
q=\Delta u
$$
Thus, is is given by:
$$
\begin{align}
\int du  & = \int c_{v}(T) \, dT \\[2ex]  
du & =c_{v}(T)\;dT \\[2ex]
u_{2}-u_{1} & =\bar{c_{v}} (T_{2}-T_{1})
\end{align}
$$
The variation of specific heats with temperature is smooth and may be approximated as linear over small temperature intervals, so our equation above using $\bar{c}_{v}$ is valid if $\Delta T$ is small (a few hundred degrees). 

![[Specific Heat-1.png|608]]

- The flat (constant temperature) parts of the graph are parts where the added energy is going toward breaking toward breaking intermolecular bonds ([[Thermal Energy|latent energy]]), not temperature change ([[Thermal Energy|sensible energy]]).
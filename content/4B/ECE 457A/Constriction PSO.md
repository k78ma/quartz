---
title: Constriction PSO
tags:
  - ece457a
date: 2026-04-09
aliases: constriction pso
---
Early PSO studies showed that particle velocities may grow without a bound, oscillate around the optimum, and/or fail to converge.

To combat, a constriction factor was introduced to ensure stable particle trajectories. The key idea here is that the we **scale the velocity update** so that the particle motion is damped and converges.

Standard PSO:
$$
v_{i}(t+1) = wv_{i}(t)+ c_{1}r_{1}(p_{i}-x_{i}) +c_{2}r_{2}(g-x_{i})
$$
Constriction PSO:
$$
v_{i}(t+1) = \mathcal{X}[v_{i}(t)+ c_{1}r_{1}(p_{i}-x_{i}) +c_{2}r_{2}(g-x_{i})]
$$
where $\mathcal{X}$ is the constriction coefficient. It reduces the velocity magnitude and stabilizes swarm dynamics.

Let $\phi=c_{1}+c_{2}$. The constriction factor is given as:
$$
\mathcal{X} = \frac{2}{\left| 2-\phi - \sqrt{ \phi^{2}-4\phi } \right| }
$$
with the stability condition of $\phi>4$.

A common parameter configuration is $c_{1}=c_{2}=2.05$, which gives $\phi=4.1$ and $\mathcal{X}\approx 0.729$.

The velocity update is then:
$$
v_{i}(t+1) = 0.729[v_{i}(t)+ 2.05r_{1}(p_{i}-x_{i}) +2.05r_{2}(g-x_{i})]
$$

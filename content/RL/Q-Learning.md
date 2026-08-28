---
title: Q-Learning
tags:
  - rl
date: 2026-08-26
aliases: q-learning
---
Q-Learning is an [[On-Policy vs. Off-Policy|off-policy]] [[Temporal Difference Methods|temporal difference method]] that uses the update:
$$
q[s_{t}, a_{t}] \quad  \leftarrow \quad  q[s_{t}, a_{t}] + \alpha \Big(r[s_{t}, a_{t}] + \gamma \cdot \underset{a}{\operatorname{max}}\big[q[s_{t+1}, a] \big] - q[s_{t}, a_{t}] \Big)
$$
where $\alpha$ is a learning rate, and the choice of action at each step is derived from a different behavior policy $\pi'$.

![[Q-Learning-1787809622694.webp]]


In [[SARSA]] and [[Q-Learning]], the policy is updated by taking the maximum of the action values at each state (see [[Monte Carlo Methods|this equation]]). It can be shown that these updates are [[Lipschitz constant|contraction mappings]]; the action values will eventually converge, assuming that every state-action pair is visited an infinite number of times.

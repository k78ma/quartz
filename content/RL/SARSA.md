---
title: SARSA
tags:
  - rl
date: 2026-08-26
aliases: sarsa
---
State-Action-Reward-State-Action (SARSA) is an [[On-Policy vs. Off-Policy|on-policy]] [[Temporal Difference Methods|temporal difference method]], using the update:
$$
q[s_{t}, a_{t}] \quad \leftarrow \quad  q[s_{t}, a_{t}] + \alpha \Big(r[s_{t}, a_{t}] + \gamma \cdot q[s_{t+1}, a_{t+1}] - q[s_{t}, a_{t}]\Big)
$$
where $\alpha \in \mathbb{R}^{+}$ is the learning rate. The bracketed term is called the *TD error* and measures the consistency between the estimated action value $q[s_{t}, a_{t}]$ and the estimate $r[s_{t}, a_{t}]+\gamma \cdot q[s_{t+1}, a_{t+1}]$ after taking a single step.

Q-Learning is an [[On-Policy vs. Off-Policy|off-policy]] [[Temporal Difference Methods|temporal difference method]] that uses the update:
$$
q[s_{t}, a_{t}] \quad  \leftarrow \quad  q[s_{t}, a_{t}] + \alpha \Big(r[s_{t}, a_{t}] + \gamma \cdot \underset{a}{\operatorname{max}}\big[q[s_{t+1}, a] \big] - q[s_{t}, a_{t}] \Big)
$$
where now the choice of action at each step is derived from a different behavior policy $\pi'$.

In [[SARSA]] and [[Q-Learning]], the policy is updated by taking the maximum of the action values at each state (see [[Monte Carlo Methods|this equation]]). It can be shown that these updates are [[Lipschitz constant|contraction mappings]]; the action values will eventually converge, assuming that every state-action pair is visited an infinite number of times.
---
title: Temporal Difference Methods
tags:
  - rl
date: 2026-08-26
aliases: temporal difference methods
---
[[Dynamic Programming RL|Dynamic programming]] methods use a bootstrapping process to update the values to make them self-consistent under the current policy. [[Monte Carlo Methods|Monte Carlo methods]] sample the MDP to acquire information. Temporal difference (TD) methods combine both bootstrapping and sampling. However, unlike Monte Carlo methods, they update the values and policy *while* the agent traverses the states of the MDP instead of afterwards.

- [[SARSA]]
- [[Q-Learning]]

---
title: Tabular Reinforcement Learning
tags:
  - rl
date: 2026-08-24
aliases: tabular reinforcement learning
---
Tabular RL algorithms don't rely on function approximation. They are divided into model-based and model-free methods.

**Model-based methods** use the MDP structure explicitly and find the best policy from the transition matrix $Pr(s_{t+1}|s_{t}, a_{t})$ and reward structure $r[s,a]$. If these are known, this is a straightforward optimization problem that can be tackled using [[Dynamic Programming RL|dynamic programming]]. If they are unknown, they can (in principle) be estimated from observed MDP trajectories.

**Model-free methods** assume that the transition matrix and reward structure of the underlying MDP are unknown. These methods fall into two families:
- Value estimation approaches estimate the optimal [[Value Function|state-action value function]] and then assign the policy according to the action in each state with the greatest value.
- Policy estimation approaches directly estimate the optimal policy using a gradient descent technique without the intermediate steps of estimating the model or values.

Within each family, [[Monte Carlo Methods|Monte Carlo methods]] simulate many trajectories through the MDP for a given policy to gather information about how to improve this policy. Sometimes it is not feasible or practical to simulate many trajectories before updating the policy; [[Temporal Difference Methods|temporal difference methods]] update the policy while the agent traverses the MDP.


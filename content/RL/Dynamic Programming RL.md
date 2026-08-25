---
title: Dynamic Programming RL
tags:
  - rl
date: 2026-08-24
aliases:
  - dynamic programming
  - bootstrapping
---
Dynamic programming algorithms assume we have perfect knowledge of the transition and reward structure. In this respect, they are distinguished from most RL algorithms which observe the agent interacting with the environment to gather information about these quantities directly.

The [[Value Function|state values]] $v[s]$ are initialized arbitrarily (usually to zero). The deterministic policy $\pi[a|s]$ is also initialized (e.g., by choosing a random action for each state). The algorithm then alternates between iteratively computing the state values for the current policy (policy evaluation) and improving that policy (policy improvement).

**Policy evaluation:** We sweep through the states $s_{t}$, updating their values:
$$
v[s_{t}] \quad \leftarrow \quad  \sum_{a_{t}} \pi[a_{t}|s_{t}]\left( r[s_{t}, a_{t}]+ \gamma \cdot \sum_{s_{t+1}} Pr(s_{t+1} | s_{t}, a_{t})v[s_{t+1}] \right)
$$
where $s_{t+1}$ is the successor state and $Pr(s_{t+1}|s_{t}, a_{t})$ is the state transition probability. Each update makes $v[s_{t}]$ consistent with the value at the successor state $s_{t+1}$ using the Bellman equation for state values. This is termed *bootstrapping*.

**Policy improvement:** To update the policy, we greedily choose the action that maximizes the value for each state:
$$
\pi[a_{t}|s_{t}] \quad \leftarrow \quad \underset{a_{t}}{\operatorname{argmax}}\left[ r[s_{t}, a_{t}] + \gamma \sum_{s_{t+1}} \cdot  Pr(s_{t+1}|s_{t}, a_{t})v[s_{t+1}] \right]
$$
This is guaranteed to improve the policy according to the policy improvement theorem.

These two steps are iterated until the policy converges.

![[Dynamic Programming RL-1787630464331.webp]]

There are many variations of this approach:
- In *policy iteration*, the policy evaluation step is iterated until convergence before policy improvement. The values can be updated either in place or synchronously in each sweep.
- In *value iteration*, the policy evaluation procedure sweeps through the values just once before policy improvement.
- *Asynchronous* dynamic programming algorithms don't have to systematically sweep through all the values at each step but can update a subset of the states in place in an arbitrary order.

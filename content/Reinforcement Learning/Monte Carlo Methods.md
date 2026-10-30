---
title: Monte Carlo Methods
tags:
  - rl
date: 2026-08-25
aliases:
  - Monte Carlo methods
---
Unlike [[Dynamic Programming RL|dynamic programming]] algorithms, Monte Carlo methods don't assume knowledge of the MDP's transition probabilities and reward structure. Instead, they gain experience by repeatedly sampling trajectories from the MDP and observing the rewards. They alternate between computing the action values (based on this experience) and updating the policy (based on the action values).

To estimate the action values $q[s,a]$, a series of *episodes* are run.
- Each episode starts with a given state and action and thereafter follows the current policy, producing a series of actions, states and rewards. 
- The action value for a given state-action pair under the current policy is estimated as the average of the empirical returns (i.e., cumulative sums of time-discounted rewards) that follow each time this pair occurs. 
- Then, the policy is updated by choosing the action with the maximum value at every state:
$$
\pi[a|s] \quad \leftarrow \quad  \underset{a}{\operatorname{argmax}}\Big[ q[s,a] \Big]
$$
    
![[Monte Carlo Methods-1787710258520.webp]]


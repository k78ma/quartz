---
title: Value Function
tags:
  - rl
date: 2026-08-18
aliases:
  - value function
  - state value
  - action value
  - state-value function
  - state-action value function
---
The [[Markov Process#Markov Reward Process|return]] $G_{t}$ depends on the state $s_{t}$ and the policy $\pi[a|s]$. From this state, the agent will pass through a sequence of states, taking actions and receiving rewards. This sequence differs every time the agent starts in the same place since, in general, the policy $\pi[a_{t}|s_{t}]$, the state transitions $Pr(s_{t+1}|s_{t}, a_{t})$, and the rewards issued $Pr(r_{t+1}|s_{t}, a_{t})$ are all stochastic.

We can characterize how "good" a state is under a given policy by considering the **expected** return $v[s_{t}|\pi]$. This is the return that would be received on average from this state and is termed the *state value* or *state-value function*:
$$
v[s_{t}|\pi] = \mathbb{E}[G_{t}|s_{t}, \pi]
$$
- Informally, the state value tells us the long-term reward we can expect on average if we start in this state and follow the specified policy thereafter.
- It is highest for states where it's probable that subsequent transition will bring large rewards soon (assuming the discount factor $\gamma$ is less than one)

Similarly, the *action value* or *state-action value function* $q[s_{t}, a_{t}|\pi]$ is the expected return from executing action $a_{t}$ in state $s_{t}$:
$$
q[s_{t}, a_{t} |\pi] = \mathbb{E}\big[G_{t}|s_{t}, a_{t}, \pi \big]
$$
- The action value tells us the long-term reward we can expect on average if we start in this state, take this action, and follow the specified policy thereafter.
- Through this quantity, reinforcement learning algorithms connect future rewards to current actions (i.e resolve the [[RL Basics|temporal credit assignment problem]])

![[Expected Return-1787110537163.webp]]

#cards/rl
State-value function / State value
?
Characterizes how good a state is. It is the expected reward if we start in this state and follow the specified policy thereafter.
$$
v[s_{t}|\pi] = \mathbb{E} \big[G_{t}|s_{t}, \pi \big]
$$
<!--SR:!fsrs,2026-09-07T00:22:50.533Z,11,10.96433194,2.11121424,2,2,0,0,2026-08-27T00:22:50.533Z-->
+++

State-action value function / Action value
?
$$
q[s_{t}, a_{t} |\pi] = \mathbb{E}\big[G_{t}|s_{t}, a_{t}, \pi \big]
$$
Characterizes how good an action is based on the given state. It is the expected return if we start in this state, take this action, and follow the specified policy thereafter.
<!--SR:!fsrs,2026-09-07T00:22:35.074Z,11,10.96433194,2.11121424,2,2,0,0,2026-08-27T00:22:35.074Z-->
+++
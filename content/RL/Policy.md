---
title: Policy
tags:
  - rl
date: 2026-08-16
aliases: policy
---
The rules that determine the agent's action for each state in an [[Markov Process|MDP]] are known as the *policy*. 

![[Markov Process-1786923246130.webp]]

This may be *stochastic* (the policy defines a distribution over actions for each state) or *deterministic* (the agent always takes the same action in a given state).
- A stochastic policy $\pi[a|s]$ returns a probability distribution over each possible action $a$ for state $s$, from which a new action is sampled.
- A deterministic policy $\pi[a|s]$ returns one for the action $a$ that is chosen for state $s$ and zero otherwise.

A *stationary* policy depends only on the current state. A *non-stationary* policy also depends on the time step.

The environment and the agent form a loop. The agent receives the state $s_{t}$ and reward $r_{t}$ from the last time step. Based on this, it can modify the policy $\pi[a_{t}|s_{t}]$ if desired and choose the next action $a_{t}$. The environment then advances to the next state according to $Pr(s_{t+1}|s_{t}, a_{t})$ and issues a reward according to $Pr(r_{t+1}|s_{t}, a_{t})$.

![[Markov Process-1786923442990.webp]]

We want to choose a policy that maximizes the [[Expected Return|expected return]].
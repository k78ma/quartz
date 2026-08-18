---
title: Markov Process
tags:
  - dl
date: 2026-08-16
aliases:
  - Markov process
  - Markov reward process
  - Markov decision process
  - MDP
  - POMDP
---
## Markov process
A Markov process assumes that the world is always in one of a set of possible states.
- The word "Markov" implies that the probability of being in a state depends only on the previous states and not on the states before. 
- The changes between states are captured by the *transition probabilities* $Pr(s_{t+1}|s_{t})$ of moving to the next state $s_{t+1}$ given the current state $s_{t}$, where $t$ indexes the timestep.
- Hence, a Markov process is an evolving system that produces a sequence $s_{1}, s_{2}, s_{3}, \dots$ of states.

![[RL Basics-1786922071639.webp]]


## Markov Reward Process
A Markov reward process extends the Markov process to include a distribution $Pr(r_{t+1}|s_{t})$ over the possible rewards $r_{t+1}$ received at the next time step, given that we are in state $s_{t}$. This produces a sequence $s_{1}, r_{2}, s_{2}, r_{3}, s_{3}, r_{4}, \dots$ of states and the associated rewards.

![[Markov Process-1786922458262.webp]]

The Markov reward process also includes a discount factor $\gamma \in (0,1]$ that is used to compute the *return* $G_{t}$ at time $t$:
$$
G_{t} = \sum_{k=0}^{\infty} \gamma^{k}r_{t+k+1}
$$
The return is the sum of the cumulative discounted future rewards; it measures the future benefit of being on this trajectory. A discount factor of less than one makes rewards that are closer in time more valuable than rewards that are further away.

## Markov Decision Process
A [[Markov Decision Process]] or *MDP* adds a set of possible actions at each timestep.
- The action $a_{t}$ changes the transition probabilities, which are now written as $Pr(s_{t+1}|s_{t}, a_{t})$. 
- The rewards can also depend on the action and are now written as $Pr(r_{t+1}|s_{t}, a_{t})$. 
- An MDP produces a sequence of $(s_{1}, a_{1}, r_{2}), (s_{2}, a_{2}, r_{3}),\dots$ of states $s_{t}$, actions $a_{t}$ and rewards $r_{t+1}$ which are received at the subsequent timestep.
- The entity that performs the actions is known as the *agent*.

![[Markov Process-1786922929326.webp]]

## Partially observable Markov decision process
In a partially observable Markov decision process or *POMDP*, the state is not directly visible. Instead, the agent receives an observation drawn from $Pr(o_{t}|s_{t})$. Hence, a POMDP generates a sequence $s_{1}, o_{1}, a_{1}, r_{2}, s_{2},o_{2}, a_{2}, r_{3},\dots$ of states, observations, actions, and rewards. In general, each observation will be more compatible with some states than others but insufficient to identify the state uniquely.

![[Markov Process-1786923178375.webp]]

## Policy

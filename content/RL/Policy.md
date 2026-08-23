---
title: Policy
tags:
  - rl
date: 2026-08-16
aliases:
  - policy
  - optimal policy
---
The rules that determine the agent's action for each state in an [[Markov Process|MDP]] are known as the *policy*. 

![[Markov Process-1786923246130.webp]]

This may be *stochastic* (the policy defines a distribution over actions for each state) or *deterministic* (the agent always takes the same action in a given state).
- A stochastic policy $\pi[a|s]$ returns a probability distribution over each possible action $a$ for state $s$, from which a new action is sampled.
- A deterministic policy $\pi[a|s]$ returns one for the action $a$ that is chosen for state $s$ and zero otherwise.

A *stationary* policy depends only on the current state. A *non-stationary* policy also depends on the time step.

The environment and the agent form a loop. The agent receives the state $s_{t}$ and reward $r_{t}$ from the last time step. Based on this, it can modify the policy $\pi[a_{t}|s_{t}]$ if desired and choose the next action $a_{t}$. The environment then advances to the next state according to $Pr(s_{t+1}|s_{t}, a_{t})$ and issues a reward according to $Pr(r_{t+1}|s_{t}, a_{t})$.

![[Markov Process-1786923442990.webp]]

## Optimal policy
We want a policy that maximizes the return. For [[Markov Process|MDPs]] (but not [[Markov Process|POMDPs]]), there is is always a deterministic, stationary policy that maximizes the value of every state. If we know this optimal policy, then we get the optimal [[Value Function|state-value function]] $v^{*}[s_{t}]$:
$$
v^{\ast  }[s_{t}] = \underset{\pi}{\operatorname{max}}\Big[\mathbb{E}[G_{t}|s_{t}, \pi] \Big]
$$
Similarly, the optimal [[Value Function|state-action value function]] is obtained under the optimal policy:
$$
q^{\ast  }[s_{t}, a_{t}] = \underset{\pi}{\operatorname{max}}\Big[\mathbb{E}[G_{t} |s_{t}, a_{t}, \pi] \Big]
$$

Turning this on its head, if we knew the optimal action-values $q^{\ast}[s_{t}, a_{t}]$, then we could derive the optimal policy by choosing the action $a_{t}$ with the highest value:
$$
\pi[a_{t}|s_{t}] \quad \leftarrow \quad \underset{a_{t}}{\operatorname{argmax}}\Big[q^{\ast  }[s_{t}, a_{t}] \Big]
$$
- The notation here means set $\pi[a_{t}|s]$ to one for action $a$ and $\pi[a_{t}|s]$ to zero for other actions.

Some RL algorithms are based on alternately estimating the action values and policy ([[Tabular Reinforcement Learning]]).

#cards/dl 
Policy::A policy $\pi[a|s]$ determines the agent's action for each state. It can be stochastic (define a distribution) or deterministic.
<!--SR:!fsrs,2026-08-20T01:55:01.977Z,0,2.3065,2.11810397,1,1,0,1,2026-08-20T01:45:01.977Z-->
---
title: RL Basics
tags:
  - dl
date: 2026-08-16
aliases:
  - temporal credit assignment problem
---
[[Reinforcement Learning]] is a sequential decision-making framework in which agents learn to perform actions in an environment, with the goal of maximizing received returns.

Some challenges of RL:
- The reward is sparse; for example, for a chess game we just get a reward of +1, -1, or 0 at the end of the game if the agent wins/loses/draws. We must play an entire game to receive feedback.
- The reward is temporally offset from the action that caused it; a decisive advantage might be gained thirty moves before victory. We must associate the reward with this critical action. This is termed the *temporal credit assignment problem*.
- The environment is stochastic; the opponent doesn't always make the same move in the same situation, so it's hard to know if an action was truly good or just lucky.
- The agent must balance exploring the environment with exploiting what it already knows. This is called the *exploration-exploitation trade-off*.

In RL, we map observations of an environment to actions, aiming to maximize a numerical quantity that is connected to the reward received. In the most common case, we learn a *policy* that maximizes the expected *return* in a [[Markov Process|Markov decision process]].


---
title: Markov Decision Process
tags:
  - ml
  - robotics
date: 2024-02-09
aliases:
  - MDP
---
A Markov decision process is a variation of [[state machine]] in which:
- The transition functions are [[Stochastic vs. Deterministic|stochastic]], such that it defines a probability distribution over the next state given the previous state and input; each time it's evaluated, it draws a new state from that distribution.
- The output is equal to the state (or $g$ is the identity function)
- Some states or state-action pairs are more desirable than others

An MDP can be used to model interaction with an outside "world", such a single-player game. The idea is that an agent (a robot or a game-player) can model its environment as an MDP and try to choose actions that will drive the process into states that have high scores.

## Formalization
Formally, an MDP is $\langle S,A,T, R, \lambda \rangle$ where:
- $T: S \times A \times S \to \mathbb{R}$ is a *transition model*, where
$$
T(s,a,s')=P(S_{t}=s' | S_{t-1}=s, A_{t-1}=a) ,
$$
	specifying a conditional probability distribution
- $R:S\times A \to \mathbb{R}$ is a *reward function*, where $R(s,a)$ specifies how desirable it is to be state $s$ and take action $a$; and
- $\gamma \in [0,1]$ is a *discount factor*

A policy is a function $\pi:S \to A$ that specifies what action to take in each state.

## Solutions
- [[Policy Evaluation]]
- [[Finite-horizon MDP Solutions]]
- [[Infinite-horizon MDP Solutions]]
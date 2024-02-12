---
title: Finite-horizon MDP Solutions
tags:
  - ml
date: 2024-02-10
aliases:
---
Given an [[Markov Decision Process|MDP]], our goal is typically to find a policy that is optimal such that it gets as much total reward as possible, in expectation over the stochastic transitions that the domain makes. Finite-horizon MDPs have a horizon $H$ which indicates the number of steps of interaction that the agent will have with the MDP.
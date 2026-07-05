---
title: Informed Search
tags:
  - ece457a
date: 2026-02-15
aliases: informed search
---
Informed search is a strategy that explores the most promising branches of the state space first. As a result, it aims to find a solution more quickly, perform better when time is limited, and find better solutions by focusing on more profitable regions of the state space, while ignoring unpromising parts.

The key idea is to use problem-specific knowledge to prune the search space. This knowledge is incorporated in the form of a [[Heuristic|heuristic]].
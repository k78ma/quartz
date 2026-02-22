---
title: Information in Search Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: information in search algorithms
---
No free lunch: Averaged over all possible problems, no search algorithm can outperform random search unless it exploits problem-specific information.

Thus, if a search algorithm performs better than random, information must have been injected somewhere. This means that usually some assumptions about the problem structure are embedded (biased sampling, preferred moves, selective reinforcement). This advantage is called active information.

**Active information** quantifies how much a search algorithm reduces problem difficulty by exploiting structure, compared to blind random search.
- Zero active information $\implies$ uninformed (random) search
- Positive active information $\implies$ biased, informed search
- More active information $\implies$ stronger assumptions

Information can enter the algorithm through a variety of design choices:
- Representation
- Operators/neighborhoods
- Fitness evaluation
- Memory and bias mechanisms

For example:
- [[Tabu Search]]: Strong local structural assumptions
- [[Genetic Algorithms]]: Assumptions embedded in recombination and selection
- [[Ant Colony Optimization]]: Assumptions emerge through pheromone reinforcement

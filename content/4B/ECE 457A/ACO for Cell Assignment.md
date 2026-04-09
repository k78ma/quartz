---
title: ACO for Cell Assignment
tags:
  - ece457a
date: 2026-04-08
aliases: aco for cell assignment
---
The cell assignment problem in PCS (personal communication services) networks is difficult. 

Each cell has an antenna used to communicate with subscribers, occurring over pre-assigned radio frequencies. Groups of cells are connected to a switch, which routes traffic to satellite networks. We need to assign frequency channels to cells to minimize interference and maximize channel utilization. Close cells should not have close frequency ranges.

Given $n$ cells to be assigned to $m$ switches, where each switch $k$ has capacity $M_{k}$, we need to find an assignment that minimizes:
- Link cost (cell-switch connection)
- Handoff cost (mobility between cells)

Formulated as an ACO problem, each ant makes 2 decisions:
- Choose the next cell to be assigned
- Choose the switch to assign the selected cell to.

Then, we form a pheromone trail $\tau_{ij}$ associated with every possible assignment of cell $i$ to switch $j$.

Other parameters, we need to consider: max number of iterations, number of ants, transition rule, pheromone update rule.

![[ACO for Cell Assignment-1775703730889.webp]]

![[ACO for Cell Assignment-1775703747768.webp]]

![[ACO for Cell Assignment-1775703770237.webp]]

![[ACO for Cell Assignment-1775704034484.webp]]

## Mathematical Formulation
From the above, we can formulate this into a mathematical problem.

Let $c_{ik}$ be the cost of the link between cell $i$ and switch $k$, with $i=1,\dots,n$ and $k=1,\dots,m$.

Let:
$$
x_{ik} = \begin{cases}
1 & \text{if cell }i \text{ is assigned to switch }k \\
0 & \text{otherwise}
\end{cases}
$$
Let
$$
y_{ij} = \begin{cases}
1 & \text{if cells }i \text{ and }k \text{ are assigned to the same switch} \\
0 & \text{otherwise}
\end{cases}
$$
Let $h_{ij}$ be the handoff cost between cells $i$ and $j$ when they are assigned to different switches.

Let $d_{i}$ bet he call demand (number of calls) for cell $i$.

The objective is:
$$
\text{Minimize} f = \sum_{i=1}^{n} \sum_{k=1}^{m}c_{ik}x_{ik} + \sum_{i=1}^{n}\sum_{j=1}^{n} h_{ij}(1-y_{ij})
$$
Subject to:
$$
\sum_{i=1}^{n}d_{i}x_{ik} \leq M_{k}, \quad  k=1,\dots,m
$$
## ACO Algorithm
### Initialization
- Select maximum number of iterations: $\text{it}_{\text{max}}$
- Select number of ants: $\text{ant}_{\text{max}}$

### Main Loop
- While iteration $< \text{it}_{\text{max}}$:
    - For each ant ($\text{ant}<\text{ant}_{\text{max}}$)
        - Initialize ant parameters (pheromone, memory, etc.)
        - While number of assigned cells $<n$:
            - Select next cell using transition rule
            - Check capacity constraint of selected switch
            - Update local problem data (capacity, cost, etc.)
        - Evaluate solution using objective function.
    - Update pheromone trail (deposit + evaporate)
    - Retain best solution among all ants
    - Optionally reinforce pheromone based on global best

### Transition Rules
Let $T$ be the set of switches not yet assigned. The transition probability is:
$$
P_{ij} = \begin{cases}
\frac{\tau_{ij}^{\alpha}}{\sum_{l\in  T}\tau_{il}^{\alpha}}  & \text{ if } j\in  T, \\
0 & \text{otherwise}
\end{cases}
$$
This is a simple selection ratio based purely on pheromone, with no heuristic information, encouraging learned assignments.

If we want to add heuristic information:
$$
P_{ij} = \begin{cases}
\frac{[\tau_{ij}]^{\alpha} [ \eta_{ij}]^{\beta}}{\sum_{l\in  T}[\tau_{ij}]^{\alpha} [ \eta_{ij}]^{\beta}}  & \text{ if } j\in  T, \\
0 & \text{otherwise}
\end{cases}
$$
We can use heuristic information to reflect utilization or assignment cost, or bias ants toward promising switches. For example:
$$
\eta_{ij} = \frac{1}{\text{cost of assigning cell }i \text{ to switch }j}
$$
### Pheromone Update and Evaporation
Standard rule:
$$
\tau_{ij} = (1-\rho)\tau_{ij} + \Delta \tau_{ij}
$$
Alternative form:
$$
\tau_{ij} = (1-\rho)\tau_{ij} + \Delta \tau_{ij}
$$
$\Delta\tau_{ij}$ can be density-based, quantity-based (local cost), or online/delayed (solution quality).
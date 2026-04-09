---
title: ACO for Assembly Line Balancing
tags:
  - ece457a
date: 2026-04-09
aliases: aco for assembly line balancing
---
An assembly line is made of $m$ workstations arranged in series and in parallel. The production program consists of a set $V$ of $n$ tasks with precedence relations that need to be assigned to the workstations. 

Each task $j$ requires processing time $t_{j}>0$ and space $a_{j}$. 

Each station $k$ has a cycle time $c_{k}$, to carry out a subset of $V, S_{k}$ tasks assigned to it (workload) and space area $A_{k}$.

Typically, the cycle time is the same for all workstations, $c$, which determines the production rate $r=1 / c$. The cycle time represents an upper limit of the total time required by the tasks assigned to the workstation. 

$I_{k}=c-t(S_{k})$ is the idle time of workstation $k$. Total idle time is sum of all idle times over all stations.

The main object is to assign tasks to workstations to assign one or more of the following:
1. Minimize the number of workstations given a fixed value for the cycle time $c$ and space $A$ 
2. Minimize the cycle time $c$ given a fixed number of workstations $m$ and $A$ 
3. Minimize total space required given $c$ and $m$. 
4. Give $m, c$ and $A$ find a feasible solution (assignment)

We can have multi-objectives, like do 1 and 2 given $A$, or do $1$ and $3$ given $c$.

Example:

![[ACO for Assembly Line Balancing-1775708053742.webp]]

![[ACO for Assembly Line Balancing-1775708059740.webp]]

![[ACO for Assembly Line Balancing-1775708073510.webp]]

![[ACO for Assembly Line Balancing-1775708124766.webp]]

## ACO Solution
In TSP, each ant determines which city to add next to the solution, In this problem, each ant determines which assignment (task/workstation) to add next to the solution.

Each different assignment gets a pheromone trail parameter. A pheromone trail is associated with each assignment, where $\tau_{jk}$ denotes the pheromone trail associated with task $j$ getting assigned to workstation $k$.

Let $T$ be the set of tasks that are not yet assigned to a work station, whose predecessors are all assigned to work stations.

Then, we:
- Select max no of iterations, itmax
- Select number of Ants, antmax
- While number of iterations < itmax:
    - While current ant number < antmax:
        - Initialize ant parameters (pheromone, update, …, etc)
        - While ($T$ is not empty):
            - Select task $j$ to be assigned to workstation $k$ using transition rule.
            - If none of the tasks can be fit in the current workstation due to time or space capacity, open a new workstation
            - Update problem data
        - End ($T$ is empty)
        - Update pheromone trail using update rules and evaporation rule
        - Evaluate solution
    - Retain best solution of all ants
    - Update pheromone trail based on best solution (if desired)
- Return best solution

We can use the standard transition rules.
- Simple ratio
$$
P_{ij} = \begin{cases}
\frac{\tau_{jk}^{\alpha}}{\sum_{n\in  T}\tau_{nk}^{\alpha}}  & \text{ if } j\in  T, \\[2ex]
0 & \text{otherwise}
\end{cases}
$$
- Heuristics:
$$
P_{ij} = \begin{cases}
\frac{[\tau_{ij}]^{\alpha} [ \eta_{j}]^{\beta}}{\sum_{l\in  T}[\tau_{ij}]^{\alpha} [ \eta_{j}]^{\beta}}  & \text{ if } j\in  T, \\[2ex]
0 & \text{otherwise}
\end{cases}
$$

Heuristics can be related to utilization
$$
\eta_{j} = (1 / c) \left( \sum_{l\in  k} t_{l}+t_{j} \right)
$$
or if the space is checked:
$$
\eta_{j} = (1 / c) \left( \sum_{l \in  k} t_{l}+t_{j} \right) + (1 / A) \left( \sum_{l\in  k} a_{l}+a_{j} \right)
$$

The pheromone update and evaporation rule can be simple:
$$
\tau_{jk} = (1-\rho) \tau_{jk} + \Delta \tau_{jk}
$$
where $\Delta \tau_{jk}$ can be density, quantity, or online delayed using utilization as solution quality.

We can also use a pheromone update on the best solution:
$$
\tau_{jk} = (1-\rho)\tau_{jk}+\rho\Delta \tau_{jk}^{\text{best}}
$$

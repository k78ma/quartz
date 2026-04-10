---
title: Particle Swarm Optimization
tags:
  - ece457a
date: 2026-04-09
aliases:
  - particle swarm optimization
  - PSO
---
The idea of PSO is to simulate the collective behavior of social animals, such as birds flocking or fish schooling. The interest here is that these teams have no leader, and individuals have no knowledge of the global behavior of the group. They have the ability to move together based on social interaction between neighbours.

## Intuition
In bird flocking, there are three behaviours we need to account for:

![[Particle Swarm Optimization-1775765747081.webp]]

Another addition we can make is the **roost** (place for birds to rest) as an attractor for the birds. The roost is in the form of a memory of previous own best and neighborhood best positions (referred to as a **cornfield**). These two best positions serve as attractor, and by adjusting the positions of the flock proportion to the distance from the best positions, they converge to the goal.

![[Particle Swarm Optimization-1775765856741.webp]]

The key to realize here is that if the distance to the roost was changed by some unknown function, the individuals land on the minimum. PSO was born from this idea.
- **Particle** means individual or candidate solutions
- **Swarm** is used because the paradigm is a simplified version of bird flocking

PSO vs. GA:

![[Particle Swarm Optimization-1775765971382.webp]]

## Motion
Each particle holds:
- Current position $x_{i}$
- Current velocity $v_{i}$
- Personal best: the best position it achieved so far, $\text{pbest}_{i} / p_{i}$
- Neighborhood best: best position achieved by particles in its neighborhood, $\text{Nbest}$
    - If the neighborhood is the whole swarm, the best achieved by the whole swarm is called the global best, $\text{gbest}_{i} / p_{g}$
    - If the neighborhood is restricted to few particles, we call it the local best $\text{lbest} / p_{l}$
    - See [[PSO Neighborhood Topologies]]

Each particle adjusts its velocity to move towards its personal best and the neighborhood best. After the velocity is updated, the particle adjusts its positions. This is governed by the following **equations of motion:**
$$
\begin{align}
v_{t+1}^{id}  & = \underbrace{ w \cdot v_{t}^{id} }_{ \text{Inertia} } + \underbrace{ c_{1}r_{1}^{id}(\text{pbest}_{t}^{id}-x_{t}^{id}) }_{ \text{Cognitive component} } + \underbrace{ c_{2}r_{2}(\text{Nbest} - x_{t}^{id})U }_{ \text{Social component} } \\[2ex] 
x_{t+1}^{id}  & = x_{t}^{id} + v_{t+1}^{id}
\end{align}
$$
- $v$ is the velocity of particle $id$
- $w$ is the inertia weight
- $c_{1}, c_{2}$ are acceleration coefficients,
- $r_{1},r_{2}$ are randomly generated numbers in $[0,1]$
- $x$ is the position of the particle
- $t$ is the iteration number
- $i$ and $d$ are the particle number and dimension

![[Particle Swarm Optimization-1775766564534.webp|253]]


The inertia term reflects the fact that a particle cannot suddenly change its direction of movement. The $c_{1}$ and $c_{2}$ factors balance the weights in which each particle trust its own experience (cognitive) and trust the swarm component (social).

Note that the random number $r_{1}, r_{2}$ are generated for each dimension and not for each particle. (If the function we are optimizing has 3 variables, the particle will have 3 dimensions). If the numbers are generated for each particle, we call it **linear PSO**, which is usually sub-optimal to PSO.

Another important factor is to set a maximum velocity $V_{\text{max}}$. If this is too high, particles can fly past optimal solutions; if it's too low, particles can get stuck in local optima. Thus, this is usually set according to the domain of the search space.

After the motion update, each particle updates its own personal best (assuming a minimization problem):
$$
\begin{align}
\text{pbest}_{t+1}^{i} = \begin{cases}
x^{i}_{t+1} & \text{if } f(x^{i}_{t+1}) \leq f(\text{pbest}_{t}^{i}) \\[2ex] 
\text{pbest}_{t}^{i} &  \text{otherwise}
\end{cases}
\end{align}
$$
and the swarm updates its global best:
$$
\text{Nbest}_{t+1}^{i} = \underset{\text{pbest}_{t+1}^{i} \in  N}{\operatorname{argmin}} f(\text{pbest}_{t+1}^{i})
$$
## Algorithm

### Synchronous
- Initialize the swarm
- While termination criteria is not met:
    - For each particle:
        - Update particle velocity
        - Update particle position
        - Update particle personal best
    - Update Nbest,

### Asynchronous
- Initialize the swarm
- While termination criteria is not met:
    - For each particle:
        - Update particle velocity
        - Update particle position
        - Update particle personal best
        - Update Nbest,

In the asynchronous version, the neighborhood best update is moved into the particle update loop. Asynchronous tends to work better because particle use more up-to-date information.

Some potential termination criteria: Max number of iterations, max number of evaluations, acceptable solution found, no improvement over a number of iterations.

## Example

> [!example]- Example
> 
> ![[Particle Swarm Optimization-1775766956063.webp]]
> 
> ![[Particle Swarm Optimization-1775766970281.webp]]
> 
> ![[Particle Swarm Optimization-1775766990547.webp]]
> 
> ![[Particle Swarm Optimization-1775767023204.webp]]
> 
> ![[Particle Swarm Optimization-1775767037377.webp]]
> 


## Behavior
PSO typically exhibits rapid early convergence and a slower refinement phase. $w$ governs the explore/exploit behavior, such that a large $w$ means more exploration and a smaller $w$ means more exploitation.

Note that we often use a velocity magnitude limit
$$
\left| v_{ij} \right| < V_{\text{max}}
$$
to prevent particles from flying out of the search domain.
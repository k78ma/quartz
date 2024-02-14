---
title: Finite-horizon MDP Solutions
tags:
  - ml
date: 2024-02-10
aliases:
---
Given an [[Markov Decision Process|MDP]], our goal is typically to find a policy that is optimal such that it gets as much total reward as possible, in expectation over the stochastic transitions that the domain makes. Finite-horizon MDPs have a horizon $H$ which indicates the number of steps of interaction that the agent will have with the MDP.

So how do we find an optimal policy? The naive method is to enumerate all possible policies and calculating their [[Policy Evaluation|value functions]] and picking the best one, but this is a lot of work.

> [!note] Optimality Considerations
> An important observation to make is that, in a finite-horizon problem, the best action to take depends on the current state, but also on the horizon: imagine that you are in a situation where you could reach a state with reward 5 in one step or a state with reward 10 in two steps. If you have at least two steps to go, then you’d move toward the reward 10 state, but if you only have step left to go, you should go in the direction that will allow you to gain 5.

## Action-Value Functions
One way to find an optimal policy is to compute an optimal *action-value function*, $Q$. We define $Q^{h}(s,a)$ to be the expected value of:
- starting state $s$,
- executing action $a$, and
- continuing for $h-1$ more steps executing an optimal policy for the appropriate horizon on each step.

Similar to our definition of $V$ for [[Policy Evaluation|evaluating a policy]], we define the $Q$ function recursively across the horizon. The only difference is that, on each step with horizon $h$, rather than selecting an action specified by a given policy, we select the value of $a$ that will maximize the expected $Q^{h}$ value of the next state.
$$
\begin{align}
Q^{0}(s,a) & =0 \\[2ex]
Q^{1}(s,a) & =R(s,a)+0 \\[2ex]
Q^{2}(s,a) & =R(s,a)+\sum_{s'} T(s,a,s') \; \max_{a'} R(s',a')\\
\vdots \\ \\
Q^{h}(s,a) & =R(s,a)+\sum_{s'} T(s,a,s') \; \max_{a'} Q^{h-1}(s',a')
\end{align}
$$
We can solve for values of $Q$ with a simple recursive *value iteration* algorithm, which just computes $Q^{h}$ starting from horizon $0$ and working backward to the desired horizon $H$. Given $Q$, an optimal policy is easy to find:
$$
\pi_{h}^{*}(s) = \text{argmax}_{a} \; Q^{h}(s,a)
$$
There may be multiple possible optimal policies.

### Dynamic Programming for MDPs
Most methods for solving MDPs or computing value functions rely on dynamic programming to be efficient. The principle of [[dynamic programming]] is to compute and store the solutions to simple sub-problems that can be re-used later in the computation. 

Let’s consider what would happen if we tried to compute $Q^4 (s, a)$ for all ($s, a)$ by directly using the definition:
- To compute $Q^4 (s_i, a_{j})$ for any one $(s_{i}, a_{j})$, we would need to compute $Q^{3} (s, a)$ for all $(s, a)$ pairs.
- To compute $Q^3 (s_{i}, a_{j})$ for any one $(s_{i}, a_{j})$, we’d need to compute $Q^{2} (s, a)$ for all $(s, a)$ pairs.
- To compute $Q^{2} (s_{i}, a_{j})$ for any one $(s_{i}, a_{j})$, we’d need to compute $Q^{1} (s, a)$ for all $(s, a)$ pairs.
- Luckily, those are just our $R(s, a)$ values. 

So, if we have $n$ states and $m$ actions, this is $O((mn)^{3} )$ which is way too much, especially as the horizon increases. But observe that we really only have $mnh$ values that need to be computed, $Q^{h}(s,a)$ for all $h, s, a$. If we start with $h = 1$, compute and store those values, then using and reusing the $Q^{h-1} (s, a)$ values to compute the $Q^{h}(s, a)$ values, we can do all this computation in time $O(mnh)$, which is much better.

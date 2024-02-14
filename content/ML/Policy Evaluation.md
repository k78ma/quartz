---
title: Policy Evaluation
tags:
  - ml
date: 2024-02-12
aliases:
---
How do we specify the measure of the quality of a [[Markov Decision Process|policy]]? 

## Finite-horizon
For a given MDP policy $\pi$ and horizon $h$, we define the "horizon $h$ value" of a state, $V_{\pi}^{h}(s)$. This is the expected sum of rewards given that we start in state $s$, and execute policy $\pi$ for $h$ steps. 

We do this by induction on the horizon $h$, which is the number of steps left to go. The base case of is when there are no steps remaining, in which case, no matter what state we’re in, the value is $0$, so:
$$
V_{\pi}^{0}(s)=0
$$

Note that the indexing here is reversed! $V^{h}$ means that there are $h$ steps until the end. Above, $h = 0$ means that we are at the **end** of the process.

Then, we have:
$$
(\text{Value of policy at } h+1) = (\text{Reward in state } s) + (\text{Expected horizon } h \text{ value for next state})
$$
So, starting with horizons $1$ and $2$, we have:
$$
\begin{align}
V_{\pi}^{1}(s) & = 0 + R(s,\pi(s))  \\[2ex]
V_{\pi}^{2}(s) & =0+R(s, \pi(s)) + \sum_{s'}T(s, \pi(s), s')\cdot R(s', \pi(s'))
\end{align}
$$
Like we mentioned, the summation term is an *expected value*; we don't know exactly what state we're going to end up in but we do know a probability distribution for the possibilities. Recall that:
- $T(s, \pi(s), s')$ is the probability of transitioning to state $s'$ from state $s$ after taking $\pi(s)$.
- $R(s, \pi(s))$ is the reward for taking action $\pi(s)$ in state $s$. 
- In the above, we could replace $\pi(s)$ with action $a$.

In general, this becomes:
$$
V_{\pi}^{h}(s)=R(s,\pi (s)) + \sum_{s'}T(s, \pi(s), s')\cdot V_{\pi}^{h-1}(s')
$$
Once again, the sum over $s'$ is an *expected value*. We are considering all possible next states of $s'$ and computes their average of their $(h-1)$-horizon values, weighted by the probability that the transition function from state $s$ with the action chosen by the policy, $\pi(s)$, assigns to arriving in state $s'$.

We can say that a policy $\pi_{1}$ is better than $\pi_{2}$ for horizon $h$, if for all $s \in S$, $V_{\pi_{1}}^{h}(s)\geq V_{\pi_{2}}^{h}(s)$ and there exists at least one $s \in S$ such that $V_{\pi_{1}}^{h}(s)>V_{\pi_{2}}^{h}(s)$.

## Infinite-horizon
For infinite-horizon, we evaluate in terms of the expected discounted infinite-horizon value that the agent will get in the MDP if it executes that policy.

We define the value of a state $s$ under policy $\pi$ as
$$
\begin{align}
V_{\pi}(s) & =\mathbf{E}[R_{0}+\gamma R_{1}+\gamma^{2}R_{2}+ \dots |\;\pi,S_{0}=s]  \\
 & = \mathbf{E}[R_{0}+\gamma(R_{1}+\gamma(R_{2}+\gamma\dots))| \; \pi, S_{0}=s]
\end{align}
$$
The expectation of a linear combination of random variables is the linear combination of the expectations, so
$$
\begin{align}
V_{\pi}(s) & =\mathbf{E}[R_{0} | \;\pi, S_{0}=s] + \gamma \mathbf{E}[R_{1}+\gamma(R_{2}+\gamma \dots)| \; \pi, S_{0}=s] \\[2ex]
	 & =R(s, \pi (s)) + \gamma \sum_{s'}T(s,\pi(s), s')\;V_{\pi}(s')
\end{align}
$$
You could write down one of these equations for each of the $n = |S|$ states. There are $n$ unknowns $V_{\pi}(s)$. These are linear equations, and so it’s easy to solve them using [[Gaussian elimination]] to find the value of each state under this policy.
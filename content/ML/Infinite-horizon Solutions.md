---
title: Infinite-horizon Solutions
tags:
  - ml
date: 2024-02-13
aliases:
---
It's more common for the actual horizon of a problem to be unknown. If we tried to take our definition of $Q^{h}$ from [[Finite-horizon MDP Solutions]] and set $h=\infty$, $Q^{\infty}$ values for all actions could be infinite, and there would be no way to select one over the other.

There are 2 standard ways to deal with this problem:
- Take the average over all time-steps
- Take a *discounted* infinite horizon.

In the discounted infinite horizon, we select a discount factor $0 < \gamma <1$. Instead of trying to find a policy that maximizes expected finite-horizon undiscounted value, 
$$
\mathbf{E}\left[ \sum_{t=0}^{h} R_{t}\;|\;\pi,s_{0}\right]
$$
we will try to find one that maximizes *infinite-horizon discounted value*:
$$
\mathbf{E}\left[ \sum_{t=0}^{\infty} \gamma^{t}R_{t}\;|\;\pi,s_{0} \right] = \mathbf{E}[R_{0}+\gamma R_{1}+\gamma^{2}R_{2}+\dots| \; \pi, s_{0}]
$$
The $t$ indices here are not the number of steps to go, but the number of steps forward from the starting state (there is no notion of “steps to go” in the infinite horizon case).

Why do we do discounting? Two reasons:
- In economic terms, you’d generally rather have some money today than that same amount of money next week (because you could use it now or invest it). 
- Think of the whole process terminating, with probability 1 − γ on each step of the interaction. This value is the expected amount of reward the agent would gain under this terminating model.
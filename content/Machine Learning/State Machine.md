---
title: State Machine
tags:
  - ml
  - robotics
  - rl
date: 2024-02-08
aliases:
---
A *state machine* is a description of a process (computational, physical, economic) in terms of its potential sequences of *states*. 

The state of a system is defined to be all we need to know about the system to predict its future trajectories as well as possible. For example, it could be the position and velocity of an object or the locations of your pieces on a game board, or the current traffic densities on a highway network.

Formally, we define a state machine as $(S, X, Y, s_{0}, f,q)$, where:
- $S$ is set of states
- $X$ is set of inputs
- $Y$ is set of outputs
- $s_{0} \in S$ is the initial state of the machine
- $f: S \times X \to S$ is a transition function, which takes an input and a previous state and produces a next state. This can be more clearly written as $f(s_{t}, x_{t})=s_{t+1}$.
- $g: S \to Y$ is an output function, which takes a state and produces an output.

The basic operation of the state machine is to start with $s_{0}$, then iteratively compute $t \geq 1$:
$$
\begin{align}
s_{t} & =f(s_{t-1}, x_{t}) \\
y_{t} & =g(x)
\end{align}
$$
The diagram below illustrates this process:
![[State Machine.png|568]]

- Note that the "feedback" connection of $s_{t}$ back into $f$ has to be buffered or delayed by one time step – otherwise, what it is computing would not generally be well defined.

So, given a sequence of inputs $x_{1}, x_{2}, \dots$ the machine generates a sequence of outputs
$$
\underbrace{ g(f(s_{0}, x_{1})) }_{ y_{1} }, \underbrace{ g(f(f(s_{0}, x_{1}), x_{2})) }_{ y_{2} }, \dots
$$
We sometimes say machine *transduces* sequences $x$ into sequence $y$. The output at time $t$ can have dependence on inputs from steps $1$ to $t$. 

Finite state machines can be described using a [[State Transition Diagram]].
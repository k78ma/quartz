---
title: Block Diagram
tags:
  - syde351
date: 2024-06-25
aliases:
  - block diagram
---
Block diagrams consist of four basic symbols:
- **Arrow** – Used to represent a variable and the direction of the cause-and-effect relation
- Circle – Represents addition as well as subtraction, depending on the sign associated **with** the variable’s arrow
- **Block** – Used to represent the input-output relation of a transfer function
- **Take-off point** – used to obtain the value of a variable from its arrow, for use in another part of the diagram

![[Block Diagram.png]]

![[Block Diagram-1.png|480]]

- (a) $X(s)=F(s)\,K$
- (b) $X(s)=\frac{F(s)}{s}$

## Equivalent Block Diagrams
Let's say we have a system described by:
$$
\dot{x}(t)+ax(t)=f(t)
$$
In Laplace domain:
$$
\begin{align}
sX(s)+aX(s) & =F(s) \\
(s+a)X(s) & =F(s)
\end{align}
$$
Then, our transfer function is:
$$
\frac{X(s)}{F(s)}=\frac{1}{s+a}
$$
or
$$
\begin{align}
(s+a)X(s) & =F(s) \\[2ex] 
sX(s) & =F(s)-aX(s)  \\[2ex] 
X(s) & =\frac{1}{s}[F(s)-aX(s)]
\end{align}
$$
In block diagram form:

![[Block Diagram-2.png|508]]

## Examples
- Example 1: Mass-spring system with Dampener
- Example 2: Simple feedback loop system
- Example 3: Numerically defined system
- Example 4: Complex multi-DOF mass-spring system

![[SYDE 351 - Block Diagram Examples.pdf]]
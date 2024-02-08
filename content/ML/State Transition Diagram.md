---
title: State Transition Diagram
tags:
  - ml
date: 2024-02-08
aliases:
---
Finite [[State Machine|state machines]], where $S, X$ and $Y$ are all finite sets, can be described using *state transition diagrams*, in which nodes stand for states and arcs stand for transitions. Nodes are labeled by which output they generate and arcs are labeled by which input causes the transition.

![[State Transition Diagram.png|392]]

The state machine above reads binary strings and determines the parity of the number of zeros in the given string; all inputted binary strings end in state S1 if and only if they contain an even number of zeros.


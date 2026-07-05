---
title: Neural Engineering
tags:
  - amath449
date: 2026-04-13
aliases: neural engineering
---
In the neural engineering framework (NEF), we build neural networks by starting from the computation we want, instead of starting from learning rules and hoping the network discovers it.
- Ordinary deep learning: here's an architecture, train it
- Neural engineering: here's a variable we want represented, here's a transformation we want computed, here's a dynamic system I want implemented; implement it using neurons and synapses.

Neural engineering is built around three ideas:
1. Representation/[[Population Coding|population coding]]: A population of neurons represents some variable $x$.
2. [[Population Coding Transformations|Transformation]]: If one population represents $x$, another population can represent some function $f(x)$.
3. [[Population Coding Dynamics|Dynamics]]: Recurrent connections can implement differential equations and state-space systems

It seems that often the idea is that the encoding is fixed by biology or hardware; we don't get to choose the encoding weights (although sometimes we can). NEF gives us a way 
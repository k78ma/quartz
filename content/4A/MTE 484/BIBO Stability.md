---
title: BIBO Stability
tags:
  - mte484
date: 2025-09-12
aliases: bibo stability
---
An LTI system $P(s)$/$G[z]$ is **Bounded-Input Bounded-Output Stable** (BIBO stable) if every [[Time-Domain Stability|bounded]] input produces a bounded output.

In continuous time:
$$
| u(t) | \leq \overline{u} \quad  \forall \,t \geq 0 \quad \Longrightarrow \quad \exists \, \overline{y} \in  \mathbb{R}, \overline{y} > 0 \quad  \ni | y(t) | \leq \overline{y} \quad  \forall \, t \geq 0 
$$
In continuous time:
$$
| u(k) | \leq \overline{u} \quad  \forall \,k \in  \mathbb{Z}_{\geq 0} \quad \Longrightarrow \quad \exists \, \overline{y} \in  \mathbb{R}, \overline{y} > 0 \quad  \ni | y[k] | \leq \overline{y} \quad  \forall \, k\geq 0
$$
Notation
- $\forall$ = "For all"
- $e\xi \, : \,s$

Examples of simple bounded inputs:
- Unit step $\mathbb{1}(t)$ or $\mathbb{1}[k]$
- Sinusoid $\sin(t)$ or $\sin[k]$
- But it can be anything, as long as it's bounded by some values!


> [!theorem] BIBO Stability Theorem
> Assume $P(s)$/$G[z]$ is real, rational and proper. Then $P(s)$/$G[z]$ is stable if and only if it is BIBO stable.


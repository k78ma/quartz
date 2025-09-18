---
title: Constant BIBO Stability Proof
tags:
  - mte484
date: 2025-09-17
aliases: constant bibo stability proof
---
Suppose $c \in \mathbb{R}$ and $G[z]$ is real, rational, proper, and stable. Prove that $cG[z]$ is BIBO stable.
- Given: $G[z]$ is real, rational, proper and stable
- WTS: $cG[z]$ is BIBO stable

**Strategy A:**
1. Show $G[z]$ is BIBO stable
2. Show $cG[z]$ is BIBO stable

Proof:
- $G[z]$ is real, rational, proper and stable
- $\implies$ $G[z]$ is BIBO stable 
    - (*theorem from class*)
- Let $u[k]$ be bounded, such that $| u[k] | \leq \hat{u} \,\, \forall \,\, k \in \mathbb{Z}_{\geq 0}$.
- Let $\hat{y}[k] := (g \ast u)[k]$
- $\implies | \hat{y}[k] | \leq \overline{y} \,\, \forall \,\, k \in \mathbb{Z}_{\geq 0}$ for some $\hat{y}>0$ **(i)** 
    - (*definition of BIBO stability, $u$ is bounded*)
- Let $y[k]:=((cg)\ast u)[k]=c(g\ast u)[k]=c\hat{y}[k]$ 
    - (*linearity of convolution operation*)
- $\implies | y[k] |= | c \hat{y}[k] | \leq | c |\overline{y} \,\, \forall \, \,k \in \mathbb{Z}_{\geq 0}$ 
    - (*property of absolute value, (i)*)
- $\implies y[k]$ is bounded
    - (*definition of bounded*)
- $\implies cG[z]$ is BIBO stable
    - (*definition of BIBO stability*)

**Strategy B:**
1. Show $cG[z]$ is stable
2. Show $cG[z]$ is BIBO stable

Proof:
- $G[z]$ is real, rational, proper and stable
- Let $p$ be any poles of $cG[z]$
- $\implies cG[p] = \infty$ (*definition of a pole*)
- $\implies G[p] = \infty$
    - ($c \in \mathbb{R}$)
- $\implies p$ is a pole of $G[z]$
    - (*definition of a pole*)
- $\implies p \in \mathbb{D}$
    - (*definition of stability*, we defined $G[z]$ as stable)
- $\implies cG[z]$ is stable
    - (*definition of stability*)
- $cG[z]$ is real and rational
    - (*properties of real and rational functions*)
- $cG[z]$ is proper
    - (*example from class, $cG[z]$ is proper if $G[z]$ is proper*)
- $cG[z]$ is BIBO stable
    - (*theorem from class*)
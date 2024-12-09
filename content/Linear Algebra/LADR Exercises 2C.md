---
title: LADR Exercises 2C
tags:
  - lin-alg
date: 2024-12-08
aliases:
  - ladr exercises 2c
---

> [!question] Problem 1
> Show that the subspaces of $\mathbb{R}^{2}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{2}$ containing the origin, and $\mathbb{R}^{2}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 is simply a basis of $\mathbb{R}^{2}$ and hence generates all $\mathbb{R}^{2}$ with its span.


> [!question] Problem 2
> Show that the subspaces of $\mathbb{R}^{3}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{3}$ containing the origin, all planes in $\mathbb{R}^{3}$ containing the origin, and $\mathbb{R}^{3}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2, 3.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 contains two linearly independent $x,y\in \mathbb{R}^{n}$. Notice $\text{span}(x,y)=\{ ax+by\in \mathbb{R}^{n}\, : \,x,y\in \mathbb{R} \}$, hence bases of length 2 generate planes through the origin.
- 3: Any basis of length 3 is simply a basis of $\mathbb{R}^{3}$ and hence generates all $\mathbb{R}^{3}$ with its span.


> [!question] Problem 3
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.



> [!question] Problem 4
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p''(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.




> [!question] Problem 5
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5) \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.




> [!question] Problem 6
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5)=p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.




> [!question] Problem 7
> - (a) Let $U=\left\{  p \in \mathcal{P}_{4}(\mathbb{F})\, : \, \int_{-1}^{1} p =0  \right\}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.



> [!question] Problem 8
> Suppose $v_{1}, \dots,v_{m}$ is linearly independent in $V$ and $w\in V$. Prove that
> $$
> \dim  \text{span}(v_{1}+w, \dots, v_{m}+w)\geq m-1
> $$



> [!question] Problem 9
> Suppose $m$ is a positive integer and $p_{0},p_{1}, \dots,p_{m}\in \mathcal{P}(\mathbb{F})$ are such that each $p_{k}$ has degree $k$. Prove that $p_{0}, p_{1}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.



> [!question] Problem 10
> Suppose $m$ is a positive integer. For $0\leq k\leq m$, let
> $$
> p_{k}(x)=x^{k}(1-x)^{m-k}
> $$
> Show that $p_{0}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.


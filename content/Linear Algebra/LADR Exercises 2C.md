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
> Contents

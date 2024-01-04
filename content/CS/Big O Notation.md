---
title: Big O Notation
tags:
  - dsa
date: 2024-01-03
aliases:
---
The exact time [[Best-Case, Worst-Case, Average-Case Complexity|complexity]] function for any algorithm may very complicated and require too much detail to specify precisely. 

Big O notation ignores the difference between multiplicative factors. Letting $f(n)$ be the complexity of an algorithm based on the [[RAM Model of Computation]], we have:

- $f(n)=O(g(n))$ means $c\cdot g(n)$ is an *upper bound*  on $f(n)$. Thus, there exists some constant $c$ such that $f(n)\leq c\cdot g(n)$ for every large enough $n$.

- $f(n) = \Omega(g(n))$ means $c\cdot g(n)$ is an *lower bound*  on $f(n)$. Thus, there exists some constant $c$ such that $f(n)\geq c\cdot g(n)$ for every large enough $n$.

- $f(n) = \Theta(g(n))$ means $c_{1}\cdot g(n)$ is an upper bound on $f(n)$ and $c_{2}\cdot g(n)$ is a lower bound on $f(n)$. Thus, there exists some constant $c_{1}$ and $c_{2}$ such that $f(n)\leq c_{1}\cdot g(n)$ and $f(n)\geq c_{1}\cdot g(n)$ for every large enough $n$. This means that $g(n)$ provides a nice, tight bound on $f(n)$.
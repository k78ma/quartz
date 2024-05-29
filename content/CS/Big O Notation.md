---
title: Big O Notation
tags:
  - dsa
date: 2024-01-03
aliases:
---
The exact time [[Algorithmic Complexity|complexity]] function for any algorithm may very complicated and require too much detail to specify precisely. 

Big O notation ignores the difference between multiplicative factors. Letting $f(n)$ be the complexity of an algorithm based on the [[RAM Model of Computation]], we have:

$O$ notation: $f(n)=O(g(n))$ means $c\cdot g(n)$ is an *upper bound* on $f(n)$. Thus, there exists some constant $c$ such that $f(n)\leq c\cdot g(n)$ for every large enough $n$.

$\Omega$ notation: $f(n) = \Omega(g(n))$ means $c\cdot g(n)$ is an *lower bound*  on $f(n)$. Thus, there exists some constant $c$ such that $f(n)\geq c\cdot g(n)$ for every large enough $n$.

$\Theta$ notation: $f(n) = \Theta(g(n))$ means $c_{1}\cdot g(n)$ is an upper bound on $f(n)$ and $c_{2}\cdot g(n)$ is a lower bound on $f(n)$. Thus, there exists some constant $c_{1}$ and $c_{2}$ such that $f(n)\leq c_{1}\cdot g(n)$ and $f(n)\geq c_{1}\cdot g(n)$ for every large enough $n$. This means that $g(n)$ provides a nice, tight bound on $f(n)$.

#### Example
Is $2^{n+1} = \Theta(2^{n})$?

$f(n) = O(g(n))$ iff there exists a constant $c$ such that $f(n)\leq c\cdot g(n)$. This holds for $2^{n+1}$ because $2^{n+1} \leq c\cdot 2^{n}$ for $c \geq 2$.

$f(n) = \Omega(g(n))$ iff there exists a a constant $c>0$ such that $f(n) \geq c\cdot g(n)$. This would be satisfied for $0 < c\leq 2$.

Together the $O$ and $\Omega$ bounds imply $2^{n+1}=\Theta(2^{n})$.

### Dominance Relations of Big O classes
Faster growing functions dominate slower growing ones. When two functions $f(n)$ and $g(n)$ belong to different classes, we say $g$ dominates $f$ when $f(n)=O(g(n))$, written as $g \gg f$. For the standard Big O classes, we have:
$$
n! \gg 2^{n}\gg n^{3} \gg n^{2} \gg n \log n \gg n \gg \log n \gg 1
$$


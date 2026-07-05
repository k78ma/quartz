---
title: Lists
tags:
  - lin-alg
  - math
date: 2024-07-10
aliases:
  - lists
---
Before defining $\mathbb{R}^{n}$ and $\mathbb{C}^{n}$, we look at two important examples.
1. The set $\mathbb{R}^{2}$, which we can think of as a plane, is the set of all ordered pairs of real numbers:
$$
\mathbb{R}^{2}=\{ (x,y):x,y\in \mathbb{R} \}
$$
2. The set $\mathbb{R}^{3}$, which we can think of as an ordinary space, is the set of all ordered triples of real numbers:
$$
\mathbb{R}^{3}=\{ (x,y,z): x, y, z\in \mathbb{R} \}
$$
To generalize $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$ to higher dimensions, we discuss the concept of lists:

>[!definition] Definition: List, Length
> - Suppose $n$ is a non-negative integer. A list of length $n$ is an ordered collection of $n$ elements (which could be numbers, other lists, or more abstract objects)
> - Two lists are equal if and only if they have the same length and the same elements in the same order.
> - A list of length $n$ is often called an $n$-tuple.

Lists are often written as elements separated by commas and surrounded by parentheses. Thus, a list of length two is an ordered pair that might be written as $(a, b)$. A list of length three is an ordered triple that might be written as $(x,y,z)$. A list of length $n$ might look like this:
$$
(z_{1},\dots,z_{n})
$$
We sometimes use the word list without specifying its length. Remember, by definition each list has a finite length that is a nonnegative integer. Thus an object that looks like $(x_{1},x_{2},\dots)$, which might be said to have infinite length, is not a list. 

A list of length 0 looks like this: $()$. We consider such an object to be a list so that some of our theorems will not have trivial exceptions.

Lists differ from finite sets in two ways: in lists, order matters and repetitions have meaning; in sets, order and repetitions are irrelevant.
- The lists $(3,5)$ and $(5,3)$ are not equal, but the sets $\{ 3,5 \}$ and $\{ 5,3 \}$ are.
- The lists $(4,4)$ and $(4,4,4)$ are not equal (they do not have the same length), but $\{ 4,4 \}$ and $\{ 4,4,4 \}$ both equal the set $\{ 4 \}$.

Sometimes, when we consider lists of vectors, we do not use surrounding parentheses. For example, $(4,1,6), (9,5,7)$ is a list of length two of vectors in $\mathbb{R}^{3}$.
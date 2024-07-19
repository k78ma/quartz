---
title: ADM Chapter 1 Exercises
tags:
  - dsa
  - problems
date: 2024-07-17
aliases:
  - adm chapter 1 exercises
---
## Finding Counterexamples

>[!question] Exercise 1-1
>Show that $a+b$ can be less than $\min(a,b)$.

This occurs if $a, b<0$. For example, take $a=-5$ and $b=-8$. This gives us
$$
a+b=(-5)+(-8)=-13
$$
and
$$
\min(a,b)=b=-8
$$

>[!question] Exercise 1-2
>Show that $a\times b$ can be less than $\min(a,b)$.

This occurs if $b<0$ and $a>1$. For example, $a=2$ and $b=-3$ gives:
$$
a\times b=2\times-3=-6
$$
and
$$
\min(a,b)=b=-3
$$
>[!question] Exercise 1-3
>Design/draw a road network with two points $a$ and $b$ such that the fastest route between $a$ and $b$ is not the shortest route.

We can have:
- Path 1: $a$ to $b$ directly is short but slow
- Path 2: $a$ to $b$ through some other point $c$ is longer but faster.

For example, Path 1 can be 30 km with a speed limit of 30 km/h. Then, the travel time would be:
$$
30 \text{ km}\times \frac{1\text{ h}}{30\text{ km}}=1 \text{ h}
$$
Path 2 is longer at 60km but with a speed limit of 120 km/h. Then, the travel time would be:
$$
60 \text{ km}\times \frac{1 \text{ h}}{120 \text{ km}}=0.5 \text{ h}
$$

>[!question] Exercise 1-4
>Design/draw a road network with two points a and b such that the shortest route between a and b is not the route with the fewest turns.

## Proofs of Correctness








## Induction






## Estimation






## Implementation Projects





## Interview Problems





## LeetCode




## HackerRank




## Programming Challenges
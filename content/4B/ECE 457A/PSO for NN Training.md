---
title: PSO for NN Training
tags:
  - ece457a
date: 2026-04-09
aliases: pso for nn training
---
Here's an example of a PSO optimizing the weights of a NN performing XOR.

![[PSO for NN Training-1775767635693.webp]]

Each particle is a 9D vector:
$$
x = [w_{1}, w_{2}, w_{3}, w_{4}, b_{1}, b_{2}, b_{3}, v_{1}, v_{2}]
$$
Our objective is to minimize the error between the desired and actual outputs of the network. This is done by randomly initializing a group of particles and letting them move in the search space until an acceptable error is reached.
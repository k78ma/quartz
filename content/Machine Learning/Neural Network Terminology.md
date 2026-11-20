---
title: Neural Network Terminology
tags:
  - dl
date: 2026-11-18
aliases: neural network terminology
---
Input layer
?
Variables which are supplied to the network $(x_{1}, x_{2}, x_{3})$.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-11-22T08:44:26.362Z,4,3.94605407,1,2,2,0,0,2026-11-18T08:44:26.362Z-->
+++

Hidden layer
?
Group of intermediate variables that are computed at the same stage $(h_{1},h_{2}, h_{3}, h_{4})$ .

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-11-26T08:26:28.073Z,8,8.2956,1,2,1,0,0,2026-11-18T08:26:28.073Z-->
+++

Output layer
?
Variables that the network returns $(y_{1}, y_{2})$.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-11-26T08:44:34.113Z,8,8.2956,1,2,1,0,0,2026-11-18T08:44:34.113Z-->
+++

Hidden unit
?
One element in the intermediate hidden representation/layer, such as $h_{1}$. Also called a neuron.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-11-26T08:51:23.170Z,7,7.31530068,2.11121424,2,2,0,0,2026-11-19T08:51:23.170Z-->
+++


Pre-activation
?
Weighted sum of the incoming values plus a bias to a given layer, before the activation function is applied.
- Value of $h_{\bullet}$ before activation a function

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-12-01T08:48:55.960Z,12,11.6874828,1,2,2,0,0,2026-11-19T08:48:55.960Z-->
+++

Activation
?
The value of a hidden unit after activation function is applied.
- $h_{1}$ would be the name of the unit whereas its activation is its actual current value.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-12-01T08:51:29.406Z,12,11.6874828,1,2,2,0,0,2026-11-19T08:51:29.406Z-->
+++

Fully-connected
?
Every element/unit in one layer connects to every element in the next.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-11-26T08:47:28.919Z,8,8.2956,1,2,1,0,0,2026-11-18T08:47:28.919Z-->
+++

Network width::Number of hidden units in each layer.
<!--SR:!fsrs,2026-11-27T09:02:33.869Z,8,8.2956,1,2,1,0,0,2026-11-19T09:02:33.869Z-->

Network depth::Number of hidden layers.
<!--SR:!fsrs,2026-11-27T09:02:25.719Z,8,8.2956,1,2,1,0,0,2026-11-19T09:02:25.719Z-->

Why do we generally prefer deep networks over shallow ones?::Depth efficiency – some functions can be approximated much more efficiently with deep networks. It would require exponentially more hidden units for a shallow network to achieve an equivalent approximation to that of a deep network.
<!--SR:!fsrs,2026-11-19T09:12:32.303Z,0,2.3065,2.11810397,1,1,0,1,2026-11-19T09:02:32.303Z-->
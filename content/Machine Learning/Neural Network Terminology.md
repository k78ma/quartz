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
<!--SR:!fsrs,2027-01-03T01:13:56.146Z,41,41.28765564,1,2,3,0,0,2026-11-23T01:13:56.146Z-->
+++

Hidden layer
?
Group of intermediate variables that are computed at the same stage $(h_{1},h_{2}, h_{3}, h_{4})$ .

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2027-01-08T05:12:45.020Z,42,41.57871783,1,2,2,0,0,2026-11-27T05:12:45.020Z-->
+++

Output layer
?
Variables that the network returns $(y_{1}, y_{2})$.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2027-02-06T05:12:11.241Z,71,70.63155138,1,2,2,0,0,2026-11-27T05:12:11.241Z-->
+++

Hidden unit
?
One element in the intermediate hidden representation/layer, such as $h_{1}$. Also called a neuron.

![[Neural Network Terminology-1794990234407.webp|528]]
<!--SR:!fsrs,2026-12-31T05:04:14.050Z,34,34.10547749,2.1043314,2,3,0,0,2026-11-27T05:04:14.050Z-->
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
<!--SR:!fsrs,2027-01-08T05:14:08.264Z,42,41.57871783,1,2,2,0,0,2026-11-27T05:14:08.264Z-->
+++

Network width::Number of hidden units in each layer.
<!--SR:!fsrs,2027-02-01T09:12:07.645Z,66,65.62422648,1,2,2,0,0,2026-11-27T09:12:07.645Z-->

Network depth::Number of hidden layers.
<!--SR:!fsrs,2027-02-01T09:13:22.494Z,66,65.62422648,1,2,2,0,0,2026-11-27T09:13:22.494Z-->

Why do we generally prefer deep networks over shallow ones?::Depth efficiency – some functions can be approximated much more efficiently with deep networks. It would require exponentially more hidden units for a shallow network to achieve an equivalent approximation to that of a deep network.
<!--SR:!fsrs,2026-12-02T01:44:10.810Z,12,11.6874828,1,2,2,0,0,2026-11-20T01:44:10.810Z-->
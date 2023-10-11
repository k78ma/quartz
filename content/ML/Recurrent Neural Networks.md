---
title: Recurrent Neural Networks
tags:
  - ml
date: 2023-10-11
aliases:
  - RNN
  - RNNs
---
Recurrent neural networks have loops in them, allowing information to persist.

![[Recurrent Neural Networks.png|338]]

Here, a chunk of neural network $A$, looks at some input $x_{t}$ and outputs a value $h_{t}$. A loop allows information to be passed from one step of the network to the next. In contrast to one-direction feedforward neural networks, it allows the output from some nodes to affect subsequent input to the same nodes.

We can "unroll" recurrent neural networks to instead think about them as multiple copies of the same network, each passing a message to a successor:

![[Recurrent Neural Networks-1.png|500]]

This chain-like nature makes RNNs ideal for sequences and lists.
---
title: Backpropagation
tags:
  - ml
date: 2023-10-12
---
Backpropagation is used in training feedforward neural networks for supervised learning, which involves two parts: forward pass and backward pass (backpropagation).
#### Forward Pass
1. **Input layer:** The input data is fed to the network
2. **Hidden layers and output layer:** The input data is propagated layer by layer through the network until it reaches the output layer. The propagation involves calculating the weighted sum of inputs and applying an activation function at each neuron.
3. **Loss computation:** The output from the network is compared to the desired ground truth, and a loss is computed using a loss function.

#### Backpropagation
1. **Compute gradients:** The [[Gradient Vector|gradient]] of a loss function ($\nabla L$) with respect to each weight and bias in the network is computed. This involves applying the chain rule to compute the derivative of the loss with respect to the weights and biases through each layer from the output back to the input.
2. **Update weights:** The weights and biases are updated in the direction that minimally decreases loss, typically using [[gradient descent]].

Backpropagation equation:
$$
\frac{ \partial L }{ \partial w_{ij} } =\frac{ \partial L }{ \partial a_{j} } \frac{ \partial a_{j} }{ \partial z_{j} } \frac{ \partial z_{j} }{ \partial w_{ij} } 
$$
- $L$ is the loss function
- $w_{ij}$ is weight connecting neuron $i$ (previous layer) to neuron $j$ (next layer)
- $a_{j}$ is the [[activation]] of neuron $j$
- $z_{j}$ is the weighted sum of the inputs to neuron $j$

In the equation, we have:
- $\frac{ \partial L }{ \partial a_{j} }$: Represents how much the loss $L$ changes with respect to a change in the activation $a_{j}$ of neuron $j$
- $\frac{ \partial a_{j} }{ \partial z_{j} }$: Represents how much the activation $a_{j}$ of neuron $j$ changes with respect to the change in the weighted sum of its inputs $z_{j}$. This term is typically the derivative of the activation funciton.
- $\frac{ \partial z_{j} }{ \partial w_{ij} }$: Represents how much the weighted sum $z_{j}$ changes with respect to a change in the weight $w_{ij}$. 
	- This is equal to the activation $a_{i}$ of the neuron $i$ in the previous layer since $z_{j} = w_{ij} \cdot a_{i} \dots$

The product of these three terms gives the gradient of the loss with respect to the weight $w_{ij}$. The weight $w_{ij}$ is then updated in the opposite direction of the gradient to minimize the loss (the gradient $\nabla L$ represents the direction of the steepest increase of the loss function). The update is formulated as:
$$
w_{ij}^{new} = w_{ij}^{old} - \eta \frac{ \partial L }{ \partial w_{ij} } 
$$

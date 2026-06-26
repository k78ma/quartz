---
title: Shattered Gradients
tags:
  - dl
date: 2026-05-03
aliases: shattered gradients
---
## Sequential processing
Basic neural networks do **sequential** data processing, where the output of each layer is passed directly to the next layer. For example, a 3-layer sequential network would be defined as:
$$
\begin{align}
h_{1} & =f_{1}[x, \phi_{1}] \\
h_{2}  & = f_{2}[h_{1}, \phi_{2}] \\
h_{3} & = f_{3}[h_{2}, \phi_{3}] \\
y & =f_{4}[h_{3}, \phi_{4}]
\end{align}
$$
where $h_{1}, h_{2}, h_{3}$ are computed intermediate hidden layers, $x$ is the input, $y$ is the output, and $f_{k}[\bullet, \phi_{k}]$ is the processing function.

![[Shattered Gradients-1781666952269.webp]]

In a standard fully-connected neural network, $f_{k}$ computes a linear transformation followed by an activation function, and the parameters $\phi_{k}$ consist of weights and biases of the linear transformation. In a convolutional neural network, $f_{k}$ applies the convolution operation, and $\phi_{k}$ consist of convolution kernel weights and biases.

We can alternatively think of this network as a nested function:
$$
y = f_{4}\Bigg[f_{3}\bigg[f_{2} \Big[f_{1}[x, \phi_{1}], \phi_{2}\Big], \phi_{3} \bigg], \phi_{4} \Bigg]
$$

## Limitations of sequential processing
In principle, we can add as many layers as we want; we've seen that adding more layers does improve performance, as in the case of [[VGG]] vs. [[AlexNet]]. However, image classification performance decreases again as further layers are added (see Figure 11.2). This is surprising considering that [[Double Descent|double descent]] tells us that over-parameterized models still perform better. The decrease in performance is present for both the training set and testing set, which implies that the problem is training deeper networks, rather than inability to generalize.

![[Shattered Gradients-1781670150790.webp]]

This phenomenon is not complete understood. One conjecture is that at initialization, the loss gradients change unpredictably when we modify parameters in early network layers. With appropriate [[Parameter Initialization|weight initialization]], the gradient of the loss with respect to these parameters will be reasonable (no [[Vanishing + Exploding Gradient Problem|vanishing/exploding gradient]]). However, the derivative assumes an infinitesimal change in the parameter, whereas our optimization uses a finite step-size. Any reasonable choice of step size may move to a place with a completely different and unrelated gradient; the loss surface looks like a range of tiny mountains rather than a smooth structure. Thus, we don't make progress in the way that we do when the loss function gradient changes more slowly.

This conjecture is supported by empirical observations of gradients in networks with a single input and output. For a shallow network, the gradient of the output with respect to the input changes slowly as we change the input. However, for a deep network, a tiny change in the input results in a completely different gradient. This is captured by the [[Autocorrelation Function|autocorrelation function]] of the gradient; nearby gradients are correlated for shallow networks, but this correlation quickly drops to zero for deep networks. This is termed the *shattered gradients* phenomenon.

![[Shattered Gradients-1781670752503.webp]]

Shattered gradients presumably arise because changes in early network layers modify the output in an increasingly complex way as the network becomes deeper. The derivate of the output with respect to the first layer $f_{1}$ for our sequential network is:
$$
\frac{ \partial y }{ \partial f_{1} } = \frac{ \partial f_{2} }{ \partial f_{1} } \frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{4} }{ \partial f_{3} } 
$$
When we change the parameters that determine $f_{1}$, all of the derivatives in this sequence are evaluated at slightly different locations since layers $f_{2}, f_{3}, f_{4}$ are themselves computed from $f_{1}$. Consequently, the updated gradient at each training example may be completely different, and the loss function becomes badly behaved.

#cards/dl 
Shattered gradients::In deep sequential networks, gradients at nearby points become nearly uncorrelated. Thus, finite-size optimization steps might land in regions with completely different gradient directions, making the loss surface irregular.
<!--SR:!fsrs,2026-07-03T17:34:58.468Z,8,7.51735908,4.74828477,2,3,0,0,2026-06-25T17:34:58.468Z-->

Why do shattered gradients arise?::Composing many nonlinear layers causes small changes in inputs or early-layer parameters to propagate into complex changes in downstream activations, making the gradients vary rapidly and unpredictably.
<!--SR:!fsrs,2026-07-03T02:53:57.207Z,7,7.31530068,2.11121424,2,2,0,0,2026-06-26T02:53:57.207Z-->
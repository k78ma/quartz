---
title: Predictive Coding
tags:
  - amath449
date: 2026-04-08
aliases: predictive coding
---
Can a real brain do backprop? We are constrained by physics and chemistry:
- Synaptic updates can only be based on local info
- Connection weights cannot be copied to other connections

In backprop, the error gradients are somehow propagated down through the network.

![[Predictive Coding-1775685420908.webp]]

There are some architectures that implement something like backprop, but in a biologically plausible way.

In **predictive coding**, predictions/commands are sent one way through the network, and errors/deviations are sent the other way. A good way to think about this is a military chain of command:

![[Predictive Coding-1775685487599.webp]]

Comparing feedforward networks and predictive coding networks:

![[Predictive Coding-1775685521495.webp]]

In a PC network, each hidden node is split into two parts: an **error node** and a **state/value** node.

![[Predictive Coding-1775685561036.webp|425]]

Let's represent a whole layer as a single circle:

![[Predictive Coding-1775685720797.webp]]

$\mu^{i}$ is the prediction being sent up to layer $i$:
$$
\mu^{i} = \sigma(x^{i-1})M^{i-1} + \beta^{i}
$$
- For now, assume $(W^{i})^{T}=M^{i}$.

The error node $\epsilon^{i}$ is the difference between $x^{i}$ and $\mu^{i}$. It has dynamics:
$$
\tau  \frac{d\epsilon^{i}}{dt} = x^{i}-\mu^{i}-\nu^{i}\epsilon^{i}
$$
At equilibrium, we get:
$$
\begin{align}
\epsilon^{i} = \frac{x^{i} - \mu^{i}}{\nu^{i}}
\end{align}
$$
The goal for training the PC network is as follows. Given dataset $(X,Y), \theta= \{ M^{i}, W^{i} \}_{i=1,\dots,n}$:
$$
\underset{\theta}{\operatorname{max}} p(Y(X), \theta)
$$
where
$$
\begin{align}
p(Y(X),\theta)  & = p(Y(X)\, | \,\theta) \,p(\theta) \\[2ex]
     & = p(Y\, | \,\mu^{n}) \,p(x^{n-1} \, | \,\mu^{n-1}) \dots p(x^{2} \, | \,\mu^{2})\,p(\theta)
\end{align}
$$

Consider $p(x^{i}\, | \,\mu^{i})$. Assume $x^{i} \sim \mathcal{N}(\mu^{i}, \nu^{i})$ is normally distributed:
$$
\begin{align}
p(x^{i}\, | \,\mu^{i})  & = \frac{1}{\boxed{ }} e^{\frac{-|| x^{i}-\mu^{i} ||^{2}}{2\nu^{i}}} \\[2ex] 
     -\ln p(x^{i}\, | \,\mu^{i})  & = c+ \frac{1}{2\nu^{i}} || x^{i}-\mu^{i} ||^{2} \\[2ex] 
\therefore -\ln(p(Y(X)), \theta)  & \equiv \sum_{i=1}^{n} \frac{|| x^{i}-\mu^{i} ||^{2}}{2\nu^{i}}
\end{align}
$$
Hopfield function:
$$
F = \frac{1}{2}\sum_{i=1}^{n} \nu^{i} || \epsilon^{i} ||^{2}
$$
- Recall that $\epsilon^{i} = \frac{x^{i}-\mu^{i}}{\nu^{i}}$

now we show that the network activity acts to decrease the Hopfield energy.

Consider $\nabla_{x^{\ell}}F$, noting that $x^{\ell}$ appears in $\epsilon^{\ell}$ and $\epsilon^{l+1}$. Then:
$$
\begin{align}
\epsilon^{\ell}  & = \frac{1}{v^{\ell}}(x^{\ell}-\mu^{\ell}) \\[2ex] 
     & = \frac{1}{\nu^{l+1}}(x^{l+1}-\mu^{l+1}) \\[2ex] 
     & = \frac{1}{\nu^{l+1}}(x^{l+1}-\sigma(x^{\ell})M^{\ell}) \\[2ex] 
\therefore \nabla_{x^{\ell}} F  & = \epsilon^{\ell} - \sigma'(x^{\ell}) \odot [\epsilon^{l+1} (M^{\ell})^{T}]
\end{align}
$$
Thus, gradient descent gives us:
$$
\tau \frac{dx^{\ell}}{dt} = \sigma'(x^{\ell}) \odot (\epsilon^{l+1}W^{\ell}) -\epsilon^{\ell}
$$

![[Predictive Coding-1775686536341.webp]]

## Training
To train the network, we clamp the input on both ends:

![[Predictive Coding-1775686581819.webp]]

We then hold those inputs and running the network to equilibrium.

At equilibrium:
$$
\frac{dx^{\ell}}{dt} = \frac{d\epsilon^{\ell}}{dt} = 0
$$
Running to equilibrium allows all the parts of the network to interact. At equilibrium, we have:
$$
\tau \frac{dx^{i}}{dt} = \sigma'(x^{i}) \odot (\epsilon^{i+1}W^{i}) - \epsilon^{i} = 0
$$
Then:
$$
\epsilon^{i} = \sigma'(x^{i}) \odot (\epsilon^{i+1}W^{i})
$$
or
$$
\epsilon^{i} = \sigma'(x^{i}) \odot (\epsilon^{i+1}(M^{i})^{T})
$$
## Link to Backprop
Starting with the top gradient:

![[Predictive Coding-1775686750919.webp]]

$$
\nabla_{\mu^{n}}F = \frac{\nu^{n}}{2} \nabla_{\mu^{n}} || \epsilon^{n} ||^{2} = -\epsilon^{n}
$$
But we also derived that, at equilibrium
$$
\epsilon^{i} = \sigma'(x^{i}) \odot (\epsilon^{i+1}(M^{i})^{T})
$$
Comparing to the backprop formulas:
$$
\nabla_{z^{(\ell)}}E = \sigma'(z^{(\ell)}) \odot (\nabla_{z^{(\ell+1)}}E \cdot (W^{(\ell)})^{T})
$$
Thus, $\epsilon^{i}$ is the gradient of the output error with respect to the prediction $\mu^{i}$.

## Updating weights
Consider $\nabla_{\mu^{\ell}}F$. We have
$$
\nabla_{\mu^{\ell}}F = -\sigma(x^{\ell}) \otimes \epsilon^{\ell+1} 
$$
Likewise:
$$
\nabla_{W^{\ell}} = -\epsilon^{\ell+1} \otimes \sigma(x^{\ell})
$$
Therefore:
$$
\begin{align}
\delta \frac{dM^{\ell}}{dt}  & = \sigma(x^{\ell}) \otimes \epsilon^{\ell+1} \\[2ex] 
\delta \frac{dW^{\ell}}{dt}  & = \epsilon^{\ell+1} \otimes \sigma(x^{\ell})
\end{align}
$$
- These learning rules only use info from nodes adjacent to the connection.

These weight updates formulas are the same type of "delta" used in backprop:
$$
\frac{ \partial E }{ \partial W^{)\ell} }  = \underbrace{ \begin{bmatrix}
|  \\
h^{(l)} \\
|
\end{bmatrix}  }_{ \sigma(x) }\underbrace{ \begin{bmatrix}
\,\,\textemdash  & \nabla_{z^{(\ell+1)}}  & \textemdash \,\,
\end{bmatrix} }_{ \epsilon }
$$

The time constant for the weights $\delta$ is larger than the time constant for the nodes $\tau$. This allows the value nodes and error nodes to converge to equilibrium faster, setting up the pieces needed for the weight updates. The full system of differential equations is:
$$
\begin{align}
\tau \frac{dx^{\ell}}{dt}  & = \sigma'(x^{\ell}) \odot (\epsilon^{l+1}W^{\ell}) -\epsilon^{\ell} \\[2ex] 
\tau  \frac{d\epsilon^{i}}{dt}  & = x^{i}-\mu^{i}-\nu^{i}\epsilon^{i} \\[2ex] 
\delta \frac{dM^{\ell}}{dt}  & = \sigma(x^{\ell}) \otimes \epsilon^{\ell+1} \\[2ex] 
\delta \frac{dW^{\ell}}{dt}  & = \epsilon^{\ell+1} \otimes \sigma(x^{\ell})
\end{align}
$$
## Testing
To run it, we just clamp the input $x$ and run the network to equilibrium. Once at equilibrium, $x^{n}$ is the network's output.

![[Predictive Coding-1775687335294.webp]]


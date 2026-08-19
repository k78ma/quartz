---
title: GAN Stability Analysis
tags:
  - dl
date: 2026-07-30
aliases:
  - mode dropping
  - mode collapse
  - GAN training stability
---
Theoretically, the [[Generative Adversarial Network|GAN]] is fairly straightforward. However, they are notoriously difficult to train.
- For example, to get [[Deep Convolutional GAN|DCGAN]] to train reliable, they had to use strided convolutions for upsampling and downsampling, use BatchNorm in both the generator and discriminator except in the last and first layers, use leaky ReLU in the discriminator, use Adam but with a lower momentum coefficient.
- This instability is unusual; many deep learning models are relatively robust to such choices.

A common failure mode is that the generator makes plausible samples, but only representing a subset of the data. This is known as *mode dropping*. An extreme version of this phenomenon can occur where the generator entirely or mostly ignores the latent variable $z$ and collapses all samples to one or a few points; this is known as *mode collapse*.

![[GAN Stability-1785461607736.webp]]


## Loss function analysis
To understand why GANs are difficult to train, it's necessary to understand what the loss function represents. Recall that we can write the GAN objective as two loss functions:
$$
\begin{align*}
L[\phi]  & = \sum_{j} - \log\Big[ 1- \text{sig}[f[g[z_{j}, \theta], \phi]] \Big] - \sum_{i}\log \Big[\text{sig}[f[x_{i}, \phi]] \Big] \\[2ex] 
L[\theta] & = \sum_{j}\log \Big[1- \text{sig}[f[g[z_{j}, \theta], \phi]] \Big]
\end{align*}
$$
where the first loss function trains the discriminator and the second loss function trains the generator.

If we divide the two sums in the first line by the numbers $I,J$ of real and generated samples, then the loss function can be written in terms of expectations:
$$
\begin{align*}
L[\phi]  & = -\frac{1}{J} \sum_{j=1}^{J} \bigg( \log\Big[ 1- \text{sig}[f[g[z_{j}, \theta], \phi]] \Big] \bigg) -  \frac{1}{I}\sum_{i=1}^{I} \bigg(\log \Big[\text{sig}[f[x_{i}, \phi]] \Big]\bigg) \\[2ex] 
     & \approx \mathbf{E}_{x^{\ast  }} \bigg[\log \Big[1-\text{sig}[f[x^{\ast  }, \phi]] \Big] \bigg] - \mathbb{E}_{x}\bigg[ \log \Big[ \text{sig}[f[x, \phi]] \Big ] \bigg] \\[2ex] 
     & = - \int Pr(x^{\ast  }) \log \Big[ 1-\text{sig}[f[x^{\ast  }, \phi]] \Big] \, dx - \int Pr(x) \log \Big[\text{sig}[f[x, \phi]] \Big] \, dx 
\end{align*}
$$
where $Pr(x^{\ast })$ is the probability distribution over the generated samples, and $Pr(x)$ is the true probability distribution over the samples.

When $I=J$, the optimal discriminator for an example $\tilde{x}$ of unknown origin is:
$$
Pr(\text{real} | \tilde{x}) = \text{sig}[f[\tilde{x},\phi]] = \frac{Pr(\tilde{x}|\text{real})}{Pr(\tilde{x}|\text{generated}) + \text{Pr}(\tilde{x}|\text{real})} = \frac{Pr(x)}{Pr(x^{\ast  })+Pr(x)}
$$
where on the right side, we evaluate $\tilde{x}$ against the generated distribution $Pr(x^{\ast })$ and the real distribution $Pr(x)$. Substituting this back into our loss functoin:
$$
\begin{align*}
L[\phi] & = - \int Pr(x^{\ast  }) \log \Big[ 1-\text{sig}[f[x^{\ast  }, \phi]] \Big] \, dx - \int Pr(x) \log \Big[\text{sig}[f[x, \phi]] \Big] \, dx \\[2ex] 
     & = - \int Pr(x^{\ast  }) \log\left[ 1 - \frac{Pr(x)}{Pr(x^{\ast  })+Pr(x)} \right] \, dx^{\ast  }  - \int Pr(x) \log\left[ \frac{Pr(x)}{Pr(x^{\ast  })+Pr(x)} \right] \, dx  \\[2ex]
     & = -\int Pr(x^{\ast  })\log\left[ \frac{Pr(x^{\ast  })}{Pr(x^{\ast  })+Pr(x)} \right] \, dx^{\ast  } - \int Pr(x) \log \left[ \frac{Pr(x)}{Pr(x^{\ast  })+Pr(x)} \right] \, dx 
\end{align*}
$$
Disregarding additive and multiplicative constants, this is the [[Jensen-Shannon divergence]] between the synthesized distribution $Pr(x^{\ast })$ and the true distribution $Pr(x)$:
$$
\begin{align*}
D_{JS}\Big [ & Pr(x^{\ast  })\;||\; Pr(x) \Big]  \\[2ex] 
& = \frac{1}{2}D_{KL}\left[ Pr(x^{\ast  }) \Big| \Big| \frac{Pr(x^{\ast  })+Pr(x)}{2} \right] + \frac{1}{2}D_{KL}\left[ Pr(x) \Big| \Big| \frac{Pr(x^{\ast  })+Pr(x)}{2} \right] \\[2ex] 
     & = \frac{1}{2} \int \underbrace{ Pr(x^{\ast  })\log \left[ \frac{2Pr(x^{\ast  })}{Pr(x^{\ast  })+Pr(x)} \right] \, dx^{\ast} }_{ \text{quality} }  + \frac{1}{2} \int \underbrace{ Pr(x)\log\left[ \frac{2Pr(x)}{Pr(x^{\ast  })+Pr(x)} \right] \, dx }_{ \text{coverage} } 
\end{align*}
$$
where $D_{KL}[\bullet \mid\mid \bullet]$ is the [[Kullback-Leibler Divergence|KL divergence]].

The first term indicates the distance will be small if, wherever the sample density $Pr(x^{\ast })$ is high, the mixture $(Pr(x^{\ast })+Pr(x)) / 2$ has high probability. In other words, it penalizes regions with samples $x^{\ast }$ but no real examples $x$; it enforces the *quality* of generated samples.

The second term says that the distance will be small if, wherever the true density $Pr(x)$ is high, the mixture $(Pr(x^{\ast })+Pr(x)) / 2$ has high probability. In other words, it penalizes regions with real examples but no generated samples. This enforces *coverage*.

We can see that the second term does not depend on the generator parameters $\phi$; consequently, the generator doesn't care much about coverage, though it is still implicitly included through $Pr(x^{\ast })$. It is happy to generate a subset of possible examples accurately. This is the likely reason for mode dropping/collapse.

## Vanishing gradients
We saw that when the discriminator is optimal, the loss function minimizes a measure of the distance between the generated and real samples. However, there's a problem with using this distance between probability distributions as the criterion for optimizing GANs. If the probability distributions are completely disjoint, this distance is infinite, and any small change to the generator will not decrease the loss. The same phenomenon can be seen when we consider the original formulation; if the discriminator can perfectly separate the generated and real samples, no small change to the generated data will change classification score.

![[GAN Stability-1785537517317.webp]]

Unfortunately, the distributions may really be disjoint; the generated samples lie in a subspace that is the size of the latent variable $z$, and the real examples also lie in a low-dimension al subspace due to the physical processes that created the data. There may be very little or no overlap between these two subspaces, and the result is very small or no gradients.

We can see an empirical version of this below. If the [[Deep Convolutional GAN|DCGAN]] generator is frozen and the discriminator is updated repeatedly so that its classification performance improves, the generator gradients decrease. In short, there is a very fine balance between the quality of the discriminator and the generator; if the discriminator becomes too good, the training updates of the generator are attenuated.

![[GAN Stability-1785537692436.webp]]


#cards/dl
Why are GANs hard to train?
?
1. Training is a coupled, non-stationary game: updating either network changes the objective faced by the other.
2. With an optimal discriminator, the original GAN objective corresponds to minimizing the Jensen–Shannon divergence between the real and generated distributions. If the distributions are completely disjoint, this distance is infinite, and any small change to the generator will not decrease the loss.
3. Similarly for the original formulation; if the discriminator can perfectly separate the generated and real samples, no small change to the generated data will change classification score. The discriminator sigmoid can saturate, giving the generator vanishing gradients.

![[GAN Stability-1785537517317.webp]]
<!--SR:!fsrs,2026-09-29T03:17:08.320Z,41,41.09394407,4.74371562,2,4,0,0,2026-08-19T03:17:08.320Z-->
+++
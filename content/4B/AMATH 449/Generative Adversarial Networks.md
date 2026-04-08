---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
A GAN consists of two networks that are competing against each other.

![[Generative Adversarial Networks-1775684184739.webp]]

They are linked together in a GAN:

![[Generative Adversarial Networks-1775684202293.webp]]

The generative network is trying to fool the discriminative network into misclassifying "fake" (generated inputs). Meanwhile, the discriminative network is also learning how to classify inputs as real or fake: i.e., does it come from the dataset, or from the generative network?

![[Generative Adversarial Networks-1775684305530.webp]]

$D(x;\theta)$ outputs the probability that $x$ is from the real data:
$$
x \in  R \quad  \quad  \therefore  t=1
$$
$G(z;\phi)$ creates an input sample from random noise $z$ with distribution $p_{z}$:
$$
x'=G(z;\phi) \in  F \quad  \quad  \therefore t=0
$$
The loss for the GAN has two parts:
$$
E(\theta, \phi) = \mathbb{E}_{R,F} [L(D(x;\theta), t)] + \mathbb{E}_{z}[L(D(G(z;\phi), \theta), 1)]
$$
- The first term minimizes with respect to $\theta$ to make the discriminator better at detecting real vs. fake. $x$ are real inputs, and the target $t=1$ for $x \in R$ and $0$ for $x \in F$.
- The second term minimizes with respect to $\phi$ to make the generator better at producing fake inputs that look real to the discriminator.


![[Generative Adversarial Networks-1775684846290.webp]]

![[Generative Adversarial Networks-1775684945892.webp]]

Training the generator:
- generate a fake sample
- pass it through the discriminator
- measure loss against the label 1
- update the generator so that the discriminator becomes more likely to output “real”. 
---
title: Bayesian Probability
tags:
  - stats
date: 2024-04-14
aliases:
---
Interpretations of probability:
- *Frequentist/classical* – Probability in terms of the frequencies of random, repeatable, events.
- *Bayesian* – Probabilities provide a quantification of uncertainty.

For example, let's say we are tossing a bent coin. 
- In the absence of further information, we know that the probability of the concave side of the coin being heads is $0.5$. 
- If we are told the results of flipping the coin a few times, this will provide us with some information as to whether the concave side is heads. 
- For example, suppose we see many more flips that land tails than land heads. Since the coin is more like to land concave side up, this suggests the concave side is more likely to be tails. 

Here, we can then use [[Bayes' Theorem]] to convert the prior probability for the concave side being heads into a posterior probability by incorporating the data provided by the coin flips. This process is iterative; the posterior probability becomes the prior for incorporating data from more flips.

One aspect of Bayesian probability is that the inclusion of prior knowledge arises naturally. For instance, if a fair coin is tossed 3 times and lands heads each time, the [[Maximum Likelihood Estimation|maximum likelihood estimate]] of the probability of landing on heads based on this data would be $1$. This implies that all future tosses will land heads, which is obviously not accurate. A Bayesian approach with reasonable priors would lead to a less extreme conclusion.
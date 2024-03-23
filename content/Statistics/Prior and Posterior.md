---
title: Prior and Posterior
tags:
  - stats
date: 2024-03-23
aliases:
---
- Prior probability is the probability available before we observe any new evidence.
- Posterior probability is the probability available after we observe evidence.

For example, the probability that someone has cancer is given by $p(C)$. This is the prior probability. Once we are told that this person received a positive test, we can use Bayes' theorem to compute $p(C|T)$. This is the posterior probability.

This can yield surprising results; for example, in our example, the probability that someone has cancer when they have a positive test, $p(C|T=1)$, is still very low (23% in DLFC book), even if the test is reasonably accurate. This is because of the low prior probability of having cancer; although the test provides strong evidence of cancer, we have to combine it with the prior probability using Bayes' theorem to arrive at the correct posterior probability.
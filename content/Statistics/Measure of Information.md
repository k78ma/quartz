---
title: Measure of Information
tags:
  - stats
date: 2024-04-04
aliases:
---

Consider a discrete random variable $x$. How much information is received when we observe a specific value of this variable? 

The amount of information can be viewed as the "degree of surprise" on learning the value of $x$. If we are told that a highly improbable event has just occurred, we receive more information than if we were told that some very likely event has just occurred, and if we knew that the event was certain to happen, we would receive no information. Our measure of information content then depend on the probability distribution $p(x)$, and so we look for a quantity $h(x)$ that is a monotonic function of probability $p(x)$ and that expresses the information content. 

Then, our goal is to find the form of $h(\cdot)$; this can be done by noting that if we two events $x$ and $y$ that are unrelated, then the information gained from observing both of them should be the sum of the information gained from each of them separately, so $h(x,y)=h(x)+h(y)$. Two unrelated events are statistically independent and so $p(x, y) = p(x)p(y)$. 

The operation that turns products into sums is the logarithm; therefore, for $h(x,y)=h(x)+h(y)$ to hold under the condition that $p(x,y)=p(x)p(y)$, it follows that $h(x)$ must be proportional to the logarithm of the probability of $x$, such that $h(x) \propto \log(p(x))$. We can then add a negative sign since probabilities are between $0$ and $1$, and the logarithm of a number between $0$ and $1$ is negative; we want the measure of information to be positive, so we negate the value to give us:
$$
h(x)=-\log_{2}p(x)
$$
Now, events that are certain (probability $1$) have zero information content, and events that are less likely carry more information. The choice of base $2$ is arbitrary, but is a prevalent convention in information theory. The units of $h(x)$ here are bits ('binary digits'). 

Another common choice is to use natural logarithms in defining entropy, In this case, the entropy is measured in units of *nats* (from ‘natural logarithm’) instead of bits, which differ simply by a factor of $\ln 2$.
---
title: Convolution Sum
tags:
  - syde252
date: 2023-11-03
aliases:
---
The convolution sum combines two signals two signals to produce a third signal that represents how one of the origin signals modifies the other. It is defined as:
$$
y[n] = x[n] * h[n] = \sum_{m=-\infty}^{\infty}x[m]\;h[n-m]
$$
In LTI systems, a convolution can be used to find the system's output response given an input signal and the system's impulse response. The impulse system response is the output of the system when the input is an impulse (signal is zero everywhere except that single point). The convolution of the input signal with the impulse response gives the output of the system for any arbitrary input signal.

It can also be used to implement filters.
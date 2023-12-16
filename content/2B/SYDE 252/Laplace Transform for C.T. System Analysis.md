---
title: Laplace Transform for C.T. System Analysis
tags:
  - syde252
date: 2023-11-22
aliases:
---
Because of the linearity property of linear time-invariant (LTI) systems, we can find the response of these systems by breaking the input $x(t)$ into several components and then summing the system response to all the components of $x(t)$. We have already used this procedure in time-domain analysis, in which the input $x(t)$ is broken into impulsive components.

In the frequency domain, we break up the input $x(t)$ into exponentials of the form $e^{st}$, where the parameter $s$ is the complex frequency of the signal $e^{st}$. This method offers an insight into the system behavior complementary to that seen in the time-domain analysis. The tool to represent an arbitrary input $x(t)$ in terms of exponential components is the Laplace transform.

### Definition
For a signal $x(t)$, its Laplace transform $X(s)$ is given by:
$$
X(s) = \int_{-\infty}^{\infty} x(t)e^{-st} \, dt 
$$
where $s$ is a complex number such that $s=\sigma+j\omega$.

The signal $x(t)$ is said to be the inverse Laplace transform of $X(s)$. It can be shown that:
$$
x(t) =\frac{1}{2\pi j} \int_{c-j\infty}^{c+j\infty} X(s)e^{st} \, ds
$$
where $c$ is a constant chosen to ensure the convergence of the integral. 

In terms of Laplace transforms as a function, these are written as:
$$
X(s)=\mathcal{L}[x(t)] \quad \text{and} \quad x(t)=\mathcal{L}^{-1}[X(s)]
$$

### Eigenfunction and Transfer Function
Let's say we want to find the response of an LTI system with impulse response $h(t)$ to the input signal $x(t)=e^{st}$. Then, we have:
$$
\begin{align}
y(t) & =x(t)*h(t)=\int_{-\infty}^{\infty} h(\tau)\,\,x(t-\tau) \, d\tau  \\[3ex] 
	 & =\int_{-\infty}^{\infty} h(t) \, \, e^{s(t-\tau)} \, d\tau \\[3ex] 
 & =e^{st}\int_{-\infty}^{\infty} h(\tau)e^{-s\tau} \, d\tau \\[3ex] 
y(t)  & = e^{st} H(s) 
\end{align}
$$
where $H(s) = \int_{-\infty}^{\infty} h(\tau)e^{-s\tau} \, d\tau$. This is just the Laplace transform of $h(t)$!

Since we defined $x(t)=e^{st}$, we just have:
$$
y(t)=e^{st}H(s)=x(t)H(s)
$$
For a given $s$, $H(s)$ is constant; output is the input multiplied by a constant.

Since the input $x(t)$ appears at the output (passes through the system), we say it is an **eigenfunction** of the system.

We also have:
$$
H(s)=\frac{y(t)}{x(t)} \Bigg |_{x(t)=e^{st}}
$$
so $H(s)$ is called the transfer function of the system. (Seen this in MTE 220 [[Sensor Transfer Function]]).

Like we said before, $H(s)$ is just the Laplace transform of $h(t)$, so we have:
$$
H(s)=\mathcal{L}[h(t)]=\int_{-\infty}^{\infty} h(t) \,e^{-st} \, dt 
$$

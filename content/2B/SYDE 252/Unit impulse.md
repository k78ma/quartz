---
title: Unit impulse
tags:
  - syde252
date: 2023-09-23
---
## Definition
Unit impulse refers to a Dirac delta function defined as:
$$
\begin{align}
\delta(t)=0 \;\text{ for } \; t\neq 0 \\
\int_{-\infty}^{\infty} \delta(t) \, dt = 1 
\end{align}
$$

![[Pasted image 20230923134657.png|464]]

Basically, it has:
- Infinitesimally small width ($\epsilon \to 0$)
- Infinitely large height ($\frac{1}{\epsilon}\to \infty$)
- Overall area of unity ($1$)
Other pulses (rectangular, triangular, Gaussian) can also be used to model impulses.

## Properties
### Multiplication
Provided a signal $\phi(t)$ at time $t=T$, multiplying it by an impulse $\delta(t-T)$ results in an impulse located at $t=T$ with amplitude/strength $\phi(T)$ (value of $\phi(t)$ at the location of the impulse).
$$
\phi(t)\delta(t-T)=\phi(T)\delta(t-T)
$$

### Sampling/sifting
From the above equation, we also have:
$$
\begin{align}
\int_{-\infty}^{\infty} \phi(T)\delta(t-T) \, dt &= \phi(T) \int_{-\infty}^{\infty} \delta(t) \, dt  \\
&= \phi(T) 
\end{align}
$$
This means that the area under the product of a function with an impulse $\delta(t-T)$ is equal to the value of that function at the instant at which the unit impulse is located.

### Relationship with Unit Step Function
Because the [[Unit step]] function is discontinuous at $t=0$, its derivative does not exist there in the normal sense. But, we actually have:
$$
\begin{align}
\int_{t_{0}}^{t_{1}} \frac{du}{dt} \, dt&=u(t_{1})-u(t_{0}) \quad \text{for } t_{0}<0<t_{1} \\
&= 1 - 0 = 1 
\end{align}
$$
$$
\int_{-\infty}^{\infty} \frac{du}{dt} \, dt=u(\infty)-u(-\infty)=1
$$
Therefore,
$$
\frac{du(t)}{dt}=\delta (t)
$$
Textbook explanation:

![[Pasted image 20230923140153.png]]

Not really sure why this is useful but it’s pretty interesting?


---
title: Population Coding Dynamics
tags:
  - amath449
date: 2026-04-08
aliases: population coding dynamics
---
How do we build dynamic, recurrent networks using [[Population Coding|population coding]] methods?

Consider a dynamic model of a leaky integrate-and-fire (LIF) neuron that contains two time-dependent processes:
$$
\begin{cases}
\tau_{s} \frac{ds}{dt} = -s+C   &  \text{(Current)}\\[2ex] 
\tau_{m} \frac{dv}{dt} = -v + \sigma(s) &  \text{(Activity)}
\end{cases}
$$
- $\tau_{s}$ is a synaptic time constant
- $\tau_{m}$ is the a membrane time constant
- $C$: is the input current
- $\sigma(s)$ is a nonlinear activation function

Recall previous forms of $\sigma(s)$:

![[Population Coding Dynamics-1775681324643.webp]]

## Equilibrium Solutions
We can find equilibrium solutions to the above.

**Current:**
$$
\tau_{s} \frac{ds}{dt} = -s+C
$$
At equilibrium, $\frac{ds}{dt}=0$, so $s=C$.

**Activity:**
$$
\tau_{m} \frac{dv}{dt} = -v+\sigma(s)
$$ At equilibrium, $\frac{dv}{dt}=0$, so $v = \sigma(s)$.

## Variants
**Case 1:** $\tau_{m} \ll \tau_{s}$. If the neuron membranes react quickly (i.e., reach equilibrium quickly) compared to the synaptic dynamics:
$$
\begin{cases}
\tau_{s} \frac{ds}{dt} = -s+C     \\[2ex] 
v =   \sigma(s) 
\end{cases}
$$
**Case 2:** $\tau_{s} \ll \tau_{m}$. If the synaptic current changes quickly compared to the neuron activity:
$$
\begin{cases}
s=C    \\[2ex] 
\tau_{m} \frac{dv}{dt} = -v+\sigma(s) 
\end{cases}
$$
In steady state:
$$
v=\sigma(s), \quad  s=C
$$
## Recurrent Networks
The feedback afforded by recurrent connections can lead to interesting dynamics.

Consider a neural integrator:

![[Population Coding Dynamics-1775681897945.webp]]

Consider a fully-connected population of $N$ neurons.

![[Population Coding Dynamics-1775681928027.webp|519]]

We assume $\tau_{m}$ is small, such that $v=\sigma(s)$.

Then, effectively, the time dynamics are dictated by the synapses,
$$
\begin{align}
\tau_{s} \frac{ds}{dt}  & = -s +C \\[2ex] 
\tau_{s} \frac{ds}{dt}  & = -s + (f(v)+g(x))E+\beta
\end{align}
$$
- $-s$ corresponds to intrinsic decay
- $C$ corresponds to all inputs
- $f(v)$ is recurrent feedback
- $g(x)$ is incoming input

Let's assume that the input $g(x)$ is zero, and seek a network that simply maintains its state over time.

We choose the recurrent connections to counter the intrinsic decay:
$$
\tau_{s} \frac{ds}{dt} = -s + f(v)E + \beta
$$
We want the right side to equal zero. At equilibrium, input $y$ yields input current $s$, i.e. $s=yE+\beta$.

Then, the hidden state is $v=\sigma(s)$.
$$
\begin{align}
-s + f(v)E + \beta  & = 0 \\
f(v)E + \beta &  = s \\
f(v)E + \beta  & = yE+\beta \\
f(v)  & = y = vD
\end{align}
$$
Thus, $f(v)$ is the identity decoding.

We can re-write our DE as:
$$
\frac{ds}{dt} = \frac{1}{\tau_{s}} (-s+yE+\beta) + \frac{1}{\tau_{s}}(f_{2}(v)+g(x))E \quad  \quad \quad \quad (\ast  )
$$
- $-s$ is decay
- $yE+\beta$ is reinjection
- $f_{2}(v)$ is recurrent input
- $g(x)$ is the new input

For a simple integrator, the governing DE is $\frac{dy}{dt}=x$. 

Recall:
$$
s = yE + \beta \quad \Longrightarrow \quad \frac{ds}{dt} = \frac{dy}{dt}E \quad  \quad \therefore \frac{ds}{dt} = xE
$$
How do we we choose $f_{2}(v)$ and $g(x)$ in $(\ast )$ to get this DE?
$$
\frac{1}{\tau_{s}}(f_{2}(v)+g(x))E = xE \quad \Longrightarrow \quad  f_{2}(v) = 0, \,\,g(x)=\tau_{s}x
$$
The full $DE$ for $s$ to implement an integrator is:
$$
\begin{align}
\tau_{s} \frac{ds}{dt}  & = -s + yE + \beta+ \tau_{s}xE \\
     & = -s + (y+\tau_{s}x)E + \beta
\end{align}
$$
- $y+\tau_{s}x$ is what we input into the population


![[Population Coding Dynamics-1775682561803.webp]]

![[Population Coding Dynamics-1775682568449.webp|450]]

You can also get the recurrent network to solve (simulate) the dynamical system
$$
\frac{dy}{dt} = f(y)
$$
by setting the recurrent input to be $y+\tau_{s}f(y)$.

![[Population Coding Dynamics-1775682615855.webp|338]]


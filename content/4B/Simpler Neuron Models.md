---
title: Simpler Neuron Models
tags:
  - amath449
date: 2026-01-04
aliases:
  - simpler neuron models
  - LIF neuron
  - sigmoid neuron
---
The [[Hodgkin-Huxley Neuron Model]] is already vastly simplified. However, to model a single action potential takes many timesteps. However, spikes are fairly generic, and it is thought that the presence of a spike is more important than its specific shape.

## Leaky Integrate-and-Fire (LIF) Model
The LIF model only considers the sub-threshold membrane potential (voltage), but does NOT model the spike itself. Instead, it simply records when a spike occurs (i.e., when the voltage has reached the threshold).
$$
C\frac{dV}{dt} = J_{\text{in}}-g_{L}(V-V_{L})
$$
where $C$ is a capacitance and $g_{L}=\frac{1}{R}$ is a conductance. The complete second term is a leak current term that is comprised of conductance multiplied by how far we are away from the equilibrium voltage. $J_{\text{in}}$ is an input current.

Multiplying everything by $R$:
$$
RC \frac{dV}{dt} = RJ_{\text{in}}-g_{L}(V-V_{L})
$$
- $RC$ term is in units of time and gets defined as $RC = \tau_{m}$.
- $RJ_{\text{in}}=V_{\text{in}}$ using Ohm's Law

Thus, the voltage can be modeled as:
$$
\tau_{m} \frac{dV}{dt} = V_{\text{in}}-(V-V_{L})
$$
- Only valid for $V< V_{\text{th}}$ (dynamics of sub-threshold voltage)

We use a change of variables to simplify this. First, we define:
$$
v = \frac{V-V_{L}}{V_{\text{th}}-V_{L}}
$$
which essentially normalizes the $V$ along the entire $V_{L}$ to $V_{\text{th}}$ range. Then $v\to 0$ if $v_{\text{in}}=0$, and $v=1$ is the threshold.

Substituting into our differential equation, we get
$$
\tau_{m} \frac{dv}{dt} = v_{\text{in}}-v
$$
- This has the same form as $n,h,m$ in [[Hodgkin-Huxley Neuron Model]]; it's basically just a leaky integrator, adding up its input until it reaches equilibrium (at a rate determined by its time constant).

We integrate the differential equation for a given input current (or voltage) until $v$ reaches a threshold value of $1$. At this point we record a spike. After it spikes, it remains dormant bit for $\tau_{\text{ref}}$ (refractory period), and then we start integrating again from zero.

![[Simpler Neuron Models-1767587407634.webp]]


### LIF Firing Rate
Suppose we hold the input, $v_{\text{in}}$, constant. We can solve the DE analytically between spikes. Specifically, we claim that
$$
v(t) = v_{\text{in}}(1-e^{-t/\tau})
$$
is a solution of $\tau  \frac{dv}{dt}=v_{\text{in}}-v$, $v(0)=0$. We can prove this easily by plugging this into the equation and showing that LHS = RHS.

Visually, this will look like approaching $v_{\text{in}}$ asymptotically as $t$ increases: 

![[Simpler Neuron Models-1767587871497.webp]]

Note that $v_{\text{in}}>1$, as $1$ is the threshold where we trigger a spike. After the spike, we enter the refractory period and start integrating again with the same trajectory.

![[Simpler Neuron Models-1767587933373.webp]]

The firing rate can be found as $\frac{1}{t_{\text{isi}}}$, where $t_{\text{isi}}$ is the inter-spike interval (time between two spikes). The inter-spike interval includes the refractory period $\tau_{\text{ref}}$, as well as $t^{\ast }$, which is the time it takes to go from $v=0$ to $v=1$.

It can be shown that the steady-state firing rate for a constant input $v_{\text{in}}$ is
$$
G(v_{\text{in}})= \begin{cases}
\frac{1}{\tau_{\text{ref}}-\tau_{m}\ln \left( 1-\frac{1}{v_{\text{in}}} \right)} & \text{for } v_{\text{in}} > 1 \\[2ex] 
0 & \text{for }v_{\text{in}} \leq 1
\end{cases}
$$

The plot below shows the firing rate $G$ for various input $v_{\text{in}}$. Note again that $v_{\text{in}}>1$ for the neuron to start firing! This is called the tuning curve, which tells us how the neuron reacts to different input currents.

![[Simpler Neuron Models-1767588293411.webp]]

Typical value for cortical neurons: $\tau_{\text{ref}}=0.002s$, $\tau_{m}=0.02s$.

## Sigmoid Neuron
The activity of a neuron is very low or zero when the input is low, and the activity goes up and approaches some maximum as the input increases. This general behavior can be represented by a few activation functions.

### Logistic Curve
$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$
Goes from 0 to 1.

![[Simpler Neuron Models-1767588485761.webp]]

- [[Sigmoid]]

### Arctan
$$
\sigma(z) = \arctan(z)
$$
Goes from $-\frac{\pi}{2}$ to $\frac{\pi}{2}$ instead.

![[Simpler Neuron Models-1767588534257.webp]]


### Hyperbolic Tangent
$$
\sigma(z) = \tanh(z)
$$
Goes from $-1$ to $1$.

![[Simpler Neuron Models-1767588581215.webp]]

### Threshold
$$
\sigma(z) = \begin{cases}
0 & \text{if } z<0  \\
1  & \text{if } z \geq 0
\end{cases}
$$
![[Simpler Neuron Models-1767588664515.webp]]

This is just a Heaviside function.

### Rectified Linear Unit (ReLU)
This is just a line that gets clipped below at zero:
$$
\text{ReLU}(z)=\text{max}(0,z)
$$

![[Simpler Neuron Models-1767588717504.webp]]

Leaky ReLU is conceptually the same but goes a bit below zero, which can have some advantages

![[Simpler Neuron Models-1767588796139.webp]]


### Softmax
[[Softmax]] depends on multiple neurons. Softmax is like a probability distribution (or probability vector), so its elements add to $1$. If $\vec{z}$ is the drive (input) to a set of neurons, then:
$$
\text{softmax}(\hat{z})_{i} = \frac{e^{z_{i}}}{\sum_{j} e^{z_{j}}}
$$
Then, by definition,
$$
\sum_{i} \text{softmax}(\hat{z})_{i} = 1
$$
so they create a probability distribution. Thus, we can turn a list of inputs (that are not a distribution) and turn them into a distribution with softmax.

![[Simpler Neuron Models-1767589063313.webp]]

### One-Hot
One-Hot is the extreme of the softmax, where only the largest element ramins nonzero, while the others are set to zero. Kind of like taking the limit of the softmax?

![[Simpler Neuron Models-1767589163220.webp]]

---
title: Sinusoidal Steady-state Response
tags:
  - mte220
date: 2023-10-21
---
In any linear system, one frequency in means that every state has the same frequency. This means we want to convert stuff in the time domain to the frequency domain.

For any signal in time, any waveform that we give, we can decompose it into a sum of frequencies – we can add up a bunch of sines and cosines of different frequencies to compose any function, and we can also take a sine wave and apply a phase shift to it to decompose it.

### Formulation
![[Sinusoidal Steady-state Response.png|158]]

Let's say we have a current (shown above) that varies according to a capacitor:
$$
I(t) = C \cdot \frac{dV(t)}{dt}, \quad \text{where } \; \; V(t) = \cos(\omega t) 
$$
Recall that $\omega$ refers to frequency such that $\omega = 2\pi f \; [\text{rad/s}]$. Frequency $f$ is in $\text{Hz}$, $\omega$ is the radian version of it. 

Substituting, we have:
$$
\begin{align}
I(t)  & = C \cdot \frac{d}{dt}[\cos(\omega t)] \\[2ex] 
&= -C \cdot \omega \sin(\omega t) \\
&= -C \cdot \omega \cdot \cos(\omega t - 90 \degree) \\
&= C \omega \cos(\omega t + 90 \degree)
\end{align}
$$
In the last step, we got rid of the negative by adding a $180\degree$ phase shift.

All of this is way easier with complex exponentials, such that:
- $e^{j\phi} = \cos \phi + j\sin \phi$ – represents a phase shift
- $e^{ j\omega t } = \cos \omega t + j\sin \omega t$ – represents a frequency
- $\omega \;[\text{rad/s}] = 2\pi f, f\;[\text{Hz, 1/s}]$

![[Sinusoidal Steady-state Response-1.png|380]]

The real portion is what we would actually measure in the lab, while imaginary portion exists just to make our life easier mathematically (lets us use complex exponentials).

A phase shift of some signal $e^{j\omega t}$ with frequency $\omega t$ is just a multiplication by $e^{j\phi}$:
$$
e^{j\phi} e^{j \omega t} = e^{ j(\omega t + \phi) } = \cos(\omega t + \phi) + j\sin(\omega t + \phi)
$$

The derivatives and integrals are nice too. We have:
$$
\frac{d}{dt} (e^{j}) = j\omega e^{j\omega t}
$$
instead of having to do $\frac{d}{dt}(\cos \omega t)$.

### Application

The application is that R, L, and C all look like resistors in the frequency domain. We use $Z$ (impedance) here:
- Resistors: $Z_{R} = R$    (no change, still using real resistance)
- Inductors: $Z_{L} = j\omega L$
- Capacitors: $Z_{C} = \frac{1}{j\omega C} = -\frac{j}{\omega C}$

We can also think about impedance as consisting of real and imaginary parts:
$$
Z = R + jX
$$
where
- $Z$ is impedance
- $R$ is real resistance – energy lost as heat
- $X$ is imaginary resistance – energy not lost but not doing anything useful ("sloshing around")


#### Qualitative Understanding
In terms of a qualitative understanding for capacitors and inductors, we can think about them as variable resistors. However, instead of us turning the knob to change the resistance, the knob is the frequency. So, resistance changes as a function of frequency and can be though of as the magnitude of impedance.

Given an impedance $Z = R + jX$, we have:
- $| Z |$ = magnitude of impedance
- $\angle Z$ = phase shift of impedance

Thus, if we had something with $Z = 1\text{ k}\ohm + j \cdot 1\text{k}\ohm$, it would function as a resistor with a resistance of $\sqrt{ 1^{2}+1^{2} } = \sqrt{ 2 }$.

![[Sinusoidal Steady-state Response-2.png]]

At DC ($f\to 0$), an inductor becomes a short circuit and a capacitor becomes and open circuit. A neat way to remember this is to look at the schematic symbols:

![[Sinusoidal Steady-state Response-3.png|306]]


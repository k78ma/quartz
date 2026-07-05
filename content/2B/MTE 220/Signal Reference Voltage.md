---
title: Signal Reference Voltage
tags:
  - mte220
date: 2023-10-22
---
### Formulation
Signals are not always ground referenced – a signal reference voltage lets us have signals that aren't always sitting at 0 volts. 

![[Signal Reference Voltage.png|412]]

From the op-amp above, we have:
$$
\begin{align}
A_{1} = - \frac{20}{10} = -2 \text{ V/V} \\[3ex] 
V_{out} = 2V_{in}
\end{align}
$$
So, if the black line below is the original signal, the blue line is the output.

![[Signal Reference Voltage-1.png|341]]

But this isn't ideal, as we want to multiply the original signal by 2 in terms of amplitude (4 volts peak-to-peak), but centered around the same horizontal ($y=2$).

We can change this in our op-amp by changing the signal reference voltage. So, since we want the signal to be centered around 2V, we replace the ground connected to the positive terminal of the op-amp with a 2V reference voltage instead, called $V_{ref}$.

![[Signal Reference Voltage-2.png|464]]

So now our if we have $V_{in} = 2 \text{V} \to V_{out} =2\text{V}$, it means that there is no signal present (equilibrium).

Mathematically:
- Input signal: $V_{in} - 2$
- Gain is still $-\frac{R_{f}}{R_{i}} = -2 \text{ V/V}$
- Output:
$$
\begin{align}
\text{Output }  & = \text{Gain } \times \text{ Input} + \text{ Offset} \\
	 & = -2(V_{in}-2) + 2 \\
	 & = 6 - 2V_{in}
\end{align}
$$

And our graph looks like this (which is correct!):

![[Signal Reference Voltage-3.png|324]]

### Varieties
Signal reference voltage is a pretty general concept that can be applied to a lot of the op-amps we've seen.

#### Inverting
![[Signal Reference Voltage-4.png|281]]

$$
\begin{align}
V_{out}  & = \text{Gain } \times \text{ New Input } + \text{ Offset} \\[3ex] 
 &  = - \frac{R_{f}}{R_{i}}(V_{in} - V_{ref}) + V_{ref}
\end{align}
$$

#### Non-inverting
![[Signal Reference Voltage-5.png|273]]

$$
\begin{align}
V_{out}  & = \text{Gain } \times \text{ New Input } + \text{ Offset} \\[3ex] 
 &  = (1+ \frac{R_{f}}{R_{i}})(V_{in} - V_{ref}) + V_{ref}
\end{align}
$$
#### Difference Amplifier
![[Signal Reference Voltage-6.png|304]]

For the difference amplifier, the signal reference voltage has no effect on the input because we only care about the difference between the signals. The new input would just be:
$$
(V_{in} - V_{ref}) - (V_{_{out}} - V_{ref}) = V_{in} - V_{out}
$$
However, $V_{ref}$ still causes an offset. So, we have:
$$
\begin{align}
V_{out}  & = \text{Gain } \times \text{ New Input } + \text{ Offset} \\[3ex] 
 &  = \left( \frac{{R_{f}}}{R_{i}} \right)(V_{in+} - V_{in-}) + V_{ref}
\end{align}
$$
Fun application: We can make a level-shifter circuit using a difference amplifier + $V_{ref}$, such that:
$$
V_{out} = V_{in} + V_{ref}
$$
All we need to do is just set $V_{in-}$ to zero and $R_{f}=R_{i}$.

---
title: Transformers (AC)
tags:
  - mte220
date: 2023-11-13
aliases:
---
Transformers are AC/AC [[Power Conditioning Circuits]]. The principle is:
$$
I_{in} \to \Phi \to I_{out}
$$
where $\Phi$ is a coupled magnetic flux.

![[Transformers (AC).png|452]]

The idea is that there are two coils, which generate a magnetic field that couples 2 electromagnetic fields outside of the device. The coils are related to the input and output voltages, such that:
$$
\frac{V_{in}}{V_{out}} = \frac{N_{in}}{N_{out}}
$$
where $N$ is the number of coils. This lets us control the input and output voltage and current easily.

The efficiency is expressed as:
$$
\eta P_{in} = P_{out}
$$

In schematic form:

![[Transformers (AC)-1.png|296]]

Some applications include microwaves and old CRT televisions.

#### Example
What is $I_{in}$ if $V_{in} = 120\text{ V}_{\text{RMS}}$, $V_{out} = 12 \text{ V}_{\text{RMS}}$, $I_{out}= 1\text{ A}_{\text{RMS}}$, $\eta = 97\%$?

We have:
$$
\begin{align}
P_{in} \cdot \eta  & = P_{out} \\[3ex] 
\eta  & = \frac{V_{out}\cdot I_{out}}{V_{in}\cdot I_{in}} \\[3ex] 
\therefore I_{in}  & = \frac{12 \times 1}{120 \times  0.97} = 103 \text{ mA}_{\text{RMS}}
\end{align}
$$

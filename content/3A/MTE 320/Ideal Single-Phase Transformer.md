---
title: Ideal Single-Phase Transformer
tags:
  - mte320
date: 2024-06-10
aliases:
  - ideal single-phase transformer
---
In an ideal transformer, there is no copper loss and core loss. The core has infinite permeability, and thus there is zero reluctance.

![[Ideal Single-Phase Transformer.png|524]]

From the fact that the sum of mmfs around a magnetic circuit is equal to zero, we have:
$$
\begin{align}
N_{p}i_{p} & =\mathcal{R}\phi+N_{s}i_{s} \\
 & =N_{s}i_{s}
\end{align}
$$
where the subscript $p$ indicates primary and $s$ is secondary.

This can be re-arranged to:
$$
\frac{i_{s}}{i_{p}}=\frac{N_{p}}{N_{s}}
$$
Since the ideal transformer is lossless, its instantaneous power input will be equal to its power output:
$$
p_{p}=p_{s} \quad \longrightarrow \quad v_{p}i_{p}=v_{s}i_{s}
$$
which can be re-arranged as:
$$
\frac{v_{p}}{v_{s}}=\frac{i_{s}}{i_{p}}
$$
This can be combined with the previous relation between $i$ and $N$ to get:
$$
\frac{v_{p}}{v_{s}}=\frac{i_{s}}{i_{p}}=\frac{N_{p}}{N_{s}}=a
$$
Here, $a$ is called the *turns ratio* of the transformer, and is the ratio of the number of turns of primary winding to that of secondary winding.

## Principle of Operation
Below we have an ideal single-phase transformer.

![[Ideal Single-Phase Transformer-1.png|476]]

Assume that a sinusoidal voltage $v_{p}$ has been applied to the primary terminals. A sinusoidal current $i_{p}$ will result and a sinusoidal magnetic flux $\phi$ will be setup in the core. According to [[Faraday’s Law]], voltages $e_{p}$ and $e_{s}$ will be induced in the primary and secondary windings; since these windings are ideal, with no winding resistances and inductances, so $e_{p}=v_{p}$ and $e_{s}=v_{s}$.

Thus, the voltages $e_{p}$ and $e_{s}$ can be expressed as:
$$
\begin{align}
e_{p}=N_{p} \frac{d\phi}{dt}=N_{p} \frac{d(\phi_{m}\sin \omega t)}{dt}=N_{p}\omega \phi_{m}\cos \omega t \\[2ex] 
e_{s}=N_{s} \frac{d\phi}{dt}=N_{s} \frac{d(\phi_{m}\sin \omega t)}{dt}=N_{s}\omega \phi_{m}\cos \omega t
\end{align}
$$
The peak values of the voltages induced in the primary and secondary windings can be found as:
$$
\begin{align}
E_{p,max}=N_{p}\omega \phi_{m}=2\pi fN_{p}\phi_{m}\\[2ex] 
E_{s,max}=N_{s}\omega \phi_{s}=2\pi fN_{s}\phi_{m}
\end{align}
$$
and the RMS values are:
$$
\begin{align}
E_{p,rms}=E_{p}=\frac{E_{p,max}}{\sqrt{ 2 }}=\frac{2\pi}{\sqrt{ 2 }}fN_{p}\phi_{m}=4.44fN_{p}\phi_{m}\\[2ex] 
E_{s,rms}=E_{s}=\frac{E_{s,max}}{\sqrt{ 2 }}=\frac{2\pi}{\sqrt{ 2 }}fN_{s}\phi_{m}=4.44fN_{s}\phi_{m}
\end{align}
$$
Dividing by $E_{p}$ by $E_{s}$, we get:
$$
\frac{E_{p}}{E_{s}}=\frac{4.44fN_{p}\phi_{m}}{4.44fN_{s}\phi_{m}}=\frac{N_{p}}{N_{s}}=a
$$
Note that since the resistances and inductances in the primary and secondary circuits have been neglected, $E_{p} = V_{p}$ and $E_{s} = V_{s}$. As a result, the main relation for voltage and current transformation becomes:
$$
\frac{E_{p}}{E_{s}}=\frac{V_{p}}{V_{s}}=\frac{I_{s}}{I_{p}}=\frac{N_{p}}{N_{s}}=a
$$
Based on the value of the turns-ratio $a$, the equation above presents the voltage and current transformation relations for 3 different types of transformers:
- Step-Down Transformer: $a>1 \implies E_{s}<E_{p}$ 
- Step-Up Transformer: $a<1 \implies E_{s}>E_{p}$
- Isolation Transformer: $a=1\implies E_{s}=E_{p}$
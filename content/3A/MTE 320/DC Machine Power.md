---
title: DC Machine Power
tags:
  - mte320
date: 2024-07-12
aliases:
  - DC machine power
  - DC power flow
---
Below we have the equivalent circuit diagrams of a DC generator and a DC motor.

![[DC Machine Power.png|628]]

![[DC Machine Power-1.png|632]]

In the diagrams above:
- $V_{a}$ is the armature terminal voltage
- $R_{a}$ is the armature resistance
- $L_{a}$ is the armature inductance
- $V_{f}$ is the field winding terminal voltage
- $R_{f}$ is the field resistance
- $L_{f}$ is the field inductance
- $I_{a}$ is the armature current
- $I_{f}$ is the field current, 
- $\tau_{m}$ is the developed toque in motor mode and the applied prime mover torque in generator mode
- $\tau_{L}$ is the load toque in motor mode
- $\tau_{c}$ is the counter toque in generator mode
- $E_{\text{gen}}$ is the generated voltage in generator mode
- $E_{c}$ is the counter emf in motor mode

At DC steady state, the inductance behaves as a short circuit. The equivalent circuit diagrams above simplify to:

![[DC Machine Power-2.png|616]]

We have:
$$
\begin{align}
I_{f} & =\frac{V_{f}}{R_{f}}\\[2ex] 
\phi & = \frac{N_{f}I_{f}}{\mathcal{R}}\\[2ex] 
E_{\text{gen}} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n\\[2ex] 
I_{a} & =\frac{E_{\text{gen}}}{R_{a}+R_{L}}\\[2ex] 
\tau_{c} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
Note that $N_{f}$ is the number of turns of field winding.
## Power Flow of DC Generator
We have:
$$
\begin{align}
I_{f} & =\frac{V_{f}}{R_{f}}\\[2ex] 
\phi & = \frac{N_{f}I_{f}}{\mathcal{R}}\\[2ex] 
E_{\text{gen}} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n\\[2ex] 
I_{a} & =\frac{E_{\text{gen}}}{R_{a}+R_{L}}\\[2ex] 
\tau_{c} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
Thus, we have the following power quantities:
$$
\begin{align}
P_{f} & =I_{f}^{2}R_{f}\quad \text{(Field copper loss)}\\[2ex]
P_{\text{in}} & =P_{m}  =\omega_{m}\tau_{m}  \quad \text{(Mechanical power of prime mover)} \\[2ex]
P_{\text{core loss}} & =P_{\text{hysteresis}}+P_{\text{eddy current}}\quad \text{(Core loss)}\\[2ex] 
P_{\text{mech loss}} & =P_{\text{friction loss}}+P_{\text{windage loss}}\\[2ex] 
P_{\text{misc. loss}} & \approx 1\% \text{ of full load power} \\[2ex]
P_{\text{conv.}} & =E_{\text{gen}}I_{a}=\omega_{m}\tau_{c} \quad \text{(Power converted from mechanical to electrical)} \\[2ex]
P_{a} & = I^{2}_{a}R_{a} \quad \text{(Armature copper loss)}\\[2ex] 
P_{\text{out}} & =V_{a}I_{a}=I_{a}^{2}R_{L}=\frac{V_{a}^{2}}{R_{L}}\\[2ex] 
P_{\text{gen}}& =P_{in}-P_{\text{mech loss}}-P_{\text{core loss}}-P_{\text{misc. loss}} \\[2ex] 
P_{\text{out}} & =P_{\text{gen}}-P_{a}
\end{align}
$$

The above can be summarized by the diagram below:

![[DC Machine Power-3.png]]

### Efficiency
The efficiency of the DC generator can be found based on the relations given above:
$$
\eta=\frac{P_{\text{out}}}{P_{\text{in}}}\times 100\%=\frac{P_{\text{in}}-P_{\text{loss}}}{P_{\text{in}}}\times 100\%=\frac{P_{\text{out}}}{P_{\text{out}}+P_{\text{loss}}}\times 100\%
$$

## Power Flow of DC Motor
We have:
$$
\begin{align}
I_{f} & =\frac{V_{f}}{R_{f}}\\[2ex] 
\phi & = \frac{N_{f}I_{f}}{\mathcal{R}}\\[2ex] 
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n\\[2ex] 
I_{a} & =\frac{E_{\text{gen}}}{R_{a}+R_{L}}\\[2ex] 
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
Then, we have the following power quantities:
$$
\begin{align}
P_{f} & =I_{f}^{2}R_{f}\quad \text{(Field copper loss)}\\[2ex]
P_{\text{in}} &  =V_{a}I_{a}  \quad \text{(Input electric power)} \\[2ex]
P_{\text{a}} & =I^{2}_{a}R_{a}\quad \text{(Armature copper loss)}\\[2ex] 
P_{\text{conv.}} & =E_{\text{gen}}I_{a}=\omega_{m}\tau_{c} \quad \text{(Power converted from electrical to mechanical)} \\[2ex] 
P_{\text{conv.}} & =P_{\text{in}}-P_{a}\\[2ex] 
P_{\text{core loss}} & = P_{\text{hysteresis}}+P_{\text{eddy current}} \\[2ex] 
P_{\text{mech loss}} & = P_{\text{friction loss}}+P_{\text{windage loss}} \\[2ex] 
P_{\text{misc. loss}} & \approx 1\% \text{ of full load power} \\[2ex]
P_{\text{out}} & =P_{\text{conv.}}-P_{\text{core loss}}-P_{\text{mech loss}}-P_{\text{misc. loss}}\\[2ex]
\end{align}
$$

This is summarized by the power flow diagram shown

![[DC Machine Power-4.png]]

### Efficiency
The efficiency of the DC generator can be found based on the relations given above:
$$
\eta=\frac{P_{\text{out}}}{P_{\text{in}}}\times 100\%=\frac{P_{\text{in}}-P_{\text{loss}}}{P_{\text{in}}}\times 100\%=\frac{P_{\text{out}}}{P_{\text{out}}+P_{\text{loss}}}\times 100\%
$$

## Improving Efficiency
To improve efficiency, DC machines are designed such that:
- Copper losses ($P_{f}=I_{f}R^{2}_{f}$ and $P_{a}=I_{a}^{2}R_{a}$) are minimized by reducing $R_{a}$ and $R_{f}$
- Core losses are minimized by using high-quality soft ferromagnetic materials (except in permanent magnet machines)
- Mechanical losses are reduced through good mechanical design
- Using a small $R_{a}$ reduces the voltage drop in the armature circuit.

In electric machines, the mechanical power is usually given in horsepower (hp), where $1 \text{ hp} = 765 \text{ W}$.
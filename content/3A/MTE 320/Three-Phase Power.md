---
title: Three-Phase Power
tags: 
date: 2024-05-24
aliases:
  - three-phase power
---
## Power Definitions
### 3-Phase Instantaneous Power
Irrespective of the connection style type, the instantaneous 3-phase power can be derived as:
$$
p_{\text{3-phase}}(t)=3V_{\text{phase}}I_{\text{phase}}\cos \theta
$$
Even though the instantaneous powers of individual phases are fluctuating, the total 3-phase instantaneous power is constant. This is one of the advantages of 3-phase systems over single-phase systems.

### 3-Phase Average Power
Since the total 3-phase instantaneous power is constant, it is just the average power:
$$
P_{\text{3-phase}}=3V_{\text{phase}}I_{\text{phase}}\cos \theta=3\times P_{1-\text{phase}}
$$
### 3-Phase Reactive Power
3-phase reactive power is given by:
$$
Q_{\text{3-phase}}=3V_{\text{phase}}I_{\text{phase}}\sin \theta=3\times Q_{\text{1-phase}}
$$
### 3-Phase Apparent Power
3-phase apparent power is given by:
$$
S_{\text{3-phase}}=3V_{\text{phase}}I_{\text{phase}}\sin \theta=3\times S_{\text{1-phase}}
$$
### 3-Phase Complex Power
3-phase complex power is given by:
$$
S_{\text{3-phase, complex}}=3\vec{V}_{\text{phase}}\vec{I}^{*}_{\text{phase}}
$$
### 3-Phase Power Factor
The power factor, as in the case of single-phase circuits, is the cosine of the angle between the phase voltage and phase current or is given by the ratio of the 3-phase real power to 3-phase apparent power.

## Relations based on Line-to-Line Voltage
In a 3-phase system, line-to-line voltage and line current are usually used to describe the system. Thus, it's useful to know how 3-phase power is expressed in terms of line-to-line voltage and line current.

If the load is Y-connected, we have
$$
\begin{cases}
V_{LL}=\sqrt{ 3 }V_{\text{phase}} \\
I_{L}=I_{\text{phase}}
\end{cases}
$$
If the load is $\Delta$-connected, we have
$$
\begin{cases}
V_{\text{LL}}=V_{\text{phase}} \\
I_{\text{L}}=\sqrt{ 3 }I_{\text{phase}}
\end{cases}
$$
Thus, the above relations can be written as:
$$
\begin{align}
P_{\text{3-phase}} & =3V_{\text{phase}}I_{\text{phase}}\cos \theta=\sqrt{ 3 }V_{LL}I_{L}\cos \theta \\[2ex] 
Q_{\text{3-phase}} & = 3V_{\text{phase}}I_{\text{phase}}\sin \theta=\sqrt{ 3 }V_{LL}I_{L}\sin \theta \\[2ex] 
S_{\text{3-phase}} & =3V_{\text{phase}}I_{\text{phase}}=\sqrt{ 3 }V_{LL}I_{L}
\end{align}
$$
Note that $\theta$ is the phase impedance angle (the angle between the phase voltage and current). Also written with $\phi$ sometimes.
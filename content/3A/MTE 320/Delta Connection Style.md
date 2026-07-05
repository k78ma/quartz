---
title: Delta Connection Style
tags:
  - mte320
date: 2024-05-22
aliases:
  - delta connection style
---
In the delta connection style, the 3 phases of the source or load are connected in series, and the three connection points are used as terminals for connection to the rest of the circuit. 

![[Delta Connection Style.png|476]]

The phasors of phase voltages, which are also line voltages, can be written as:
$$
\begin{align}
\vec{V}_{AB} & =V_{\text{phase}}\angle 0\degree = V_{LL}\angle 0\degree \\
\vec{V}_{BC} & =V_{\text{phase}}\angle -120\degree = V_{LL}\angle -120\degree \\
\vec{V}_{CA} & =V_{\text{phase}}\angle 120\degree = V_{LL}\angle 120\degree
\end{align}
$$
where $V_{\text{phase}}=V_{LL}$ is the rms value of the phase or line voltage. 

## Voltage and Current Relationships
| Relationship                                         | Value                                                                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Phase-to-neutral and line-to-line voltage magnitudes | $V_{L L}=V_{\text{phase}}$                                                                                |
| Phase and line current magnitudes                    | $I_{LL}=\sqrt{ 3 }\,I_{\text{phase}}$                                                                     |
| Phase and line current phase angles                  | $\vec{I}_{x}$ lags $\vec{I}_{xy}$ by $30\degree$<br>e.g. $\vec{I}_{a}$ lags $\vec{I}_{ab}$ by $30\degree$ |
## Loads and Currents
Below a 3-phase $\Delta$-connected balanced load is shown.

![[Delta Connection Style-1.png|472]]

The relationships between the phasors of phase voltages and currents are:
$$
\begin{align}
\vec{I}_{ab} & =\frac{\vec{V}_{ab}}{Z_{\text{phase}}}= \frac{V_{LL}\angle 0\degree}{|  Z_{\text{phase}}\angle\theta|}=\frac{V_{LL}}{| Z_{\text{phase}} |}\angle-\theta=I_{\text{phase}}\angle-\theta \\[2ex] 
\vec{I}_{bc} & =\frac{\vec{V}_{bc}}{Z_{\text{phase}}}=\vec{I}_{\text{phase}}\angle-120\degree-\theta \\[2ex] 
\vec{I}_{ca} & =\frac{\vec{V}_{ca}}{Z_{\text{phase}}}=\vec{I}_{\text{phase}}\angle+120\degree-\theta
\end{align}
$$
The phasors of line currents can be found with KCL:
$$
\begin{align}
\vec{I}_{a} & =\vec{I}_{ab}-\vec{I}_{ca}=\sqrt{ 3 }\,I_{\text{phase}}\angle-\theta-30\degree \\[2ex] 
\vec{I}_{b} & =\vec{I}_{c}-\vec{I}_{ab}=\sqrt{ 3 }\,I_{\text{phase}}\angle-120\degree-\theta-30\degree = \sqrt{ 3 }\,I_{\text{phase}}\angle-150\degree-\theta  \\[2ex]
\vec{I}_{b} & =\vec{I}_{c}-\vec{I}_{ab}=\sqrt{ 3 }\,I_{\text{phase}}\angle+120\degree-\theta-30\degree = \sqrt{ 3 }\,I_{\text{phase}}\angle 90\degree-\theta
\end{align}
$$
These current phasors are shown below

![[Delta Connection Style-2.png|460]]

Note that, in a $\Delta$-connected source, we have
$$
\begin{align}
\vec{V}_{AB}+\vec{V}_{BC}+\vec{V}_{CA}=0 \quad  & \text{or} \quad \vec{V}_{ab}+\vec{V}_{bc}+\vec{V}_{ca}=0 \\
\vec{I}_{AB}+\vec{I}_{BC}+\vec{I}_{CA}=0 \quad  & \text{or} \quad \vec{I}_{ab}+\vec{I}_{bc}+\vec{I}_{ca}=0 \\
\vec{I}_{A}+\vec{I}_{B}+\vec{I}_{C}=0 \quad  & \text{or} \quad \vec{I}_{a}+\vec{I}_{b}+\vec{I}_{c}=0 \\
\end{align}
$$
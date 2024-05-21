---
title: Y Connection Style
tags:
  - mte320
date: 2024-05-21
aliases:
  - wye connection style
  - star connection style
---
In a star or wye (Y) connection style, one terminal of each phase of the source or load is connected to the corresponding terminals of the other two phases, making it a *neutral point*, and leaving three terminals free for connection to the rest of the circuit.

![[Y Connection Style.png|292]]

![[Y Connection Style-1.png|372]]

- All of the negative terminals are connected together, all the positive terminals are free

---
## Voltage and Current Relationships

| Relationship                                           | Value                                                                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Phase-to-neutral and line-to-line voltage magnitudes   | $V_{L L}=\sqrt{ 3 }V_{\text{phase}}$                                                                        |
| Phase-to-neutral and line-to-line voltage phase angles | $\vec{V}_{xy}$ leads $\vec{V}_{xn}$ by $30\degree$, e.g. $\vec{V}_{ab}$ leads $\vec{V}_{an}$ by $30\degree$ |
| Phase and line current phasors                         | $\vec{I}_{L}=\vec{I}_{\text{phase}}$                                                                        |

The derivations for these values are shown below.

---
## Voltage
### Phase-to-Neutral Voltage
The phasor representation of the voltages of the three phases with respect to the neutral point $N$ are as follows:
$$
\begin{align}
\vec{V}_{AN}  & =V_{\text{phase}}\angle 0\degree\\
\vec{V}_{BN}  & =V_{\text{phase}}\angle -120\degree \\
\vec{V}_{CN}  & =V_{\text{phase}}\angle -240\degree = V_{\text{phase}}\angle +120\degree
\end{align}
$$
where $V_{\text{phase}}$ is the rms value of the *phase-to-neutral voltage* and phase-A voltage has been taken as a reference.

### Line-to-line Voltage
From the phasors of phase-to-neutral voltages, we can find the phasors of *line-to-line* voltages.

![[Y Connection Style-2.png|420]]

From Fig. 4-6, the phasors of the line-to-line voltages can be found as:
$$
\begin{align}
\vec{V}_{AB} & =V_{LL}\angle 30\degree \\
\vec{V}_{BC} & =V_{LL}\angle -90\degree \\
\vec{V}_{AB} & =V_{LL}\angle 150\degree
\end{align}
$$
where $V_{LL}=\sqrt{ 3 }V_{\text{phase}}$.

The above can be derived by doing vector arithmetic. For example, as shown in the diagram above, we have:
$$
\begin{align}
\vec{V}_{AB} & =\vec{V}_{AN}-\vec{V}_{BN} \\[2ex]
	 & =V -V(\cos (-120\degree)+j\sin (-120\degree)) \\[2ex]
	 & =\frac{3}{2}V+j\frac{\sqrt{ 3 }}{2}V \\[2ex]
| \vec{V}_{AB} |  &  = \sqrt{ \left(\frac{3}{2}V\right)^{2}+\left(\frac{\sqrt{ 3 }}{2}V\right)^{2} }= \sqrt{ 3 }V \\[2ex] 
\theta_{AB} & =\tan ^{-1}\left( \frac{\sqrt{ 3 }}{2}  / \frac{3}{2}\right)=30\degree
\end{align}
$$

---
## Loads and Currents
The relationship between the phase and line voltages will be the same as that for a 3-phase Y-connected source. Let’s look at the currents in the three phases.

![[Y Connection Style-3.png|440]]

We can calculate the currents. For example:
$$
\begin{align}
\vec{I}_{a} & =\frac{\vec{V}_{an}}{Z_{\text{phase}}} \\[2ex]
 & =\frac{V_{\text{phase}}\angle 0\degree}{Z_{\text{phase}}\angle \theta} \\[2ex] 
	 & = \frac{V_{\text{phase}}}{| Z_{\text{phase}} |}\angle-\theta \\[2ex]
	 & = I_{\text{phase}}\angle-\theta
\end{align}
$$
Where $\theta$ is the phase angle of the impedance $Z_{\text{phase}}$.

Then, we also have:
$$
\begin{align}
\vec{I}_{b}=\frac{\vec{V}_{bn}}{Z_{\text{phase}}} =\vec{I}_{\text{phase}}\angle-120\degree-\theta \\[2ex] 
\vec{I}_{c}=\frac{\vec{V}_{cn}}{Z_{\text{phase}}} =\vec{I}_{\text{phase}}\angle+120\degree-\theta
\end{align}
$$
where $Z_{\text{phase}}$ is the impedance per phase and $I_{\text{phase}}$ is the rms value of the phase current. In the Y-connection style, the current in each line is equal to the current in the corresponding phase. Thus, *the line current is equal to the phase current*, i.e.
$$
I_{\text{line}}=I_{\text{phase}}
$$
The same relationships hold true for the currents in a 3-phase balanced Y-connected voltage source.

>[!note] Phase current vs Line current
>- Phase current: The current that flows through each impedance (load) connected between a phase and the neutral point.
>- Line current: The current that flows in the conductors connecting the source to the load.

Note that in a 3-phase Y-connected balanced system:
$$
\begin{align}
\vec{V}_{AN}+\vec{V}_{BN}+\vec{V}_{CN}=0 \quad  & \text{or} \quad \vec{V}_{an}+\vec{V}_{bn}+\vec{V}_{cn}=0 \\
\vec{V}_{AB}+\vec{V}_{BC}+\vec{V}_{CA}=0 \quad  & \text{or} \quad \vec{V}_{ab}+\vec{V}_{bc}+\vec{V}_{ca}=0 \\
\vec{I}_{A}+\vec{I}_{B}+\vec{I}_{C}=0 \quad  & \text{or} \quad \vec{I}_{a}+\vec{I}_{b}+\vec{I}_{c}=0 \\
\end{align}
$$

![[Y Connection Style-4.png|460]]
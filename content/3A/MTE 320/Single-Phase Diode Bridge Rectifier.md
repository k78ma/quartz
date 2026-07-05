---
title: Single-Phase Diode Bridge Rectifier
tags:
  - mte320
date: 2024-07-29
aliases:
  - single-phase diode bridge rectifier
---
Below, the circuit diagram of a single-phase diode bridge with a resistive load is shown.

![[Single-Phase Diode Bridge Rectifier.png]]

The top-group diodes, $D_{1}$ and $D_{3}$, have common cathodes. Therefore, the one connected to a higher voltage at the anode will be forward biased and will conduct the load current.

The bottom diodes, $D_{2}$ and $D_{4}$ have common anodes. Therefore, the one connected to a lower potential at the cathode will be forward biased and conduct the load current.

## Operation
- Assume the source voltage is in the negative half-cycle and $D_{3}$ and $D_{4}$ are conducting $i_{d}$. 
- As soon as $v_{s}$ becomes positive, $D_{1}$ becomes forward-biased, and the same happens to $D_{2}$.
- The load current finds the path through $D_{1}$ and $D_{2}$ more attractive than the path through $D_{3}$ and $D_{4}$ since the former leads to the negative pole of the AC supply. The load current is thus transferred to $D_{1}$ and $D_{2}$.
- $D_{3}$ and $D_{4}$ are turned off when their currents fall to zero and will remain reverse biased until the beginning of the next negative half cycle of the source voltage.
- As soon as $v_{s}$ becomes negative, $D_{3}$ becomes forward biased, and the same happens to $D_{4}$. The load current finds the path through $D_{3}$ and $D_{4}$ more attractive than the path through $D_{1}$ and $D_{2}$ since the former leads to negative pole of the AC supply. The load current is thus transferred to $D_{3}$ and $D_{4}$.
- $D_{1}$ and $D_{2}$ are turned off when their currents fall to zero and will remain reverse biased until the beginning of the next positive half cycle of the source voltage.

Below, the wave forms of the AC side and DC side voltage and currents are shown.

![[Single-Phase Diode Bridge Rectifier-1.png]]

Note that:
$$
v_{d}=\begin{cases}
v_{s} & \text{when }v_{s}>0 \\
-v_{s} & \text{when }v_{s}<0
\end{cases}
$$
or
$$
v_{d}=| v_{s} |
$$
and:
$$
i_{s}=\begin{cases}
i_{d} & \text{when }v_{s}>0 \\
-i_{d} & \text{when }v_{s}<0
\end{cases}
$$
The average value of the output voltage can be found as:
$$
\begin{align}
V_{d} & =\frac{1}{\pi}\int_{0}^{\pi} v_{s}(\omega t) \, d(\omega t)  \\[2ex]
	 & = \frac{1}{\pi}\int_{0}^{\pi} \sqrt{ 2 }V_{s}\sin \omega t \, d(\omega t) \\[2ex] 
  & =\frac{\sqrt{ 2 }V_{s}}{\pi}[-\cos \omega t]^{\pi}_{0}\\[2ex] 
	 & =\frac{2\sqrt{ 2 }V_{s}}{\pi} \\
	 & =0.9 V_{s}
\end{align}
$$
where $V_{s}$ is the RMS value of the AC source voltage.

in practical diode bridge rectifiers, a large capacitor (on the order of a few millifarads) is connected across the DC-side terminals. Due to the large time constant of the output R-C circuit, the DC voltage ripple contents will be reduced (this is essentially a [[Low-pass Filter|passive low pass filter]]). 
- The design of the capacitor is performed based on the specifications on the DC voltage ripple contents. The larger the capacitor size, the lower the ripple contents of the DC voltage. \
- The presence of a large capacitor on DC side will deteriorate the quality of the AC side current. The AC side source inductance helps improve the quality of AC side current. 
- For more effective filtering of AC side current, a low-pass filter can be used. 
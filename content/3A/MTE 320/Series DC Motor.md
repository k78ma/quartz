---
title: Series DC Motor
tags:
  - mte320
date: 2024-07-15
aliases:
  - series dc motor
---
Below we have the schematic diagram of a series DC motor and its equivalent circuit diagram.

![[Series DC Motor.png|436]]

In series DC motors, the field circuit is connected in series with the armature circuit. The main relations for series DC motor are:
$$
\begin{align}
I_{L} & =I_{f}=I_{a} \\[2ex]
\phi & =\frac{N_{f}I_{f}}{\mathcal{R}}
\end{align}
$$
where $N_{f}$ is the number of turns of field winding and $\mathcal{R}$ is the [[Magnetic Reluctance|magnetic reluctance]].

Then:
$$
\begin{align}
V_{L} & =I_{a}(R_{a}+R_{f})+E_{c} \\[2ex] 
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n\\[2ex] 
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}\\[2ex] 
\end{align}
$$
Thus, we have $\phi \propto I_{a}$, and $\tau_{m}\propto I_{a}^{2}$.

## Speed-Torque Characteristic
Below we have the equivalent circuit of a series DC motor.

![[Series DC Motor-1.png|532]]

In a series DC motor, assuming field flux is proportional to field current:
$$
\phi=K_{1}I_{f}
$$
We then have:
$$
\begin{align}
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}\\[2ex] 
 & =K\phi I_{a}\\[2ex] 
 & =K(K_{1}I_{f})I_{a}\\[2ex] 
 & =K(K_{1}I_{a})I_{a}\\[2ex] 
 & =KK_{1}I_{a}^{2}\\[2ex] 
\end{align}
$$
This means that the developed torque is proportional to the square of the armature current.

Looking at the equivalent circuit, using KVL, we can write
$$
V_{L}=I_{a}(R_{f}+R_{a})+E_{c}
$$
We can derive current in terms of torque by re-arranging our previous expression to get
$$
I_{a}  =\sqrt{ \frac{\tau_{m}}{KK_{1}} }
$$
Also, we know that
$$
E_{c}=K\phi \omega_{m}=K'\phi n
$$
Therefore:
$$
V_{L}=\sqrt{ \frac{\tau_{m}}{KK_{1}} }(R_{a}+R_{f})+K'\phi n
$$
Since we have:
$$
\begin{align}
I_{a} & =I_{f}=\frac{\phi}{K_{1}}\\[2ex] 
\tau_{m} & =KK_{1}I_{a}^{2}=KK_{1} \frac{\phi^{2}}{K_{1}^{2}}=\frac{K}{K_{1}}\phi^{2}
\end{align}
$$
Solving for $\phi$, we have:
$$
\phi=\sqrt{ \frac{K_{1}}{K} }\sqrt{ \tau_{m} }
$$
As a result, our expression for $V_{L}$ becomes:
$$
V_{L}=\sqrt{ \frac{\tau_{m}}{KK_{1}} }(R_{a}+R_{f})+K'\sqrt{ \frac{K_{1}}{K} }\sqrt{ \tau_{m} }\;n
$$
Solving for speed $n$:
$$
\begin{align}
n & =\frac{V_{L}-\sqrt{ \frac{\tau_{m}}{KK_{1}} }(R_{a}+R_{f})}{K'\sqrt{ \frac{K_{1}}{K}  }\sqrt{ \tau_{m} }} \\\\[2ex] 
	 & = \frac{V_{L}}{K'\sqrt{ \frac{K_{1}}{K} }\sqrt{ \tau_{m} }}-\frac{(R_{a}+R_{f})}{K'K_{1}} 
\end{align}
$$
This results in the following plot:

![[Series DC Motor-2.png|564]]

This shows that the speed of a series DC motor is strongly load dependent. At no load, the speed is dangerously high. This implies that a series DC motor *should never be started without any load on the shaft*.

As the load is increased, the speed will drop rapidly. Series DC motor is a variable-speed DC motor, with a wide range of variations of speed from no load to full load. Also, one can see from that series DC motor has a high starting torque. Due to this characteristic, series DC motors are used in applications such as hoisting, where a high starting torque is required.


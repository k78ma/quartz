---
title: Shunt DC Motor Speed Control
tags:
  - mte320
date: 2024-07-30
aliases:
  - shunt motor speed control
---
Recall that for a [[Shunt DC Motor]], we have:
$$
n  =\frac{V_{L}-R_{a}I_{a}}{K'\phi}=\frac{V_{a}-R_{a}I_{a}}{K'\phi}
$$
This implies that the speed of a shunt motor can be controlled in 3 different ways:
1. Adjust armature resistance, $R_{a}$
2. Adjusting armature voltage, $V_{a}$
3. Adjusting flux, $\phi$

## Armature Resistance Control
Below we have a shunt motor with an adjustable resistor, $R_{\text{adj}}$, in series with its armature.

![[Shunt DC Motor Speed Control.png|524]]

In a shunt DC motor, we have:
$$
\begin{align}
\tau_{m} & =K\phi I_a \\[2ex]
I_{a} & =\frac{1}{K\phi}\tau_{m}
\end{align}
$$
Since $\phi$ is constant, we have $\tau_{m}\propto I_{a}$. Therefore, we have:
$$
\begin{align}
n   & =\frac{V_{L}-R_{a}I_{a}}{K'\phi}\\[2ex] 
	 & =\frac{V_{L}}{R_{a}}-\frac{R_{a}}{K'\phi}\left( \frac{1}{K\phi} \tau_{m}\right)
\end{align}
$$
With $R_{\text{adj}}$, we would have:
$$
n=\frac{V_{L}}{R_{a}}-\frac{R_{a}+R_{\text{adj}}}{KK'\phi}\tau_{m}
$$
This equation suggests that the torque-speed characteristic of shunt DC motor at different $R_{a}+ R_{\text{adj}}$ values are straight lines of different slopes, as shown here:

![[Shunt DC Motor Speed Control-1.png]]

where $R_{\text{adj}, 4} > R_{\text{adj}, 3} > R_{\text{adj}, 2} > R_{\text{adj}, 1}$. At any load torque $\tau_{L}$, the motor can be operated at the desired speed by adjust $R_{\text{adj}}$. 

This method of speed control is simple and inexpensive. However, the following disadvantages are associated with this approach:
1. The controlled speed is always smaller than the speed without $R_{\text{adj}}$
2. We cannot change the no-load speed of the motor
3. There is an additional $I^{2}R$ loss associated with $R_{\text{adj}}$
4. Speed regulation is deteriorated, and the almost-constant-speed characteristic of shunt DC motor is lost.

Due to these disadvantages, this method is rarely used, unless the motor is operated at full speed (corresponding to $R_{\text{adj}} = 0$) most of the time.

## Field Current/Flux Control
Shunt DC motor speed can be controlled by adjusting $\phi$ through varying $I_{f}$, using an adjustable resistance in series with the field circuit. This is shown below.

![[Shunt DC Motor Speed Control-2.png|548]]

Since $\phi$ appears in both terms on the right side of
$$
n=\frac{V_{L}}{R_{a}}-\frac{R_{a}+R_{\text{adj}}}{KK'\phi}\tau_{m}
$$
the effect of varying $\phi$ on speed is not obvious from the inspection of the formula. However:
- As $\phi$ decreases at a given $\tau_{L}$, $n$ increases.
- As $\phi$ increases at a given $\tau_{L}$, $n$ decreases.

The plot below shows the torque-speed characteristics of a shunt DC motor for two different values of $\phi$:

![[Shunt DC Motor Speed Control-3.png|616]]

where $\phi_{1}<\phi_{2}$ or $R_{\text{adj},1} > R_{\text{adj},2}$. In electric machines terminology, decreasing $\phi$ to go from a lower speed to a higher speed is called field weakening.

Let’s go through the process of increasing the motor speed by decreasing $\phi$, step-by-step. First, assume steady-state operation (constant motor speed).
1. Increasing $R_{\text{adj}}$ means that $(R_{f}+R_{\text{adj}})$ is increased.
2. Since we have $I_{f}=V_{L} / (R_{f}+R_{\text{adj}})$, $I_{f}$ decreases.
3. Thus, the flux also decreases because $\phi=N_{f}I_{f} / R$.
4. Decreasing flux also means decreasing [[Counter Torque and EMF|counter emf]] because $E_{c}=K'\phi n$.
5. This in turn results in a higher armature current, $I_{a}=(V_{L}-E_{c}) / R_{a}$.
6. Higher armature current also means higher torque, $\tau_{m}=K\phi I_{a}$.
	- Note that even though $\phi$ decreases, the increase in $I_{a}$ dominates and results in $\tau_{m}$ increasing. In fact, a small change in $\phi$, results in rather large changes in $I_{a}$ and $\tau_{m}$.
7. $\tau_{m}>\tau_{L}$ means that $n$ increases, because $\tau_{m}-\tau_{L}=J \frac{d\omega_{m}}{dt}$.
8. Then, the counter emf must increase because $E_{c}=K'\phi n$.
	- Note that even though $\phi$ decreases, the increase in $n$ dominates and results in $E_{c}$ increasing.
9. Thus, armature current decreases because $I_{a}=\frac{V_{L}-E_{c}}{R_{a}}$.
10. $\tau_{m}$ decreases because $\tau_{m}=K\phi I_{a}$.
11. $\tau_{m}=\tau_{L}$ has been is reached at a speed higher than the original speed. This will be the new steady-state speed.

The advantages of the field flux control of shunt DC motor speed are:
- It is possible to change the no-load speed.
- Speeds higher than the one corresponding to $R_{\text{adj}} = 0$ can be obtained. 

The disadvantages of this method of DC motor speed control are:
- Speed regulation (i.e., slope of speed-torque characteristic) is affected.
- Extra $I^{2}R$ losses will occur due to the presence of $R_{\text{adj}}$.

## Armature Voltage Control
Below we have the schematic diagram of a shunt DC motor with speed control based on armature voltage adjustment. A constant voltage $V_{L}$ is used to produce a variable voltage $V_{a}$ using a [[Switch Mode DC-DC Converters|DC/DC converter]].

![[Shunt DC Motor Speed Control-4.png|624]]

The torque-speed characteristic of a shunt DC motor based on
$$
n=\frac{V_{a}}{K\phi}-\frac{R_{a}}{KK'\phi}\tau_{m}
$$
is shown below for three different armature voltage values:

![[Shunt DC Motor Speed Control-5.png|624]]

where we have $V_{a_{1}}>V_{a_{2}}>V_{a_{3}}$.

The sequence of events in this method of control, when armature voltage is increased, is as follows:
1. $V_{a}$ is increased by the DC/DC converter.
2. As a result, $I_{a}$ increases since we have $I_{a}=(V_{a}-E_{c}) / R_{a}$.
3. The produced torque increases as well as we have $\tau_{m}=K\phi I_{a}$.
4. Since $\tau_{m}>\tau_{L}$, the speed $n$ increases.
5. In response to this, counter emf increases with $E_{c}=K'\phi n$.
6. Thus, $I_{a}$ decreases since we have $I_{a}=(V_{a}-E_{c}) / R_{a}$.
7. The produced torque decreases with $\tau_{m}=K\phi I_{a}$
8. We have $\tau_{m}=\tau_{L}$ (steady-state) reached at a speed higher than the original speed. This will be the new steady-state speed.

Advantages:
- Speed control at any loading level, from no load to full load, is possible.
- $I^{2}R$ losses associated with armature resistance control and field resistance control methods are avoided.
- The close-to-constant-speed characteristic of shunt DC motor is maintained.

## Full Range Shunt DC Motor Speed Control
Armature voltage control and field current control are the two most common techniques for shunt DC motor speed control. Each of these two methods has a range of safe operation.

Armature voltage control can be used to control the speed of the shunt DC motor from standstill to a speed called *base speed* that corresponds to rated terminal voltage, rated power and rated field current. If a higher speed is desired, it cannot be obtained by increasing armature voltage beyond the rated value, as this will not be safe.

Field flux control can be used to increase the motor speed by decreasing $I_{f}$ and $\phi$ (i.e, field weakening). The minimum speed that can be obtained by field flux control method corresponds to the rated field current. The minimum speed in field flux control method coincides with the maximum speed in the armature voltage control technique, i.e., the base speed.

To combine the best of the two methods, the shunt DC motor is controlled by armature voltage control between zero speed and base speed, and by field current (or field flux) control beyond base speed. This is illustrated below.

![[Shunt DC Motor Speed Control-6.png|648]]

## Examples

> [!Example]- Example 6-5
> ![[MTE 320 E6-5.pdf]]

> [!Example]- Example 6-6
> ![[MTE 320 E6-6.pdf]]

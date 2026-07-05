---
title: MTE 322 Project 1
tags:
  - mte322
date: 2024-10-06
aliases:
  - mte 322 project 1
draft: "true"
---
## Parameters/Information
**Input:**
- $N_{P}=35$
- $N_{G}=56$
- $m=4\text{ mm}$
- $d_{P}=35\cdot4 = 140 \text{ mm}$
- $d_{G}=56\cdot4 = 224 \text{ mm}$
- $\phi=20\degree$
- $\gamma_{G1}=\tan ^{-1}\left( \frac{56}{35} \right)=57.995\degree$

**Output:**
- $N_{P}=44$
- $N_{G}=60$
- $d_{P}=154 \text{ mm}$
- $d_{G}=210 \text{ mm}$
- $m=3.3$

**Azimuth:**
- $N_{P}=15$
- $N_{G}=90$
- $d_{P}=75 \text{ mm}$
- $d_{G}=450 \text{ mm}$
- $m=5 \text{ mm}$

## Part 1
### 1.1
**What is the speed of the propeller in rpm?**

Input speed:
$$
\omega_{\text{in}}=1470 \text{ rpm}
$$
Gear ratio:
$$
\text{Ratio}=\frac{35}{56}\cdot \frac{44}{60}=\frac{11}{24}
$$
Therefore, the output speed is:
$$
\omega_{\text{out}}=\boxed{673.75 \text{ rpm}}
$$
### 1.2
**To create $45\degree$ of azimuth angle, what angle the azimuth motor needs to the rotate?**
$$
45\degree \times \frac{N_{G}}{N_{P}}=45\degree\times \frac{90}{15}=\boxed{270\degree}
$$

## Part 2

### Bevel Gear 1
![[MTE 322 Project 1.png]]
$$
\begin{align}
T\omega & =Fv \\[2ex]
T  & = \frac{Fv}{\omega}=\frac{8000 \text{ N}\cdot 12.5 \text{ m/s}}{\left( 1470 \text{ rpm} \cdot \frac{35}{56} \right) \cdot \frac{2\pi}{60}} = 1039.38 \text{ Nm}
\end{align}
$$
We can solve for the gear forces starting with $W_{tG1}$:
$$
\begin{align}
\sum T & =W_{tG 1}\cdot r_{G1} \\[2ex]
W_{tG 1}  & = \frac{T}{r_{G 1}}= \frac{1039.38 \text{ Nm}}{0.112 \text{m}}= 9280.17 \text{ N}\\
\end{align}
$$
Using this, we can solve $W_{rG 1}$ and $W_{x G 1}$:
$$
\begin{align}
W_{rG 1}  & = W_{tG 1}  \cdot  \cos \gamma_{G_{1}} \cdot  \tan \phi_{G 1} \\
	 & = (9280.17)(\cos 57.995\degree)(\tan 20\degree) = 1790.16 \text{ N} \\
W_{xG 1}  & = W_{rG 1}\cdot \tan \gamma_{G1} \\
	 & =(1790.16 \text{ N})(\tan 57.995\degree)=2864.29 \text{ N}
\end{align}
$$
We can then solve do statics in the $x$-$y$ plane to solve for $E_{y}$ and $G_{y}$:
$$
\begin{align}
\sum M_{z} & =(l_{G}+l_{E})E_{y} + l_{G}W_{t G 1}=0 \\[2ex] 
	E_{y} & =-\frac{l_{G}W_{tG 1}}{l_{G}+l_{E}} = -\frac{(9280.17 \text{ N})(52.48 \times 10^{-3} \text{ m})}{(52.48+13.28 ) \times 10^{-3} \text{ m}} = \boxed{-7406.07 \text{ N}}
\end{align}
$$
and
$$
\begin{align}
\sum F_{y} & =G_{y}+W_{tG 1}+E_{y}=0 \\
G_{y} & =-E_{y}-W_{tG 1} = 7406.07-9280.17 = -1874.10 \text{ N}
\end{align}
$$
Similarly, for the $x$-$z$ plane:
$$
\begin{align}
\sum M_{y}  & = \frac{l_{G}W_{rG 1}-r_{G 1}W_{x G 1}}{l_{G}+l_{E}} \\
E_{z}  & =\frac{r_{G 1 }W_{x G 1}-r_{G 1 }W_{x G 1}}{l_{G}+l_{E}} = \frac{(52.48 \times 10^{-3} \text{ m})(1790.16 \text{ N})-(112 \times 10^{-3}\text{ m})(2864.29 \text{ N})}{(52.48+13.28) \times 10^{-3} \text{ m}} = -3449.69 \text{ N}
\end{align}
$$
and
$$
\begin{align}
\sum F_{z} & =G_{z}-W_{rG 1}+E_{z}=0 \\
G_{z} & =W_{rG 1}-E_{z}=1790.16 + 3449.71=\boxed{5238.87 \text{ N}}
\end{align}
$$
The axial load can be found by considering $\sum F_x = E_x + G_x - W_{xG1}=0$. Knowing that $E$ can only support the axial load upwards, and $G$ can only support downwards, if we make the assumption that their magnitudes are equal, we have:
$$
E_{x}=W_{rG 1} / 2 = \boxed{ 1423.145 \text{ N} }, \, \, G_{x}=-W_{rG 1} / 2 = \boxed{  -1423.145 \text{ N} }
$$

### Bevel Gear Set 2
We have the same torque as in the previous part, $1039.38 \text{ Nm}$. Like we did before, we can find the components of $W_{P2}$:
$$
\begin{align}
\sum T & =W_{t P 2}r_{P2} \\
W_{tP 2}  & = \frac{T}{r_{P 2}}=\frac{1039.38 \text{ Nm}}{77 \times 10^{-3} \text{ m}} = 13498.44 \text{ N}  \\
W_{rP 2} & = W_{t P2} \cdot \cos \gamma_{P2} \cdot \tan \phi_{P 2} \\
	 & = 13498.44 \text{ N} \cdot  \cos(36.254\degree)\cdot \tan  20\degree = 3961.89 \text{ N}  \\
W_{xP 2} & = W_{rP 2}\cdot \tan \gamma_{P 2} \\
	 & = (3961.89 \text{ N})\cdot \tan(36.254\degree)=2905.40 \text{ N}
\end{align}
$$
Now we once again use the $x$-$y$ plane to get bearing forces $K_{y}$ and $L_{y}$. Once again using clockwise as positive for moments, we have:
$$
\begin{align}
\sum M_{Z} & =-l_{L}W_{tP 2}+(l_{L}+l_{K})K_{y}=0 \\
K_{y} & = \frac{l_{L}W_{t P 2}}{l_{L}+l_{K}} = \frac{(40.5 \times 10^{-3} \text{ m})(13498.44 \text{ N})}{(40.5 + 55)\times 10^{-3}\text{ m}}=\boxed{ 5724.47 \text{ N}  }
\end{align}
$$
and
$$
\begin{align}
\sum F_{y} & =K_{y}-W_{t P 2} + L_{y}=0  \\
L_{y} & =W_{t P 2} - K_{y} = 13498.44\text{ N} - 5724.47 \text{ N} = \boxed{ 7773.97 \text{ N} }
\end{align}
$$
Similarly, in the $x$-$z$ plane:
$$
\begin{align}
\sum M_{y} & =-l_{L}W_{r P 2}-r_{P 2} W_{x P 2}+(l_{L}+l_{K})K_{z} \\
K_{z}  & = \frac{-l_{L}W_{r P 2}-r_{P 2} W_{x P 2}}{l_{L}+l_{K}}= \frac{(3961.89 \text{ N})(40.5 \times 10^{-3} \text{ m})+(2905.40 \text{ N})(77\times 10^{-3} \text{ m})}{(40.5 + 55)\times 10^{-3} \text{ m}}=\boxed{ 4022.75 \text{ N} }
\end{align}
$$
and
$$
\begin{align}
\sum F_{z} & =K_{z}- W_{r P 2}+L_{z} =0 \\
L_{z} & =W_{rP 2}-K_{z}=3961.89\text{ N} - 4022.74 \text{ N} = -60.85 \text{ N}
\end{align}
$$


The axial load can be found by considering $\sum F_x = L_x + K_x + W_{xP_{2}}=0$. Knowing that $K$ can only support the axial load upwards, and $L$ can only support downwards, if we make the assumption that their magnitudes are equal, we have:
$$
E_{x}=W_{xP2} / 2 = \boxed{ 1452.7 \text{ N} }, \, \, G_{x}=-W_{xP_{2}} / 2 = \boxed{  -1452.7 \text{ N} }
$$

## Part 3
We can first find the power at the propeller with:
$$
P_{\text{propeller}} = F\times v=8000 \text{ N} \times 12.5 \text{ m/s} = 100000\text{ W}
$$
Since there's an 80% loss in power from the thrust motor to the propeller, we have 20% efficiency ($\eta=0.2$). Thus, we have
$$
P_{\text{motor}} = \frac{\text{Power at propeller}}{\eta}=\frac{100000 \text{ W}}{0.2}=500000\text{ W} = \boxed{500 \text{ kW}}
$$
It is given that the motor's speed is 1470 rpm. The angular speed in rad/s can be found with:
$$
\omega_{\text{motor}}=1470 \text{ rpm} \times \frac{2\pi}{60}=153.94 \text{ rad/s}
$$
The propeller output speed can then be found with:
$$

\omega_{\text{out}}= 153.94 \cdot \frac{N_{P1}}{N_{G1}} \cdot \frac{N_{P2}}{N_{G2}} = 153.94 \cdot  \frac{11}{24}= 70.55 \text{ rad/s}
$$
This can be used to compute the torque at the propeller shaft:
$$
T_{\text{propeller}}=\frac{P_{\text{propeller}}}{\omega_{\text{propeller}}}=\frac{100000\text{ W}}{70.55 \text{ rad/s}}=1417.34 \text{ Nm}
$$
Finally, the torque at the motor shaft can be found by relating it to the torque at the propeller shaft using gear ratio and efficiency.
$$
\begin{align}
T_{\text{propeller}} & =T_{\text{motor}}\times G_{\text{total}}\times \eta \\[2ex] 
T_{\text{motor}} & =\frac{T_{\text{propeller}}}{G_{\text{total}}\times \eta} =\frac{1417.34 \text{ Nm}}{\frac{24}{11}\cdot 0.2}=\boxed{3248 \text{ Nm}}
\end{align}
$$
This can be verified by using the computed power and angular speed instead:
$$
T_{\text{motor}}=\frac{500000\text{ W}}{153.94 \text{ rad/s}}=box


$$


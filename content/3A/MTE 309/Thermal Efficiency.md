---
title: Thermal Efficiency
tags:
  - mte309
date: 2024-08-03
aliases:
  - thermal efficiency
  - Carnot efficiency
  - thermodynamic temperature
---
In a [[Heat Engine|heat engine]], we have
$$
W_{\text{net, out}}=Q_{\text{in}}- Q_{\text{out}}
$$
$Q_{\text{out}}$ represents the magnitude of the energy wasted in order to complete the cycle. But $Q_{\text{out}}$ is never zero; thus the net work output of a heat engine is always less than the amount of heat input. Only part of the heat transferred to the heat engine is converted to work. 

The fraction of the heat input that is converted to net work output is called the thermal efficiency $\eta_{\text{th}}$. For heat engines, the desired output is the net work output, and the required input is the amount of heat supplied to the working fluid. Then, the thermal efficiency is:
$$
\begin{align}
\text{Thermal efficiency} & =\frac{\text{Net work output}}{\text{Total heat input}} \\[2ex]
\eta_{\text{th}} & =\frac{W_{\text{net, out}}}{Q_{\text{in}}} \\[2ex]
	 & =1-\frac{Q_{\text{out}}}{Q_{\text{in}}}
\end{align}
$$
Cyclic devices such as heat engines, [[Refrigerators and Heat Pumps|refrigerators, and heat pumps]], operate between a high temperature medium (or reservoir) at temperature $T_{H}$ and a low temperature reservoir at temperature $T_{L}$. For uniformality, we define these quantities:
- $Q_{H}$ is the magnitude of heat transfer between the cyclic device and the high-temperature medium at temperature $T_{H}$.
- $Q_{L}$ is the magnitude of heat transfer between the cyclic device and the low-temperature medium at temperature $T_{L}$.

Note that $Q_{L}$ and $Q_{H}$ are defined as magnitudes, and are therefore positive quantities. Their direction can be determined by inspection. 

Then, the net work output and thermal efficiency relations for any heat engine can be expressed as:
$$
\begin{align}
W_{\text{net, out}}&=Q_{H}-Q_{L}\\[2ex] 
\eta_{\text{th}} & = \frac{W_{\text{net, out}}}{Q_{H}} = 1- \frac{Q_{L}}{Q_{H}} \\[2ex] 
 & =\frac{\dot{W}}{\dot{Q}_{\text{H}}}=\frac{\dot{Q}_{\text{H}}-\dot{Q}_{\text{L}}}{\dot{Q}_{\text{H}}}=1-\frac{\dot{Q}_{\text{L}}}{\dot{Q}_{\text{H}}}
\end{align}
$$
Thermal efficiency is a measure of how efficiently a heat engine converts the heat that it receives to work. Heat engines are built for the purpose of converting heat to work, and engineers are constantly trying to improve the efficiencies of these devices. The [[Second Law of Thermodynamics|Kelvin-Planck statement of the 2nd Law]] says that $\eta_{\text{Th}}<1$.

## Thermodynamic Temperature
So we know that a heat engine like a steam power plant operates in a cycle to continuously use heat to generator work. For the cycle, we can write:
$$
\begin{align}
\text{First law:} \quad \cancel{ \frac{dE_{\text{sys}}}{dt} } & =\dot{Q}_{H}-\dot{Q}_{L}-\dot{W}_{\text{net}}\\[2ex] 
\dot{W}_{\text{net}} & =\dot{Q}_{H}-\dot{Q}_{L}
\end{align}
$$
and
$$
\begin{align}
\text{Second law:} \quad \Delta \dot{S}_{\text{sys}} & =\sum \frac{\dot{Q}_{k}}{T_{k}}+\dot{S}_{\text{gen}} \\[2ex]
	 0& = \frac{\dot{Q}_{H}}{T_{H}}-\frac{\dot{Q}_{L}}{T_{L}} \\[2ex]
	\frac{\dot{Q}_{L}}{\dot{Q}_{H}} & =\frac{T_{L}}{T_{H}}
\end{align}
$$
Here, $\frac{T_{L}}{T_{H}}$ is defined as a thermodynamic temperature scale by Lord Kelvin. Energy is 0 at 0 Kelvin.

## Carnot Efficiency
The maximum thermal efficiency is called the Carnot efficiency:
$$
\eta_{C}=\frac{\dot{W}_{\text{net}}}{\dot{Q}_{H}}=\frac{\dot{Q}_{H}-\dot{Q}_{L}}{\dot{Q}_{H}}=1-\frac{\dot{Q}_{L}}{\dot{Q}_{H}}=1-\frac{T_{L}}{T_{H}}
$$
or:
$$
\dot{W}_{\text{net}}=\left( 1-\frac{T_{L}}{T_{H}} \right)\dot{Q}_{H}
$$
- As $T_{H} \to \infty$, $\dot{Q}$ is as useful as $\dot{W}$. 
- As $T_{H}\to T_{L}$, $\dot{Q}$ is useless (no driving force).



> [!example] Example
> 
>![[JPEG image-4822-9987-84-0.jpeg]]
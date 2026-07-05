---
title: Food-Serving Robot Project
tags:
  - syde351
date: 2024-07-27
aliases:
  - food-serving robot project
draft: "true"
---
$$
\begin{align}
I(s) & =\frac{1}{R_{a}+L_{a}s}(v_{a}-K_{B}\,\Omega(s)) \\[2ex] 
\Omega(s) & =\frac{1}{c+Is}(K_{T}I(s)-T_{L})
\end{align}
$$

$$
\begin{align}
\Theta(s) & =\frac{V_{L}(s)+V_{R}(s)}{L} \\[2ex] 
sX(s) & =\frac{V_{L}(s)+V_{R}(s)}{2}\cos(\Theta(s)) \\[2ex]
xY(s) & =\frac{V_{L}(s)+V_{R}(s)}{2}\sin(\Theta(s))
\end{align}
$$

$$
\begin{align}
d_{L}&=\left( R-\frac{L}{2} \right)\theta \\[2ex]
d_{R}&=\left( R+\frac{L}{2} \right)\theta \\[2ex] 
d&=\frac{d_{L}+d_{R}}{2} \\[2ex]
\theta & =\frac{d_{R}-d_{L}}{L} \\[2ex]
\dot{x} & = \dot{d}\cos \dot{\theta} =\frac{V_{L}+V_{R}}{2}\cos\left( \frac{V_{R}-V_{L}}{L} \right) \\[2ex]
\dot{y} &= \dot{d}\sin \dot{\theta} \\[2ex] 
\dot{\theta} & =\frac{\dot{d}_{R}-\dot{d}_{L}}{L}
\end{align}
$$

- [x] **Deliverables of Tasks 1 and 2:** In your report, document your initial assumptions for making the model, include the method with which you created the model (schematic diagrams for Simscape or governing equations and block diagrams for Simulink). Submit the models and their related components.
- [x] **Deliverables of Tasks 3 to 6:** Include at least the following items in your report:
	- [x] The two floor input signals (Tasks 3 & 4)
	- [x] Report of design iteration and parameter selection of Task 5 with related graphs.
	- [x] The vertical force and vertical acceleration versus time for the three floor signals (Task 6).
- [ ] **Deliverables of Tasks 7 to 10:** Include at least the following items in your report:
	- [x] The selected motor and its parameters and datasheet or alternatively selected parameters of the motor.
	- [x] The designed geometrical parameters of the robot (e.g., assumed wheel base, distance of the projected centre of mass)
	- [x] Gear ratio
	- [x] The input voltage signals and justifications/ design iterations.
	- [x] Plots of instantaneous acceleration and jerk of the robot.
	- [x] Plot of the actual path that the robot travels.

C42-L50 winding code 10:
- L_a = Terminal inductance = 1.3 mH
- R_a = Terminal resistance = 0.7 ohm
- K_T = Torque Sensitivity = 0.1412 Nm/amp
- K_B = Back EMF = 0.1412 volts/rad/sec
- Cshaft = Damping Factor = 0.037 Nm/KPRM
- J = Rotor Inertia = 6355.4 g-cm\^2
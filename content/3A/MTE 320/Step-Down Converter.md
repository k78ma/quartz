---
title: Step-Down Converter
tags:
  - mte320
date: 2024-07-30
aliases:
  - step-down converter
  - buck converter
---
Below we have the circuit diagram of a buck (step-down) DC/DC converter. The components of the circuit, which are assumed to be ideal, are:
- Switch S
- Diode D
- Inductor L
- Capacitor C

![[Step-Down Converter.png|548]]

- The DC input voltage is $V_{i}$ and the output voltage is $V_{o}$. 
- $R$ represents the resistive load across the output terminals 
- $V_{o, \text{unfiltered}}$ is the voltage across the diode $D$. 
- $L$ and C form a second-order [[Low-pass Filter]] (LPF) and are designed based on the specified percent ripple in inductor current and capacitor voltage, respectively. It will be shown later that the average output voltage is always smaller than the input voltage in a buck converter.

## Operation

### Switch On
The equivalent circuit diagram of the buck converter when the switch is on is shown below. In this state, the diode is reverse biased, and the voltage across the inductor $V_{i}-V_{o}$ is positive. The inductor current rises, and energy is stored in the inductor.

![[Step-Down Converter-1.png|552]]

### Switch Off
The equivalent circuit diagram of the buck converter when the switch is off is shown below. The inductor current is momentarily interrupted. The $L\,di/dt$ voltage generated overcomes the output voltage and forward biases the freewheeling diode. The voltage across the inductor ($-V_{o}$) is negative. The inductor current falls and the energy stored in the inductor during switch on period is transferred to the output.

![[Step-Down Converter-2.png|548]]

## Voltage Across Diode
Figure 7-21 shows the voltage across the diode, $V_{o, \text{unfiltered}}$. This is equal to $V_{i}$ when the switch is in the on state, $t_{\text{on}}$, (since S represents a short circuit) and zero during switch off state, $t_{\text{off}}$, (since D represents a short circuit).

![[Step-Down Converter-3.png|440]]

Note that
$$
T_{s}=t_{\text{on}}+t_{\text{off}}=\frac{1}{f_{s}}
$$
where $f_{s}$ is the switching frequency (the rate at which the switch is turned on and off) in Hz. $V_{o}$ is the average value of the diode voltage, $V_{o, \text{unfiltered}}$, which is the same as the average value of the output voltage, as the LPF allows the low-frequency components of diode voltage to go through and filters the high-frequency components, that happen at the switching frequency and its integer multiples.

Thus, the average value of the output voltage can be found as follows:
$$
V_{o}=V_{i} \frac{t_{\text{on}}}{T_{s}}=dV_{i}
$$
where $d$ is the duty ratio or duty cycle of the switch. This relation shows that as duty ratio varies between $0$ and $1$, the average output voltage varies between 0 and $V_{i}$. 

In other words, in a buck converter, $V_{o}$ is always smaller than $V_{i}$, hence the name step-down or buck converter. The relation for the average value of output voltage can also be found in terms of control signal in the following way. 

## PWM
Figure 7-22 illustrates the PWM process. It compares $V_{\text{control}}$ with the triangular carrier signal, which is a sawtooth waveform of amplitude $V_{st}$ and frequency $f_{s}$, and generation of switch control signal.

![[Step-Down Converter-4.png|448]]

From the two similar triangles $ABC$ and $ADE$, we can write:
$$
d=\frac{t_{\text{on}}}{T_{s}}=\frac{AC}{AE}=\frac{BC}{DE}=\frac{V_{\text{control}}}{V_{st}}
$$
Replacing the expression for duty ratio in the formula of average output voltage yields:
$$
V_{o}=dV_{i}=\frac{V_{\text{control}}}{V_{st}} V_{i}
$$
Thus, there is a linear relationship between $d$ and $V_{o}$ and between $v_{\text{control}}$ and $V_{o}$. Even though the switching nature of the converter makes it a nonlinear system, there is a linear relationship between the control input and converter output voltage on an average per switching period basis. This linear relationship makes buck converter a linear amplifier, with $V_{\text{control}}$ as the input, Vo as the output, and $V_{i}/V_{st}$ as the gain. This allows using linear control techniques in the design of the converter.

## Inductor Design

Fig. 7-23 shows the waveform of the inductor current the buck converter. 

![[Step-Down Converter-5.png|488]]

The design equation for $L$ in terms of the specified relative inductor current ripple (i.e., peak-to-peak ripple in the inductor current relative to its average value) is given without proof as:
$$
L=\frac{R(1-d)}{f_{s} \frac{\Delta L}{I_{L, \text{avg}}}}
$$
To get a smaller inductor current ripple, a larger $L$ or higher $f_{s}$ has to be used. Thus, high switching frequency can reduce the size of $L$.

## Capacitor Design
Figure 7-24 shows the waveform of capacitor voltage in a buck converter. This is a zoom-in view of the output voltage ripple, as $\Delta V_{o}\ll V_{o}$.

![[Step-Down Converter-6.png|492]]

The design equation for $C$ in terms of the specified relative capacitor voltage ripple (i.e., peak-to-peak ripple in the capacitor voltage relative to its average value) is given below, without proof.
$$
C=\frac{(1-d)}{8f_{s}^{2}L \frac{\Delta V_{o}}{V_{o}}}
$$

Thus, to get a smaller capacitor voltage ripple, a larger $C$ or a higher $f_{s}$ has to be used. This fact shows the advantage of high switching frequency operation that can reduce the size of $C$.
---
title: Core Losses
tags:
  - mte320
date: 2024-05-26
aliases:
  - core losses
---
Core losses are the power losses that occur within the core leading to core heating, temperature rise and decrease in efficiency. Core loss has two components. 

## Hysteresis Loss
The first component is called *hysteresis loss*. The energy lost per cycle due to hysteresis phenomenon is related to the volume of the material and the peak value of the magnetic flux density. To find hysteresis power loss, which is the hysteresis energy loss per second, the energy loss per cycle must be multiplied by the frequency (the number of cycles per second). The empirical formula for hysteresis power loss is:
$$
P_{\text{hysteresis}}=K_{h}\times V\times B_{\text{max}}^{n}\times f
$$
where:
- $K_{h}$ is a constant
- $V$ is the volume of the magnetic material
- $B_{\text{max}}$ is the peak value of magnetic flux density
- $n$ is an empirical material-dependent constant in the range
- $f$ is the frequency of excitation in $\text{Hz}$

## Eddy Current Loss
The second component of core loss is called **eddy current loss**. 

Consider the magnetic circuit shown below. 
- A time-varying current is applied to the coil wrapped around an arm of the magnetic core. 
- A time-varying $B$ is produced. 
- The time-varying magnetic field induces an emf in the core material (according to [[Faraday’s Law]]).
- As the core is made of ferromagnetic material with a low electrical resistance, the induced emf causes loops of currents in planes perpendicular to the direction of magnetic field. These currents are called eddy currents and the magnetic fields produced by these currents oppose the changes in the magnetic field that produced them (according to Lenz’s law). 
- The eddy currents in the presence of resistance of the core material result in $I^{2}R$ losses called eddy current loss.

![[Core Losses.png|496]]

To suppress eddy currents, thus reducing eddy current losses, the magnetic cores in electric machines and transformers are not made of solid iron. Instead, the core is made as a stack of laminations insulated electrically with respect to one another to introduce a large resistance against eddy current generation.

As the resistance against eddy currents is increased, eddy currents will be reduced in magnitude and the corresponding losses will also be reduced. Eddy current power loss is related to the peak of the magnetic flux density in the core, thickness of laminations, frequency of operation and volume of the material, such that:
$$
P_{\text{eddy current}}=K_{e}\times V\times (B_{\text{max}}\times t\times f)^{2}
$$
where $K_{e}$ is a constant, $V$ is the volume of the magnetic material, and $B_{\text{max}}$ is the peak of magnetic flux density, $t$ is the thickness of core laminations, and $f$ is the frequency of excitation in $\text{Hz}$. As the lamination thickness is reduced, the possibility of developing eddy current loops and thus, eddy current loss is reduced.

![[Core Losses-1.png|496]]

The dependence of core losses on the peak value of magnetic flux density and frequency of operation. Operating an electric machine or transformer at a magnetic flux density or frequency higher than what the device is designed for, can cause excessive heat, and may cause permanent damage.

The total *core loss* can be obtained by adding the hysteresis loss and eddy current loss, such that
$$
P_{\text{core}}=P_{\text{hysteresis}}+P_{\text{eddy current}}
$$
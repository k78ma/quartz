---
title: Conduction
tags:
  - mte309
date: 2024-06-23
aliases:
  - conduction
  - Fourier's Law
  - thermal conductivity
---
Conduction is the transfer of energy from the more energetic particles of a substance to the adjacent less energetic ones as a result of interactions between the particles. 

Conduction can take place in solids, liquids, or gases. In gases and liquids, conduction is due to the collisions and diffusion of the molecules during their random motion. In solids, it is due to the combination of vibrations of the molecules in a lattice and the energy transport by free electrons. A cold canned drink in a warm room eventually warms up to the room temperature as a result of heat transfer from the room to the drink through the aluminum can by conduction.

Conduction is governed by **Fourier's Law**, in any direction $\hat{n}$:
$$
\begin{align}
\dot{Q}_{n}'' & =-k \frac{ \partial T }{ \partial n }  \\[2ex] 
\end{align}
$$
where:
- $\dot{Q}''_{n}$ is **heat flux** in $[\text{W} / \text{m}^{2}]$. Just $\dot{Q}$ is the heat transfer rate, the double prime $''$ indicates that this is heat transfer rate per unit area.
- $k$ is the **thermal conductivity** of the material in $[\text{W} / \text{m}\cdot \text{K}]$. This is a measure of the ability of a material to conduct heat
- $\frac{ \partial T }{ \partial n }$ is the temperature gradient, which is the slope of the temperature curve on a $T$-$n$ diagram (the rate of change of $T$ with $x$ or $n$), at location $n$.

Heat is conducted in the direction of decreasing temperature, and the temperature gradient becomes negative when temperature decreases with increasing $n$. The negative sign in the equation above ensures that heat transfer in the positive $n$-direction is positive.

The heat transfer area A is always normal to the direction of heat transfer. For heat loss through a 5-m-long, 3-m-high, and 25-cm-thick wall, for example, the heat transfer area is $A=15 \text{m}^{2}$. Note that the thickness of the wall has no effect on $A$.

![[Conduction-1.png|456]]

## Thermal Conductivity
The thermal conductivity $k$ is a measure of a material’s ability to conduct heat. A high value for thermal conductivity indicates that the material is a good heat conductor, and a low value indicates that the material is a poor heat conductor or *insulator*. 

The thermal conductivities of materials vary over a wide range, as shown below. The thermal conductivities of gases such as air vary by a factor of $10^{4}$ from those of pure metals such as copper. Note that pure crystals and metals have the highest thermal conductivities, and gases and insulating materials have the lowest.

![[Conduction-2.png]]

## Mechanisms of Conduction
Temperature is a measure of the kinetic energies of particles, such as the molecules or atoms of a substance. In a liquid or gas, the kinetic energy of the molecules is due to their random translational motion as well as their vibrational and rotational motions. When two molecules possessing different kinetic energies collide, part of the kinetic energy of the more energetic (higher temperature) molecule is transferred to the less energetic (lower temperature) molecule. The higher the temperature, the faster the molecules move, and the higher the number of such collisions, the better the heat transfer.

![[Conduction-3.png|368]]

### Gases
The above kinetic theory of gases predicts the thermal conductivity of gases quite well, leading to the conclusions that the thermal conductivity of gases is:
- Proportional to the square root of the thermodynamic temperature $T$
	- Higher temp = more kinetic energy
- Inversely proportional to the square root of the molar mass $M$
	- Higher mass = lower speed = less kinetic energy
- Independent of pressure in a wide range of pressures encountered in practice.

Thus:
- For a fixed mass $M$, the thermal conductivity *increases* with increasing temperature.
- For a fixed temperature $T$, the thermal conductivity *decreases* with increasing mass. 

### Liquids
For liquids, the mechanism of heat conduction is complicated by the fact that the molecules are more closely spaced, and they exert a stronger intermolecular force field. The thermal conductivities of liquids usually lie between those of solids and gases. The thermal conductivity of a substance is normally highest in the solid phase and lowest in the gas phase.
- The thermal conductivity of liquids is generally insensitive to pressure except near the thermodynamic critical point.
- Unlike gases, the thermal conductivities of most liquids decrease with increasing temperature, with water being a notable exception.
- Like gases, the conductivity of liquids decreases with increasing molar mass.

Liquid metals such as mercury and sodium have high thermal conductivities and are very suitable for use in applications where a high heat transfer rate to a liquid is desired, as in nuclear power plants.

### Solids
In solids, heat conduction is due to two effects: 
1. The lattice vibrational waves induced by the vibrational motions of the molecules positioned at relatively fixed positions in a periodic manner called a lattice.
2. The energy transported via the free flow of electrons in the solid. 

The thermal conductivity of a solid is obtained by adding the lattice and electronic components. The relatively high thermal conductivities of pure metals are primarily due to the electronic component. The lattice component of thermal conductivity strongly depends on the way the molecules are arranged. For example, diamond, which is a highly ordered crystalline solid, has the highest known thermal conductivity at room temperature.

Unlike metals, which are good electrical and heat conductors, crystalline solids such as diamond and semiconductors such as silicon are good heat conductors but poor electrical conductors. As a result, such materials are popular in the electronics industry. Despite their higher price, diamond heat sinks are used in the cooling of sensitive electronic components because of the excellent thermal conductivity of diamond. Silicon oils and gaskets are commonly used in the packaging of electronic components because they provide both good thermal contact and good electrical insulation.

Pure metals have high thermal conductivities, and one would think that metal alloys should also have high conductivities. One would expect an alloy made of two metals of thermal conductivities $k_{1}$ and $k_{2}$ to have a conductivity $k$ between $k_{1}$ and $k_{2}$. Actually, thermal conductivity of an alloy of two metals is usually much lower than that of either metal; even “foreign” molecules that are good conductors themselves seriously disrupt the transfer of heat in that metal..
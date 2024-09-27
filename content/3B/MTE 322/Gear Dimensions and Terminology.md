---
title: Gear Dimensions and Terminology
tags:
  - mte322
date: 2024-09-14
aliases:
  - gear dimensions and terminology
---
## Nomenclature
- **Pinion**: the smaller of two gears
- **Pitch circle**: theoretical circle for analysis. The pitch circles of a pair of mating gears are tangent to each other.
- **Pitch diameter** ($d$): diameter of pitch circle
- **Circular pitch** ($p$): distance between teeth (see diagram)
	- Units of $[\text{in}]$ or $[\text{mm}]$
	- Note that $p=\pi d /N=\pi m$ (circumference divided by number of teeth)
- **Number of teeth** ($N$)
- **Module** ($m$): $m=d / N \;\; \;[\text{mm}]$
- **Diametrical pitch** ($P$): Number of teeth divided by diameter
	- $P=N / d=25.4 / m \;\; \;[/\text{in}]$
		- This includes a conversion from mm to in, since 1 in = 25.4 mm
	- Note that $pP=\pi \,\,[\text{in}]$
- **Gear ratio**: $\frac{N_{G}}{N_{P}}=\frac{d_{G}}{d_{P}}$
- ==Mating gears must have the same tooth size==

![[Gear Dimensions and Terminology-2.png]]

![[Gear Dimensions and Terminology.png]]

![[Gear Dimensions and Terminology-1.png]]

![[Gear Dimensions and Terminology-3.png]]

- Addendum $a=\frac{1}{P}$, Dedendum $b=\frac{1.25}{P}$
- Pressure angle typically $20\degree$

## Example: Basic Gear Parameters

> [!question] Question
> A gearset consists of a 16-tooth pinion driving 40-tooth gear. The diametral pitch is 2 and pressure angle $20\degree$.
>- (a) Compute circular pitch, center distance, radii of base circles 
>- (b) Compute addendum and dedendum 
>- (c) In mounting this gear set, the center distance was incorrectly made 1/4 inch larger. Compute the new values of the pressure angle and the pitch-circle diameters.

We have:
$$
N_{P}=16,\, \,N_{G}=40,\,\, P=2, \,\,\phi=20\degree
$$
Since $P=25.4 / m$, we have $m=25.4 /P=12.7$.

**(a)** We can calculate circular pitch to be:
$$
p=\frac{\pi d}{N}=\frac{\pi}{P}=\frac{\pi}{2}=1.571 \text{ in}
$$
Center distance is:
$$
c=\frac{d_{P}}{2}+\frac{d_{G}}{2}=\frac{N_{P} / p}{2}+\frac{N_{G} / p}{2}=\frac{16 / 2}{2}+\frac{40 / 2}{2}=14 \text{ in}
$$
Base circle radii:
$$
\begin{align}
(r_{b})_{G} & =\frac{d_{G}}{2}\cos \phi=\frac{20}{2}\cos 20\degree=9.397 \text{ in} \\[2ex]
(r_{b})_{P} & =\frac{d_{P}}{2}\cos \phi=\frac{8}{2}\cos 20\degree=3.759 \text{ in}
\end{align}
$$
**(b)** Addendum:
$$
a=\frac{1}{P}=\frac{1}{2}=0.5 \text{ in}
$$
Dedendum:
$$
b=\frac{1.25}{P}=0.625 \text{ in}
$$
**(c)** The center distance was made a 1/4 inch larger, so we have:
$$
c=\frac{d_{P}'+d_{G}'}{2}=14.25 \text{ in}
$$
We still have the same gear ratio:
$$
\frac{d_{G}'}{d_{P}'}=\frac{40}{16}
$$
Solving this gives:
$$
d_{P}'=8.143 \text{ in}, \,\,d_{G}=20.357 \text{ in}
$$
Since the base circle remains the same, we have
$$
\begin{align}
r_{b} & =r'\cos \phi' \\
\phi' & =\cos ^{-1} \frac{(r_{b})_{p}}{d_{P}' / 2}\\[2ex] 
 & =\cos ^{-1}\frac{3.759}{8.143 / 2} \\[2ex]
	 &=22.59\degree
\end{align}
$$

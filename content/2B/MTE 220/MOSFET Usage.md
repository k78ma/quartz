---
title: MOSFET Usage
tags:
  - mte220
date: 2023-11-04
aliases:
---
- **M**etal (Gate)
- **O**xide (SiO2, insulator)
- **S**emiconductor (Si wafer)
- **F**ield
- **E**ffect
- **T**ransistor

### NMOS
Also known as N-FET, N-type MOSFET or N-channel MOSFET. This refers to the fact that these use electrons as the charge carrier. Electrons come from source, which is the most negative voltage.

![[MOSFET Usage.png|152]]


This functions as a switch that is normally open and closes when $V_{GS} > V_{t}$. When this happens, we get a drain current $I_{D}$.

For example, we could have a microcontroller connected to the pin. 
- When it outputs $0\text{ V}$, the LED remains off. 
- When it outputs $5 \text{ V}$, the LED turns on. 

A series resistor may be included to limit in rush current.

### PMOS
A PMOS uses P-type carriers, which are holes. These $h^{+}$ carriers come from the source, which is the most positive voltage. In this case, we technically have $V_{SG}$, but we can just think of it in terms of the difference between the two terminals and use $| V_{GS} |$ instead.

When $| V_{GS} |$ is more than the threshold, the drain current $I_{D}$ activates. The PMOS acts opposite to the NMOS, such that it's normally ON and turns off when $| V_{GS} | > V_{t}$. Thus, we would have"
- $0\text{ V}$ = ON
- $5\text{ V}$ = OFF

### Slide
![[MOSFET Usage-1.png]]
---
title: Non-Maskable Interrupt
tags:
  - mte241
date: 2023-11-07
aliases:
  - NMI
---
Look at the [[Interrupt Execution#Nesting and Priority|interrupt priority table]]. The two with highest priority are called “Reset” and “NMI”. 

The **Reset** interrupt is what gets called when the processor resets. Its purpose is to set up the chip, so it has to be the highest priority.

The second highest priority is the **NMI**. There is exactly one such interrupt, and it can be thought of as the “absolutely non-recoverable fault” interrupt. It is non-maskable, which means you can never turn it off and you can never ignore it. It is the thing that triggers when other interrupts fail to work. 

#### Examples
To illustrate the use of the NMI, let’s think about spaceships. If a rover on Mars encounters a fault condition, no one can go and toggle the power switch. It’s entirely on its own. However, there are lots of reasons that a Mars rover might encounter a fault. Some of these conditions might require simple power toggling of a component – for instance if a sensor is giving bad data, the control software should try to reset it. These simple faults should be handled by relatively low priority interrupts at first, since often common faults have such simple solutions. But what happens if a fault hander itself causes a fault? In such a situation the processor has no choice but to trigger an interrupt that can never be ignored. Something is so wrong that the code written specifically to fix errors is itself having an error! 

The NMI in many systems (Mars rovers included) typically either force a reset of the whole system or force the system to enter safe mode. On a Mars rover, for instance, this safe mode is used to shut down all instruments and non-essential systems, then start sending tons of engineering diagnostic data back to Earth. Since it is hard to communicate with a rover on Mars, this data is not sent normally as it would take up valuable communication time. 

Another example of NMIs in action is via Microsoft Windows’ famed “Blue Screen of Death” (BSOD). When the OS encounters an error that is so bad that it would damage the hardware (or the data) if it wasn’t stopped, the NMI runs, the CPU cannot ignore it, and the BSOD occurs. In this course we will not be writing any code for NMIs, but you need to know that they exist and have very important uses.
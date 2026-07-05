---
title: Device Selection
tags:
  - mte325
date: 2024-06-09
aliases:
  - device selection
---
Now that we know how [[Hardware Driver|hardware drivers]]  can be constructed, let's consider the device selection options. When there are multiple drivers on a shared line, there must be a method of selecting the active driver such that conflicts are not created. 

## Explicit Selection
In **explicit selection**, a single unique driver will be enabled. This could be done by a range of techniques, including selecting a unique address, arbitration, a timing signal or an event signal. Explicit selection is typically used with general purpose selection buses.

The enable lines on [[Tri-State Driver|tri-states]] must be mutually exclusive, which in turn forces the selection of only driver at a time. This is an example of explicit selection with active devices.

### Passive Explicit Selection
Explicit selection can also be used with drivers that have a passive component, shown in Figure 1. In this case, an AND gate is added before the transistor; this applies the AND an enable signal to the control signal of the transistor, preventing it from turning on unless it's the enabled device. Just like the tri-state case, the devices will be mutually exclusive as long as the enable signals are. If the enable signals are not exclusive, this is a design error.

![[Device Selection.png]]

## Implicit Selection
In **implicit selection**, the line must have a passive path (passive pull-up or pull-down), and the individual drivers are in a high impedance state when this path is driving the line. It's safe for more than one driver to turn on at a time and exclusive device selection is not required. This is commonly used to allow interrupt lines to be shared safely.


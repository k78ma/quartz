---
title: E-Stop
tags:
  - polymath
date: 2024-02-14
aliases: 
draft: "true"
---
## Materials
- Raspberry Pi Zero 2 W

## Steps

1. Tape over Raspberry Pi USB connections?

![[E-Stop.png|400]]

2. Solder pins. May want to clean flux singe marks after soldering

![[E-Stop-1.png|536]]


3. Heat-sink – apply thermal pads and fasten e-stop

![[E-Stop-3.png|504]]

![[E-Stop-2.png|268]]

4. Insert to microSD card.

![[E-Stop-4.png|324]]

![[E-Stop-5.png|184]]

5. Solder

```mermaid
graph TD
    USB-C -->|Power Out| UPS(UPS)
    UPS(UPS) -->|Power Out| R(Raspi)
    R -->|Control| ES(Eink Screen)
    R <-->|USB Power and Data| C(Cell Modem)
		C -->|USB Power and Data| E(ESP32)
    E -->|D2 to DI, + and GND| L(LED Ring)
    E -->|D22 to switch, + and GNDx2| PB(Power Button)
    PB -->|switch to input| UPS
    UPS -->|Lowbat to D34| E
    EB(Estop Button) -->|C to D18| E
    EB -->|NC to D21| E
    EB -->|NO to D19| E

    classDef component fill:#346beb,stroke:#333,stroke-width:2px;
    class USB-C,UPS,R,E,C,ES,L,PB,EB component;
```

Here are pictures of the solders:

- E-stop button:
- Power Button:
- LED Ring
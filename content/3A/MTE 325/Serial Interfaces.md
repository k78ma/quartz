---
title: Serial Interfaces
tags:
  - mte325
date: 2024-07-03
aliases:
  - serial interfaces
---
Communication mechanisms between the microcontroller and the outside world are one of three types: analog, serial or parallel. 
- [[Parallel Port|Parallel]] allowed interfacing to the system bus inside the microcontroller
- [[Analog Interfaces|Analog]] is the format of most information in the physical world

Serial interfaces are commonly used for connections outside of the chip itself because they're the least complex electrical interface between digital devices, which means that they are cheaper. In the simplest case, the hardware can be reduced to as little as a single data wire plus a ground (two wires); this is much more effective than running a parallel cable with 16 or 32 wires. Serial allows for much smaller connectors, like USB, whereas earlier parallel connections often used large connectors known as D-subs that had 8-50 pins.

![[Serial Interfaces.png]]

Where does serial interfacing fit in the larger picture of embedded systems?
- The CPU connects to a system bus to interact with peripherals. 
- All of these peripherals will have a parallel interface to the system bus, and may have additional hardware to convert the data to another format, namely analog or serial, for the peripheral device itself. 
- Here, we discuss how the data is converted between the serial and parallel formats, as well as some of the common protocols used for serial communication.

![[Serial Interfaces-1.png]]

## Communication Context and Bit/Byte/Block Synchronization
Serial implementations are considerably simpler than analog or parallel interfaces. Imagine a file that is being transferred. 

Under the hood, this file is just a big string of 1s and 0s. To transmit it, it's broken into successively smaller pieces. 

![[Serial Interfaces-3.png]]

The original file is divided into **packets**, which often consist of a portion of the data itself as well as a **header**. The header might contain metadata information like who the receiver is and how many total packets there are, when it was generated, error detection/correction information.

These packets are often further divided into frames which are formatted specifically for the communication protocol being used. For serial communication, these frames are then broken down even further to the byte level, then the bit level, at which point they can actually be transmitted as signals on the channel.

How does the receiver take the information and re-create the original file? This starts with with the individual bits in the serial stream being identified, which requires something called **bit synchronization**. Once the stream of bits is captured, there needs to be a mechanism to determine where the byte boundaries are. This requires byte **synchronization**. After identifying the bytes, the frames can be reconstituted, which in turn allows the packets to be rebuilt. Another common name for a packet is a block, so the work done at this level can also be referred to as **block synchronization**. After all packets are received, the entire file is complete. 

For more, see [[Serial Synchronization]].

## Channels
- **Endpoints:** The entities between which the data is flowing.
- **Channels:** are characterized by how the data flows between endpoints. The channel itself can take many forms: 
	- Wire where voltage/current levels are used to signify data value
	- Frequency-based system for a wireless transmission
	- Light for an optical system, etc.

Channels can be have one of three ways:
	- **Simplex:** Unidirectional
	- **Half Duplex:** Bidirectional, one way at a time. There is additional hardware to determine the current direction. There must be some mechanism for the two sides to agree on the current direction of data flow. Examples are walkie-talkies; whoever pushes the button first takes control of the channel and is able to act as the transmitter.
	- **Full Duplex:** Simultaneous bidirectional. All endpoints need to have separate transmit and receive hardware, allowing transmissions in both directions to take place simultaneously.

![[Serial Interfaces-2.png]]


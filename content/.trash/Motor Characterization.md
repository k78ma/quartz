---
title: Motor Characterization
tags: 
date: 2024-07-23
aliases:
  - motor characterization
---
Parameter setting and getting helper functions:
- `L6470_SetParam(uint8_t L6470_Id, eL6470_RegId_t L6470_RegId, uint32_t Value)`: Sets a parameter value for a specific register.
- `L6470_GetParam(uint8_t L6470_Id, eL6470_RegId_t L6470_RegId)`: Gets the current value of a specific register.

Motor control commands:
- `L6470_Run(uint8_t L6470_Id, eL6470_DirId_t L6470_DirId, uint32_t Speed)`: Runs the motor in a specified direction at a defined speed.
- `L6470_Move(uint8_t L6470_Id, eL6470_DirId_t L6470_DirId, uint32_t N_Step)`: Moves the motor a specified number of steps in a given direction.
- `L6470_GoTo(uint8_t L6470_Id, uint32_t AbsPos)`: Moves the motor to a specified absolute position.
- `L6470_GoToDir(uint8_t L6470_Id, eL6470_DirId_t L6470_DirId, uint32_t AbsPos)`: Moves the motor to a specified absolute position in a given direction.
- `L6470_GoUntil(uint8_t L6470_Id, eL6470_ActId_t L6470_ActId, eL6470_DirId_t L6470_DirId, uint32_t Speed)`: Moves the motor until a specified event occurs.
- `L6470_ReleaseSW(uint8_t L6470_Id, eL6470_ActId_t L6470_ActId, eL6470_DirId_t L6470_DirId)`: Releases the switch.
- `L6470_GoHome(uint8_t L6470_Id)`: Moves the motor to the home position.
- `L6470_GoMark(uint8_t L6470_Id)`: Moves the motor to a pre-defined mark position.

Motor Control:
- `L6470_ResetPos(uint8_t L6470_Id)`: Resets the motor's position counter.
- `L6470_ResetDevice(uint8_t L6470_Id)`: Resets the L6470 device.
- `L6470_SoftStop(uint8_t L6470_Id)`: Performs a soft stop on the motor.
- `L6470_HardStop(uint8_t L6470_Id)`: Performs a hard stop on the motor.
- `L6470_SoftHiZ(uint8_t L6470_Id)`: Puts the motor in high impedance (HiZ) state softly.
- `L6470_HardHiZ(uint8_t L6470_Id)`: Puts the motor in high impedance (HiZ) state immediately.

How does it work?
For a given command, the `L6470_PrepareAppCmdPkg` function is called to fill in the command package with the appropriate parameters. The command package is a struct of parameters, such as the command to be executed, the parameters required for the command, the target device. `L6470_SetParam` is 

Daisy chaining allows multiple L6470 devices to be connected together and controlled using a single SPI bus. This reduces the number of GPIO pins needed for communication and simplifies the wiring. The `L6470_PrepareDaisyChainCommand` function translates the command package into a format suitable for SPI communication; the data into a structure that can be transmitted over the SPI bus to the L6470 driver. Then, `L6470_DaisyChainCommand` is used to transmit the command to the L6470 driver via SPI.
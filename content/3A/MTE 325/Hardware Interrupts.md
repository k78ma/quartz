---
title: Hardware Interrupts
tags:
  - mte325
date: 2024-05-17
aliases:
  - hardware interrupts
---
 Hardware interrupts are a synchronization technique in embedded programming where the device sends a signal to the CPU to request immediate service.
- *Analogy:* This is like the child that taps their parent to get their attention while the parent is in the middle of a conversation with someone else. The parent stops what they were doing, helps the child, then continues from where they left off.
## Procedure
- To use hardware interrupts, here needs to be some form of connection between the processor and the device to carry the interrupt signal (a physical wire).
- The hardware interrupt sequence starts with the device notifying the CPU of an interrupt by causing an edge (transition in signal value) on an external line. 
- When the CPU sees this, it must finish the instruction it is working on. One instruction can be multiple CPU cycles and we can’t stop halfway through an instruction (for most microprocessors).
- Once the instruction finishes, execution of the program is stopped, interrupts are disabled.
- Any registers that will be changed as a result of handling the interrupt are saved (context switch).
- Now, the processor is ready to actually run the service routine – acknowledging the device, selecting the appropriate ISR and executing it.
- Registers are restored, if, required, including the program counter.
- Interrupts are re-enabled.
- Execution of main program resumes.

Slide task order: 9, 3, 5, 10, 7, 11, 6, 2, 4, 1
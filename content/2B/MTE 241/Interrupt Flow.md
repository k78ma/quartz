---
title: Interrupt Flow
tags:
  - mte241
date: 2023-10-10
aliases:
---
If the processor is interrupted a single time and is able to service that interrupt before something else happens, then the following four steps are predictable: 

1. **Trigger:** something causes the interrupt to occur, depends strongly on what the interrupt is for.
2. [[Interrupt Setup|Setup]]: the processor must get ready to handle the interrupt. This has overhead – it takes time to get the setup done. The key thing is to stop the execution of whatever is currently running and save any important information before continuing 
3. [[Interrupt Execution|Execution]]: interrupts run like normal functions once the setup is done
4. **Return:** returning from an interrupt is more complicated than returning from a regular function, since we have to restore any information that we previously saved. In addition, it is possible that the interrupt doesn’t return, either because we want to switch to a new task or because there is a fault
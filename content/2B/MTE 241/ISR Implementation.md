---
title: ISR Implementation
tags:
  - mte241
date: 2023-10-20
aliases:
---
We want to do most of our [[Interrupt|ISR]] in C, since it’s a much easier language to write for than assembly. 

Let’s assume that we are writing an ISR called `my_isr`. We would put this into the vector table in the setup code for whichever interrupt we want. This ISR needs to be written in assembly, but there is nothing stopping an ISR from calling other functions. We need to be careful about how we do it (see below), but we are free to call whatever functions we want.

Let’s presume that we’ve written a C function called `my_isr_c` that is a helper function for the assembly. In the simplest case, this function would take no arguments. The assembly code might look something like this:
```asm
AREA handle_pend,CODE,READONLY ;needed to tell us we are in code 
EXTERN my_isr_C ;Our C function is external to this file GLOBAL 
my_isr ;needed if this is not the setup file 
PRESERVE8 ;always PRESERVE8 until you know what you are doing

my_isr: ;name the function 

PUSH {LR} ;we need to return here 
PUSH {R4-R11} ;optional, but a good idea to save all registers

; Call our C function 
BL my_isr_C 

; Restore the context of the interrupted code 
POP {R4-R11} 
POP {PC} 

; Return from the interrupt ; Since we are in assembly, the proper return instruction is used 
BX LR
```

Step-by-step:
- **Line 1-4:** Setup. We defining an `AREA` that is for `CODE`, then declaring to the assembler that a function, `my_isr_c`, is written external to this file. We make `my_isr` global, and preserve the stack alignment.
- **Line 8-9:** Create the function. We then push LR onto the stack because we are calling a function – when we call a function, we want to return back here, so we need the return address. Pushing R4 through R11 is optional, but is usually a good idea since these registers may not be preserved in the function.
- **Line 12:** Next, we BL to the C function. The “B” part is just a function call, and the “L” is “link”, or “return to the return address stored in LR”. The function, which is just a basic C function written however we want, gets called and returns. 
- **Line 15-16:** We restore the context.
- **Line 19:** We BX from LR.

### Pitfall: Doing too much inside of ISRs
Nesting interrupts or tail-chaining them sucks. Weird things can happen to the registers, we need to do more in assembly than most people are comfortable with (which is zero), and the key point – if we are inside of an ISR we are, by definition, not doing what the main program is supposed to do anyway! 

ISRs are not where your code should be written. Instead, they should be short, clear, and fast. 
1. This lets us get out of the ISR quickly and minimize the chances of nesting/tail-chaining anyway. 
2. Bugs in interrupt code cause bigger problems, since we are in a privileged mode of operation. The big takeaway here is – do as much in your ISR as you need, but no more. If you can do it in the main code, do it there.
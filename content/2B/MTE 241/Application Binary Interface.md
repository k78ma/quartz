---
title: Application Binary Interface
tags:
  - mte241
date: 2023-11-06
aliases:
  - ABI
---
The ABI is a set of rules developed by chip designers to govern how the compilers makes code work. The ABI specifies many things, such as:
- How are functions called and returned from?
- How are binary files created, loaded, and run? 
- How does the debugger work?
- Lots more

### Stack ABI Rules
We are going to look at some of the stack rules. 

The ABI states that the stack is Full, Descending. 
- This means that the stack pointer points to valid data on the stack (in comparison to an Empty stack, where the stack pointer points to the next valid place to put data), and that the stack grows down, so that when we push two values, A and B, in that order, B has a lower address than A.

#### Passing arguments into a function
Registers R0 through R3 are called the "argument" and "result" registers.
These define precisely 4x4 bytes of space for function arguments. Each register can hold either:
- A single `uint32_t` or a single argument of a smaller data type
- A portion of an input argument that is larger than a `uint32_t` (example: a `uint64_t` gets passed in using two registers)
- Registers fill up from R0 to R3

Consider a function `myFunc(3,4)`:
- 3 gets put into R0
- 4 gets put into R1

Consider `myFunc((uint64_t)3,4):
- 3 is bigger than `uint32_t`, so it gets put into R0 and R1 (R0 first, then a bunch of zeros)
- 4 gets put into R1

Consider `otherFunc(3,4,5,6,7,8,9,10,11)`
- Function uses more than `4 * sizeof(int32_t)`
- Additional arguments get pushed onto the stack
- Compiler adds additional code to extract them

#### Calling a C function from Assembly
Say we have `myFunc(int x, int y).` How do we call `myFunc(3,4)` in assembly?

We fill the registers and then perform a branch, like:
```assembly
MOV R0,#3
MOV R1,#4 
BL myFunc
```

#### Multiple Function Calls
Let's say we have:
```c
int func1(int x, int y) 
{ 
	return x + y; 
} 

int func2(int a, int b, int c) 
{ 
	int x = func1(3,4); 
	return x + a + b + c; 
}
```

Let's say `func2` gets called first. Its input arguments are in R0, R1, R2. But now when `func1` gets called, its input arguments also need R0 and R1!

The solution to this is to use hardware saved registers. 
- Registers R0 through R3 are pushed onto the stack for you
- As are PC, LR, SP, and a few others
- This is done by the hardware itself – no compiler instructions are inserted

When `func2` is called:
- func1’s input arguments are preserved on the stack
- Upon return from func2, the registers are popped back into place

#### Scratch Registers
R4-R11, also known as variable registers. The ABI does not require them to be preserved across function calls,
- These registers are not guaranteed to be maintained between function calls, so they are typically used by the compiler for only very temporary calculations. 
- These temporary calculations are assumed to be valid only between function calls, and once a new function gets called you may assume that these registers are going to be overwritten. 
- This is why these registers are not stacked for you during function calls – they simply don’t need to be, and the compiler doesn’t care – but it’s also why we needed to save them when we were doing a context switch. 
- Since context switches can happen at any time between function calls, when we switch back, we should be reasonably sure that our temporary calculations will be restored until the code is done with them.

#### Return Values
Function return values are slightly more complex than function inputs. C permits only a single return value, so it seems logical that the result should just be put into R0. 
- Any return value that is smaller than 4 bytes is just stored in R0 as you would expect – the lower bits are used for the return value and the upper bits are just not used 
- **Fundamental types:** The ARM architecture does not allow for fundamental data types larger than 128 bits (4x4 bytes) so if we try to return, say, a `uint128_t` it gets put into registers R0 through R3 and interpreted as a single value of the appropriate type. 
- **Pointers**: always have the same size as integers, are also just returned in R0. 
- **Composite Type (Struct)**: It is not possible to return a struct of arbitrary size using only four registers, since the struct may be larger. In this case, the return value is placed into a convenient location in memory determined by the compiler and R0 stores the address when the function gets called. This reduces the number of argument registers to 3 and therefore increases the chances that the arguments are going to be placed onto the stack. 
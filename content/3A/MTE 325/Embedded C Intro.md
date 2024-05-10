---
title: Embedded C Intro
tags:
  - mte325
date: 2024-05-10
aliases:
---
C is the gold standard programming language for embedded systems.
- Minimal overhead on resulting compiled code
- Low-level, only one step up from assembly
- Rust is promising but hasn't reached full maturity yet

## Program Organization
C programs are split into `.c` and `.h` files.
- `.c` files are where we write program code
- `.h` files are header files that contain macros, structs, and data types

Only header files should be included in other files, not `.c` files. 

Program code goes in the `.c` file. A `main` function acts as the entry point into the program, and starts with global initialization. Embedded systems require that you configure the peripheral interfaces you are using and initialize other behavior such as which interrupts are active and what code should be called when one occurs.

```c
//global variables  
//definitions

int main(void)  
{  
	//global initialization  
	while(1)  
	{  
	//program runs an infinite loop after initialization  
	}  
}
```

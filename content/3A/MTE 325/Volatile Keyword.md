---
title: Volatile Keyword
tags:
  - mte325
date: 2024-05-10
aliases:
---
The `volatile` keyword is a type qualifier in C. 

When volatile is added to a variable declaration, it tells the compiler the variable value may be changed by something outside the current scope of execution. In embedded systems, the  source of this change is typically an external input.

Consider an interface register that holds the value of 8 input switches, `uint8_t switches`, which is mapped elsewhere to the corresponding register address based on the physical connection of the switches to the microcontroller. Assume the connections have been properly initialized.

```c
uint8_t switches;

int main (void){

	//code for the HW initalization of the switches  
	
	while (1){  
		//tight poll for one of the switches to be set  
		while (switches == 0x00){}
		
		//do something based on switch values  
	}  
}
```

If we were to run this, no matter what we did to the switches, we would never get out of the loop if they were `0` on the first pass. Even if you we them properly initialized and can read from them without issue, the code will hang, because there's nothing in the loop that can change the value of `switches`. Therefore, the compiler will see this, and read `switches` one and load the value into a processor register, then that copy can be checked every subsequent pass.

Here, the problem is that the compiler doesn't realize the variable can be updated externally by a change in the switches, so it needs to be told with the `volatile` keyword. Now, when the code is compiled:
- The compiler won't perform any optimizations on `switches`
- Thus, very time the loop runs, a read of the source register will occur, and any changes to the switch value will be processed as expected
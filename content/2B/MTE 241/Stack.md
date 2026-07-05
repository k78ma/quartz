---
title: Stack
tags:
  - mte241
date: 2023-11-05
aliases:
---
See: [[Cortex M4 Stack]]
### Definition
A stack is a First-in, First-out data structure. 
- We put things onto the stack via an operation called PUSH, and we take things off of the stack via an operation called POP. 
- If we PUSH something on and then call POP, whatever just went on comes off. This is a simple data structure but it is surprisingly helpful.

**The stack is where we place local, temporary variables.** These variables are broken into two categories: 
- **Actual variables:** things like` int x = 4`; declared inside of a function. 
- **Context variables:** we’ll talk a lot more about context later, but the stack isn’t just used to store what the programmer tells it to. 
	- Example: presume that in main we call function A that calls function B. When function B returns we return to A, then A returns to main. This means we have to store two return addresses: B to A, and A to main. We use the LR register to do this. So whenever we do a call-within-a-call like this, the value of LR gets pushed onto the stack and restored once we return from the last function called. 

The stack is, in a sense, managed by the compiler. Certain things, like the creation of local variables, are accomplished via a PUSH operation onto the stack. Other, more complicated processes, like function calls, adhere to well-established rules about what goes onto the stack and in what order. Since these rules are all established before the program runs, the stack is rarely directly manipulated by the programmer. 

### Example
Let’s look at how a function call might work to better understand this. Consider the following C function:

```c
int doSomething(int x) 
{ 
	if(x > 30) 
	{ 
		int y = 5; 
		return y+x; 
	} 
	return x-10; 
}
```

On most computers, once this function is called the following things happen:
- The return address is PUSHED onto the stack
- The input argument, `x`, is not pushed onto the stack. This is instead stored in a register. 
- If the input argument is greater than 30:
	- PUSH a new integer onto the stack (4 bytes) and set its value to 5
	- Upon encountering the return statement:
		- Perform the computation required and place the result in a register (again, not the stack)
		- POP the variable y from the stack
		- JUMP back to return address stored on the stack
		- POP that return address off of the stack
- Otherwise (the input argument is not greater than 30)
	- Perform the computation and place the result in a register
	- JUMP to the return address
	- POP the return address off of the stack

**The number of PUSHes and POPs must be equal.** The function call does not leave anything behind on the stack, and the stack looks exactly like it did before the function call happens. 
- This explains why we don’t need to manage the stack ourselves – the rules that govern how it is used guarantee that memory never leaks from the stack, and whatever we put onto it gets removed when we are done.
-  It also explains how C scope rules work – the reason that variables “go out of scope” is because they are popped off the stack

>[!info] Nested Function Example
>It's not hard to convince ourselves that nested function calls don’t need any special machinery to work. Let’s assume we make the following function call and that none of the nested functions require local variables: 
>```c
>functionA(functionB(functionC())); 
>```
>
>This would be accomplished via 3 PUSH operations of the return addresses: First, we push the return address from functionA, then functionB, and finally functionC. When we do the return, we POP in reverse order – return from functionC, then B, then A. We don’t need to create any special “nested function call” instructions specifically because we are using a stack. That’s how the stack works – first in, first out.

### How do PUSH and POP work?
Just about every computer you’re going to encounter has a stack pointer, SP. This is used to figure out where to put new data when a PUSH happens. Let’s consider the following line: 
```c
int x = 4; 
```

What happens? If this variable goes onto the stack (that is, if it is a local variable), then SP must change by the size of an integer. This is a PUSH. Remember that the stack usually grows down. Let us also presume that SP does not yet point to an empty address, but instead points to the last piece of valid information on the stack. So the first thing that happens is: 
```c
SP--; //presuming SP is a pointer to an int!
```

Then, that memory is written to. Remember, SP is a pointer, so this is equivalent to: 
```c
*SP = 4; 
```

Now, let’s assume that the variable x goes out of scope and that it is on the top of the stack. This is a POP. We don’t need to specifically delete anything – whether the data is still there is not relevant if we can’t access it – so a POP is equivalent to just moving SP back to where it used to be:
```c
SP++;
```
And that’s really it – it’s a bunch of pointer math and dereferencing that govern the stack.

### Growing Direction
Downward growing ("descending") stacks are very common.
- Can be placed at the beginning of memory
- Can be as big as possible until memory runs out
Therefore:
- PUSH *decrements* SP
- POP *increments* SP

### FULL & EMPTY
A FULL stack: SP points to the last piece of data PUSHed on
- PUSH is:
	- Decrement first
	- Write second

An EMPTY stack: SP points to the next location to PUSH data onto
- PUSH is:
	- Write first
	- Decrement second
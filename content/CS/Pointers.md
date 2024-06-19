---
title: Pointers
tags:
  - dsa
  - cs
date: 2024-03-22
aliases:
---
Pointers represent the address of a location in memory, serving as the connections that hold the pieces of linked structures together. A variable storing a pointer to a given data item can provide more freedom than storing a copy of the item itself. 

Analogy: A cell-phone number can be thought of as a pointer to its owner as they move about the planet.

## Syntax
In C/C++ syntax:
- A pointer `p` is assumed to give the address in memory where a particular chunk of data is located.
- We use `*p` to denote the item that is pointed to by pointer `p` – **de-reference**.
- We use `&x` to denote the address of (i.e. pointer to) a particular variable `x`.
- A special `NULL` pointer value is used to denote structure-terminating or unassigned pointers.

## Example
```c
int myAge = 23; // An int variable
int* ptr = &myAge; // A pointer variable, with the name ptr, that stores the address of myAge  

// Output the value of myAge (23)  
printf("%d\n", myAge);  

// Output the memory address of myAge (0x00220022)  
printf("%p\n", &myAge);  

// Output the memory address of myAge using the pointer (0x00220022)  
printf("%p\n", ptr);  

// Dereference: Output the value of myAge using the pointer (23)  
printf("%d\n", *ptr);
```
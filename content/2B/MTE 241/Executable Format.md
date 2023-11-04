---
title: Executable Format
tags:
  - mte241
date: 2023-10-10
aliases:
---
We know what [[Executables]] do and what segments they contain, but what is actually being stored?

Although it does differ from platform to platform, an executable consists of a bunch of metainformation, almost always now in the **ELF** (Executable and Linkable Format) or **COFF** (Common Object File Format), and the data. Both formats have a bunch of meta-information that includes:
- how big the file is
- what format it’s in
- what platform it was compiled for
- where all of the actual data is, followed by the data itself. 

The data is just a bunch of hexadecimal numbers, that get written directly into RAM or flash. This part is known as the “image”, and it is exactly as unsophisticated as it sounds – it is the literal 1s and 0s that make up the program. Let’s look at part of an executable.

## Executable Example
```c
int x = 4; char* hello = "Hello, world!"; 
int xd [5] = {10,20,30,40,50}; 
int main() 
{ 
	return x + xd[0] + xd[1]; 
}
```

We may compile this file (I compiled it for Linux) and then use the objdump utility to see its contents:

```
Contents of section .rodata: 
2000 01000200 48656c6c 6f2c2077 6f726c64 ....Hello, world 
2010 2100
```

This is the content of the .rodata section. The data shown as a table, formatted with whitespace. 
- The first column is the offset address, in hexadecimal, from the “start address” (part of the meta data). 
- Then there are up to 4 hexadecimal numbers per row representing the image. 
- The next part is objdump’s best guess at how to interpret these hex values if they were characters. In the case of `.rodata`, they are, since this is the string literal “Hello, world!”

Sometimes, this is very hard to read, such as:
```
Contents of section .data: 
4000 00000000 00000000 08400000 00000000 .........@...... 
4010 04000000 00000000 00000000 00000000 ................ 
4020 0a000000 14000000 1e000000 28000000 ............(... 
4030 32000000 00000000 04200000 00000000 2........ ......
```

Initialized variables go into the `.data` section? Look at the line starting at address `0x4020`. The numbers are supposed to be read left to right, with the least-significant digit first, so the number that reads `0a000000` is actually the hex value `0xa`, or 10 in decimal. Then we see the sequence `0x14` (20 in decimal), `0x1e` (30 in decimal), `0x28` (40 in decimal), and `0x32` (50 in decimal), which is the initialization for my integer array!

Finally, the text segment is nonsense to us because it’s a bunch of machine code. Some very advanced systems programmers can look at this and make sense of it, but I can’t.

```
Contents of section .text: 
1040 f30f1efa 31ed4989 d15e4889 e24883e4 ....1.I..^H..H.. 
1050 f050544c 8d056601 0000488d 0def0000 .PTL..f...H..... 
1060 00488d3d c1000000 ff15722f 0000f490 .H.=......r/....
```

## Loading
An interesting problem in computing is that of “bootstrapping”, or just “booting”. If I have a program, something has to load that program. But isn’t the thing that loads the program also a program? What loads it?

On the Cortex M4 this process is simplified. We program the chip via a very strict set of rules that use specific hardware (the “in-system programmer”). On the STM32 boards this role is handled by a separate chip, but usually the programmer is something you have to physically plug the chip into. The programmer receives the executable in ELF format and can read the metadata, figure out how the flash memory should be organized, and write it appropriately. Then, when the chip finally turns on, the Cortex M4 looks at a very specific location in memory to find the address of the function it’s supposed to run first. It extracts that address, loads it into the program counter, and from there the executable is running.
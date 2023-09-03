---
title: Designing Functions
tags:
  - cs
date: 2023-09-01
---
Qualities of good functions:
- *Atomic:* Each function should have exactly one job, which should be identifiable with a short name and characterizable in a single line of text.
- *Abstract:* Multiple fragments of code should not describe the same logic. Instead, that logic should be implemented once, given a name, and applied multiple times. Look for opportunities for functional abstraction.
- *General:* Functions should be defined generally; for example, squaring is not a function in Python because it is a special case of `pow`, which raises numbers to arbitrary powers.

### Documentation
A function definition can include documentation in the form of a docstring. 
Docstrings are conventionally triple quoted and:
- Indented along with function body
- Describe the job of the function in one line
- Following lines describe arguments and function behavior
Example:
```python
def pressure(v, t, n):
	"""Compute the pressure in pascals of an ideal gas.

	Applies the ideal gas law: http://en.wikipedia.org/wiki/Ideal_gas_law

	v -- volume of gas, in cubic meters
	t -- absolute temperature in degrees kelvin
	n -- particles of gas
	"""
	k = 1.38e-23  # Boltzmann's constant
	return n * k * t / v
```
Using `help(pressure)` will give its docstring.
### Default Argument Values
Having general functions means that you need more arguments; this can be annoying because functions with too many arguments can be awkward to call and difficult to read.

In Python, default values for arguments can be provided. When calling the function, arguments with default values are optional. Example:
```python
def pressure (v, t, nn=6.022e23):
	"""Compute the pressure in pascals of an ideal gas.

	v -- volume of gas, in cubic meters
	t -- absolute temperature in degrees kelvin
	n -- particles of gas (default: one mole)
	"""
	k = 1.38e-23  # Boltzmann's constant
	return n * k * t / v
```
Here, `n=6.-=022e23` indicates a default value to use when `pressure` is called

```python
>>> pressure(1, 273.15)
2269.974834
>>> pressure(1, 273.15, 3 * 6.022e23)
6809.924502
```
The `pressure` function is designed to take 3 arguments but can function with two (first example), where `n` is taken from the `def` statement default.

As a guideline, most data values used in a function's body should be expressed as default values to named arguments, so that they are easy to inspect and can be changed by the function caller. Some values that never change, such as fundamental constants like the Boltzmann’s constant `k`, can be bound in the function body or in the global frame.
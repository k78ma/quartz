---
title: Arbitrary Positional Arguments
tags:
  - python
  - cs
date: 2024-11-21
aliases:
  - arbitrary positional arguments
---
The `*` operator collects all the extra positional arguments passed to the function into a tuple. We can use this when we don't know in advance how many arguments are passed into a function.

```python
def example_function(*vals):     
	print(vals)     
	print(type(vals))  
	
example_function(1, 2, 3, 4)

# results in the following output:
(1, 2, 3, 4)
<class 'tuple'>

```


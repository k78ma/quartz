---
title: Expressions
tags:
  - cs
date: 2024-01-01
aliases:
---
Primitive expressions represent the simplest entities that a programming language is concerned with.  You type an _expression_, and the interpreter responds by displaying the result of its _evaluating_ that expression.

```scheme
(+ 137 349)
486
```

We delimit expressions within parentheses in order to denote procedure application; these expressions are called *combinations*.
- Leftmost element (+): Operator
- Other elements (137, 349): Operands

The convention of placing the operator to the left of the operands is known as *prefix notation*; the main benefit of this is that we can use multiple arguments like:
```scheme
(+ 21 35 12 7)
75
```

We can also make nested expressions:
```scheme
(+ (* 3 5) (- 10 6))
19
```

---
title: Basic Elements of Programming
tags:
  - sicp
date: 2024-01-05
aliases:
---
### Expressions
Primitive expressions represent the simplest entities that a programming language is concerned with. You type an _expression_, and the interpreter responds by displaying the result of its _evaluating_ that expression.

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

### Naming & Environment
Define variables using `define`:
```scheme
(define pi 3.14159)
(define radius 10)

(* pi (* radius radius))
314.159
```

`Define` is our language’s simplest means of abstraction, for it allows us to use simple names to refer to the results of compound operations. This feature encourages the incremental development and testing of programs.

Since we can associate values with symbols and retrieve them later, the interpreter must be able to maintain some sort of memory that keeps track of the name-object pairs. This memory is called the _environment_ (more precisely the _global environment_, since we will see later that a computation may involve a number of different environments).
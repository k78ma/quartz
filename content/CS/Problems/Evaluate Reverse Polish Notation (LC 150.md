---
title: Evaluate Reverse Polish Notation (LC 150
tags:
  - problems
date: 2024-01-14
aliases:
---
You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return _an integer that represents the value of the expression_.

**Note** that:
- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

Example 1:
Input: tokens = `["2","1","+","3","*"]`
Output: `9`
Explanation: `((2 + 1) / 3) = 1`
### Solution
```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        
        stack = []
        
        for c in tokens:
            if c == "+":
                stack.append(stack.pop() + stack.pop())
            elif c == "*":
                stack.append(stack.pop() * stack.pop())
            elif c == "-":
                a,b = stack.pop(), stack.pop() # ensure correct order
                stack.append(b-a)
            elif c == "/":
                a,b = stack.pop(), stack.pop() # ensure correct order
                stack.append(int(b/a))
            else:
                stack.append(int(c))
                
        return stack[0]
```

The key to this is to recognize the use of the stack data structure; we push values onto the stack, and once we find an operator, and pop them off and evaluate them with the operator. Addition and multiplication are easy to do this way since `a+b = b+a` and `a*b = b*a`

This is slightly trickier for subtraction and division, where order matters. For RPN, the order for these is defined such that `2 1 -` is equivalent to `2-1` and `2 1 /` is equivalent to `2/1` . We can just make sure the right order is followed by storing their values in variables when popping off the stack and then reversing the popping order when we do the operation.
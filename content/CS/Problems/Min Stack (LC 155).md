---
title: Min Stack (LC 155)
tags:
  - problems
date: 2024-01-13
aliases:
---
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the `MinStack` class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.
### Solution
```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
```

The tricky part here is the `getMin()` function. The easiest way to do this is to use a second stack that keeps track of the minimum value that has been added so far. For example, `minStack[2]` would keep track of the largest value that we've seen while pushing up to `stack[2]`.

![[Min Stack (LC 155).png|320]]
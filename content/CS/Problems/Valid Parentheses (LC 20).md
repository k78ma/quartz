---
title: Valid Parentheses (LC 20)
tags:
  - problems
date: 2024-01-12
aliases:
---
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
### Solution
```python
class Solution:
    def isValid(self, s: str) -> bool:
        
        stack = []
        
        closeToOpen = {")":"(", "]":"[", "}":"{"}
        
        for c in s:
            if c in closeToOpen: # Check whether it's a closing stack
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
                
            else:
                stack.append(c)
                
        return True if not stack else False
```

We use a [[Stacks and Queues|stack]] data structure to do this. 
- Keep track of matching opening and closing brackets using a hashmap.
- Given an opening bracket, we add it to the stack
- Given a closing bracket, we check whether the top of stack has the correctly matching opening bracket. 
	- If it is correct, we can pop it from the stack and continue to the next bracket.
	- If it is incorrect we can return False.
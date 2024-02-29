---
title: Letter Combinations of a Phone Number (LC 17)
tags: 
date: 2024-02-28
aliases:
---
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

## Solution

This is a simple [[backtracking]] problem

```python
class Solution:
    
    KEYBOARD = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    
    def letterCombinations(self, digits: str) -> List[str]:
        
        def dfs(start_index, path):
            if start_index == len(digits):
                result.append(''.join(path))
                return
            
            next_num = digits[start_index]
            for letter in self.KEYBOARD[next_num]:
                path.append(letter)
                dfs(start_index + 1, path)
                path.pop()
            
            
        result = []
        if digits:
            dfs(0, [])
        return result
```
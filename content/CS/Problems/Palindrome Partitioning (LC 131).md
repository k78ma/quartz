---
title: Palindrome Partitioning (LC 131)
tags:
  - cs
  - dsa
date: 2024-02-28
aliases:
---
Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return _all possible palindrome partitioning of_ `s`.

**Input:** `s = "aab"`
**Output:** `[["a","a","b"],["aa","b"]]`

## Solution

### AlgoMonster Solution
This can be [[Tree Pruning]] question. In terms of our template, we have:
- `is_leaf()`: We can check this by seeing if the starting index we're operating from is the same as the length of the string
- `get_edges()`: The possible next prefixes are obtained by substring `start` to `end`, where we iterate through possible `for end in range(start + 1, n + 1)`
- `is_valid()`: The `prefix` must be a palindrome
- Increment index by the length of the `prefix`, which is just `end`

```python
def partition(s: str) -> List[List[str]]:
    
    n = len(s)
    
    def is_palindrome(word):
        return word == word[::-1]
    
    def dfs(start, path):
        if start == n:
            result.append(path[:])
            return
        
        for end in range(start + 1, n + 1):
            prefix = s[start : end]
            if is_palindrome(prefix):
                dfs(end, path + [prefix])
    
    
    result = []
    dfs(0, [])
    return result
```

Notes:
- `path[:]` is used to make a copy  
### NeetCode Solution
This is very similar to the above, except it uses a global variable instead of a state. Instead of passing `path` as an argument in `dfs()`, we just have a global `part[]` variable.

```python
class Solution:
    
    def partition(self, s: str) -> List[List[str]]:
        
        result = []
        part = []
        
    
        def dfs(i):
            if i >= len(s):
                result.append(part.copy())
                return
            for j in range(i, len(s)):
                if self.isPalindrome(s, i, j):
                    part.append(s[i:j+1])
                    dfs(j+1)
                    part.pop()
                    
        dfs(0)
        return result
    
    def isPalindrome(self, s, l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l, r = l + 1, r - 1
        return True
```
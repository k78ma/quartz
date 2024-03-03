---
title: Generate Permutations (LC 46)
tags:
  - cs
  - problems
date: 2024-03-02
aliases:
---
Given an array `nums` of distinct integers, return _all the possible permutations_. You can return the answer in **any order**.

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

## Solution
This is a [[Backtracking]] problem; however, since we are doing permutations and not combinations, we need some way to track what elements of `nums` we've already used.

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        def dfs(start_index, path, used, result):
            
            # Base case
            if start_index == len(nums):
                result.append(path[:])
                return
            
            # Recursion
            for i, number in enumerate(nums):
                if used[i] == True:
                    continue
                
                path.append(number)
                used[i] = True
                
                dfs(start_index + 1, path, used, result)
                
                used[i] = False
                path.pop()
                
        ans = []
        used = [False] * len(nums)
        dfs(0, [], used, ans)
        
        return ans
```

Notes:
- `path[:]` is used to put a copy of `path` so that we capture its state at each recursive call instead of all pointing to the same object
- 
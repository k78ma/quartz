---
title: Binary Search (LC 20)
tags:
  - problems
  - cs
date: 2024-02-23
aliases:
---
Basic binary search question; given a sorted array and a target, find the index of the target.

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        
        l, r = 0, len(nums) - 1
        
        while l <= r:
            
            m = l + ((r-l) // 2)
            
            if nums[m] > target:
                r = m - 1
            elif nums[m] < target:
                l = m + 1
            elif nums[m] == target:
                return m
        return -1
```
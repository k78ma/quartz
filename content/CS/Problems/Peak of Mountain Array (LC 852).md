---
title: Peak of Mountain Array (LC 852)
tags:
  - cs
date: 2024-02-25
aliases:
---
Variation of [[One-sided Binary Search]].

```python
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        
        alen = len(arr)
        l, r = 0, alen - 1
        res = -1
        
        while l <= r:
            
            m = (l+r) // 2
            
            if m == alen-1 or arr[m] > arr[m+1]:
                r = m - 1
                res = m
            else:
                l = m + 1
        
        return res
```

Need to be careful with the update condition; we have to update `res = m` if `m == alen - 1`, since if we try to access any index larger than `alen - 1` we're gonna get an error (outside of array).
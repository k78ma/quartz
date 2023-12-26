---
title: Container With Most Water (LC 11)
tags:
  - problems
date: 2023-12-25
aliases:
---
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

### Solution
This is basically a more simplified version of [[Trapping Rain Water (LC 42)|Trapping Rain Water]]. Two pointers!

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        
        maxWater = 0
        
        l, r = 0, len(height) - 1
        
        while l < r:
            maxWater = max(maxWater, (r - l)*(min(height[l], height[r])))
            
            if height[l] <= height[r]:
                l += 1
            elif height[l] > height[r]:
                r -= 1
            
        return maxWater
```

- When `height[l] == height[r]`, moving either pointer will reduce the width between the two pointers, which is a part of the area calculation. Since the height is determined by the shorter of the two lines, and both are equal at this point, moving either pointer will not immediately lead to a better solution. The decision to move either the left or the right pointer when `height[l] == height[r]` is somewhat arbitrary in the context of this problem, so we could also do `elif height[l] >= height[r]` to include the equal case.
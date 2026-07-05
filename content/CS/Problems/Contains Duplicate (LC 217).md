---
title: Contains Duplicate (LC 217)
tags:
  - cs
  - problems
date: 2023-09-20
---
**Problem:** Given an integer array `nums`, return `true` if any value appears **at least twice**in the array, and return `false` if every element is distinct.

## Solutions

### Brute force
Just have two for loops and check for values.
- Time complexity: $O(n^{2})$
- Space complexity: $O(1)$

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j]:
                    return True

        return False
```
### Sorting
Sort the array; if there are any duplicated numbers in the list, return true.
- Time complexity: $O(n\log n)$, sorting operation is bottleneck here
- Space complexity: $O(1)$
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
        nums.sort()
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                return True
        
        return False
```

### Hashset
Use a hashset to check; if a number is already in the set, return True
- Time complexity: $O(n)$
- Space complexity: $O(n)$
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
        hashset = set()
        for n in nums:

            if n in hashset:
                return True
            
            hashset.add(n)
        return False
```
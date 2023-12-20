---
title: Two Sum
tags:
  - cs
  - problems
date: 2023-12-19
aliases:
---
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}  # value -> index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in num_map:
                return [num_map[diff], i]
            num_map[n] = i
```

- The idea is to create a hashmap (`value -> index`). We can just start with an empty map instead of creating a whole map of the array.
- For a given number `n` in the array, we calculate its difference from the target.
- If this difference is in our map, we can return the index of the difference and our current number.
- If it's not, we will add `n` and its index `i` to the hashmap as the key and value respectively.

Uglier hashmap solution that initializes:
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        num_map = {}  # val -> index

        for i, n in enumerate(nums):
            num_map[n] = i

        for i, n in enumerate(nums):
            diff = target - n
            
            if diff in num_map and num_map[diff] != i:
                return [num_map[diff], i]

```
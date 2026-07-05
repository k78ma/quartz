---
title: Product of Array Except Self (LC 238)
tags:
  - cs
  - problems
date: 2023-09-25
---
>[!info] Problem
>Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.
>The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
> You must write an algorithm that runs in `O(n)` time and without using the division operation.

The hard part of this is the $O(n)$ restriction and the no division operation rule.

### Prefix-Postfix Solution
Do two passes through `nums`. On the first pass, store the product of the elements before a given index in that index (prefix). On the second pass, store the product of the elements after a given index in that index (postfix), and multiply by the prefix. Give default values of $1$ for the left-most and right-most element for their prefix/postfix respectively.

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        result = [1] * len(nums)

        prefix = 1

        for i in range(len(nums)):
            result[i] = prefix
            prefix *= nums[i]

        postfix = 1

        for i in range(len(nums)-1, -1 , -1):
            result[i] *= postfix
            postfix *= nums[i]

        return result
```

Notes:
- Backwards for loop syntax for “`for i in range(len(nums)-1, -1 , -1):`”
	Basically, the `range()` function generates a sequence of numbers and can take 1, 2, or 3 arguments:
	- 1 argument: `range(stop)`
		- Goes from 0 to `stop`
	- 2 arguments: `range(start, stop)`
		- Goes from `start` to `stop`
	- 3 arguments: `range(start, stop, step)`
		- Goes from `start` to `stop` , incrementing by `step`
	
	Note that for the 2 and 3 argument case, `start` is inclusive but `stop` is exclusive.
	So `range(len(nums)-1, -1 ,-1)` is going from the last index to index `0` (since index `-1` is excluded) and decrementing by -1 every time.

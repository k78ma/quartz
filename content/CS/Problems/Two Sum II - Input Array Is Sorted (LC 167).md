---
title: Two Sum II - Input Array Is Sorted (LC 167)
tags:
  - problems
date: 2023-12-22
aliases:
  - Two Sum II
---
Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return _the indices of the two numbers,_ `index1` _and_ `index2`_, **added by one** as an integer array_ `[index1, index2]` _of length 2._

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

### Solution

```python
def twoSum(self, numbers: List[int], target: int) -> List[int]:
	
	l, r = 0, len(numbers)-1
	
	while l < r:
		currentSum = numbers[l] + numbers[r]
		
		if currentSum < target:
			l += 1
			
		elif currentSum > target:
			r -= 1
		
		else:
			return ([l+1, r+1]) # Adjust for 1-index
```

- Pretty straightforward 2-pointers approach
- Increment left pointer if we need bigger number
- Decrement right pointer if we need smaller number
- One thing to note here is that we have to use `elif` for the second check to make sure the two cases are mutually exclusive. If we use `if` for both conditions, there's a potential risk of modifying both `l` and `r` in the same iteration.
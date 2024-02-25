---
title: Find Minimum in Rotated Sorted Array
tags:
  - cs
  - dsa
date: 2024-02-25
aliases:
---
A sorted array of **unique** integers was rotated at an unknown pivot. For example, `[10, 20, 30, 40, 50]` becomes `[30, 40, 50, 10, 20]`. Find the minimum element in this array.

```python
def findMin(self, nums: List[int]) -> int:
	
	l, r = 0, len(nums) - 1
	res = -1
	
	while l <= r:
		
		m = (l + r) // 2
		
		if nums[m] <= nums[-1]:
			res = m
			r = m - 1
		else:
			l = m + 1
			
	return nums[res]
```

This is yet another instance where we can simplify this problem to a [[One-sided Binary Search]]. 
- Initially, it looks like we can't do binary search because the array is not sorted
- However, we can notice that the array is in 2 sections: 
	- Numbers larger than the last element `(30, 40, 50)`
	- Numbers less than or equal to the last element `(10, 20)`
- Thus, we can turn this into one-sided binary search by using a `feasible` function that compares against the last element of the array, `<= nums[-1]`.
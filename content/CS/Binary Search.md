---
title: Binary Search
tags:
  - cs
date: 2024-02-24
aliases:
---
The mother of all divide-and-conquer algorithms is binary search, which is a fast algorithm for searching in a sorted array of keys $S$. 

To search for key $q$, we compare $q$ to the middle key $S[n/2]$. 
- If $q$ appears before $S[n/2],$ it must reside in the left half of $S$
- If not, it must reside in the right half of S. 
- By repeating this process recursively on the correct half, we locate the key in a total of $\lceil \log n \rceil$ comparisons — a big win over the n/2 comparisons expected using sequential search.

```python
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

## Variations and Use-Cases
- [[One-sided Binary Search]]
- [[Square Root with Binary Search]]
### Related Problems
- [[Binary Search (LC 20)]]
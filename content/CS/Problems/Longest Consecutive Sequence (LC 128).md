---
title: Longest Consecutive Sequence (LC 128)
tags:
  - cs
  - problems
date: 2023-12-19
aliases:
---
#### Problem
Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence._

Must run in `O(n)` time.

**Input:** `nums = [100,4,200,1,3,2]`
**Output:** `4`
**Explanation:** The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.

#### Solution
```python
def longestConsecutive(self, nums):
	"""
	:type nums: List[int]
	:rtype: int
	"""

	numSet = set(nums)
	longest = 0
	
	for n in nums:
	
		length = 0
		
		if (n-1) not in numSet:
			length = 1
			
			while (n + length) in numSet:
				length += 1
			
		longest = max(length, longest)
			
	return longest
```

- We think about each array in that they consist of several sequences. For example, `[100,4,200,1,3,2]` would consist of `[1,2,3],[100],[200]
- Find the first element of a given sequence based on the fact that `n-1` will not exist
- For each given sequence, start from the first element that we found and count the length of the sequence.
- Keep track of the longest length; if it's longer than the longest one we've found so far, this sequence is the longest.
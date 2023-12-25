---
title: 3Sum (LC 15)
tags:
  - problems
date: 2023-12-24
aliases:
---
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

### Solution
My initial thought was basically to combine my solutions for [[Two Sum (LC 1)]] and [[Two Sum II - Input Array Is Sorted (LC 167)]]. But the 2-pointers approach to this wouldn't work, or at least it would be very inefficient, since the input array isn't actually sorted.

```python
def threeSum(self, nums: List[int]) -> List[List[int]]:
	
	result = []
	num_map = {}
	
	for i, n in enumerate(nums):
		num_map[n] = i # value->index
	
	l, r = 0, len(nums) - 1
	
	while l < r:
		
		currentSum = nums[l] + nums[r]
		diff = 0 - currentSum
		
		...
```


When thinking of a solution, there's a one thing to note that make this problem easier: we don't have to return indices, just the numbers! This means that we are able to manipulate the order of the array elements, so we can sort the array.

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        
        result = []
        nums.sort()
        
        for i, firstNum in enumerate(nums):
            
            if firstNum > 0: # Skip positive numbers
                break
                
            if i > 0 and firstNum == nums[i - 1]: # Check for duplicates
                continue
            
            l, r = i + 1, len(nums) - 1
            
            while l < r:
                threesum = firstNum + nums[l] + nums[r]
                
                if threesum > 0:
                    r -=1
                    
                elif threesum < 0:
                    l += 1
                    
                else:
                    result.append([firstNum, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
                    
        return result
```

- First we sort the array
- Traverse the sorted array to choose the first number. 
	- This first number should be negative; since the array is already sorted, if the first number is positive, the subsequent numbers will also be positive so we can't get a sum of zero. The `break` statement can be used here, because if we the first number is positive, we've gotten to the point that we can terminate the loop entirely.
	- Also, check that the first number is not a duplicate by comparing it to the previous number. If it is indeed a duplicate, we use `continue` to skip the current `firstNum` and iterate to the next option.
- Two-pointers approach to find the other two numbers, similar to [[Two Sum II - Input Array Is Sorted (LC 167)|Two Sum II]]
	- Start from the right of `firstNum` by specifying `l = i + 1`, where `i` is the index of `firstNum`
	- If the sum is too big, decrement right pointer
	- If the sum is too small, increment left pointer
	- If the sum produces the correct amount, save the triplet to the result
		-  In [[Two Sum II - Input Array Is Sorted (LC 167)|Two Sum II]], we could just return here because there was only one unique solution. Here, after adding the triplet to `results`, we must increment the left pointer to continue to the next case.
		- We check that the value at the left pointer is not duplicated at the left position. So, we do:```

```python
l += 1
while nums[l] == nums[l - 1] and l < r:
	l += 1
```

-  Note that we don't actually have to manipulate the right pointer here! Our previous logic will take care of this
- Alternatively, we can only manipulate the right pointer too!

```python
r -= 1
while nums[r] == nums[r + 1] and l < r:
	r -= 1
```

- Just make sure to check that the left pointer and right pointer don't overlap with `l < r`.
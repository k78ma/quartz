---
title: Sliding Window Maximum (LC 239)
tags:
  - problems
  - cs
date: 2024-01-09
aliases:
---
You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return _the max sliding window_.

**Example 1:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output:[3,3,5,5,6,7]
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

### Solution
```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        
        result = []
        l = r = 0
        
        q = collections.deque() # deque of indexes
        
        while r < len(nums):
            while q and nums[r] > nums[q[-1]]: # pop smaller values from q
                q.pop()
            q.append(r)
            
            if l > q[0]:
                q.popleft() # remove left val from window
                
                
            if (r - l + 1) >= k:
                result.append(nums[q[0]])
                l += 1
                
            r += 1
            
            
        return result
```

The idea of this is to make as few comparisons as possible by eliminating elements in the array that are obviously not the maximum. This is done by using a double-ended [[Stacks and Queues|queue]] to track the indices of potential max values within each window.

- Left and right pointers keep track of window position
- If the queue exists (not the first element) and the number we're currently looking at (`nums[r]`) is bigger than the last number in the array (`nums[q[-1]]`), we can remove elements from the right since we know that they can't be the maximums anymore. This is encountered until we encounter an element that's bigger than the element we're currently looking at, in which case we append its index to the deque..
- If the left end of the window is past the starting index of the deque, we pop the deque from the left and increment the left counter to shift the window.
- Once the window has reached size `k`, we can append the maximum for that window, which will automatically be the largest number in our queue.
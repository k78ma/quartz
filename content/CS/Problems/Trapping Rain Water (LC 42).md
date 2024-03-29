---
title: Trapping Rain Water (LC 42)
tags:
  - cs
  - problems
date: 2023-12-25
aliases:
  - Trapping Rain Water
draft: "true"
---
I knew they were probably going to ask me either a LeetCode medium or hard question based on the outline of the interview; since I only had one day, didn’t really have time to prepare, just did some NeetCode questions. Hadn’t done LeetCode very seriously before, should definitely get better. Also wasn’t expecting the question to be in C++.

### Problem:
(I’m paraphrasing here as I don’t have the exact problem)
You are given a landscape in the form of a vector like `[3,2,1,2,3]`. This corresponds to a heigh map like this. Based on the height map, determine how many units of water the landscape can hold.
```
@ x x x @
@ @ x @ @
@ @ @ @ @
```
- The `@` symbols are the landscale
- The `x` symbols are water

Also, water overflows like this:
```
Input: [3,2,1,2,2]
@ 
@ @ x @ @
@ @ @ @ @
```

### Solution
I was honestly kind of panicking throughout this so I didn’t explain my solution very well, but this is what I came up with, which actually turned out to be fairly optimal:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int landscapeCalc(const vector<int>& height) {
    int n = height.size();
    if(n <= 2) return 0;
    
    vector<int> leftMax(n, 0), rightMax(n, 0);
    leftMax[0] = height[0];
    rightMax[n-1] = height[n-1];
    
    // Fill leftMax
    for(int i = 1; i < n; ++i)
        leftMax[i] = max(leftMax[i-1], height[i]);

    // Fill rightMax
    for(int i = n-2; i >= 0; --i)
        rightMax[i] = max(rightMax[i+1], height[i]);

    // Calculate trapped water
    int water = 0;
    for(int i = 0; i < n; ++i)
        water += min(leftMax[i], rightMax[i]) - height[i];

    return water;
}

int main() {
    vector<int> example1 {3,2,1,2,3};
    vector<int> example2 {3,2,1,2,2};
    cout << "example1: " << trappedWater(example1) << endl;
    cout << "example2: " << trappedWater(example2) << endl;

    return 0;
}

```

`leftMax` and `rightMax` arrays represent the maximum height to the left/right of each index, and have the same lengths as the input array.
- `leftMax[i]` is the maximum of `leftMax[i-1]` and `height[i]`
- `rightMax[i]` is the maximum of `rightMax[i+1]` and `height[i]`
Then, for each position `i` in the height map, the water trapped above `i` is the minimum of `leftMax[i]` and `rightMax[i]`, minus the height at `i`. From here we just sum all the trapped water.

![[Trapping Rain Water (LC 42).png]]

As far as I can tell, this should have time/space complexity of $O(n)$. The interviewer pointed out that I’m using 3 separate for loops, but I’m not entirely sure if there’s a better way to do this, and the interviewer wasn’t sure either (although he might just be saying that). Definitely gotta get better at questions like these.

**UPDATE:** It turns out that this problem can be found here: https://leetcode.com/problems/trapping-rain-water/description/ (LeetCode Hard)

Here’s the Python version of my solution from above:
```python
class Solution:
    def trap(self, height: List[int]) -> int:
        
        n = len(height)
        leftMax = [0] * n
        rightMax = [0] * n

        leftMax[0] = height[0]
        rightMax[n-1] = height[n-1]

        for i in range(1, n, 1):
            leftMax[i] = max(leftMax[i-1], height[i])

        for i in range(n-2, -1, -1):
            rightMax[i] = max(rightMax[i+1], height[i]);

        water = 0
        for i in range(n):
            water += min(leftMax[i], rightMax[i]) - height[i]

        return water
```

### Two-Pointers Solution
This solution has $O(1)$ memory since we don't need to make `leftMax` and `rightMax` arrays. The time complexity is still $O(n)$.

- Initialize left and right pointers at the start/end of the array respectively
- Make max left and max right variables to keep track of the max so far from each direction

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        l, r = 0, len(height) - 1
        leftMax, rightMax = height[l], height[r]

        water = 0
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                water += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                water += rightMax - height[r]
        return res
```

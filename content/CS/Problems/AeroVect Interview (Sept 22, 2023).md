---
title: AeroVect Interview (Sept 22, 2023)
tags: 
date: 2023-09-22
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

As far as I can tell, this should have time/space complexity of $O(n)$. The interviewer pointed out that I’m using 3 separate for loops, but I’m not entirely sure if there’s a better way to do this, and the interviewer wasn’t sure either (although he might just be saying that). Definitely gotta get better at questions like these.

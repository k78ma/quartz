---
title: Longest Repeating Character Replacement (LC 424)
tags:
  - problems
date: 2023-12-30
aliases:
---
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return _the length of the longest substring containing the same letter you can get after performing the above operations_.

**Example 1:**
```yaml
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

### Solution
```python
class Solution:n 
    def characterReplacement(self, s: str, k: int) -> int:
        
        count = {}
        
        l = 0
        max_freq = 0
        
        for r in range(len(s)):
            count[s[r]] = count.get(s[r], 0) + 1
            max_freq = max(max_freq, count[s[r]])

            if (r - l + 1) - max_freq > k:
                count[s[l]] -= 1
                l += 1

        return (r - l + 1)
```

The idea here is to keep a hashmap of frequencies for each character. We use a sliding window and update our hashmap accordingly. If we have:
$$
\text{Window length} - \text{Max frequency} > k
$$
then we for that window, we can get a a string with just one letter. 
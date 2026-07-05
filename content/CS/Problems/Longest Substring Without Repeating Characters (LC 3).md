---
title: Longest Substring Without Repeating Characters (LC 3)
tags:
  - problems
date: 2023-12-26
aliases:
---
Given a string `s`, find the length of the **longest** **substring** without repeating characters.

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```


### Naive Solution
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        maxLength = 0

        for i in range(len(s)):
            strSet = set()
            currentLength = 0

            for j in range(i, len(s)):
                if s[j] in strSet:
                    break  
                    
                strSet.add(s[j])
                currentLength += 1

            maxLength = max(maxLength, currentLength)

        return maxLength
```

### Sliding Window Solution
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        maxLength = 0
        charSet = set()
        l = 0
        
        for r in range(len(s)):
            
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
                
            charSet.add(s[r])
            maxLength = max(maxLength, len(charSet))
        
        return maxLength
```
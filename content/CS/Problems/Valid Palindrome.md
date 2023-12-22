---
title: Valid Palindrome
tags:
  - problems
date: 2023-12-21
aliases:
---
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.

**Example 1:**

**Input:** s = `"A man, a plan, a canal: Panama"`
**Output:** true
**Explanation:** `"amanaplanacanalpanama"` is a palindrome.

### Solution 1

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        cleaned = ''
        
        for ch in s:
            if ch.isalpha() or ch.isdigit():
                cleaned += ch.lower()
                
        return (cleaned == cleaned[::-1])
                
```
- Create a "cleaned" version of the string with only alphanumeric characters and all in lower case
- Compare the cleaned version of the string against its reverse ([[Slice Notation]])


---
title: Valid Anagram (LC 242)
tags:
  - cs
  - problems
date: 2023-09-21
---

Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.
An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**
**Input:** s = "anagram", t = "nagaram"
**Output:** true

**Example 2:**

**Input:** s = "rat", t = "car"
**Output:** false

### Sorting Method
Turn the strings into lists, sort them, and check if the sorted lists are identical.
- Time complexity: $O(n\log n) = O(s \log s + t \log t)$
- Space complexity: $O(n) = O(s +t)$
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        s_list = []
        t_list = []
        for char in s:
            s_list.append(char)
        for char in t:
            t_list.append(char)

        s_list.sort()
        t_list.sort()

        if s_list == t_list:
            return True

        return False
```

### Hashing Map
Build hashmaps where:

| Key         | Value    |
| ----------- | -------- |
| ‘character’ | ‘count’ |
| a           | 3        |
| n           | 1        |
| etc…            |          |

Compare that the keys and counts for each key are the same.
- Time complexity: $O(n) = O(s+t)$
- Space complexity: $O(n) = O(s+t)$

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        sCounter, tCounter = {}, {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            sCounter[s[i]] = sCounter.get(s[i], 0) + 1
            tCounter[t[i]] = tCounter.get(t[i], 0) + 1

        for c in sCounter:
            if sCounter[c] != tCounter.get(c,0):
                return False
        
        return True
```

Notes:
- Dictionaries in Python are implemented as hashmaps
- `sCounter.get(s[i],0)` deals with the case that there is nothing at that key; if there is nothing, it uses a default value of `0`.
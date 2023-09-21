---
title: Valid Anagram (LC 242)
tags:
  - cs
  - problems
date: 2023-09-21
---
>[!info] Problems
>Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.
>An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
>
>**Example 1:**
>
>**Input:** s = "anagram", t = "nagaram"
>**Output:** true
>
>**Example 2:**
>
>**Input:** s = "rat", t = "car"
>**Output:** false

### Sorting Method
Turn the strings into lists, sort them, and check if the sorted lists are identical.
- Time complexity: $O(n\log n)$
- Space complexity: $O(n)$
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
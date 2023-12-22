---
title: Valid Palindrome (LC 125)
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
- Time: $O(n)$
- Space: $O(n)$

```python
def isPalindrome(self, s: str) -> bool:
	
	cleaned = ''
	
	for ch in s:
		if ch.isalpha() or ch.isdigit():
			cleaned += ch.lower()
			
	return (cleaned == cleaned[::-1])
```
- Create a "cleaned" version of the string with only alphanumeric characters and all in lower case
- Compare the cleaned version of the string against its reverse ([[Slice Notation]])


### Solution
Here's another solution with:
- Constant extra memory (we don't have to create a `cleaned` string like above). This is basically a 2 pointers solution.
- No use of `isalpha()` or `isdigit()`.
- Still $O(n)$ time complexity.

```python
def alphaNum(self, c: char) -> bool:
	return (ord('A') <= ord(c) <= ord('Z')) or
	(ord ('a') <= ord(c) <= ord('z')) or
	(ord ('0') <= ord(c) <= ord('9'))

def isPalindrome(self, s: str) -> bool:
	l, r = 0, len(s)-1

	while l < r:
		while l < r and not self.alphaNum(s[l]):
			l+=1
		while l < r and not self.alphaNum(s[r]):
			r-=1
		if s[leftPtr].lower() != s[rightPtr].lower():
			return False
		l = l + 1
		r = r - 1

	return True
```
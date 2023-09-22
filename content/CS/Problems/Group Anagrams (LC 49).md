### Hash Map Solution
The idea of this is basically to encode strings in map format by counting how many of each letter they have. For example, `tar` and `rat` have the same number of t’s, a’s, and r’s, so they would be encoded the same way. Then you can create a dictionary where the encoding is the key, and the value is how many strings with this encoding there are.

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        result = defaultdict(list)

        for s in strs:
            count = [0] * 26

            for c in s:
                count[ord(c) - ord("a")] += 1

            result[tuple(count)].append(s)

        return result.values()
```

Notes:
- `defaultdict` functions the same as dictionaries, but it never raises a KeyError and instead provides a default value. Here, we set the default value to a list.
- `ord()` gives the ASCII value of something, so `ord("a")=65`,`ord("b)=66`, etc.
	- This basically maps the alphabet from 1-26, just shifted up, but it doesn’t matter
- We use `result[tuple(count)]` instead of just `result[count]` because dictionary keys need to be immutable, so you can’t use an array
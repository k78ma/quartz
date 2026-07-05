---
title: Valid Sudoku (LC 36)
tags:
  - problems
  - cs
date: 2023-10-20
---
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

## Solution
Basically we just want to go through every row, column and sub-box and see if they are valid. This can be done using a hash set, such that a hash collision would mean that the region is invalid.
- Time complexity: $O(9^{2})$
- Memory complexity: $O(9^{2})$

Sub-box determination: We give the 9 sub-boxes indexes $[0,0] - [2,2]$. For a given cell, we can determine which sub-box is in by using integer division by 3; for example, the cell $[8,8]$ would be in $[8 / 3, 8 / 3]$, which would be sub-box $[2,2]$. 

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        # dictionaries of hashsets
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set) 
        squares = collections.defaultdict(set) # key = (r/3, c/3)

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (board[r][c] in rows[r] or 
                    board[r][c] in cols[c] or
                    board[r][c] in squares[r // 3, c // 3]):
                    return False
                else:
                    rows[r].add(board[r][c])
                    cols[c].add(board[r][c])
                    squares[r // 3, c // 3].add(board[r][c])

        return True
```

Notes:
- Here, `cols, rows, squares` are basically an array of hash sets.
	- For example, the second row would have its own hashset at `row[1]`
	- `squares` is a 2D array so that we can refer to the 9 sub-boxes using the method we referred to above.
- `defaultdict` functions the same as dictionaries, but it never raises a KeyError and instead provides a default value. Here, we set the default value to a set.
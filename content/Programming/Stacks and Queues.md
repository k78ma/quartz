---
title: "Stacks and Queues"
tag: cs
date: 2023-06-25
alias:
---

Basic array-like data structures.

## Stack
- FILO (first in last out)
- Use a pointer to keep track of the top of the stack
- Insertion:
	- Set the value of the pointer to the item being inserted
	- Increment pointer by 1
- Deletion:
	- Decrease pointer by 1
- Example: Towers of Hanoi

>[!note]- Stack Graphical Explanation
>![500](Programming/attachments/Pasted%20image%2020230726151912.png)
>![500](Programming/attachments/Pasted%20image%2020230726152014.png)
>![500](Programming/attachments/Pasted%20image%2020230726152027.png)
>![500](Programming/attachments/Pasted%20image%2020230726152042.png)


## Queues
- LIFO (last in first out)
- Use two pointers to keep track of the start and end of the queue
- Insertion:
	- Set the entry at the end pointer to the value and increase the end pointer by one.
- Deletion:
	- Set increase the start pointer by one.
- Example: Drive-thru
- **Deque:** Double-ended queue where inserting and removing items can be done from both ends

>[!note]- Queue Graphical Explanation
>![Pasted image 20230726152746](Programming/attachments/Pasted%20image%2020230726152746.png)
>![Pasted image 20230726152804](Programming/attachments/Pasted%20image%2020230726152804.png)
>![Pasted image 20230726152814](Programming/attachments/Pasted%20image%2020230726152814.png)
>![Pasted image 20230726152845](Programming/attachments/Pasted%20image%2020230726152845.png)
>![Pasted image 20230726152855](Programming/attachments/Pasted%20image%2020230726152855.png)
>![Pasted image 20230726152927](Programming/attachments/Pasted%20image%2020230726152927.png)
>![Pasted image 20230726152941](Programming/attachments/Pasted%20image%2020230726152941.png)

---
title: Linked List
tags:
  - dsa
date: 2024-03-22
aliases:
---
Linked data structures are held together by [[Pointers]].
- Each node contains data fields that retain the data we need to store.
- Each node contains a pointer field to at least one other node.
- There is a pointer to the head of the list, so we know where to access it.

```c
typdef struct list {
	item_type item;
	struct list *next;
}
```

## Search
Searching for an item $x$ in a list can be done iteratively or recursively.

Here is a recursive example:
```c
list *search_list(list l*, item_type x) {
	if (l == NULL) {
		return(NULL);
	}

	if (l->item == x){
		return(l);
	} else {
		return(search_list(l->next, x));
	}
}
```

## Insertion
Insertion into a singly linked list is relatively simple. Because we usually don't care about the order of the list, we just insert at the beginning; this means that we don't have to traverse the list, but we do have to update the pointer to the head of the structure (denoted `l`).

C version:
```c
void insert_list(list **head, item_type x){
	list *p; // Temporary pointer to a list object

	p = malloc(sizeof(list));
	p->item = x;
	p->next = *head;
	*head = p;
}
```

- `**l` is a pointer to a pointer to a list node. Thus, the last line, `*l = p`, copies `p` to the place pointed to by `l`, which is an external variable maintaining access to the head of the list.

Python version (easier to read and understand):
```python
def insert_list(self, data):
	new_node = Node(data)
	new_node.next = self.head
	self.head = new_node
```

- Technically, we'd want to have a case `if self.head is None` for if the list is empty. But the above example is for clarity.
## Deletion
Deletion from a linked list involves finding the predecessor to the node we want to delete. Because this predecessor points to the node we want to delete, we have to change its `next` pointer.

```c
void delete_list (list **l, list **x){
	list *p; 
	list *pred;

	p = *l;
	pred = item_ahead(*l, *x);

	if (pred == NULL){
		*l = p->next;
	} else {
		pred->next = (*x)->next;
	}
	free(*x);
}

list *find_pred(list *l, list *x) {
	if ((l == NULL) || (l->next == NULL)){
		return(NULL);
	}

	if ((l->next) == x){
		return(l);
	} else {
		return (item_ahead(l->next, x));
	}
}
```

- C requires explicit deallocation of memory, so we must free the deleted node after we are finished to return the memory to the system. This leaves the incoming pointer as a dangling reference to a location that no longer exists, so care must be taken not to use this pointer again.
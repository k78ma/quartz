---
title: Binary Search Tree
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
  - BST
---
A binary search tree (BST) is a type of [[Binary Tree]] where:
$$
\text{all left descendants} < \text{node} < \text{all right descendants}
$$

![[Binary Search Tree.png]]

Binary search trees allow for fast search and flexible updates. [[Binary Search]] requires that we have fast access to two elements, the median elements above and below the given node. To combine these ideas, we need a "linked list" with two pointers per node. 

Binary tree nodes have: 
- Left and right pointer fields
- Data field
- Parent pointer

For example:
```c
typedef struct tree {
	item_type item;       // data item
	struct tree *parent;  // pointer to parent
	struct tree *left;    // pointer to left child
	struct tree *right;   // pointer to right child
} tree;
```

(This is just the same as the `Node` definition we saw in [[Binary Tree]]).

## Search
The binary search tree structure uniquely identifies where each key is located. Starting at the root, unless a node contains the query $x$, proceed left or right depending on whether $x$ occurs before or after the current node key.

This works because binary search trees are recursive objectives; both the left and right subtrees of a BST are themselves BSTs. 

```c
tree *search_tree(tree *root, item_type x){
	if (root == NULL){
		return(NULL);
	}

	if (root->item == x){
		return(root);
	}

	if (x < root->item){
		return(search_tree(root->left, x));
	} else {
		return(search_tree(root->right, x));
	}
}
```

This runs in $O(h)$ time, where $h$ is the height of the tree. It's essentially a binary search because we're exlcuding either the left/right subtree from our search space on each iteration.

## Minimum/Maximum
The minimum element must be the left-most descendant of the root. The maximum element must be the right-most descendant of the root.

![[Binary Search Tree-1.png|300]]

For example, we can implement finding minimum as:
```c
tree *find_minimum(tree *t){
	tree *min;

	if (t == NULL){
		return(NULL);
	}

	min = t;
	while (min->left != NULL){
		min = min->left;
	}

	return(min);
}
```

## Traversal
See [[Tree Traversal]] for the different types of tree traversal.

Binary search trees make it easy to report the nodes in sorted order since we can just do in-order traversal (left→root→right) .By definition, all keys smaller than the root must lie in the left subtree of the root, and all keys bigger than the root in the right subtree.

Each item is only processed once during traversal, so it runs in $O(n)$ time where $n$ is the number of nodes in the tree.
## Insertion
There is only one place to insert an item $x$ into a BST, so we know where to find it again. We replace the `NULL` pointer found in $T$ after unsuccessfully searching for the key of $x$.

```c
void insert_tree(tree **l, item_type x, tree *parent){
	tree *p;

	if (*l == NULL){
		p = malloc(sizeof(tree));
		p->item = x;
		p->left = p->right = NULL;
		p->parent = parent;
		*l = p;
		return;
	}

	if (x < (*l)->item){
		insert_tree(&((*l)->left), x, *l);
	} else {
		insert_tree(&((*l)->right), x, *l);
	}
}
```

Here, we use recursion to combine search and insertion. The arguments are:
- A pointer `l` to the pointer linking the search subtree to the rest of the tree
- The key `x` to be inserted
- A `parent` pointer to the parent node containing `l`

The node is allocated and linked in after hitting the `NULL` pointer. We pass the pointer to the left/right pointer in the node during the search, so the assignment `*l = p` links the new node into the tree.

Allocating the node and linking it into the tree is a constant-time operation, after the search has been performed in $O(h)$ time.
## Deletion
Deleting a node is tricky because its children have to be linked back into the tree somewhere else.
- Leafs nodes with no children can simply be deleted by clearing the pointer to the given node.
- Deleting nodes with 1 child are also simple, we just need to link the child to the deleted node's parent without violating the in-order labeling of the tree.
- For nodes with 2 children, we need to relabel this node with the key of its immediate successor in sorted order.
	- The successor is the smallest value in the right subtree – the left-most descendant in the right subtree `p`. 
	- Moving this descendant to the point of deletion results in a properly labeled binary search tree, and reduces our deletion problem to physically removing a node with at most one child, which we already know how to do. 

![[Binary Search Tree-2.png]]
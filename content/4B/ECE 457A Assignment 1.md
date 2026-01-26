---
title: ECE 457A Assignment 1
tags:
  - ece457a
date: 2026-01-25
aliases: ece 457a assignment 1
---
Q3 state space:

```
digraph JugStateSpace {
  rankdir=LR;
  node [shape=circle, fontsize=10];

  // Goal styling: b = 2
//   "(0,2)" [shape=doublecircle];
//   "(4,2)" [shape=doublecircle];

  // Edges (labeled by action)
  "(0,0)" -> "(4,0)" [label="Fill(4)"];
  "(0,0)" -> "(0,3)" [label="Fill(3)"];

  "(0,1)" -> "(0,0)" [label="Empty(3)"];
  "(0,1)" -> "(0,3)" [label="Fill(3)"];
  "(0,1)" -> "(1,0)" [label="Pour(3→4)"];
  "(0,1)" -> "(4,1)" [label="Fill(4)"];

  "(0,2)" -> "(0,0)" [label="Empty(3)"];
  "(0,2)" -> "(0,3)" [label="Fill(3)"];
  "(0,2)" -> "(2,0)" [label="Pour(34)"];
  "(0,2)" -> "(4,2)" [label="Fill(4)"];

  "(0,3)" -> "(0,0)" [label="Empty(3)"];
  "(0,3)" -> "(3,0)" [label="Pour(3→4)"];
  "(0,3)" -> "(4,3)" [label="Fill(4)"];

  "(1,0)" -> "(0,0)" [label="Empty(4)"];
  "(1,0)" -> "(0,1)" [label="Pour(4→3)"];
  "(1,0)" -> "(1,3)" [label="Fill(3)"];
  "(1,0)" -> "(4,0)" [label="Fill(4)"];

  "(1,3)" -> "(0,3)" [label="Empty(4)"];
  "(1,3)" -> "(1,0)" [label="Empty(3)"];
  "(1,3)" -> "(2,3)" [label="Pour(3→4)"];

  "(2,0)" -> "(0,0)" [label="Empty(4)"];
  "(2,0)" -> "(0,2)" [label="Pour(4→3)"];
  "(2,0)" -> "(2,3)" [label="Fill(3)"];
  "(2,0)" -> "(4,0)" [label="Fill(4)"];

  "(2,3)" -> "(0,3)" [label="Empty(4)"];
  "(2,3)" -> "(2,0)" [label="Empty(3)"];
  "(2,3)" -> "(4,1)" [label="Pour(3→4)"];

  "(3,0)" -> "(0,0)" [label="Empty(4)"];
  "(3,0)" -> "(0,3)" [label="Pour(4→3)"];
  "(3,0)" -> "(3,3)" [label="Fill(3)"];
  "(3,0)" -> "(4,0)" [label="Fill(4)"];

  "(3,3)" -> "(0,3)" [label="Empty(4)"];
  "(3,3)" -> "(3,0)" [label="Empty(3)"];
  "(3,3)" -> "(4,2)" [label="Pour(3→4)"];

  "(4,0)" -> "(0,0)" [label="Empty(4)"];
  "(4,0)" -> "(4,3)" [label="Fill(3)"];
  "(4,0)" -> "(1,3)" [label="Pour(4→3)"];

  "(4,1)" -> "(4,0)" [label="Empty(3)"];
  "(4,1)" -> "(4,3)" [label="Fill(3)"];
  "(4,1)" -> "(0,1)" [label="Empty(4)"];

  "(4,2)" -> "(4,0)" [label="Empty(3)"];
  "(4,2)" -> "(4,3)" [label="Fill(3)"];
  "(4,2)" -> "(0,2)" [label="Empty(4)"];

  "(4,3)" -> "(0,3)" [label="Empty(4)"];
  "(4,3)" -> "(4,0)" [label="Empty(3)"];
}
```

Q3 tree:
```
digraph BFS_Solution_Tree {
  rankdir=TB;
  node [fontsize=15];

  // Styling
//   "(0,0)" [shape=circle, style=filled, fillcolor=lightblue];      // initial
//   "(4,2)" [shape=doublecircle, style=filled, fillcolor=lightgreen]; // goal

  // Other nodes default
  node [shape=circle];

  // BFS tree edges (each node shown with the single parent that first discovered it)
  "(0,0)" -> "(4,0)" [label="Fill(4)"];
  "(0,0)" -> "(0,3)_a" [label="Fill(3)"];

  "(4,0)" -> "(4,3)_a" [label="Fill(3)"];
  "(4,0)" -> "(1,3)"   [label="Pour(4to3)"];

  "(0,3)_a" -> "(4,3)_b" [label="Fill(4)"];
  "(0,3)_a" -> "(3,0)"   [label="Pour(3to4)"];
  
  "(4,3)_a" -> "(0,3)_b" [label="Empty(4)"];

  "(1,3)" -> "(4,3)_c" [label="Fill(4)"];
  "(1,3)" -> "(0,3)_c" [label="Empty(4)"];
  "(1,3)" -> "(1,0)"   [label="Empty(3)"];

  "(3,0)" -> "(4,3)_d"   [label="Fill(4)"];
  "(3,0)" -> "(3,3)"   [label="Fill(3)"];
  "(3,0)" -> "(0,0)_b"   [label="Empty(4)"];

  
  "(1,0)" -> "(4,0)_b"   [label="Fill(4)"];
  "(1,0)" -> "(0,0)_c"   [label="Empty(4)"];
  "(1,0)" -> "(0,1)"   [label="Pour(4to3)"];
  
  "(3,3)" -> "(4,3)_e"   [label="Fill(4)"];
  "(3,3)" -> "(0,3)_d"   [label="Empty(4)"];
  "(3,3)" -> "(4,2)"   [label="Pour(3to4)"];
  
  

  "(4,3)_a" [label="(4,3)"];
  "(4,3)_b" [label="(4,3)"];
  "(4,3)_c" [label="(4,3)"];
  "(4,3)_d" [label="(4,3)"];
  "(4,3)_e" [label="(4,3)"];
  "(0,3)_a" [label="(0,3)"];
  "(0,3)_b" [label="(0,3)"];
  "(0,3)_c" [label="(0,3)"];
  "(0,3)_d" [label="(0,3)"];
  "(0,0)_b" [label="(0,0)"];
  "(0,0)_c" [label="(0,0)"];
  "(4,0)_b" [label="(4,0)"];


  
  "(4,3)_b" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(4,3)_c" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(4,3)_d" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(4,3)_e" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
    
  "(0,3)_b" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(0,3)_c" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(0,3)_d" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
 
  
  "(0,0)_b" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(0,0)_c" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(4,0)_b" [
    shape=circle,
    style=filled,
    fillcolor=lightgray
  ];
  
  "(0,0)" [
    shape=circle,
    style=filled,
    fillcolor=yellow
  ];
  
  "(0,3)_a" [
    shape=circle,
    style=filled,
    fillcolor=yellow
  ];
  
  "(3,0)" [
    shape=circle,
    style=filled,
    fillcolor=yellow
  ];
  
  "(3,3)" [
    shape=circle,
    style=filled,
    fillcolor=yellow
  ];
  
  "(4,2)" [
    shape=circle,
    style=filled,
    fillcolor=yellow
  ];
}
```
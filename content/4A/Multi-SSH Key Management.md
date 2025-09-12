---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
Before: `git@github.com:k78ma/quartz.git`

With SSH config aliases:
```
git@github-k78ma:k78ma/quartz.git
git@github-uwtron16:uwtron16/repo.git
```

**So basically just replace github.com with github-k78ma**

Clone with alias:
```
git clone git@github-k78ma:k78ma/quartz.git
git clone git@github-uwtron16:uwtron16/some-repo.git
```
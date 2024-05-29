---
title: WATONeRF
tags:
  - wato
date: 2024-03-29
aliases: 
draft: "true"
---
Run container:

Shell 1:
```bash
docker-compose up emernerf
```

Shell 2:
```
docker exec -it wato_dense_prediction_emernerf_1 /bin/bash
```


- take the dataset used in nerfRPN paper, which comes with object annotations
- run a gaussian splatting model on nerfRPN dataset (nerfStudio?)
- output stuff in Gaussian splat format
- try 3D object detection model on gaussian splats
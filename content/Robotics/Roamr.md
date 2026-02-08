---
title: Roamr
tags:
  - robotics
date: 2024-04-11
aliases: 
draft: "true"
---
Docker container
```bash
docker run -it --name roamr --rm -v $(pwd):/colcon_ws osrf/ros:humble-desktop bash
```

```
alias oops='rm -rf build install log'
```


```
IMU calibration: forward axis=1 horiz x/y/z=0.99877/0.99927/0.06255

IMU yaw deg (axis=1): 90.00000 | x:-0.00000 y:90.00000 z:180.00000 | horiz x/y/z: 1.00000/1.00000/0.00000 | gyro_z:-0.01874

T:381603.45647 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=10 R=-10 hold_ms=3000

IMU yaw deg (axis=1): 89.96149 | x:-0.03851 y:89.96149 z:103.57089 | horiz x/y/z: 1.00000/1.00000/0.00067 | gyro_z:0.00925

T:381614.11975 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 89.97196 | x:-0.02800 y:89.97196 z:127.06917 | horiz x/y/z: 1.00000/1.00000/0.00127 | gyro_z:0.00982

T:381615.95289 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=0 R=0 hold_ms=3000

IMU yaw deg (axis=1): 89.99147 | x:-0.00848 y:89.99147 z:132.00145 | horiz x/y/z: 1.00000/1.00000/0.00132 | gyro_z:0.00997

T:381617.85267 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=-10 R=10 hold_ms=3000

IMU yaw deg (axis=1): 89.98856 | x:-0.01140 y:89.98856 z:126.61703 | horiz x/y/z: 1.00000/1.00000/0.00130 | gyro_z:0.00929

T:381620.05241 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 90.04796 | x:0.04795 y:90.04796 z:-138.22168 | horiz x/y/z: 1.00000/1.00000/0.00044 | gyro_z:0.01306

T:381622.11882 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=-20 R=20 hold_ms=3000

IMU yaw deg (axis=1): 91.54271 | x:1.32829 y:91.54271 z:-177.94968 | horiz x/y/z: 0.83848/0.99998/0.54496 | gyro_z:0.51750

T:381624.41853 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=-30 R=30 hold_ms=3000

IMU yaw deg (axis=1): 93.17180 | x:3.33819 y:93.17180 z:-176.87706 | horiz x/y/z: 0.47640/1.00000/0.87923 | gyro_z:0.01391

T:381626.18497 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 93.14880 | x:3.19121 y:93.14880 z:-176.86363 | horiz x/y/z: 0.47622/1.00000/0.87933 | gyro_z:0.00500

T:381627.78476 points size: 172800, image size: 2764800

MotorBridge -> rerun: L=0 R=0 hold_ms=0

MotorBridge -> rerun: L=0 R=0 hold_ms=0

IMU yaw deg (axis=1): 93.02174 | x:3.07989 y:93.02174 z:-176.99518 | horiz x/y/z: 0.47465/1.00000/0.88018 | gyro_z:0.05777

T:381629.41789 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 93.26881 | x:4.91983 y:93.26881 z:-176.93954 | horiz x/y/z: 0.33485/0.99995/0.94233 | gyro_z:0.06230

T:381631.25098 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 94.09945 | x:178.11714 y:94.09945 z:-174.08223 | horiz x/y/z: 0.48483/0.99834/0.87651 | gyro_z:0.49820

T:381632.68412 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 94.05548 | x:-179.10307 y:94.05548 z:-168.59521 | horiz x/y/z: 0.83814/0.99643/0.55193 | gyro_z:0.12735

T:381633.95062 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 93.79381 | x:-179.18506 y:93.79381 z:-168.41454 | horiz x/y/z: 0.85232/0.99643/0.52979 | gyro_z:0.26817

T:381635.41709 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 93.80685 | x:-176.97581 y:93.80685 z:-142.73694 | horiz x/y/z: 0.98991/0.99548/0.17059 | gyro_z:0.01983

T:381637.31683 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 92.35059 | x:-176.69710 y:92.35059 z:-31.68449 | horiz x/y/z: 0.98805/0.99437/0.18702 | gyro_z:0.59471

T:381639.44988 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 88.97641 | x:-162.31903 y:88.97641 z:-2.69503 | horiz x/y/z: 0.29740/0.99505/0.95991 | gyro_z:0.49765

T:381641.58292 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 87.08568 | x:-16.27359 y:87.08568 z:-1.91942 | horiz x/y/z: 0.26830/0.99794/0.96547 | gyro_z:0.04201

T:381643.21603 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 87.60941 | x:-5.18227 y:87.60941 z:0.41064 | horiz x/y/z: 0.70855/0.99881/0.70735 | gyro_z:0.32280

T:381645.64903 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 89.71205 | x:-0.28032 y:89.71205 z:160.23763 | horiz x/y/z: 0.99981/0.99998/0.02058 | gyro_z:0.00938

T:381648.94859 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 89.72338 | x:-0.26846 y:89.72338 z:159.53062 | horiz x/y/z: 0.99981/0.99997/0.02096 | gyro_z:0.00869

T:381652.08152 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 89.75124 | x:-0.24070 y:89.75124 z:159.47366 | horiz x/y/z: 0.99981/0.99997/0.02080 | gyro_z:0.00588

T:381655.41442 points size: 172800, image size: 2764800

IMU yaw deg (axis=1): 89.76814 | x:-0.22374 y:89.76814 z:158.74611 | horiz x/y/z: 0.99982/0.99997/0.02058 | gyro_z:0.00903
```
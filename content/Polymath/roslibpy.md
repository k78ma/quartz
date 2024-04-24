---
title: roslibpy
tags:
  - polymath
date: 2024-04-16
aliases: 
draft: "true"
---
On Mac:
```shell
docker run -it --name roslibpy -p 9090:9090 registry.gitlab.com/polymathrobotics/autonomy/polymath_autonomy:humble bash

apt update
sudo apt-get install ros-humble-rosbridge-suite
source /opt/ros/humble/setup.bash
ros2 launch rosbridge_server rosbridge_websocket_launch.xml
```




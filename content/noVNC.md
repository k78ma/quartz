---
title: noVNC
tags:
  - polymath
date: 2024-01-09
aliases: 
draft: "true"
---
Link: https://github.com/theasp/docker-novnc/tree/master
Tutorials:
- https://divyanshu-raj.medium.com/ros-2-with-docker-part-1-9060f3095811
- https://wiki.ros.org/docker/Tutorials/GUI#Using_noVNC

Nice way to get ROS/ROS2 visualization working on Docker, which lets me use it on Mac.
- Create network: `docker network create ros`
- Can then run noVNC with:
```bash
docker run -d --rm --net=ros \  
	--env="DISPLAY_WIDTH=3000" \  
	--env="DISPLAY_HEIGHT=1800" \  
	--name=novnc -p=8080:8080 \  
	theasp/novnc:latest
```

- Make sure the sim container is on the same network and has the display env set to to noVNC:
```bash
docker run --name dolagon --env="DISPLAY=novnc:0.0" --network=ros -e ROS_DOMAIN_ID=9 -e RMW_IMPLEMENTATION=rmw_cyclonedds_cpp -e CYCLONEDDS_URI=/opt/polymathrobotics/dolagon_config/share/dolagon_config/config/dds_config.xml registry.gitlab.com/polymathrobotics/dolagon/dolagon_sim:humble ros2 launch dolagon_sim sim.launch.py
```

Alternatively, the Dockerfile can include the line `ENV DISPLAY=novnc:0.0` in it.

Gazebo sim running on noVNC on `localhost:8080`:

![[noVNC.png]]
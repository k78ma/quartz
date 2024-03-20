---
title: Baymax
tags:
  - polymath
date: 2024-01-16
aliases: 
draft: "true"
---
Output: 
- ROS logs (ROS diagnostics) - quick to understand/human readable
	- Be able to set tolerances in config file
- Heartbeat message in safety system

Sensor checker should be fairly basic – node checker will be more complex
- Specify desired inputs and outputs in config file

ROSlibpy – able to read every message without ROS dependencies
- This functionality appears to be provided by [[ROS Bridge]]

Dynamic switching between nodes to reduce overhead
- Only subscribe to topics every 0.1 seconds or something
	- Alerting failure won't be instantaneous but we know there's a 2 second reaction time
- Alternatively, always be subscribed but only do the calculations every $x$ seconds; this is because subscribing to things has a time/resource cost in itself

General things to check: Time stamp, latency, header, blank/repeated messages

[Quality of Service settings — ROS 2 Documentation: Rolling documentation](https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Quality-of-Service-Settings.html)

ROS 2 executor, callback group, quality of service settings

ROS 2 covariance injector has a cool idea for this:
- Base sensor class – specific sensor classes inherit from this base class and all return the same thing
- If there's some sensor that publishes something that doesn't exist or can't be identified, we just default it to a generic sensor checker that just checks basic header/timestamp, etc

### Notes
Docker run command for Baymax node:
```shell
docker run -it --name baymax --rm -v $(pwd):/baymax_ws osrf/ros:humble-desktop bash
```

Building/running node:
```bash
cd baymax_ws
colcon build --packages-select baymax
source install/setup.bash
ros2 launch baymax baymax_launch.py
```

Clean build:
```
colcon build --packages-select baymax --cmake-clean-cache
```

Rosbag node:
```bash
docker run -it --rm -v $(pwd)/zvision_ugv_data:/zvision_ugv_data --name rosbags osrf/ros:humble-desktop bash

ros2 bag play zvision_ugv_data/zvision_ugv_data_1/zvision_ugv_data_1.db3 --loop --clock
```

View rostopics just in the same as rosbag container:
```bash
docker exec -it rosbags /bin/bash
source /opt/ros/humble/setup.bash
ros2 topic list
```

Lifecycle node commands:
```
ros2 lifecycle set /baymax_node configure
ros2 lifecycle set /baymax_node activate
ros2 lifecycle set /baymax_node deactivate
ros2 lifecycle set /baymax_node cleanup
```

#### Sensor Functionality
- [x] Latency 6 million seconds fix
	- [ ] Negative latency?
- [x] YAML Format
- [x] Tolerance setting
- [x] Blank messages
- [ ] Repeated messages
- [x] Publication rate
- [x] Latency tolerances
- [x] Distributed diagnostics
- [x] Heartbeat status aggregator
- [x] Failure logging
- [x] Check existence of all expected topics
- [x] Default to `BaseSensor` for unknown/unspecified sensor type
- [ ] Unit tests?

#### Node Functionality
- Expand config so that topics are associated with nodes – if all topics are not alive, then node is not alive – spit out warning in case node name is changed
- Check number of expected publishers and node names for each topic – for joint states, there are 3 nodes publishing joint states at any given times
- Report publisher
- `get_publishers_info_by_topic`

- [x] Turn Baymax into a lifecycle node
- [ ] Should I do sensor part and node part separately as component nodes?
- [ ] Diagnostics still publishes after deactivating lifecycle?


For the minimal release/first review, I want this to be in a modular enough state that new types of sensors/nodes can be added easily

Everything we write should be a lifecycle node
If Baymax is monitoring something for a while and it's been unhealthy for a while, have Baymax use `systemd` to restart


- Nav2 type lifecycles – we can use Nav2 lifecycle manager
- Polymath lifecycle manager – does things that we want
- Plain lifecycle nodes – same boat as non-lifecycle node


- Put main function in separate file

## Speed-up
- Asynchronous
- Was doing data receive and data processing serially in the same thread
- Having both the Orin and my laptop on Ethernet brought rates up to 20 Hz WITHOUT point cloud
- Point cloud projection from depth0 brought speed down significantly (back to <1 Hz)

## Dolagon Sim Testing

Run sim with:
```
docker run --name dolagon --env="DISPLAY=novnc:0.0" --network=ros -e ROS_DOMAIN_ID=9 -e RMW_IMPLEMENTATION=rmw_cyclonedds_cpp registry.gitlab.com/polymathrobotics/dolagon/dolagon_sim:humble ros2 launch dolagon_sim sim.launch.py
```

Run baymax with:
```
docker run -it --name baymax --network=ros -v $(pwd):/baymax_ws -e ROS_DOMAIN_ID=9 -e RMW_IMPLEMENTATION=rmw_cyclonedds_cpp registry.gitlab.com/polymathrobotics/dolagon/dolagon_sim:humble bash
```

List of dolagon sim topics:
```
Lifecycle transition events:
	/behavior_server/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/controller_server/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/bt_navigator/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/cortex/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/global_costmap/global_costmap/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/local_costmap/local_costmap/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/map_saver/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/map_server/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/planner_server/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/smoother_server/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/velocity_smoother/transition_event [lifecycle_msgs/msg/TransitionEvent]
	/waypoint_follower/transition_event [lifecycle_msgs/msg/TransitionEvent]`

Camera info:
	/front_camera/camera_info [sensor_msgs/msg/CameraInfo]
	/front_camera/depth/camera_info [sensor_msgs/msg/CameraInfo]
	/rear_camera/camera_info [sensor_msgs/msg/CameraInfo]
	/rear_camera/depth/camera_info [sensor_msgs/msg/CameraInfo]
	/top_camera/camera_info [sensor_msgs/msg/CameraInfo]

Image:
	/front_camera/depth/image_raw [sensor_msgs/msg/Image]
	/front_camera/image_raw [sensor_msgs/msg/Image]
	/rear_camera/depth/image_raw [sensor_msgs/msg/Image]
	/rear_camera/image_raw [sensor_msgs/msg/Image]
	/top_camera/image_raw [sensor_msgs/msg/Image]

Occupancy grid + update:
	/global_costmap/costmap [nav_msgs/msg/OccupancyGrid]
	/global_costmap/costmap_updates [map_msgs/msg/OccupancyGridUpdate]
	/local_costmap/costmap [nav_msgs/msg/OccupancyGrid]
	/local_costmap/costmap_updates [map_msgs/msg/OccupancyGridUpdate]
	/map [nav_msgs/msg/OccupancyGrid]
	/map_updates [map_msgs/msg/OccupancyGridUpdate]

Point cloud:
	/front_camera/points [sensor_msgs/msg/PointCloud2]
	/os0/points [sensor_msgs/msg/PointCloud2]
	/os0/points/crop_box [sensor_msgs/msg/PointCloud2]
	/os0/points/voxel_grid [sensor_msgs/msg/PointCloud2]
	/rear_camera/points [sensor_msgs/msg/PointCloud2]

Twist:
	/behavior_vel [geometry_msgs/msg/Twist]
	/formant/cmd_vel [geometry_msgs/msg/Twist]
	/geofence/cmd_vel [geometry_msgs/msg/Twist]
	/joy/cmd_vel [geometry_msgs/msg/Twist]
	/polymath/cmd_vel [geometry_msgs/msg/Twist]
	/navigation/cmd_vel [geometry_msgs/msg/Twist]
	/navigation/cmd_vel/smoothed [geometry_msgs/msg/Twist]
	/user/cmd_vel [geometry_msgs/msg/Twist]
	/vehicle/cmd_vel [geometry_msgs/msg/Twist]
	/cmd_vel [geometry_msgs/msg/TwistStamped]

Bool:
	/cortex/vehicle_enable_start [std_msgs/msg/Bool]
	/cortex/velocity_relative_enabled [std_msgs/msg/Bool]
	/formant/cmd_vel/pause [std_msgs/msg/Bool]
	/geofence/cmd_vel/pause [std_msgs/msg/Bool]
	/joy/cmd_vel/pause [std_msgs/msg/Bool]
	/navigation/cmd_vel/pause [std_msgs/msg/Bool]
	/polymath/cmd_vel/pause [std_msgs/msg/Bool]
	/user/cmd_vel/pause [std_msgs/msg/Bool]

Cortex Misc:
	/cortex/feedback [cortex_msgs/msg/CortexFeedback]
	/cortex/reference_targets [cortex_msgs/msg/ReferenceTarget]

NavSatFix:
	/gps/filtered [sensor_msgs/msg/NavSatFix]
	/gps/fix [sensor_msgs/msg/NavSatFix]
	/gps/fix/updated [sensor_msgs/msg/NavSatFix]

Odometry:
	/odom [nav_msgs/msg/Odometry]
	/odometry [nav_msgs/msg/Odometry]
	/odometry/filtered [nav_msgs/msg/Odometry] *
	/odometry/global [nav_msgs/msg/Odometry] *
	/odometry/gps [nav_msgs/msg/Odometry]

Polygon:
	/global_costmap/footprint [geometry_msgs/msg/Polygon]
	/global_costmap/published_footprint [geometry_msgs/msg/PolygonStamped]
	/local_costmap/footprint [geometry_msgs/msg/Polygon]
	/local_costmap/published_footprint [geometry_msgs/msg/PolygonStamped]

Costmap:
	/global_costmap/costmap_raw [nav2_msgs/msg/Costmap]
	/local_costmap/costmap_raw [nav2_msgs/msg/Costmap]

IMU:
	/os0/imu [sensor_msgs/msg/Imu]
	/os0/imu/updated [sensor_msgs/msg/Imu]

Pose:
	/cortex/goal_poses [geometry_msgs/msg/PoseArray]
	/goal_pose [geometry_msgs/msg/PoseStamped]
	/set_pose [geometry_msgs/msg/PoseWithCovarianceStamped]

Path:
	/lookahead_collision_arc [nav_msgs/msg/Path]
	/plan [nav_msgs/msg/Path]
	/plan_smoothed [nav_msgs/msg/Path]
	/received_global_plan [nav_msgs/msg/Path]
	/unsmoothed_plan [nav_msgs/msg/Path]

Joint and Link states:
	/joint_states [sensor_msgs/msg/JointState]
	/link_states [gazebo_msgs/msg/LinkStates]

TF:
	/tf [tf2_msgs/msg/TFMessage]
	/tf_static [tf2_msgs/msg/TFMessage]

Points and vectors:
	/gps_plugin/vel [geometry_msgs/msg/Vector3Stamped]
	/lookahead_point [geometry_msgs/msg/PointStamped]

Gazebo:
	/model_states [gazebo_msgs/msg/ModelStates]
	/robot_description [std_msgs/msg/String]

Logs:
	/behavior_tree_log [nav2_msgs/msg/BehaviorTreeLog]
	/performance_metrics [gazebo_msgs/msg/PerformanceMetrics]

System/other:
	/bond [bond/msg/Status]
	/diagnostics [diagnostic_msgs/msg/DiagnosticArray]
	/parameter_events [rcl_interfaces/msg/ParameterEvent]
	/rosout [rcl_interfaces/msg/Log]
	/clock [rosgraph_msgs/msg/Clock]
	/controller_selector [std_msgs/msg/String]
	/planner_selector [std_msgs/msg/String]
	/speed_limit [nav2_msgs/msg/SpeedLimit]
```

- CompressedImage vs. Image – any difference?
- 
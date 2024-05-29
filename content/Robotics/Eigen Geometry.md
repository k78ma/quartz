---
title: Eigen Geometry
tags: 
date: 2024-01-27
aliases:
---
We can use [[Quaternions|quaternions]], [[Euler Angles]], and [[Rotation Matrix|rotation matrices]] in Eigen to demonstrate how they are transformed. We will also provide a visualization program to help the reader understand the relationship between these transformations.

The Eigen/Geometry module provides a variety of rotation and translation representations, such as a 3D rotation matrix directly using `Matrix3d` or `Matrix3f`.
```cpp
using namespace Eigen;

	Matrix3d rotation_matrix = Matrix3d::Identity();
```

The rotation vector uses AngleAxis, the underlying layer is not directly Matrix, but the operation can be treated as a matrix (because the operator is overloaded).

```cpp	
AngleAxisd rotation_vector(M_PI / 4, Vector3d(0, 0, 1)); // Rotate 45 degrees along the Z axis
cout.precision(3);
cout << "rotation matrix = \n " << rotation_vector.matrix() << endl; // convert to matrix with matrix()
```

Rotation matrices can be assigned directly:
```cpp
	// can also be assigned directly
	rotation_matrix = rotation_vector.toRotationMatrix();
```

Coordinate transformation with `AngleAxis`:
```cpp
Vector3d v(1, 0, 0);
Vector3d v_rotated = rotation_vector * v;
cout << "(1,0,0) after rotation (by angle axis) = " << v_rotated.transpose() << endl;
```

Coordinate transformation using  a rotation matrix
```cpp
	// Or use a rotation matrix
	v_rotated = rotation_matrix * v;
	cout << "(1,0,0) after rotation (by matrix) = " << v_rotated.transpose() << endl;
```

You can convert the rotation matrix directly into Euler angles
```cpp
Vector3d euler_angles = rotation_matrix.eulerAngles(2, 1, 0); // ZYX order, ie roll pitch yaw order
cout << "yaw pitch roll = " << euler_angles.transpose() << endl;
```

Euclidean transformation matrix using `Eigen::Isometry`:
```cpp
Isometry3d T = Isometry3d::Identity(); // Although called 3d, it is essentially a 4*4 matrix
T.rotate(rotation_vector); // Rotate according to rotation_vector
T.pretranslate(Vector3d(1, 3, 4)); // Set the translation vector to (1,3,4)
cout << "Transform matrix = \n" << T.matrix() << endl;
```

Using the transformation matrix for coordinate transformation:
```cpp
Vector3d v_transformed = T * v; // Equivalent to R*v+t
cout << "v tranformed = " << v_transformed.transpose() << endl;
```

For affine and projective transformations, use `Eigen::Affine3d` and `Eigen::Projective3d`.

You can assign AngleAxis directly to quaternions, and vice versa `Quaterniond q = Quaterniond(rotation_vector);`
```cpp
Quaterniond q = Quaterniond(rotation_vector);
cout << "quaternion from rotation vector = " << q.coeffs().transpose() << endl; 
```

Note that the order of coefficients is `(x, y, z, w), w` is the real part, the first three are the imaginary part. We can also assign a rotation matrix to it
```cpp
q = Quaterniond(rotation_matrix);
cout << "quaternion from rotation matrix = " << q.coeffs().transpose() << endl;
// Rotate a vector with a quaternion and use overloaded multiplication
V_rotated = q * v; // Note that the math is qvq^{-1}
cout << "(1,0,0) after rotation = " << v_rotated.transpose() << endl;
// expressed by regular vector multiplication, it should be calculated as follows
cout << "should be equal to " << (q * Quaterniond(0, 1, 0, 0) * q.inverse()).coeffs().transpose() << endl;
```

- Rotation matrix $(3 \times 3)$:  `Eigen::Matrix3d`
- Rotation vector $(3\times 1)$: `Eigen::AngleAxisd`
- Euler angle $(3\times 1)$: `Eigen::Vector3d`
- Quaternion $(4\times 1)$: `Eigen::Quaterniond`
- Euclidean transformation matrix $(4 \times 4)$: `Eigen::Isometry3d.`
- Affine transform $( 4 \times 4 )$: `Eigen::Affine3d.`
- Perspective transformation $(4\times 4)$: `Eigen::Projective3d`

## Coordinate Transform Example
Robot 1 and Robot 2 are located in the world coordinate system.
- World coordinate: $W$
- Robot coordinate systems: $R_{1}, R_{2}$

The pose of Robot 1 is:
- $q_{1}=[0.35, 0.2, 0.3,0.1]^{T}$
- $t_{1}=[0.3,0.1,0.1]^{T}$

The pose of Robot 2 is:
- $q_{2}=[-0.5,0.4,-0.1,0.2]$
- $t_{2}=[-0.1,0.5,0.3]^{T}$

Here, $q$ and $t$ express $T_{R_{k}, W}$, where $k = 1,2$, which are the robot transform matrices. Now, assume that Robot 1 sees a point in its own coordinate system with coordinates of $p_{R_{1}}=[0.5,0,0.2]^{T}$. We want to find the coordinates of the vector in the robot 2’s coordinate system.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <Eigen/Core>
#include <Eigen/Geometry>

using namespace std;
using namespace Eigen;

int main(int argc, char∗∗ argv) {
	Quaterniond q1(0.35, 0.2, 0.3, 0.1), q2(−0.5, 0.4, −0.1, 0.2);
	q1.normalize();
	q2.normalize();
	Vector3d t1(0.3, 0.1, 0.1), t2(−0.1, 0.5, 0.3);
	Vector3d p1(0.5, 0, 0.2);
	
	Isometry3d T1w(q1), T2w(q2);
	T1w.pretranslate (t1);
	T2w.pretranslate (t2);

	Vector3d p2 = T2w ∗ T1w.inverse() ∗ p1;
	cout << endl << p2.transpose() << endl;
	return 0;
}
```

The above calculates:
$$
p_{R_{2}}=T_{R_{2},W} \; T_{W, R_{1}} \; p_{R_{1}}
$$
which produces the answer
$$
[−0.0309731, 0.73499, 0.296108]^{T}
$$
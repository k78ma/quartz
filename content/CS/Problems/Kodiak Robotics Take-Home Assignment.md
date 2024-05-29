---
title: Kodiak Robotics Take-Home Assignment
tags:
  - cs
date: 2023-10-13
draft: "true"
---
We are trying to build a perception evaluation system. We want to evaluate the performance of our perception system using Precision-Recall metrics. Our perception system produces "Predictions" which summarize the objects that it believes exist in the scene. A prediction is defined by a 3D bounding box, defined by its center (x,y,z), and dimension (w,l,h), velocity(vx, vy), a timestamp (t) telling us at what timestamp it was last observed, and a confidence score. The ground truth labels on the other hand are defined by a collection of 3D bounding boxes, and unique ids, and a single timestamp (t) for all the labels in the scene. What you need to do:

- Write code to extrapolate the predictions to the ground truth label timestamp (so we can correctly perform the next step: evaluation)
- Write code to compute the Precision-Recall metrics in Birds Eye View / top-down orthographic view (You can assume the ground is flat)
- In order to decide positive / negative matches, you can use IoU (Intersection over Union) or any other criteria of your choice that you feel fit. Describe in a few lines why the criteria you implemented workds, its advantages and disadvantages
- Write good and exhaustive test cases to test your functions

Coordinate Frame:

- x right, y forward, z up.

Bounding Box Assumptions:

- They have no z velocity.
- They have constant velocity.
- They are all axis aligned (i.e., there is no notion of heading / orientation / angle).

Some technical documentation:

- TP: True Positive - A correct match between a prediction and a label
- FP: False Positive - A prediction that is not matched to any label
- FN: False Negative - A label that has no predictions for it
- Precision: TP / (TP + FP)
- Recall: TP / (TP + FN)

```cpp
#include <cstdint>
#include <iostream>
#include <vector>
#include <tuple>
#include <cassert>

using namespace std;

struct Center{
  double x;
  double y;
  double z;
};

struct Dimensions{
  double w;
  double l;
  double h;
};

struct Velocity{
  double vx;
  double vy;
};

struct BoundingBox{
  Center center;
  Dimensions dimensions;
};

struct Label{
  BoundingBox bounding_box;
  uint64_t timestamp;
};

struct Labels{
  vector<Label> labels;
  uint64_t timestamp;
};

struct Prediction{
  BoundingBox bounding_box;
  Velocity velocity;
  uint64_t timestamp;
  double confidence;
};

class Predictions {
  public:
    Predictions(const vector<Prediction>& predictions) : predictions_{predictions} {}
    
    vector<Prediction> predictions_;

    void ExtrapolatePredictions(uint64_t timestamp){
      // Write code here to extrapolate the predictions to the given timestamp.
    }

};

std::tuple<double, double> ComputePrecisionRecall(const Labels& labels, const Predictions& predictions, double threshold = 0.5){
  // Return the computed precision-recall values here.
  // Feel free to make as many helper functions as you need.
  return std::make_tuple(1.0, 1.0);
}

int main() {
  Center center {0, 0, 0};
  Dimensions dim {2, 4, 1.5};
  Velocity vel {0, 0};
  uint64_t timestamp {0};
  double confidence {0.0};

  // Create some e.g. labels.
  BoundingBox bounding_box {center, dim};
  Labels labels {{{bounding_box, 0}}, timestamp};

  // Create some e.g. predictions
  Prediction prediction {bounding_box, vel, timestamp, confidence};
  Predictions predictions {{prediction}};

  // Return PR metrics for the same.
  auto [precision, recall] = ComputePrecisionRecall(labels, predictions);

  assert(precision == 1.0);
  assert(recall == 1.0);
  return 0;
}
```
![Screenshot 2024-10-28 022755](https://github.com/user-attachments/assets/101890e8-d2c1-41c3-87f4-94b149711fdf)

# Solar-Vision

This repository contains the backend for the Solar Panel Detection dashboard. It uses YOLO-based Oriented Object Detection (YOLOv8-OBB) models to detect solar panels from spatial images. The inference pipeline includes optional preprocessing, model prediction, and masking techniques for better visualization.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup](#setup)
- [Usage](#usage)
  - [Running the Inference](#running-the-inference)
  - [Canny Edge Detection](#canny-edge-detection)
- [Repository Structure](#repository-structure)
- [Contact](#contact)

## Project Overview

This project serves as the backend for a dashboard that provides solar panel detection results from large spatial images using the YOLOv8-OBB model. It handles inference, edge detection, and masking outside bounding boxes. The results include predictions in multiple formats (image, JSON, and text), and the option to highlight edges in images.

## Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/Solar-Vision-NRSC-ISRO/Renewable-Solar-Energy-Estimation-using-Satellite-Images/tree/main.git
   cd Renewable-Solar-Energy-Estimation-using-Satellite-Images
   ```

2. **Set Up Virtual Environment:**
   Create and activate a virtual environment:
   ```
   python -m venv inference-venv
   inference-venv/Scripts/activate
   ```

3. **Install Requirements:**
   Install the necessary Python libraries:
   ```
   pip install -r requirement.txt
   ```

## Usage

### Running the Inference

1. **Inference Pipeline: Low res**
   To perform inference on an image and obtain results in the specified format (image, JSON, text):
   
   ```
   cd low-res-inference
   python main-high-res.py
   ```

   The main script will:
   - Load the pre-trained YOLOv8-OBB model.
   - Perform inference on the provided image.
   - Save predictions in `runs/obb/predict` (image, labels, JSON files).
   - Optionally toggle the display of class names and bounding boxes.

1. **Inference Pipeline High Res:**
   To perform inference on an image and obtain results in the specified format (image, JSON, text):
   
   ```
   cd high-res-inference
   python main-low-res.py
   ```

   The main script will:
   - Load the pre-trained YOLOv8-OBB model.
   - Perform inference on the provided image.
   - Save predictions in `runs/obb/predict` (image, labels, JSON files).
   - Optionally toggle the display of class names and bounding boxes.

   The result will be saved in `cannyImage/edgedimage.jpg`.

### Optional Flags

- You can toggle whether to show class names or bounding boxes in the saved image by adjusting the following flags in `main.py`:
   ```python
   show_class_name = False  # To show/hide class names
   show_bounding_boxes = False  # To show/hide bounding boxes
   ```

## Repository Structure
 
```
high-res-inference
├── main-high-res.py             # Main script for running the inference
├── requirement.txt     # Required libraries for the project
├── inference-venv/     # Virtual environment folder
├── runs/               # Inference results will be saved here
├── cannyImage/         # Directory for Canny edge-detected images
└── weights/            # Pre-trained YOLOv8 model weights (best.pt)
low-res-inference
├── main-low-res.py             # Main script for running the inference
├── requirement.txt     # Required libraries for the project
├── inference-venv/     # Virtual environment folder
├── runs/               # Inference results will be saved here
├── cannyImage/         # Directory for Canny edge-detected images
└── weights/            # Pre-trained YOLOv8 model weights (best.pt)
```

## Contact

For further details, reach out via [Virat Srivastava's GitHub](https://github.com/ViratSrivastava).

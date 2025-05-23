# Icon Generator Tool

This Python script generates various website icon sizes from a source image, including options to create versions with transparent backgrounds.

## Features

-   Generates multiple icon sizes from a single source image
-   Creates transparent versions of icons by removing light backgrounds
-   Maintains aspect ratio during resizing
-   Supports various output formats including PNG, ICO, and SVG
-   Generates Open Graph (OG) images for social media

## Requirements

-   Python 3.x
-   Pillow library (PIL fork)

Install required packages:

```bash
pip install Pillow
```

## Usage

### Basic Usage

```bash
python generate-icons.py path/to/your/logo.png -o output/directory
```

### Creating Transparent Background Versions

```bash
python generate-icons.py path/to/your/logo.png -o output/directory --transparent
```

This will create additional versions of each icon with transparent backgrounds by removing light-colored backgrounds.

### Adjusting Transparency Threshold

```bash
python generate-icons.py path/to/your/logo.png -o output/directory --transparent --threshold 220
```

The threshold (0-255) determines which pixels are considered "background." Higher values make more pixels transparent.

## Output Files

The script generates the following files:

-   favicon-16x16.png
-   favicon-32x32.png
-   favicon.ico (multi-size: 16x16, 32x32, 48x48)
-   apple-touch-icon.png (180x180)
-   android-chrome-192x192.png
-   android-chrome-512x512.png
-   mstile-150x150.png
-   og-image.jpg (1200x630 with gradient background)
-   safari-pinned-tab.svg (monochrome SVG silhouette)

With `--transparent` option, it also creates:

-   [original-filename]-transparent.[ext]
-   favicon-16x16-transparent.png
-   favicon-32x32-transparent.png
-   etc. for all icon sizes

## Tips

1. **Input Image Quality**: Use a high-resolution source image (ideally SVG or PNG with transparency)
2. **Background Removal**: The transparency feature works best with images that have light/white backgrounds
3. **Threshold Adjustment**: If transparent versions have too much/little background removed, adjust the threshold value
4. **SVG Output**: The SVG silhouette is a basic representation and might need manual refinement

# Aesthetify Room Planner

## Overview
Aesthetify Room Planner is an interactive, web-based interior design workspace that allows users to design, arrange, and visualize room layouts in real-time. Built with a React frontend and packaged using Vite, the platform provides tailored canvas utilities for dragging, dropping, resizing, and locking furniture items. It simplifies the home styling planning process by organizing furniture assets cleanly, providing interactive layout controls, and allowing users to export their finished configurations.

## Features
* **Interactive Canvas:** Drop furniture items into the canvas area and position them freely using intuitive drag-and-drop mechanics.
* **Room Transformation:** Expand or shrink furniture to mirror actual size ratios (with locked aspect ratios to prevent image distortion), rotate items by 90-degree increments, and flip them horizontally.
* **Security & Editing Controls:** Lock individual furniture pieces on the canvas to prevent accidental dragging, resizing, or deletion while styling other areas.
* **Custom Backdrops:** Upload your own room images (JPEG, PNG, WebP) to test layout planning on your real-world space, or use the beautiful preloaded default room template.
* **Ambient Lighting:** Toggle room lighting modes (Normal, Dim, Dark) to preview how the room styling looks during day, twilight, or evening.
* **Export Layout:** Export the completed canvas layout as a high-quality PNG image file directly to your system.

## Technologies Used
* **Frontend:** React.js (v18), React Draggable, React Resizable, Html2Canvas, Tailwind CSS, Vite

## Project Structure
```
Aesthetify-room-planner/
│
└── AR-aeshetify-room-planer-main/         # React.js Client Application
    ├── public/                            # Static assets and images
    │   └── furniture/                     # Furniture PNG images
    └── src/                               # Frontend components, routing, and views
        ├── components/                    # Global components (DraggableItem, FurniturePalette, RoomCanvas)
        ├── App.jsx                        # App entry point and logic
        ├── index.css                      # Tailwind global stylesheet
        └── main.jsx                       # React DOM mounting entry point
```

## Installation & Setup

### Prerequisites
Make sure you have the following installed on your machine:
* Node.js (v16.x or newer recommended)
* npm or yarn package manager

### Step 1: Install Dependencies
Navigate to the project directory:
```bash
cd AR-aeshetify-room-planer-main
```
Install the dependencies:
```bash
npm install
```

### Step 2: Start the React Development Server
Start the development server:
```bash
npm run dev
```
The browser should automatically open or point you to `http://localhost:5173`.

### Step 3: Create a Production Build
To create an optimized production build of the project:
```bash
npm run build
```

## Usage
* **Upload Backdrop:** Click the file uploader button above the canvas to upload your room picture, or use the pre-loaded default room background.
* **Add Furniture:** Tap or click on any asset in the palette bar (sofa, shelf, plants, window, etc.) to place it onto the workspace.
* **Position & Scale:** Drag the item to place it, use corner handles to resize, and click Flip or Rotate to align.
* **Lock Layouts:** Click the unlock icon to change it to lock. This protects the element from movement, resizing, or deletion.
* **Export Design:** Click the Save Layout button to download a PNG image of your plan.

## Screenshots / Demo
*(Add screenshots or walk-through GIFs of your application dashboards here)*

| Interactive Room Canvas | Ambient Lighting Preview |
| --- | --- |
| Room Canvas Placeholder | Lighting Toggle Placeholder |

## Future Improvements
* **3D & AR Visualization:** Incorporate `@react-three/fiber` and `@google/model-viewer` (already present in the dependencies) to toggle between a 2D floorplan and an immersive 3D/AR preview.
* **Design Saving & Cloud Sync:** Build full persistence to allow users to save multiple room layouts locally via `localStorage` or sync designs to an online database.
* **Collision Detection:** Implement bounding box collision logic to prevent items from overlap-clipping or escaping canvas boundaries.
* **Palette Color Customization:** Allow users to dynamically apply custom colors/textures to furniture items.

## Challenges & Learning
Developing this project helped me learn several modern development patterns:
* **Combining Draggable and Resizable Logic:** Integrating `react-draggable` and `react-resizable` presented challenges where resize actions trigger drag events. Solving this required managing state flags to separate movement from resizing.
* **Maintaining Aspect Ratios:** Ensuring furniture assets scale proportionally (instead of stretching skew-wise) was critical to preserving realism in the layouts.
* **Capturing Dynamic Canvas Contents:** Using `html2canvas` on components using CSS 2D transformations (rotation and scales) required careful configurations to guarantee that exported PNG files matched the user's canvas.

## Contributing
Contributions are always welcome!

1. Fork the Repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Author
**Dhanya K**

* GitHub: [@Dhanya562004](https://github.com/Dhanya562004)
* Email: kdhanya762@gmail.com

## License
Distributed under the ISC License. See `package.json` for details.

# 🛋️ Aesthetify Room Planner

Aesthetify Room Planner is an interactive, web-based interior design workspace that allows users to design, arrange, and visualize room layouts in real-time. Designed to be lightweight yet feature-rich, it provides an intuitive drag-and-drop playground for arranging furniture, scaling assets, adjusting room lighting, and exporting completed designs.

---

## 📖 Table of Contents
1. [Overview](#-overview)
2. [Features](#-features)
3. [Technologies Used](#-technologies-used)
4. [Project Structure](#-project-structure)
5. [Installation & Setup](#-installation--setup)
6. [Usage](#-usage)
7. [Future Improvements](#-future-improvements)
8. [Challenges & Learning](#-challenges--learning)
9. [Contributing](#-contributing)
10. [Author](#-author)

---

## 🔍 Overview

When planning a room layout or relocating to a new space, visualizing how furniture fits into the layout can be a tedious chore. **Aesthetify Room Planner** bridges this gap by offering a simple, visual, and highly responsive 2D staging area. 

Users can upload an image of their empty room, pick furniture pieces from a curated palette, and position them. With support for rotating, flipping, resizing, and locking individual items, users can construct their exact room aesthetic, experiment with lighting environments, and save their finalized layouts.

---

## ✨ Features

* **🎨 Interactive Canvas:** Drop items into the canvas area and position them freely with drag-and-drop mechanics.
* **📏 Accurate Proportions (Resize & Scale):** Expand or shrink furniture to mirror actual size ratios while maintaining aspect ratio to prevent image distortion.
* **🔄 Advanced Transform Controls:** 
  * **Rotate:** Rotate furniture 90° clockwise to align against any wall.
  * **Flip:** Horizontally mirror assets to adjust orientation.
* **🔒 Element Lock System:** Prevent accidental movement or edits of finalized furniture placements with a toggleable lock (`🔒` / `🔓`).
* **🖼️ Custom Backdrops:** Upload your own room images (JPEG, PNG, WebP) to test layout planning on your real-world space, or use the default room setting.
* **💡 Ambient Lighting Adjustments:** Toggle room brightness modes (**Normal**, **Dim**, and **Dark**) to preview how the room atmosphere changes between night and day.
* **📥 Layout Export:** Export the complete canvas layout as a high-quality PNG image file directly to your system.

---

## 🛠️ Technologies Used

* **React 18:** Component-based UI rendering and component state management.
* **Vite:** High-performance, ultra-fast frontend build tooling.
* **Tailwind CSS:** Modern utility-first CSS framework for clean and responsive UI layouts.
* **React Draggable:** Handles precise positioning and bounding box movement logic.
* **React Resizable:** Provides scalable handles on active layout components.
* **Html2Canvas:** Compiles and renders DOM nodes into custom image files for download.

---

## 📂 Project Structure

```
Aesthetify-room-planner/
├── public/                     # Static assets & public resources
│   └── furniture/              # High-quality furniture images (.png, .jpg, .jpeg)
├── src/                        # Main source directory
│   ├── components/             # Reusable React UI Components
│   │   ├── DraggableItem.jsx   # Handles dragging, resizing, locking, flipping, and rotating items
│   │   ├── FurniturePalette.jsx# Component menu containing selectable furniture assets
│   │   └── RoomCanvas.jsx      # Canvas containing the background and active furniture items
│   ├── App.jsx                 # Central logic, state container, and layout manager
│   ├── index.css               # Global stylesheets with Tailwind CSS imports
│   └── main.jsx                # React application entry point
├── .gitignore                  # Excluded folders/files for Git tracking
├── package.json                # Project dependencies and script scripts
├── tailwind.config.js          # Tailwind CSS design configurations
└── vite.config.js              # Vite compiler configuration
```

---

## 🚀 Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) (v16 or higher recommended) installed.

1. **Clone the remote repository:**
   ```bash
   git clone https://github.com/Dhanya562004/Aesthetify-room-planner.git
   cd Aesthetify-room-planner
   ```

2. **Install application dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open the local IP/port (usually `http://localhost:5173`) in your web browser.

4. **Build the production build:**
   ```bash
   npm run build
   ```

---

## 💡 Usage

1. **Upload Backdrop:** Click the file uploader button above the canvas to upload your room picture, or use the pre-loaded default room background.
2. **Add Furniture:** Tap or click on any asset in the palette bar (sofa, shelf, plants, window, etc.) to place it onto the workspace.
3. **Position and Transform:**
   * **Drag** the item around to position it.
   * **Resize** the item using the corner anchors (`nw`, `ne`, `se`, `sw`).
   * Apply **Flip** and **↻ (Rotate)** to align items.
4. **Lock Layouts:** Click the `🔓` unlock icon to change it to `🔒` locked. This locks the element, protecting it from movement, resizing, or deletion.
5. **Adjust Lighting:** Click the **Toggle Lighting** button to preview how the configuration shifts under day, twilight, or evening settings.
6. **Export Design:** Click the **Save Layout** button to download a PNG image of your plan.

---

## 🔮 Future Improvements

* **🕶️ 3D & AR Visualization:** Incorporate `@react-three/fiber` and `@google/model-viewer` (already present in the dependencies) to toggle between a 2D floorplan and an immersive 3D/AR preview.
* **💾 Design Saving & Cloud Sync:** Build full persistence to allow users to save multiple room layouts locally via `localStorage` or sync designs to an online database.
* **💥 Collision Detection:** Implement bounding box collision logic to prevent items from overlap-clipping or escaping canvas boundaries.
* **🎨 Palette Color Customization:** Allow users to dynamically apply custom colors/textures to furniture items.

---

## 🧠 Challenges & Learning

* **Combining Draggable and Resizable Logic:** Integrating `react-draggable` and `react-resizable` presented challenges where resize actions trigger drag events. Solving this required overlaying controls and managing state flags to separate movement from resizing.
* **Maintaining Aspect Ratios:** Ensuring furniture assets scale proportionally (instead of stretching skew-wise) was critical to preserving realism in the layouts.
* **Capturing Dynamic Canvas Contents:** Using `html2canvas` on components using CSS 2D transformations (rotation and scales) required careful configurations to guarantee that exported PNG files matched the user's canvas.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## ✍️ Author

* **Dhanya** - [@Dhanya562004](https://github.com/Dhanya562004)

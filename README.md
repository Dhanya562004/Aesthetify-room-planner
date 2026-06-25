# 🛋️ Aesthetify Room Planner

Aesthetify Room Planner is an interactive, web-based interior design tool that allows users to design, organize, and visualize their dream room layout in real-time. Built with **React**, **Vite**, and **Tailwind CSS**, it offers a lightweight and highly responsive workspace to prototype furniture arrangements easily.

Whether you're moving into a new apartment or redesigning your current space, Aesthetify lets you drag, drop, resize, and lock pieces of furniture onto a customizable room backdrop, giving you complete control over your interior visualization.

---

## ✨ Features

* **🛋️ Rich Furniture Palette:** Choose from a wide selection of furniture items including sofas, chairs, shelves, plants, mirrors, and windows.
* **🎯 Interactive Canvas:** Add items to the room canvas and position them anywhere using fluid drag-and-drop interactions.
* **📏 Real-Time Customization:** 
  * **Resize:** Scale furniture to match the proportions of your room (maintains aspect ratio).
  * **Rotate:** Spin items in 90-degree increments to find the perfect orientation.
  * **Flip:** Mirror furniture horizontally to fit specific corners.
* **🔒 Layout Lock/Unlock:** Lock individual furniture pieces in place to prevent accidental dragging, resizing, or deletion while you work on other parts of the room.
* **🖼️ Custom Room Backgrounds:** Upload your own room photo (JPEG/PNG) to plan on top of your actual space, or use the beautiful default room template.
* **💡 Ambient Lighting Adjustments:** Toggle room lighting modes (**Normal**, **Dim**, and **Dark**) to see how your design looks during different times of the day.
* **💾 Export Layout:** Save your finished room design as a high-quality PNG image directly to your device with a single click.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (for modern UI styling)
* **Draggable Elements:** `react-draggable`
* **Resizable Container:** `react-resizable`
* **Exporting Engine:** `html2canvas`

---

## 🚀 Getting Started

Follow these steps to run the application locally on your computer.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhanya562004/Aesthetify-room-planner.git
   cd Aesthetify-room-planner
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your web browser to view the application.

### Building for Production

To create an optimized production build of the project:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

---

## 📖 How to Use

1. **Select Room Backdrop:** Click the file input at the top of the canvas to upload a picture of your own empty room, or use the default room picture provided.
2. **Add Furniture:** Click any icon in the top furniture palette to place it onto the canvas.
3. **Arrange & Scale:** 
   * **Drag** the item around to position it.
   * **Drag the resize handles** at the corners of any furniture item to scale it up or down.
   * Use **Flip** and **↻ (Rotate)** to align items correctly against walls or other furniture.
4. **Lock Placed Items:** Once you are satisfied with an item's position, click the **🔓 (Unlock)** button to toggle it to **🔒 (Locked)**. This prevents any further movements or edits.
5. **Adjust Ambience:** Use the **Toggle Lighting** button at the top to simulate different times of the day (e.g. night styling in Dark mode).
6. **Save Your Design:** Click the **Save Layout** button to download a PNG image of your customized room canvas.

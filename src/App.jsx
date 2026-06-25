import React, { useState, useRef } from 'react';
import RoomCanvas from './components/RoomCanvas';
import FurniturePalette from './components/FurniturePalette';
import html2canvas from 'html2canvas';

function App() {
  const [items, setItems] = useState([]);
  const [lighting, setLighting] = useState('normal'); // normal, dim, dark
  const roomCanvasRef = useRef(null); // Create a ref for RoomCanvas

  const handleAddItem = (src) => {
    setItems((prev) => [...prev, { src, x: 50, y: 50 }]);
  };

  const handleDeleteItem = (indexToDelete) => {
    setItems((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  const handleSaveLayout = () => {
    if (roomCanvasRef.current) {
      html2canvas(roomCanvasRef.current).then((canvas) => {
        const dataUrl = canvas.toDataURL('image/png');

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'room-layout.png'; // The name of the saved image
        link.click(); // Programmatically click the link to trigger the download
        alert('Layout saved as an image!');
      });
    }
  };

  const handleLoadLayout = () => {
    const saved = localStorage.getItem('roomLayout');
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      alert('No saved layout found.');
    }
  };

  const toggleLighting = () => {
    const next =
      lighting === 'normal'
        ? 'dim'
        : lighting === 'dim'
        ? 'dark'
        : 'normal';
    setLighting(next);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Aesthetify AR Planner</h1>

      <div className="flex gap-2">
        <button
          onClick={handleSaveLayout}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Save Layout
        </button>
        <button
          onClick={toggleLighting}
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Toggle Lighting
        </button>
      </div>

      <FurniturePalette onAddItem={handleAddItem} />
      
      {/* Assign the ref to the RoomCanvas div to capture it */}
      <RoomCanvas
        ref={roomCanvasRef} // Attach the ref here
        items={items}
        onDeleteItem={handleDeleteItem}
        lighting={lighting}
      />
    </div>
  );
}

export default App;

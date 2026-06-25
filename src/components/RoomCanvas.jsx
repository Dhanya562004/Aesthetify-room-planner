import React, { useState, forwardRef } from 'react';
import DraggableItem from "./DraggableItem";


const RoomCanvas = forwardRef(({ items, onDeleteItem, lighting }, ref) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  const getFilter = () => {
    if (lighting === 'dim') return 'brightness(0.7)';
    if (lighting === 'dark') return 'brightness(0.4) sepia(0.2)';
    return 'none';
  };

  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleBackgroundChange} />

      <div
        ref={ref}
        className="relative w-full h-[600px] bg-cover bg-center border rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage || '/furniture/room.png'})`,
          filter: getFilter(),
        }}
      >
        {items.map((item, index) => (
          <DraggableItem
            key={index}
            src={item.src}
            initialX={item.x}
            initialY={item.y}
            onDelete={() => onDeleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
});

export default RoomCanvas;

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

function DraggableItem({ src, initialX = 0, initialY = 0, onDelete }) {
  const [size, setSize] = useState({ width: 120, height: 120 });
  const [flip, setFlip] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [locked, setLocked] = useState(false); // New state for lock

  const toggleFlip = () => {
    if (!locked) setFlip((prev) => !prev); // Only allow flip if not locked
  };
  const rotateItem = () => {
    if (!locked) setRotate((prev) => (prev + 90) % 360); // Only allow rotate if not locked
  };
  const toggleLock = () => setLocked((prev) => !prev); // Toggle lock state

  return (
    <Draggable defaultPosition={{ x: initialX, y: initialY }} bounds="parent">
      <div style={{ position: 'absolute' }}>
        <div className="absolute -top-8 right-0 flex gap-1 z-10">
          {/* Lock Button */}
          <button
            onClick={toggleLock}
            className={`bg-yellow-500 text-white px-1 text-xs rounded ${locked ? 'opacity-50' : ''}`}
            style={{ fontSize: '14px' }}
          >
            {locked ? '🔒' : '🔓'}
          </button>

          {/* Only show Flip, Rotate, and Delete buttons if not locked */}
          {!locked && (
            <>
              <button
                onClick={toggleFlip}
                className="bg-gray-400 text-white px-1 text-xs rounded"
              >
                Flip
              </button>
              <button
                onClick={rotateItem}
                className="bg-gray-600 text-white px-1 text-xs rounded"
              >
                ↻
              </button>
              <button
                onClick={onDelete}
                className="bg-red-500 text-white px-1 text-xs rounded"
              >
                🗑️
              </button>
            </>
          )}
        </div>

        <ResizableBox
          width={size.width}
          height={size.height}
          minConstraints={[50, 50]}
          maxConstraints={[300, 300]}
          lockAspectRatio={true}
          resizeHandles={['nw', 'ne', 'se', 'sw']}
          onResizeStop={(e, { size }) => setSize(size)}
        >
          <img
            src={src}
            alt="furniture"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none',
              transform: `scaleX(${flip ? -1 : 1}) rotate(${rotate}deg)`,
            }}
          />
        </ResizableBox>
      </div>
    </Draggable>
  );
}

export default DraggableItem;

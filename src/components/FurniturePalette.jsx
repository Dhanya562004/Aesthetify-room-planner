import React from 'react'

const furnitureList = [
  { name: 'shelf', src: '/furniture/book.png' },
  { name: 'chair', src: '/furniture/chair.png' },
  { name: 'curtains', src: '/furniture/curtains.png' },
  { name: 'dress', src: '/furniture/dress.png' },
  { name: 'mirror', src: '/furniture/mirror.png' },
  { name: 'plant', src: '/furniture/plant.png' },
  { name: 'shoe', src: '/furniture/shoe.png' },
  { name: 'sofa', src: '/furniture/sofa.png' },
  { name: 'swing', src: '/furniture/swing.png' },
  { name: 'tabel', src: '/furniture/tabel.png' },
  { name: 'tv', src: '/furniture/tv.png' },
  { name: 'rose', src: '/furniture/vase.png' },
  { name: 'window', src: '/furniture/window.jpeg' }
  
]

function FurniturePalette({ onAddItem }) {
  return (
    <div className="flex space-x-4 mb-4">
      {furnitureList.map((item) => (
        <button
          key={item.name}
          onClick={() => onAddItem(item.src)}
          className="flex flex-col items-center p-2 border rounded hover:bg-gray-100"
        >
          <img src={item.src} alt={item.name} className="w-12 h-12 object-contain mb-1" />
          <span className="text-sm">{item.name}</span>
        </button>
      ))}
    </div>
  )
}

export default FurniturePalette
import React, { useRef, useState } from 'react';

/**
 * TiltCard provides a premium, interactive 3D tilt animation
 * that tracks the user's cursor over the card element.
 */
export default function TiltCard({ children, className = '', style = {}, maxTilt = 8 }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Cursor position relative to the card bounds
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const width = box.width;
    const height = box.height;

    // Calculate rotation angle (ranges from -maxTilt to +maxTilt)
    const rotateX = ((y / height) - 0.5) * -maxTilt; // vertical tilt
    const rotateY = ((x / width) - 0.5) * maxTilt;   // horizontal tilt

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.025)`);
  };

  const handleMouseLeave = () => {
    // Gracefully reset card back to center orientation
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: transformStyle,
        transition: transformStyle 
          ? 'transform 0.08s ease-out, box-shadow 0.15s ease' 
          : 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease',
      }}
    >
      {children}
    </div>
  );
}

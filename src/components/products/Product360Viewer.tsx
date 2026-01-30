import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Maximize2, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product360ViewerProps {
  images: string[];
  productName: string;
}

export const Product360Viewer = ({ images, productName }: Product360ViewerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    
    setRotation((prev) => prev + deltaX * 0.5);
    
    // Simulate 360 by cycling through images based on rotation
    const imageCount = images.length;
    const newIndex = Math.abs(Math.floor((rotation + deltaX * 0.5) / 60) % imageCount);
    setCurrentImageIndex(newIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    lastX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;
    
    setRotation((prev) => prev + deltaX * 0.5);
    
    const imageCount = images.length;
    const newIndex = Math.abs(Math.floor((rotation + deltaX * 0.5) / 60) % imageCount);
    setCurrentImageIndex(newIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setRotation(0);
    setCurrentImageIndex(0);
  };

  return (
    <div className="space-y-4">
      {/* Main 360 Viewer */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image */}
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${productName} - Vista ${currentImageIndex + 1}`}
          className="w-full h-full object-contain p-8"
          style={{ transform: `rotate3d(0, 1, 0, ${rotation * 0.5}deg)` }}
          draggable={false}
        />

        {/* 360 Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-obsidian/80 backdrop-blur-sm rounded-full text-secondary text-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <RotateCcw className="w-4 h-4 text-gold" />
          </motion.div>
          <span>360°</span>
        </div>

        {/* Instructions Overlay */}
        {!isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-obsidian/60 backdrop-blur-sm rounded-full text-secondary text-sm">
              <Hand className="w-4 h-4" />
              <span>Arraste para girar</span>
            </div>
          </motion.div>
        )}

        {/* Rotation Indicator */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-1 bg-charcoal rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              style={{ width: `${((Math.abs(rotation) % 360) / 360) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Resetar
        </Button>

        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImageIndex(index);
                setRotation(index * 60);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImageIndex === index ? 'bg-gold' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" className="gap-2">
          <Maximize2 className="w-4 h-4" />
          Ampliar
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setRotation(index * 60);
            }}
            className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentImageIndex === index
                ? 'border-gold'
                : 'border-transparent hover:border-muted-foreground/30'
            }`}
          >
            <img
              src={image}
              alt={`${productName} - Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// src/components/EditorialPhotoBlock.tsx
import React from 'react';

interface Props {
  imgUrl: string;
  alt: string;
  caption: string;
  aspectClass?: string;
}

export default function EditorialPhotoBlock({ 
  imgUrl, 
  alt, 
  caption, 
  aspectClass = "aspect-square sm:aspect-square" // 預設為高質感的正方形
}: Props) {
  return (
    <div className="relative group overflow-hidden border border-primary/30 rounded-sm bg-card/30">
      <img 
        src={imgUrl} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        className={`w-full ${aspectClass} object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-5 left-5 right-5 text-primary/90 text-sm md:text-base font-display tracking-[0.1em]">
        {caption}
      </div>
    </div>
  );
}
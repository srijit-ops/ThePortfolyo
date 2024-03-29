// import Image from 'next/image';
import React, { useState } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function BlurImage({src, alt, height, width, priority, layout, objectFit, className}) {

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      priority={priority}
      layout={layout}
      objectFit={objectFit || 'cover'}
      className={cn(
        className,
        'duration-700 ease-in-out',
          'scale-100'
      )}
     
    />
  );
}

export default BlurImage;

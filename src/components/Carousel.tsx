'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselImage {
  id: number;
  src: string;
}

const IMAGES_DATA: CarouselImage[] = [
  { id: 1, src: '/carousel/1.jpg' },
  { id: 2, src: '/carousel/2.jpg' },
  { id: 3, src: '/carousel/3.jpg' },
  { id: 4, src: '/carousel/4.jpg' },
  { id: 5, src: '/carousel/5.jpg' },
  { id: 6, src: '/carousel/6.jpg' },
  { id: 7, src: '/carousel/7.jpg' },
  { id: 8, src: '/carousel/8.jpg' },
  { id: 9, src: '/carousel/9.jpg' },
  { id: 10, src: '/carousel/10.jpg' },
  { id: 11, src: '/carousel/11.jpg' },
  { id: 12, src: '/carousel/12.jpg' },
  { id: 13, src: '/carousel/1.jpg' },
  { id: 14, src: '/carousel/2.jpg' },
  { id: 15, src: '/carousel/3.jpg' },
  { id: 16, src: '/carousel/4.jpg' },
  { id: 17, src: '/carousel/5.jpg' },
  { id: 18, src: '/carousel/6.jpg' },
  { id: 19, src: '/carousel/7.jpg' },
  { id: 20, src: '/carousel/8.jpg' },
  { id: 21, src: '/carousel/9.jpg' },
];

type VariantLevel = 'active' | 'level1' | 'level2' | 'level3' | 'level4';

const variants = {
  active: {
    x: 'calc(-50% + 0px)',
    width: '22rem',
    scale: 1.1,
    opacity: 1,
  },
  level1: (position: number) => ({
    x: `calc(-50% + ${position * 240}px)`,
    width: '3rem',
    scale: 0.9,
    opacity: 1,
  }),
  level2: (position: number) => ({
    x: `calc(-50% + ${position * 145}px)`,
    width: '2rem',
    scale: 0.75,
    opacity: 1,
  }),
  level3: (position: number) => ({
    x: `calc(-50% + ${position * 108}px)`,
    width: '1.5rem',
    scale: 0.5,
    opacity: 1,
  }),
  level4: (position: number) => ({
    x: `calc(-50% + ${position * 90}px)`,
    width: 0,
    scale: 0.25,
    opacity: 0,
  })
};

export default function Carousel() {
  const [images, setImages] = useState<CarouselImage[]>(IMAGES_DATA);

  const handleMove = (direction: number) => {
    setImages(prevImages => {
      const imgArrCopy = [...prevImages];

      if (direction > 0) {
        const firstItem = imgArrCopy.shift();
        if (!firstItem) return prevImages;
        imgArrCopy.push({
          ...firstItem,
          id: Date.now() // Using Date.now() instead of Math.random() for more reliable unique IDs
        });
      } else {
        const lastItem = imgArrCopy.pop();
        if (!lastItem) return prevImages;
        imgArrCopy.unshift({
          ...lastItem,
          id: Date.now()
        });
      }

      return imgArrCopy;
    });
  };

  return (
    <div className="relative h-96 w-[90%] mx-auto items-center flex justify-center">
      {images.map((image, i) => {
        const position = images.length % 2
          ? i - (images.length + 1) / 2
          : i - images.length / 2;

        const imgLevel: VariantLevel = 
          position === 0
            ? "active"
            : Math.abs(position) === 1
            ? "level1"
            : Math.abs(position) === 2
            ? "level2"
            : Math.abs(position) === 3
            ? "level3"
            : "level4";

        return (
          <motion.div
            key={image.id}
            initial={false}
            className="absolute left-1/2 flex-none aspect-[3/2] rounded-3xl overflow-hidden h-60 border border-neutral-200 dark:border-neutral-700 shadow-md"
            animate={imgLevel}
            custom={position}
            variants={variants}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <img
              src={image.src}
              className="h-full w-full object-cover"
              alt={`Carousel image ${i + 1}`}
            />
          </motion.div>
        );
      })}
      <button
        onClick={() => handleMove(-1)}
        className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:text-sky-500 absolute -left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => handleMove(1)}
        className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:text-sky-500 absolute -right-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
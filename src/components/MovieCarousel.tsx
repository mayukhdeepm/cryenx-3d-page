import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

interface MovieImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const MovieCarousel: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesData: MovieImage[] = [
    { 
      src: "https://www.themoviedb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      alt: "Dune: Part Two",
      title: "Dune: Part Two",
      description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      link: "https://example.com/dune-part-two"
    },
    { 
      src: "https://www.themoviedb.org/t/p/original/aWh8R6jeAbmiB4TsF6CjYFrUsI8.jpg",
      alt: "Inside Out 2",
      title: "Inside Out 2",
      description: "Follow Riley in her teenage years as new emotions join Joy, Sadness, Anger, Fear, and Disgust in the control room of her mind.",
      link: "https://example.com/inside-out-2"
    },
    { 
      src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
      alt: "Poor Things",
      title: "Poor Things",
      description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
      link: "https://example.com/poor-things"
    },
    { 
      src: "https://www.themoviedb.org/t/p/original/zxVEkxgreRkFkh1rBK85T2JyxFY.jpg",
      alt: "Deadpool & Wolverine",
      title: "Deadpool & Wolverine",
      description: "Wade Wilson's journey through the multiverse leads him to cross paths with Logan in an adventure that will change both their lives forever.",
      link: "https://example.com/deadpool-wolverine"
    },
    { 
      src: "https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      alt: "Civil War",
      title: "Civil War",
      description: "A journey across a dystopian future America, following a team of military-embedded journalists as they document a growing civil war.",
      link: "https://example.com/civil-war"
    },
    { 
      src: "https://www.themoviedb.org/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      alt: "Godzilla x Kong",
      title: "Godzilla x Kong: The New Empire",
      description: "Two ancient titans, Godzilla and Kong, team up to face a colossal threat hidden deep within our world that challenges their very existence.",
      link: "https://example.com/godzilla-kong"
    },
    { 
      src: "https://www.themoviedb.org/t/p/original/vKEBse3BPU7crfAjdPNaC6WePnO.jpg",
      alt: "Mickey 17",
      title: "Mickey 17",
      description: "A man on an expedition to colonize a new world discovers he's a disposable employee, a regenerating clone who faces the existential question of self.",
      link: "https://example.com/mickey-17"
    },
    { 
      src: "https://www.themoviedb.org/t/p/w220_and_h330_face/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
      alt: "Furiosa",
      title: "Furiosa: A Mad Max Saga",
      description: "The origin story of a young Furiosa, who is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde.",
      link: "https://example.com/furiosa"
    },
    { 
      src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg",
      alt: "Joker 2",
      title: "Joker: Folie à Deux",
      description: "The musical sequel follows Arthur Fleck and Harley Quinn in a twisted romance set in the dark streets of Gotham City.",
      link: "https://example.com/joker-2"
    }
  ];

  const allImages = [...imagesData, ...imagesData];

  const handleRotate = (direction: 'next' | 'prev') => {
    if (!itemsRef.current) return;

    const degree = 360 / allImages.length;
    const newRotation = direction === 'next' 
      ? currentRotation - degree 
      : currentRotation + degree;

    gsap.to(itemsRef.current, {
      rotation: newRotation,
      duration: 0.5,
      ease: "power2.out"
    });

    setCurrentRotation(newRotation);
    setActiveIndex(direction === 'next' 
      ? (activeIndex + 1) % imagesData.length 
      : (activeIndex - 1 + imagesData.length) % imagesData.length
    );
  };

  useEffect(() => {
    if (!itemsRef.current || !isLoaded) return;

    const items = itemsRef.current.children;
    const total = items.length;
    const degree = 360 / total;
    const radius = window.innerHeight * 1.2;

    Array.from(items).forEach((item, index) => {
      const angleInRadians = (index * degree * Math.PI) / 180;
      const x = Math.sin(angleInRadians) * radius;
      const y = -Math.cos(angleInRadians) * radius;
      
      gsap.set(item, {
        x: x,
        y: y,
        rotation: index * degree,
        opacity: 0,
        scale: 0
      });

      gsap.to(item, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });

    if (itemsRef.current) {
      let dragRotation = currentRotation;
      
      Draggable.create(itemsRef.current, {
        type: "rotation",
        inertia: true,
        onDrag: function() {
          dragRotation = this.rotation;
          Array.from(items).forEach((item, index) => {
            const rotation = ((dragRotation + (index * degree)) % 360 + 360) % 360;
            const scale = 0.5 + (0.5 * Math.cos((rotation * Math.PI) / 180));
            gsap.to(item, {
              scale: scale,
              duration: 0.1,
              ease: "none"
            });
          });
        },
        onDragEnd: function() {
          const snapRotation = Math.round(dragRotation / degree) * degree;
          gsap.to(itemsRef.current, {
            rotation: snapRotation,
            duration: 0.5,
            ease: "power2.out"
          });
          setCurrentRotation(snapRotation);
          setActiveIndex(Math.round((-snapRotation / degree) % imagesData.length + imagesData.length) % imagesData.length);
        }
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    const imagePromises = allImages.map(image => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setIsLoaded(true));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F4F7FF]">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F4F7FF] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F4F7FF] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#F4F7FF] via-[#F4F7FF]/80 to-transparent z-10 pointer-events-none" />
      
      <button 
        onClick={() => handleRotate('prev')}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button 
        onClick={() => handleRotate('next')}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div className="absolute inset-0 flex items-center justify-center top-[92rem] 
        sm:top-[50rem] 
        md:top-[60rem] 
        lg:top-[70rem] 
        xl:top-[70rem]  
        3xl:top-[110rem]">
        <div 
          ref={itemsRef}
          className="relative w-full h-full transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
              style={{ transformOrigin: '50% 50%' }}
            >
              <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-xl transform-gpu hover:scale-105 transition-transform duration-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Content */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-xl px-4">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {imagesData[activeIndex].title}
          </h2>
          <p className="text-gray-600 mb-4">
            {imagesData[activeIndex].description}
          </p>
          <a 
            href={imagesData[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Know More
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
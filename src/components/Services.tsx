import React, { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Section from "./Section";
import Generating from "../ui/Generating";
import Heading from "../ui/Heading";
import { ChevronLeft, ChevronRight, Box } from "lucide-react";

import { 
  check, 
  service,
  aiw,
  caim 
} from "../assets";

import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import { useGSAP } from "@gsap/react";
import {
  animateTitleScrollGsap,
  animateScrollMultipleGsap,
} from "../utils/animations";

// Model Viewer Type Definitions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX;
    }
  }
}

interface ModelViewerJSX extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'interaction-prompt'?: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ModelViewer: React.FC = () => {
  const [showModel, setShowModel] = useState(false);
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadModelViewer = async () => {
      if (!document.querySelector('script[src*="model-viewer"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
        script.type = 'module';
        
        const scriptLoaded = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        document.head.appendChild(script);
        
        try {
          await scriptLoaded;
        } catch (error) {
          console.error('Failed to load model-viewer script:', error);
        }
      }
    };

    loadModelViewer();
  }, []);

  return (
    <div className="relative h-full w-full bg-n-8">
      {!showModel ? (
        <div className="absolute inset-0 flex items-center justify-center bg-n-8/80 backdrop-blur-sm">
          <button
            onClick={() => setShowModel(true)}
            className="flex px-6 py-3 rounded-full bg-accent-1 text-white font-medium transition-all duration-300 hover:bg-[#15131D] hover:scale-105 active:scale-95 border border-white gap-4"
          >
            
            <Box className="w-6 h-6 text-white" />View 3D
          </button>
        </div>
      ) : (
        <div className="relative h-full">
          <button
            onClick={() => setShowModel(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-n-7/50 text-white hover:bg-[#15131D] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <model-viewer
            ref={modelViewerRef}
            src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
            alt="A 3D model of an astronaut"
            camera-controls={true}
            auto-rotate={true}
            interaction-prompt="auto"
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTranslateX(-currentIndex * 100);
  }, [currentIndex]);

  const handlePrev = (): void => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    
    const currentX = e.pageX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (!isDragging || !sliderRef.current) return;
    
    const currentX = e.touches[0].pageX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  return (
    <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
      <div 
        ref={sliderRef}
        className="relative w-full h-full"
      >
        <div 
          className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((image: string, index: number) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <img
                src={image}
                className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                alt={`Slide ${index + 1}`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-n-7/50 p-2 rounded-full hover:bg-n-7 transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-n-7/50 p-2 rounded-full hover:bg-n-7 transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  useGSAP(() => {
    animateTitleScrollGsap({ target: ".services-title" });
    animateScrollMultipleGsap({
      target: ".services-element",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power2.in",
      },
    });
  });

  const sliderImages: string[] = [
    "https://image.lexica.art/full_webp/f3e9bf65-3ad9-41c5-9d49-e55c364cdb96",
    "https://cdn.glitch.global/a5e64389-9427-4542-8521-6cedb1a4e51a/Smiling%20Man%20Engaging%20In%20Conversation%20At%20Wooden%20Desk.png?v=1734699271594",
    "https://image.lexica.art/full_webp/f3e9bf65-3ad9-41c5-9d49-e55c364cdb96",
    "https://cdn.glitch.global/a5e64389-9427-4542-8521-6cedb1a4e51a/Smiling%20Man%20Engaging%20In%20Conversation%20At%20Wooden%20Desk.png?v=1734699271594"
  ];

  return (
    <Section crosses id="solutions">
      <div className="container">
        <div className="services-title">
          <Heading title="The Solutions" text="" />
        </div>
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Service 1 with Image Slider */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Enterprise Deployment</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Scaling AI solutions for enterprise success doesn't have to be complex. Our AI Enterprise Deployment services ensure a seamless transition from concept to implementation, empowering your business to leverage AI at scale.
                  We handle the heavy lifting—from integration with existing systems to ensuring compliance—so your team can focus on the big picture.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item: string, i: number) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ImageSlider images={sliderImages} />
            </div>

            {/* Service 2 with Autoplay Video */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Enterprise Deployment</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Scaling AI solutions for enterprise success doesn't have to be complex. Our AI Enterprise Deployment services ensure a seamless transition from concept to implementation, empowering your business to leverage AI at scale.
                  We handle the heavy lifting—from integration with existing systems to ensuring compliance—so your team can focus on the big picture.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item: string, i: number) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://cdn.glitch.global/a5e64389-9427-4542-8521-6cedb1a4e51a/liveportrait12-19-2024%2011_53%20(1)%20(1).mp4?v=1734699277231" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <VideoBar />
              </div>
            </div>

 {/* Service 3 */}
 <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">3D Model Visualization</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Scaling AI solutions for enterprise success doesn’t have to be complex. Our AI Enterprise Deployment services ensure a seamless transition from concept to implementation, empowering your business to leverage AI at scale.
                We handle the heavy lifting—from integration with existing systems to ensuring compliance—so your team can focus on the big picture. The result? AI that works seamlessly across your organization, driving efficiency, innovation, and results.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <ModelViewer />
              </div>
            </div>

 {/* Service 4 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Enterprise Deployment</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Scaling AI solutions for enterprise success doesn’t have to be complex. Our AI Enterprise Deployment services ensure a seamless transition from concept to implementation, empowering your business to leverage AI at scale.
We handle the heavy lifting—from integration with existing systems to ensuring compliance—so your team can focus on the big picture. The result? AI that works seamlessly across your organization, driving efficiency, innovation, and results.

                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl  ${i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}
                    >
                      <div
                        className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="https://image.lexica.art/full_webp/f3e9bf65-3ad9-41c5-9d49-e55c364cdb96"
                  className="w-full h-full object-cover"
                  width={512}
                  height={400}
                  alt="Scary robot"
                />
                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
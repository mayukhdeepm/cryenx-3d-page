import React, { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';

import Footer from "../Footer";
import VideoCarousel from "../VideoCarousel";
import Section from "../Section";
import Heading from "../../ui/Heading";
import { MouseParallax } from "react-just-parallax";
import { benefits } from "../../constants/index";
import { useGSAP } from "@gsap/react";
import { smallSphere, stars } from "../../assets/index.js";
import { ChevronLeft, ChevronRight, Box } from "lucide-react";

import {
  animateScrollGsap,
  animateTitleScrollGsap,
  animateScrollMultipleGsap,
} from "../../utils/animations";
import Button from "../../ui/Button";
import { cryenx } from "../../assets";
import { hightlightsSlidesProject1 } from "../../constants";

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

function Project1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    animateTitleScrollGsap({
      target: ".collaboration-title",
      animationProps: {
        x: -100,
      },
    });

    animateScrollGsap({
      target: ".button-animated",
      animationProps: {
        scale: 2,
        opacity: 0,
        ease: "power2.in",
      },
    });

    animateScrollMultipleGsap({
      target: ".collaboration-apps",
      animationProps: {
        scale: 1.15,
        opacity: 0,
        ease: "power3.in",
      },
    });

    animateScrollGsap({
      target: ".collaboration-brainwave",
      animationProps: {
        scale: 1.3,
        opacity: 0,
        ease: "power3.in",
        delay: 0.5,
      },
    });

    animateScrollGsap({
      target: ".planets-element",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power1.inOut",
        duration: 0.75,
      },
    });
  });

  const project = benefits.find(benefit => benefit.projectName === "model1");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <header className="fixed top-0 l-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
          <a className="block w-[12rem] xl:mr-8" href="https://www.cryenx.com/">
            <img src={cryenx} width={190} height={40} alt="Cryenx Labs" />
          </a>
          <Button href="https://www.cryenx.com/contact">
            Contact us
          </Button>
        </div>
      </header>

      <Section
      className="pt-[4rem] md:pt-[5rem] lg:pt-[7rem] -mt-[4.75rem] md:-mt-[5.25rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 hero-title">
          <>
                Real results.{" "}
                <span className="inline-block relative">
                  Smart AI{" "}
                 
                </span>{" "}
                solutions. Built for ambitious brands.
              </>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 hero-subtitle">
          solutions. Built for ambitious brands.
          </p>
          <div className="hero-btn">
            <Button href="#about" white>
              Know More
            </Button>
          </div>
        </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <div className="absolute inset-0 overflow-hidden rounded-b-[0.9rem] rounded-t-[0.9rem]">
                <ModelViewer />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </Section>

      <Section crosses id="about">
        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <div className="collaboration-title">
              <Heading
                className="h2 mb-4 md:mb-8 md:!text-left"
                title={project.title}
              ></Heading>
            </div>
            <ul className="max-w-[25rem] mb-8 lg:mb-14">
              <p className="body-2 mt-3 text-n-4">{project.text}</p>
            </ul>
            {/* <div className="button-animated inline-block">
              <a href="#" className="button">Learn More</a>
            </div> */}
          </div>
          <div className="mt-16 lg:ml-auto xl:w-[38rem] lg:mt-10">
            {/* <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <RightCurve />
            </div> */}
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex planets-element">
          <MouseParallax strength={0.015}>
            <img
              src={smallSphere}
              className="relative z-1 mx-auto"
              width={255}
              height={255}
              alt="Sphere"
            />
          </MouseParallax>

          <div className="absolute top-1/2 left-1/2 w-[40rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <MouseParallax strength={0.06}>
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Start"
              />
            </MouseParallax>
          </div>
        </div>
          </div>
        </div>
      </Section>
     
      <div className="container mx-auto text-center mt-24 mb-12">
        <h2 className="text-4xl font-bold text-white">How Cryenx Assistant works</h2>
      </div>
      <VideoCarousel projectVideos={hightlightsSlidesProject1} />
      <div className="container mx-auto text-center mt-36">
        <div className="bg-n-7 text-white px-6 py-3 rounded-full inline-block">
          Try out our demo
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project1;
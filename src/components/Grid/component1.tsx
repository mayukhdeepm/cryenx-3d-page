import React, { useRef, Suspense } from 'react';

interface PistolSceneProps {}

// Lazy load the PistolScene component
const PistolScene = React.lazy(() => 
  import('../../components/PistolScene') as Promise<{ default: React.ComponentType<PistolSceneProps> }>
);

const Component1: React.FC = () => {
    const pistolDiv = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-[95%] min-h-screen flex justify-center gap-2 relative flex-wrap" ref={pistolDiv}>
          <div className="w-full gap-2 flex flex-wrap mt-8 xl:max-w-[1000px] xl:w-auto xl:grid xl:grid-cols-[repeat(2,450px)] xl:grid-rows-[repeat(4,284px)] xl:mb-48">
            <div className="w-full min-h-[350px] relative overflow-hidden bg-[#030303] border border-[#F2F3F410] rounded-lg flex justify-center items-center xl:min-h-0 xl:h-auto">
              <img
                src="./raygun/finalcolorside.png"
                className="w-25 object-contain"
              />
            </div>
            <div className="w-full min-h-[350px] relative overflow-hidden bg-[#030303] border border-[#F2F3F410] rounded-lg flex justify-center items-center xl:min-h-0 xl:h-auto">
              <img
                src=""
                className="w-25 object-contain"
              />
            </div>
            <div className="w-full min-h-[350px] relative overflow-hidden bg-[#030303] border border-[#F2F3F410] rounded-lg flex justify-center items-center xl:min-h-0 xl:h-auto row-span-2 col-span-2">
              <img
                src="./raygun/orthographic.png"
                className="w-100 object-contain"
              />
            </div>
          </div>
          <div className="sticky top-8 h-auto w-[90%] p-8 bg-[#030303] border border-[#F2F3F410] rounded-lg flex flex-col justify-end mb-32 xl:mt-8 xl:max-w-[600px] xl:h-[54rem]">
            <div className="xl:mb-0">
              <PistolScene />
            </div>
            <h1>STEAMPUNK PISTOL</h1>
            <span>
              GAME ASSET {"["} 2024 {"]"}
            </span>
            <div>
              <p>
                THIS NEXT-GEN IN-GAME ASSET OFFERS UNMATCHED PERFORMANCE AND
                AESTHETICS, TURNING YOUR VIRTUAL ADVENTURES INTO A
                VICTORIAN-INSPIRED MASTERPIECE.
              </p>
            </div>
          </div>
        </div>
    );
};

export default Component1;
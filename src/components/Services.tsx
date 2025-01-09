import { brainwaveServices, brainwaveServicesIcons } from "../constants";

import Section from "./Section";
import Generating from "../ui/Generating";
import Heading from "../ui/Heading";
import Tagline from "../ui/Tagline"; 
import { RightCurve1 } from "../design/Collaboration";  
import { roadmap } from "../constants";  


import { service1, service2, service3, check, service4,
  service5,
  service,
  aiw,
  caim } from "../assets";
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

function Services() {
  useGSAP(() => {
    // Animation for the title
    animateTitleScrollGsap({ target: ".services-title" });

    // Animation for benefits elements
    animateScrollMultipleGsap({
      target: ".services-element",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power2.in",
      },
    });
  });

  // Returned JSX
  return (
    <Section crosses id="solutions">
      <div className="container">
        <div className="services-title">
          <Heading
            title="The Solutions"
            text=""
          />
        </div>
        <div className="relative">
        
        <div className="relative">           
          {roadmap.map((item, index) => {             
            // Setting the status of the item             
            const isStatusDone = item.status === "done";             
            const isEven = index % 2 === 0;              
            
            // Only render RightCurve1 for the first 4 items
            const shouldShowCurve = index < 6;
            
            // Returned JSX             
            return (               
              <div                 
                key={item.id}                
                className={` flex flex-col md:flex-row bg-[#E8EFFF] p-6 rounded-3xl items-center justify-between mb-10 md:mb-20                    
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}                 
                `}               
              >                 
                <div                   
                  className={`w-full md:w-1/2 md:pr-5 md:pr-10                      
                    ${isEven ? "md:ml-10" : ""}                     
                    order-2 md:order-1                   
                  `}                 
                >                   
                  {/* <div className="mb-4">                     
                    <Tagline>{item.date}</Tagline>                   
                  </div>                    */}
                  <h4 className="h4 mb-4">{item.title}</h4>                   
                  {/* <h6 className="h6 mb-4">{item.text1}</h6>                    */}
                  <p className="body-2 text-n-4 mb-4">{item.text}</p>                   
                  {/* {shouldShowCurve && <RightCurve1 isFlipped={!isEven} />}                  */}
                </div>                  
                
                <div 
                  className={`                   
                    w-full md:w-1/2 flex justify-center                    
                    order-1 md:order-2                    
                    mb-6 md:mb-0                 
                  `}
                >                   
                  <img                     
                    src={item.imageUrl}                     
                    className="w-full max-w-[480px] h-auto"                     
                    width={300}                     
                    height={300}                     
                    alt={item.title}                   
                  />                 
                </div>                                
              </div>                            
            );           
          })}         
        </div>         

        </div>
      </div>
    </Section>
  );
}

export default Services;

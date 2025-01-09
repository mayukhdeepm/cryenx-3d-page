import { Routes, Route, Navigate } from "react-router-dom";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Benefits from "./components/Benefits";

import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";



import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";

import Component1 from "./components/Grid/component1";


import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {

  // const isMobile = useIsMobile()
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Hero />
                <Collaboration />
                <Services />
                <Roadmap />
                
                {/* <Carousel /> */}
                {/* <ul className="grid grid-cols-1 gap-5 content-space sm:grid-cols-2 lg:grid-cols-2 px-2 mx-auto max-w-7xl">
                  {projectsConfig.projects.map((project) => (
                    <motion.li
                      key={project.title}
                      variants={motions.variants.fadeIn({
                        direction: isMobile ? 'left' : 'down',
                        duration: 1,
                        delay: 0.5
                      })}
                      {...motions.showOnlyViewOnce}
                    >
                      <Card3D {...project} />
                    </motion.li>
                  ))}
                </ul> */}
                {/* <Component1 /> */}
                {/* <Testimonials /> */}
                
                <Benefits />
                <Pricing />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/projects/model1" element={<Project1 />} />
        <Route path="/projects/photos-animator" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        {/* Catch all route for 404s er*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ButtonGradient />
    </>
  );
}

export default App;
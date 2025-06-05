import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Keep this empty since we're removing the projects array

  // Add this array for your artworks
  const artworks = [
    { src: process.env.PUBLIC_URL + '/images/projects/Reaper-Death-Seal.png', alt: 'Logo 1' },
    { src: process.env.PUBLIC_URL + '/images/projects/ArachBytes-Logo2.png', alt: 'Logo 2' },
    { src: process.env.PUBLIC_URL + '/images/projects/cendog.png', alt: 'Logo 3' },
    { src: process.env.PUBLIC_URL + '/images/projects/DRP-Year-5-Logo.png', alt: 'Logo 4' },
    { src: process.env.PUBLIC_URL + '/images/projects/DJC-Tech-Life-Logo2 (1).png', alt: 'Logo 5' },
    { src: process.env.PUBLIC_URL + '/images/projects/AudioSlaveLogo.png', alt: 'Logo 6' },
    { src: process.env.PUBLIC_URL + '/images/projects/Brion Logo2.png', alt: 'Logo 7' },
    { src: process.env.PUBLIC_URL + '/images/projects/coregrounds.png', alt: 'Logo 8' },
    { src: process.env.PUBLIC_URL + '/images/projects/DJM-Logo.png', alt: 'Logo 9' },
    

  ];

  // Add this array for your character designs
  const characterDesigns = [
    { src: process.env.PUBLIC_URL + '/images/projects/Char.png', alt: 'Character 1' },
    { src: process.env.PUBLIC_URL + '/images/projects/Char2.png', alt: 'Character 2' },
    { src: process.env.PUBLIC_URL + '/images/projects/Char5.png', alt: 'Character 3' },
    { src: process.env.PUBLIC_URL + '/images/projects/Char4.png', alt: 'Character 4' },
    { src: process.env.PUBLIC_URL + '/images/projects/Char6.png', alt: 'Character 6' },
    { src: process.env.PUBLIC_URL + '/images/projects/Char3.png', alt: 'Character 5' },
    
         
    // Add more as needed
  ];

  // Add this array for your 3D designs
  const threeDDesigns = [
    { src: process.env.PUBLIC_URL + '/images/projects/Front View.png', alt: '3D Design 1' },
    { src: process.env.PUBLIC_URL + '/images/projects/Highlight View.png', alt: '3D Design 2' },
    { src: process.env.PUBLIC_URL + '/images/projects/Left Side View.png', alt: '3D Design 3' },
    { src: process.env.PUBLIC_URL + '/images/projects/Right Side View.png', alt: '3D Design 4' },
    { src: process.env.PUBLIC_URL + '/images/projects/Front View (1).png', alt: '3D Design 5' },
    { src: process.env.PUBLIC_URL + '/images/projects/Highlight View (1).png', alt: '3D Design 6' },
    { src: process.env.PUBLIC_URL + '/images/projects/Left Side View (1).png', alt: '3D Design 7' },
    { src: process.env.PUBLIC_URL + '/images/projects/Right Side View (1).png', alt: '3D Design 8' },
    { src: process.env.PUBLIC_URL + '/images/projects/store1.png', alt: '3D Design 9' },
    { src: process.env.PUBLIC_URL + '/images/projects/store2.png', alt: '3D Design 10' },
    { src: process.env.PUBLIC_URL + '/images/projects/store3.png', alt: '3D Design 11' },
    { src: process.env.PUBLIC_URL + '/images/projects/store4.png', alt: '3D Design 12' },
    { src: process.env.PUBLIC_URL + '/images/projects/Front View2.png', alt: '3D Design 14' },
    { src: process.env.PUBLIC_URL + '/images/projects/Highlight.png', alt: '3D Design 15' },
    { src: process.env.PUBLIC_URL + '/images/projects/Left Side View2.png', alt: '3D Design 16' },
    { src: process.env.PUBLIC_URL + '/images/projects/Right Side View2.png', alt: '3D Design 17' },
    { src: process.env.PUBLIC_URL + '/images/projects/balloon.jpg', alt: '3D Design 18' },
    { src: process.env.PUBLIC_URL + '/images/projects/vase.jpg', alt: '3D Design 19' },
    // Add more as needed
  ];

  return (
    <>
      <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <h2 className="text-white text-5xl font-light mb-12">
            <span className="font-bold">Portfolio</span>
          </h2>

          {/* Artworks Section */}
          <section id="artworks" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pb-24">
            <h2 className="text-[#F2F4CB] text-3xl font-bold mb-4 mt-12" style={{ textAlign: 'left', width: '100%' }}>
              Logo Design
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400" style={{ width: '100%', maxWidth: 900 }}>
              <div className="grid grid-cols-3 gap-1 place-items-center">
                {artworks.map((art, idx) => (
                  <motion.img
                    key={idx}
                    src={art.src}
                    alt={art.alt}
                    className="w-58 h-58 object-contain transition-all duration-300"
                    style={{ background: 'transparent' }}
                    whileHover={{ 
                      scale: 1.2,
                      zIndex: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Character Design Section */}
          <section id="character-design" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pb-24">
            <h2 className="text-[#F2F4CB] text-3xl font-bold mb-4 mt-12" style={{ textAlign: 'left', width: '100%' }}>
              Character Design
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400" style={{ width: '100%', maxWidth: 900 }}>
              <div className="grid grid-cols-3 gap-3 place-items-center">
                {characterDesigns.map((char, idx) => (
                  <motion.img
                    key={idx}
                    src={char.src}
                    alt={char.alt}
                    className="w-58 h-58 object-contain transition-all duration-300"
                    style={{ background: 'transparent' }}
                    whileHover={{ 
                      scale: 1.2,
                      zIndex: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 3D Design Section */}
          <section id="three-d-design" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pb-24">
            <h2 className="text-[#F2F4CB] text-3xl font-bold mb-4 mt-12" style={{ textAlign: 'left', width: '100%' }}>
              3D Design
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400" style={{ width: '100%', maxWidth: 900 }}>
              <div className="grid grid-cols-3 gap-3 place-items-center">
                {threeDDesigns.map((threeD, idx) => (
                  <motion.img
                    key={idx}
                    src={threeD.src}
                    alt={threeD.alt}
                    className="w-58 h-58 object-contain transition-all duration-300"
                    style={{ background: 'transparent' }}
                    whileHover={{ 
                      scale: 1.2,
                      zIndex: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;

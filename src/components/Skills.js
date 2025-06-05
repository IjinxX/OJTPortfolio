import React from 'react';
import { 
  FaHtml5, FaJs, FaReact, FaPhp, FaNodeJs, FaJava, 
  FaDatabase, FaAws, FaMobile, FaGitAlt, FaGithub, FaFigma,
  FaPalette, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiFirebase,
  SiFlutter, SiCanva, SiBlender, SiAdobephotoshop,
  SiAdobeillustrator
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
     {
      title: "Design & UX/UI",
      icon: <FaPalette className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Illustrator", icon: <SiAdobeillustrator />, level: "Basic", description: "Vector graphics" },
        { name: "Photoshop", icon: <SiAdobephotoshop />, level: "Basic", description: "Image editing" },
        { name: "Blender", icon: <SiBlender />, level: "Basic", description: "3D modeling and animation" },
        { name: "Figma", icon: <FaFigma />, level: "Basic", description: "UI/UX design and prototyping" },
        { name: "Canva", icon: <SiCanva />, level: "Basic", description: "Digital design and social media" },
        
      ]
    },
    {
      title: "Front-End Development",
      icon: <FaPalette className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "HTML/CSS", icon: <FaHtml5 />, level: "Basic", description: "Building and styling responsive web pages" },
        { name: "JavaScript", icon: <FaJs />, level: "Basic", description: "Creating dynamic web applications" },
       
      ]
    },
   
    {
      title: "Office Tools",
      icon: <FaMicrosoft className="text-4xl mb-2 text-[#B7990D]" />,
      skills: [
        { name: "Word", icon: <FaMicrosoft />, level: "Proficient", description: "Document creation" },
        { name: "Excel", icon: <FaMicrosoft />, level: "Basic", description: "Data analysis and organization" },
        { name: "Publisher", icon: <FaMicrosoft />, level: "Basic", description: "Print material design" },
        { name: "PowerPoint", icon: <FaMicrosoft />, level: "Basic", description: "Presentation creation" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#F2F4CB] text-5xl font-light mb-12"
        >
          My <span className="font-bold">Skills</span>
        </motion.h2>
        <h3 className="text-[#F2F4CB] text-2xl font-bold mb-6">Soft Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-[#110B11]/50 rounded-xl p-6 border border-[#B7990D]/20"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-[#F2F4CB] text-2xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="text-[#B7990D] text-xl mr-3 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="text-[#F2F4CB]">{skill.name}</div>
                      <div className="text-gray-400 text-sm">{skill.description}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[#B7990D] text-sm">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-[#110B11]/50 rounded-xl p-6 border border-[#B7990D]/20"
        >
          <h3 className="text-[#F2F4CB] text-2xl font-bold mb-6">Hard Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { skill: "Problem-Solving", description: "Strong ability to troubleshoot issues and find solutions" },
              { skill: "Communication", description: "Explaining technical concepts effectively" },
              { skill: "Collaboration", description: "Working effectively in team environments" },
              { skill: "Adaptability", description: "Quick to learn new tools and technologies" },  
              { skill: "Drawing & Sketching", description: "Mastery of line work, shading, perspective, anatomy, and composition." }, 
              { skill: "Color Theory", description: "Understanding color relationships, harmony, contrast, and the psychology of colors." },
              { skill: "Digital Drawing", description: " Using software like Adobe Photoshop, Illustrator, IbisPaint" }, 
              { skill: "Vector Art", description: "Creating scalable artwork using vector-based software like Adobe Illustrator." },
              { skill: "Graphic Design Fundamentals", description: "Knowledge of layout, typography, and visual hierarchy." }
            ].map((skill, index) => (
              <div key={index} className="bg-[#B7990D]/10 rounded-lg p-4">
                <h4 className="text-[#F2F4CB] font-semibold mb-2">{skill.skill}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

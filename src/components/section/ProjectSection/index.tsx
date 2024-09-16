import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';
import eclipse from 'assets/images/eclipse_home.jpg';
import FARMIN from 'assets/images/FARMIN.png';

const projectItem = [
  { src: eclipse, title: 'ECLIPSE' },
  { src: FARMIN, title: 'FARMIN' },
  { src: FARMIN, title: 'FARM' }
];

const ProjectSection = () => {
  const ref = useRef<any>();

  return (
    <div className="project-container" >
      <motion.h1 className="project-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >Projects
      </motion.h1>
      {projectItem.map((item) => 
        <motion.div key={item.title} className="project-container-wrapper" initial={{ opacity: 0, y: 50 }} 
          whileInView={{ 
            opacity: 1,y: 0,
            transition: { type: 'spring', duration: 0.5 } } }      
          viewport={{ once: false }}>
          <img className="project-container-wrapper-image" src={item.src} width={324} height={192} />
        </motion.div>
      )}

    </div>
  );
};

export default ProjectSection;
import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';

const AboutMeSection = () => {

  return (
    <div className="me-container">
      <motion.h1 className="me-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >About Me</motion.h1>
      <div className="me-container-wrapper" >
        <motion.div initial={{ opacity: 0, y: 50 }} 
          whileInView={{ 
            opacity: 1,y: 0,
            transition: { type: 'spring', duration: 0.5 } } }      
          viewport={{ once: false }}>
          저는 프론트엔드 개발자에요!
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} 
          whileInView={{ 
            opacity: 1,y: 0,
            transition: { type: 'spring', duration: 0.5 } } }      
          viewport={{ once: false }}>
          저는 프론트엔드 개발자에요!
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} 
          whileInView={{ 
            opacity: 1,y: 0,
            transition: { type: 'spring', duration: 0.5 } } }      
          viewport={{ once: false }}>
          저는 프론트엔드 개발자에요!
        </motion.div>
      </div> 
    </div>
  );
};

export default AboutMeSection;
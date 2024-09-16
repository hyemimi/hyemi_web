import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef<any>();

  return (
    <div className="me-container" >
      <motion.h1 className="me-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >Contact</motion.h1>
      <motion.div className="me-container-wrapper" initial={{ opacity: 0, y: 50 }} 
        whileInView={{ 
          opacity: 1,y: 0,
          transition: { type: 'spring', duration: 0.5 } } }      
        viewport={{ once: false }}>
        <p>저는 프론트엔드 개발자에요!</p>
        <button>See Demo</button>
      </motion.div> 
    </div>
  );
};

export default ContactSection;
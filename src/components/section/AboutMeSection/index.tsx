import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';
import profileImage from 'assets/images/hyemi.png';

const AboutMeSection = () => {

  return (
    <div className="me-container">
      <motion.h1 className="me-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >About Me</motion.h1>
      <div className="me-container-wrapper" >
        <motion.div className="profile-image-container" 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
            x: { duration: 1 }
          }}>
          <img width={350} height={350} src={profileImage} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
            x: { duration: 1 }
          }}>
          <p className="profile-developer">Frontend Developer</p>
          <h1 className="profile-name">이혜미</h1>
          <p>I am interested in <span className="profile-text">WEB</span></p>
        
        </motion.div>
      </div> 
    </div>
  );
};

export default AboutMeSection;
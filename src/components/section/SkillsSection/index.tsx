import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';
import Js from 'assets/images/js.png';
import Ts from 'assets/images/ts.png';
import sass from 'assets/images/sass.png';
import styled from 'assets/images/styled.png';
import Flutter from 'assets/images/flutter.png';
import ReactIcon from 'assets/images/react.png';
import Electron from 'assets/images/electron.png';
import Redux from 'assets/images/redux.png';

const skillItem = [
  { src: Js, title: 'JavaScript' },
  { src: ReactIcon, title: 'React' },
  { src: Flutter, title: 'Flutter' },
  { src: Electron, title: 'Electron' }
];

const SkillsSection = () => {
 
  return (
    <div className="skill-container" >
      <motion.h1 className="skill-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >Skills</motion.h1>
      <div className="skill-container-wrapper" 
      >
        {skillItem.map((item,idx) =>
          <motion.div key={idx} className="skill-container-wrapper-box"
            initial={{ opacity: 0, scale: 1 }} 
            whileInView={{ 
              opacity: 1,
              transition: { type: 'twin', duration: 1, delay: 0.1 }
            } }      
            viewport={{ once: false }}
          >
            <div className="skill-container-wrapper-box-title">{item.title}</div>
            <img src={item.src} width={100} height={100} alt="" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
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
  { src: Ts, title: 'TypeScript' },
  { src: ReactIcon, title: 'React' },
  { src: Flutter, title: 'Flutter' },
  { src: Electron, title: 'Electron' },
  { src: styled, title: 'Styled' },
  { src: sass, title: 'Sass' },
  { src: Redux, title: 'Redux' }
];

const SkillsSection = () => {
 
  return (
    <div className="skill-container" >
      <motion.h1 className="skill-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >Skills</motion.h1>
      <motion.div className="skill-container-wrapper" 
        initial={{ opacity: 0, y: 50, scale: 1 }} 
        whileInView={{ 
          opacity: 1,y: 0, scale: 1.1,
          transition: { type: 'just', duration: 0.5 } } }      
        viewport={{ once: false }}>
        <div className="skill-container-wrapper-box">
          {skillItem.map((item,idx) =>
            <div key={item.title} className="skill-container-wrapper-box-item">
              <img src={item.src} width={100} height={100} alt="" />
              <p className="skill-container-wrapper-box-item-title">{item.title}</p>
            </div>
            
          )}
          
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
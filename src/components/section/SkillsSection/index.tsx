import { motion } from 'framer-motion';
import './index.scss';
import Js from 'assets/images/js.png';
import sass from 'assets/images/sass.png';
import styled from 'assets/images/styled.png';
import Flutter from 'assets/images/flutter.png';
import ReactIcon from 'assets/images/react.png';
import Electron from 'assets/images/electron.png';

const skillItem = [
  { src: Js, title: 'JavaScript' , description: 
    'ES6+ 문법을 이해하고 있습니다. TypeScript를 사용할 수 있습니다.' },
  { src: ReactIcon, title: 'React',
    description: 'useState, useEffect,useContext 등의 hook을 react의 장점을 살려 용도에 맞게 사용할 수 있으며, 주로 custom hook을 생성해 로직을 분리하고 재사용합니다.' },
  { src: Flutter, title: 'Flutter', description: 'Flutter 기반 안드로이드 앱 프로젝트 개발 경험이 있습니다. 프로토타입을 빠르게 제작할 수 있습니다.' },
  { src: Electron, title: 'Electron', description: '데스크톱 앱 빌드 및 자동 업데이트 구현(Gitlab pipeline) 경험이 있습니다' },
  { src: null, title: 'AWS', 
    description: 'React 어플리케이션을 AWS EC2 인스턴스에 무중단 배포한 경험이 있습니다. ' },
  { src: null, title: 'Backend', 
    description: 'Node.js 서버 구축 경험이 있으며, 데이터베이스는 MySQL을 사용했습니다. ' }
];

const styleSkillItem = [
  {
    src: sass, title: 'SCSS', description: 
    'SCSS 문법에 익숙하며, 웹 디자인을 빠르고 정확하게 퍼블리싱 할 수 있습니다. 미디어 쿼리를 사용해 데스크톱/태블릿/모바일 기기를 지원하는 반응형 서비스를 제작한 경험이 있습니다.'
  },
  {
    src: styled, title: 'Styled', description:
    'styled-components를 사용해 스타일을 구현할 수 있습니다'
  }
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
            {item.src && <img src={item.src} width={100} height={100} alt="" />}
            <p> {item.description}</p>
          </motion.div>
        )}
        {styleSkillItem.map((item,idx) =>
          <motion.div key={idx} className="skill-container-wrapper-box"
            initial={{ opacity: 0, scale: 1 }} 
            whileInView={{ 
              opacity: 1,
              transition: { type: 'twin', duration: 1, delay: 0.1 }
            } }      
            viewport={{ once: false }}
          >
            <div className="skill-container-wrapper-box-pinkTitle">{item.title}</div>
            <img src={item.src} width={100} height={100} alt="" />
            <p> {item.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
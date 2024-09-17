import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';
import eclipse from 'assets/images/eclipse_home.jpg';
import farmin from 'assets/images/FARMIN.png';
import eclipse_title from 'assets/images/eclipse_title.png';
import farmin_title from 'assets/images/farmin_title.png';
import studywithme from 'assets/images/Studywithme.png';
import studywithme_title from 'assets/images/studywithme_title.png';
import focus from 'assets/images/FOCUS.png';
import focuz_title from 'assets/images/focuz_title.png';
import github from 'assets/images/github.png';
import youtube from 'assets/images/youtube.png';

const projectItem = [
  { src: eclipse, title: eclipse_title, description: '대학생의 진로 걱정 해결을 위한 웹 서비스', role: 'WEB FRONTEND',
    stack: ['react','tensorflow.js','css3'], link: 'https://github.com/hyemimi/2022-khuthon/tree/main'
  },
  { src: farmin, title: farmin_title, description: '용인시 도시 텃밭 중개 및 도시 농부 육성 플랫폼', role: 'ANDROID FRONTEND',
    stack: ['flutter'], link: 'https://github.com/hyemimi/014B-FE'
  },
  { src: studywithme, title: studywithme_title, description: '스터디 모임 관리 어플리케이션', role: 'FULLSTACK',
    stack: ['flutter','node.js','mySQL'], link: 'https://github.com/hyemimi/study_with_me'
  },
  { src: focus, title: focuz_title,description: '공부 집중 시간 측정 스터디 웹 서비스', role: 'WEB FRONTEND',
    stack: ['react','tensorflow.js','css3'], link: 'https://github.com/hyemimi/2022-DCom-Front-Focuz'
  }

];

const ProjectSection = () => {

  return (
    <div className="project-container" >
      <motion.h1 className="project-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >Projects
      </motion.h1>
      <div className="project-container-wrapper" >
        {projectItem.map((item) => 
          <motion.div className="project-container-wrapper-box" key={item.title} initial={{ opacity: 0, y: 50 }} 
            whileInView={{ 
              opacity: 1,y: 0,
              transition: { type: 'spring', duration: 0.5 } } }      
            viewport={{ once: false }}>
            <img className="project-container-wrapper-image" src={item.src} width={684} height={384} />
            <div className="project-container-wrapper-textSection" >
              <img src={item.title} width={300} height={50} />
              <p className="project-container-wrapper-textSection-text">
                {item.description}
              </p>
              <div className="project-container-wrapper-textSection-skill">
                {item.stack.map((skill) => 
                  <div key={item + skill} className="project-container-wrapper-textSection-skill-text">{skill}</div>
                )}
                <a href={item.link}><img src={github} width={30} height={30} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default ProjectSection;
import { motion } from 'framer-motion';
import './index.scss';
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
import clickclean from 'assets/images/image.png';
import clickclean_title from 'assets/images/clickclean_title.png';

const projectItem = [
  { src: clickclean, title: clickclean_title, description: '낚시성 기사 판독 및 클린기사 선별 뉴스 플랫폼', role: 'WEB FRONTEND',
    stack: ['react','typescript', 'react-query', 'styled-components'], link: 'https://github.com/hyemimi/Click-Clean?tab=readme-ov-file', 
    link2: 'https://www.youtube.com/watch?v=NlK-z6T368w',
    content: '제목과 본문의 일치도를 판단하는 머신러닝 모델을 구축하여 기사의의 낚시성 확률을 계산합니다. 카카오 소셜 로그인이 가능하며 이메일 구독 및 북마크 등의 편의 기능을 제공합니다.'
  },
  { src: eclipse, title: eclipse_title, description: '대학생의 진로 걱정 해결을 위한 웹 서비스', role: 'WEB FRONTEND',
    stack: ['react','css3'], link: 'https://github.com/hyemimi/2022-khuthon/tree/main', link2: 'https://www.youtube.com/watch?v=FJvAidjVZ7g',
    content: 'Eclipse는 코로나 팬데믹으로 인하여 학과 선배, 교수님들과 교류가 없었던 ‘코로나 학번’을 위한 웹 서비스입니다. 같은 학과 선배들의 시간표 데이터를 열람할 수 있을 뿐만 아니라, 교수님들과 손 쉬운 교류가 가능합니다.'
  },
  { src: farmin, title: farmin_title, description: '용인시 도시 텃밭 중개 및 도시 농부 육성 플랫폼', role: 'ANDROID FRONTEND',
    stack: ['flutter'], link: 'https://github.com/hyemimi/014B-FE', link2: 'https://youtube.com/shorts/jNmstssFGd8?feature=share',
    content: '도시의 짜투리 땅을 중개하여 도시 농부를 육성하는 플랫폼입니다. 간단한 절차를 통해 지주-시민을 연결하며, 사용자 편의성을 위해 농장 일지와 생성형 AI를 활용한 농업 솔루션을 제공합니다.'
  },
  { src: studywithme, title: studywithme_title, description: '스터디 모임 관리 어플리케이션', role: 'FULLSTACK',
    stack: ['flutter','node.js','mySQL'], link: 'https://github.com/hyemimi/study_with_me', link2: '',
    content: '하나의 앱에서 손 쉽게 스터디를 관리합니다. 일정 취합, 게시글, 스터디 캘린더 등의 기능들을 제공합니다.'
  },
  { src: focus, title: focuz_title,description: '공부 집중 시간 측정 스터디 웹 서비스', role: 'WEB FRONTEND',
    stack: ['react','tensorflow.js','css3'], link: 'https://github.com/hyemimi/2022-DCom-Front-Focuz', link2: '',
    content: '스터디 집중 시간 측정 웹 서비스입니다. 얼굴 인식을 기반으로 스터디 집중 시간을 측정하고, 집중도를 분석하며 스터디 그룹별 나의 순위를 제공합니다.'
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
            <img className="project-container-wrapper-image" src={item.src} width={720} height={384} />
            <div className="project-container-wrapper-textSection" >
              <img src={item.title} width={300} height={50} />
              <p className="project-container-wrapper-textSection-text">
                {item.description}
              </p>
              <p className="project-container-wrapper-textSection-content">
                {item.content}
              </p>
              <div className="project-container-wrapper-textSection-skill">
                {item.stack.map((skill) => 
                  <div key={item + skill} className="project-container-wrapper-textSection-skill-text">{skill}</div>
                )}
                <a href={item.link}><img src={github} width={30} height={30} /></a>
                {item.link2 && <a href={item.link2}><img src={youtube} width={40} height={30} /></a> }
              </div>
            </div>
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default ProjectSection;
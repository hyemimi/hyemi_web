import { motion } from 'framer-motion';
import './index.scss';
import profileImage from 'assets/images/hyemi.png';
const AboutMeSection = () => {

  return (
    <div className="me-container">
      <motion.h1 className="me-container-title" initial={{ scale: 1 }}
        whileInView={{ scale: 1.6 }} viewport={{ once: false }}
      >About me</motion.h1>
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
          <img width={320} height={330} src={profileImage} />
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
          <p>사용자 중심의 인터랙티브한 <span className="profile-text">웹</span>을 개발하고 있습니다.</p>
          <p><span className="profile-text">공유</span>와 <span className="profile-text">협력</span>의 가치를 중요시합니다. </p>
          <p>휩쓸리지 않고 좋아하는 일을 재밌고 즐겁게 하고자 합니다 :)</p>
          <a href="https://github.com/hyemimi">
            <p className="profile-icon">Github | hyemimi</p>
          </a>
          <a href="mailto:hyemi7375@gmail.com">
            <p className="profile-icon">Email | hyemi7375@gmail.com</p>
          </a>
        </motion.div>
      
      </div> 
      <motion.div 
        initial={{ opacity: 0, scale: 1 }} 
        whileInView={{ 
          opacity: 1,
          transition: { type: 'twin', duration: 1, delay: 0.1 }
        } }      
        viewport={{ once: false }}
        className="career"
      >
        <div className="internship">
          <h1># Internship</h1>
          <div className="company">
            주식회사 나인라이트
            <span className="date">2023.06.22 - 2023.08.31</span>
          </div>
          <div className="project">
            <div className="project-title">
              <span className="highlight">사내 문서 자동화 프로그램 개발</span>   문서에 필요한 정보를 입력하면 일관된 형식의 PDF 문서로 출력해주는 서비스
              <span>| React, TypeScript</span>
            </div>
            <ul className="project-description">
              <li>사용자의 입력이 문서에 어떻게 반영되는지 시각적인 피드백을 즉각적으로 보여주기 위해 노력하였습니다.</li>
              <li>사용자로부터 정확한 형식의 데이터가 입력될 수 있도록 고민하였습니다.</li>
            </ul>
          </div>
          <div className="project">
            <div className="project-title">
              <span className="highlight">데스크톱 어플리케이션 개발</span>   환자들의 뇌 CT 결과를 분석하고 결과를 확인할 수 있는 의료 서비스
              <span>| React, TypeScript, Electron</span>
            </div>
            <ul className="project-description">
              <li>Gitlab runner를 사용하여 Gitlab CI/CD 파이프라인을 구축하고, 앱 실행 시 자동으로 버전 업데이트가 되도록 구현하였습니다.</li>
              <li>사용자에 의해 화면이 줄어들면 사분할의 VIEW 영역이 같은 비율로 줄어들어 깨짐이 없도록 반응형 구현하였습니다.</li>
              <li>관리자 웹 페이지를 포함하여 전체적인 UI 구성을 담당하였습니다.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 1 }} 
        whileInView={{ 
          opacity: 1,
          transition: { type: 'twin', duration: 1, delay: 0.1 }
        } }      
        viewport={{ once: false }}
        className="career"
      >
        <div className="experiences">
          <h1># Experiences</h1>
          <div className="item">
          GDG on Campus (KHU) : 대학생을 위한 구글 개발자 커뮤니티   
            <span className="date">2024.09 - now</span>
          </div>
          <div className="item">
          Design thinking 1st prize🏆 : 독일 자를란트 대학 여름 프로그램   
            <span className="date">2024.06 ~ 2024.07</span>
          </div>
          <div className="item">
          SW 해커톤 최우수상🏆 : 대학 연합 해커톤
            <span className="date">2024.05</span>
          </div>
          <div className="item">
          교내 동아리 대항전 대상🏆   
            <span className="date">2022.06 - 2022.08 </span>
          </div>
         
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
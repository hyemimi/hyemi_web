import { useScroll, useTransform, motion } from 'framer-motion';
import './index.scss';
import { useRef } from 'react';
import profileImage from 'assets/images/hyemi.png';
import Gmail from 'assets/images/gmail-light.png';
import Instagram from 'assets/images/instagram.png';
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
          <p>인터랙티브한 <span className="profile-text">웹</span>을 개발해요</p>
          <p><span className="profile-text">공유</span>와 <span className="profile-text">협력</span>의 가치를 중요시해요</p>
          <p>함께 소통하며 즐겁게 개발해요!</p>
          <a href="mailto:hyemi7375@gmail.com">
            <p className="profile-icon">✉️ hyemi7375@gmail.com</p>
          </a>
        </motion.div>
      </div> 
    </div>
  );
};

export default AboutMeSection;
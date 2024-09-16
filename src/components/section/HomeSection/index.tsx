import profileImage from 'assets/images/hyemi.png';
import './index.scss';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import Instagram from 'assets/images/instagram.png';
import Mail from 'assets/images/gmail-light.png';
const HomeSection = () => {
  // const ref = useRef<any>();
  // const { scrollYProgress } = useScroll({
  //   target: ref
  // });
  
  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="profile" >
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
   
  );
};

export default HomeSection;

{/* <div className="profile-contact-container">
<img src={Instagram} alt="" width={30} height={30}/>
<p>hyememi</p>
</div>
<div className="profile-contact-container">
<img src={Mail} alt="" width={30} height={30}/>
<p>hyemi7375@gmail.com</p>
</div> */}
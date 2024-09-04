import { motion,useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import './index.scss';
import { useEffect } from 'react';

const Header = () => {
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (scrollY.get() > 60) {
      navAnimation.start({
        backgroundColor: 'rgba(255,255,255,0.15)'
      });
    } else {
      navAnimation.start({
        backgroundColor: 'rgba(0,0,0,0)'
      });
    }
  });

  return (
    <motion.nav className="header" animate={navAnimation} initial={{ backgroundColor: 'rgba(0,0,0,1)' }}>
      <ul className="header-item">
        <li className="header-item-list">
          <a href="#home">Home </a>
        </li>
        <li className="header-item-list">
          <a href="#aboutme">About Me </a>
        </li>
        <li className="header-item-list">
          <a href="#skills">Skills </a>
        </li>
        <li className="header-item-list">
          <a href="#projects">Projects </a>
        </li>
        <li className="header-item-list">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Header;
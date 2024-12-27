/* eslint-disable react/no-unknown-property */
import profileImage from 'assets/images/hyemi.png';
import './index.scss';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Text } from '@react-three/drei';  
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const Model = ( { url }: any) => {
  const modelRef = useRef<THREE.Group>();
  const { scene } = useGLTF(url) as any;

  scene.scale.set(0.6,0.6,0.6); // 모델 크기 설정

  // 부드러운 떠다니는 애니메이션 (react-three/fiber 의 useFrame 사용)
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   if (modelRef.current) {
  //     modelRef.current.position.y = Math.sin(t * 1.5) * 0.2; // 주기와 범위를 조정하여 둥실둥실 효과
  //   }
  // });

  const clock = new THREE.Clock(); 

  const motion = () => {
    const time = clock.getElapsedTime(); // 시간 계산

    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(time * 1.5) * 0.2; // 주기와 범위를 조정하여 둥실둥실 효과
    }
    
    window.requestAnimationFrame(motion);
  };
  motion();

  // eslint-disable-next-line react/no-unknown-property
  return <primitive ref={modelRef} object={ scene } />;
};

const HomeSection = () => {

  return (
    <div className="profile" >
      <Canvas>
        <Stars />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Model url="/3d_clipart_-_webdev/scene.gltf" />
          <Text position={[-1.5, -1.7, 0]} fontSize={0.5} color="white" >
            Wep developer
          </Text>
          <Text position={[1.5, -2.7, 0]} fontSize={0.6} color="mint" >
            HYEMI LEE
          </Text>
        </Suspense>
      </Canvas>
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
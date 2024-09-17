/* eslint-disable react/no-unknown-property */
import profileImage from 'assets/images/hyemi.png';
import './index.scss';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Text } from '@react-three/drei';  
import { useRef, Suspense } from 'react';

const Model = ( { url }: any) => {
  const { scene } = useGLTF(url) as any;

  scene.scale.set(0.6,0.6,0.6);

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={ scene } />;
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
            Web developer
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
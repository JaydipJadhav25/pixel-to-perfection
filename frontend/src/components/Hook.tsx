"use client";
import React , {useRef} from 'react'
import { TextureLoader } from 'three'
import {  useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';


export  function Hook() {
    const spherRef = useRef(null);
    useFrame(({ clock }) => {
        spherRef.current.rotation.y = clock.elapsedTime 
        // spherRef.current.rotation.x = clock.elapsedTime 
      })
    const colorMap = useLoader(TextureLoader, '/photos/logo.jpg');
  return (
   <mesh ref={spherRef}>
      <OrbitControls enableZoom={true} />          
    <sphereGeometry args={[2, 64, 64]} />
        {/* <boxGeometry args={[2, 2, 2]} /> */}
    <meshBasicMaterial map={colorMap}  />
   </mesh>
  )
}

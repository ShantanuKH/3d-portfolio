import { useRef, useEffect } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  // This is used to make the object in motion
  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  // This will make the bird or say the object move around in the frame 
  useFrame(({ clock, camera }) => {
    // Update the Y position and change the flight in sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // This will change the x direction so that the bird will move across the island
    // This tells that if the bird exits the camera then it will rotate 180 degrees
    if (birdRef.current.position.x > camera.position.x + 15) {
      birdRef.current.rotation.y = Math.PI; // We took Pi as the 3d is a sphere
    } else if (birdRef.current.position.x < camera.position.x - 15) {
      birdRef.current.rotation.y = 0;
    }
  
    // This will ensure that the bird will move forward or backward
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.004, 0.004, 0.004]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;

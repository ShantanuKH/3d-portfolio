import { useGLTF} from '@react-three/drei'
import {React, useRef} from 'react'
import skyScene from '../assets/3d/sky.glb'
import {useFrame} from '@react-three/fiber'

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame ((_ , delta)=>{
    if(isRotating){
      skyRef.current.rotation.y +=0.20*delta    }
  }) 




  return (
    <mesh cosnt ref = {skyRef}>
        {/* We use primitive here and not in island as we ar esuppose to scroll/rotate the island for the 3d look, And sky is simple an bject in the background (sky is static) and so we didn't  convert the glb file of sky to jsx like we did for island and used primitive here*/}
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky

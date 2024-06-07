import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
        {/* We use primitive here and not in island as we ar esuppose to scroll/rotate the island for the 3d look, And sky is simple an bject in the background (sky is static) and so we didn't  convert the glb file of sky to jsx like we did for island and used primitive here*/}
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky

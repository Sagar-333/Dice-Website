/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 Computer.gltf --transform 
Files: Computer.gltf [14.04MB] > Computer-transformed.glb [1.37MB] (90%)
Author: TooManyDemons (https://sketchfab.com/toomanydemons)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hologram-console-bfbbb481e98e4be38774b1d0204c192c
Title: Hologram Console
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Computer-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.MAT_Monitors01} scale={1.489} />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.MAT_Monitors02} scale={1.489} />
    </group>
  )
}

useGLTF.preload('/Computer-transformed.glb')
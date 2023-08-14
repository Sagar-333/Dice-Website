/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 Car3.gltf --transform 
Files: Car3.gltf [2.9MB] > Car3-transformed.glb [1.93MB] (34%)
Author: Tech developers (https://sketchfab.com/Deepu.Dra)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/car-2f00a5cb6263445cbee828fabd7e0632
Title: Car
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Car3-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.BRAKES} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.INTERIOR_LOD0} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.LIGHTS_lod0} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.PaletteMaterial006} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials['rim.002']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.undercarriage} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.wood} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.NODAMAGE_LOD0} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Car3-transformed.glb')
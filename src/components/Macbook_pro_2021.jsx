/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 macbook_pro_2021.gltf --transform 
Files: macbook_pro_2021.gltf [3.29MB] > macbook_pro_2021-transformed.glb [173.1KB] (95%)
Author: KangaroOz 3D (https://sketchfab.com/KangaroOz-3D)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/macbook-pro-2021-37763335f74b497e91906986b170b5d1
Title: MacBook Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/macbook_pro_2021-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/macbook_pro_2021-transformed.glb')
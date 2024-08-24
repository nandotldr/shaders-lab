import { useMemo } from 'react'
import * as THREE from 'three'

import customPhongMaterialVertex from '../glsl/CustomPhongMaterial/customPhongMaterial.vert'
import customPhongMaterialFragment from '../glsl/CustomPhongMaterial/customPhongMaterial.frag'

function CustomPhongMaterialTorusMesh() {
  const uniforms = useMemo(() => ({
    LightPosition: { value: new THREE.Vector4(0, 5, 0, 0) },
    Kd: { value: new THREE.Vector3(0.5, 0.5, 0.5) },
    Ld: { value: new THREE.Vector3(1.0, 1.0, 1.0) }
  }), [])

  return <mesh>
    <torusGeometry args={[2, 1, 16, 100]} />
    <shaderMaterial vertexShader={customPhongMaterialVertex} fragmentShader={customPhongMaterialFragment} uniforms={uniforms}/>
  </mesh>
}

export default CustomPhongMaterialTorusMesh
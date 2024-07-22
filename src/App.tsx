import { Image, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;
  void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = vec4(textureColor.rgb, textureColor.a);
  }
`;

const customShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: null }
  },
  vertexShader,
  fragmentShader
});


function Scene() {
  const imageRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (imageRef.current) {
      customShaderMaterial.uniforms.uTexture.value = imageRef.current.material.map;
      imageRef.current.material = customShaderMaterial;
    }
  }, []);

  return (
    <>
      <Image ref={imageRef} transparent url="/janten-city.jpg" scale={[5, 7]} />
    </>
  );
}

function App() {
  return (
    <div className="w-screen h-screen bg-red-50">
      <Canvas>
        <Scene />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

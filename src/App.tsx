import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CustomPhongMaterialTorusMesh from './components/CustomPhongMaterialTorusMesh';

function App() {
  return (
    <div className="w-screen h-screen bg-red-50">
      <Canvas>
        {/* <directionalLight position={[1, 1, 1]}/> */}

        <CustomPhongMaterialTorusMesh />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

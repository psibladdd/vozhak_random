import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import './App.css';

const Cube = ({rot, size, color,pos}) => {
    return (
        <>
            <mesh rotation={rot} position={pos}>
                <boxGeometry args={size} />
                <meshBasicMaterial color={color} />
                <Edges color="blue" />
            </mesh>
        </>
    );
}

const Road = ({ rot, size, pos }) => {
  return (
    <group rotation={rot} position={pos}>
      <mesh>
        <boxGeometry args={size} />
        <meshBasicMaterial color="#333333" />
        <Edges color="black" />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[size[0], size[1] * 1.1, size[2] * 0.1]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </group>
  );
};
const StreetLamp = ({ position, isNight }) => {
  return (
    <group position={position}>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>

      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial
          color={isNight ? "yellow" : "white"}
        />
      </mesh>
    </group>
  );
};
const App = () => {
    const [isNight, setIsNight] = useState(false);

    const toggleNight = () => {
        setIsNight(!isNight)
    }

    return (//3
        <div style={{ position: 'fixed', top: 0,left:0,height:'100vh',width:'100vw'}}>
            <button
            onClick={toggleNight}>
                Смена

            </button>
            <Canvas style={{ background: isNight ? "black" : 'skyblue',width:'100%',height:'100%' }}>
                <Cube rot={[0, Math.PI/4, 0]} size={[3, 0.25, 3]} color={"gold"} pos={[0,0,0]}/>

                <Cube rot={[0, Math.PI/4, 0]} size={[1,5, 1]} color={"purple"} pos={[0,2.3,0]}/>
                <StreetLamp position={[-0.9, 0.05, -1]} isNight={isNight} />
        <StreetLamp position={[0.4, 0.05, 1]} isNight={isNight} />
        <StreetLamp position={[0.3, 0.05, -0.3]} isNight={isNight} />
                <StreetLamp position={[-0.7, 0.05, -1.2]} isNight={isNight} />
        <StreetLamp position={[-0.1, 0.05, 0.7]} isNight={isNight} />
                <StreetLamp position={[0.6, 0.05, 1]} isNight={isNight} />
        <StreetLamp position={[-0.5,0.05, 0.8]} isNight={isNight} />
                <OrbitControls
                   minDistance={5}
                   maxDistance={50}
                   minPolarAngle={Math.PI/4}
                   maxPolarAngle={Math.PI/4+Math.PI/8}
                />
            </Canvas>



        </div>
    );
}

export default App;
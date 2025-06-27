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
                <Edges color="black" />
            </mesh>
        </>
    );
}

const Road = ({rot ,size, pos}) => {
    return(
        <group rotation ={rot} position={pos}>
            <mesh>
                <boxGeometry args={size}/>
                <meshBasicMaterial color="#333333" />
                <Edges color = "black" />
            </mesh>
            <mesh position={[0,0.02,0]}>
                <boxGeometry args ={[size[0],size[1]*1.1,size[2]*0.1]} />
                <meshBasicMaterial color="yellow"/>
            </mesh>
        </group>
    )
}
const StreetLamp = ({position,isNight}) => {
    return(
        <group position={position}>
            <mesh position={[0,0.2,0]}>
                <cylinderGeometry args={[0.02,0.02,0.3,64]}/>
                    <meshBasicMaterial color="darkgrey"/>
                </mesh>
            <mesh position={[0,0.35,0]} >
                <sphereGeometry args = {[0.06,10,10]}  />
                <meshBasicMaterial color={isNight ? "yellow" : "white"}/>
                <Edges color="white" />
                </mesh>
        </group>
    );

}
const App = () => {
    const [IsNight,  setIsNight] = useState(false);

    const toggleNight = () => {
         setIsNight(!IsNight)
    }

     return (//3
        <div style={{}}>
                <button
                   onClick={toggleNight}>
                   смена
                   </button>
            <Canvas style={{ background: IsNight ? 'black' : 'skyblue' }}>
                <Cube rot={[0, Math.PI/4, 0]} size={[3, 0.25, 3]} color={"green"} pos={[0,0,0]}/>
                <OrbitControls
                    minDistance={5}
                    maxDistance={5}
                    minPolarAngle={Math.PI/4}
                    maxPolarAngle={Math.PI/4+Math.PI/0}
                />
            </Canvas>

        </div>
    );
}

export default App;
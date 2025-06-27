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
const Roаd = ({rot,size,pos}) => {
      const StreetLamp = ({position,isNight}) => {
return (
    <group position={position}>
        <mesh position={[0,0.2,0]}></mesh>
        <cylindrGeometry args={[0.02,0.02,0.3,16]}/>
        <mwshBаsicMateriаl color="black"/>
        <sphereGeometry args= {isNight ? "yellow" : "white"}/>
         </mesh
>         mesh position= {[
const App = () => {

}


 const[isNight, setIsNight] = useState(false)

    const toggleNight = () => {
    setIsNight(!isNight);
    }

    return (
        <div style ={{ position:'fixed',top:0,left:0,height:'100vh',width:'100vw'}}>
            <button
            onClick={toggleNight}>
                Смена
            </button>
            <Canvas style={{ background: isNight ? "black" : "skyblue",width:"100%",height:"100%"}}>
                <StreetLamp position={[0,0,1]} isNight={isNight}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[3, 0.25, 3]} color={"green"} pos={[0,0,0]}/>
                <OrbitControls
                    minDistance={5}
                    maxDistance={50}
                    minPolarAngle={Math.PI/4}
                    maxPolarAngle={Math.PI/4}
                    />
            </Canvas>
        </div>
        const StreetLamp = ({position})
        return (
    );
}

const App = () => {
export default App;


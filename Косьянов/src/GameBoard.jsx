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
    const[isNight , setIsNight] = useState(false);

    const toggle = () => {
        setIsNight(!isNight)
    }

    return (//3
        <div style={{ position: 'fixed', top:0 , left:0 , height: '100vh' , width: '100vw'}}>
            <button
             onClick={toggle}
                style={{
                        position: 'absolute',
                        color: 'black',
                        width: '90px',
                        height: '45px',
                        zIndex: 100
                    }}
            >
                {isNight ? 'День' : 'Ночь' }
            </button>
            <Canvas style={{ background: isNight ? 'black': 'skyblue' , width:'100%' , height:'100%' }}>
                <Cube rot={[0, Math.PI/4, 0]} size={[1.6, 0.2, 1.6]} color={"darkgreen"} pos={[0,-0.9,0]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[1.6, 1.0, 1.6]} color={"brown"} pos={[0,-1.5,0]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.3, 0.7, 0.3]} color={"grey"} pos={[0.7,-0.5,0]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.3, 0.7, 0.3]} color={"grey"} pos={[0.7,-0.16,0]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.25, 3, 0.25]} color={"grey"} pos={[-0.3,-0.4,0.5]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.25, 1.5, 0.25]} color={"grey"} pos={[-0.3,-0.6,0.5]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.35, 2, 0.35]} color={"grey"} pos={[-0.3,-0.5,-0.5]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.3, 4, 0.3]} color={"grey"} pos={[0,0.5,0]}/>
                <Cube rot={[0, Math.PI/4, 0]} size={[0.3, 2.5, 0.3]} color={"grey"} pos={[-0.5,-0.5,0]}/>
                <StreetLamp position={[0,5,0]} isNight={isNight} />
                <Road rot={[0,Math.PI/4,0]} pos= {[0.2,-0.8,0.6]} size={[1,0.1,0.4]} />
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
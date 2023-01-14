import { useGLTF } from '@react-three/drei'
import MovingSpot from '../components/MovingSpot';
import { red, darkRed, blue } from '../utils/colors';

export default function Scene() {
    // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
    // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
    // const depthBuffer = useDepthBuffer({ frames: 1 })
    // ADD TO <MOVING SPOT/> COMPONENT : depthBuffer={depthBuffer} 

    //   const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf')
    const gltf = useGLTF('./assets/scene.gltf')
  
    return (
        <>
            <MovingSpot  
                color={blue} 
                position={[-2, 3, 2]} 
            />
            <MovingSpot  
                color={red} 
                position={[2, 3, 2]} 
            />
            <MovingSpot  
                color={darkRed}
                position={[0, 3, -3]} 
            />
            {/* <mesh 
                position={[0, -1.03, 0]} 
                castShadow 
                receiveShadow 
                geometry={nodes.dragon.geometry} 
                material={materials['Default OBJ.001']} 
                dispose={null} 
            /> */}
            <primitive
                position={[0, -1.85, 0]}
                object={gltf.scene}
                scale={[.09, .09, .09]}
            />
            <mesh 
                receiveShadow 
                position={[-0.25, -1.85, -0.25]} 
                rotation-x={-Math.PI / 2}
            >
                <planeGeometry args={[50, 50]} />
                <meshPhongMaterial />
            </mesh>
        </>
    )
}
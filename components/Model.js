import { useGLTF } from '@react-three/drei'

export default function Model() {
    // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
    // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
    // const depthBuffer = useDepthBuffer({ frames: 1 })
    // ADD TO <MOVING SPOT/> COMPONENT : depthBuffer={depthBuffer} 

    //   const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf')
    const gltf = useGLTF('./assets/scene.gltf')
  
    return (
        <primitive
            position={[0, -1.85, 0]}
            object={gltf.scene}
            scale={[.09, .09, .09]}
        />
    )
}
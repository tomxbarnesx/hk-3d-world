import { Suspense, useState, useEffect } from 'react';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';

import Model from '../components/Model';
import Nav from '../components/Nav/Nav';
import PlatformTray from '../components/PlatformTray/PlatformTray';
import MovingSpot from '../components/MovingSpot';
import { red, darkRed, blue, yellow, green, teal, purple } from '../utils/colors';
const colorsRandom = [blue, yellow, green, teal, purple];
import styles from '../styles/Home.module.css';

export default function App() {
    const [mounted, setMounted] = useState();
    // const [colors, setColors] = useState([blue, red, darkRed]);
    useEffect(() => {
        if (mounted === undefined) {
            setMounted(true);
        }
    }, [mounted])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // const changeColors = () => {
    //     const randomNumber = Math.floor(Math.random() * colorsRandom.length)
    //     const randomColor = colorsRandom[randomNumber];
    //     setColors([randomColor, red, darkRed,])
    // }

    return (
        <>
            <Head>
                <title>HOT KNIVES | Heavy primitive psych, FM static noise</title>
            </Head>
            <main className={styles.main}>
                <Nav />
                <Canvas 
                    shadows 
                    dpr={[1, 2]} 
                    camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
                >
                    <color attach="background" args={['#202020']} />
                    <fog attach="fog" args={['#202020', 5, 20]} />
                    <ambientLight intensity={0.015} />
                    
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
                    
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>

                    <mesh 
                        receiveShadow 
                        position={[-0.25, -1.85, -0.25]} 
                        rotation-x={-Math.PI / 2}
                    >
                        <planeGeometry args={[50, 50]} />
                        <meshPhongMaterial />
                    </mesh>
                    
                    <OrbitControls 
                        enablePan={false}
                        enableZoom={true}
                        enableRotate={true}
                        maxDistance={9}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2.5}
                    />
                </Canvas>
                <Loader />
                {
                    (mounted)
                        ?   
                            <div className={styles.musicSocialTray}>
                                <div className={styles.bandcampChip}>
                                    <iframe 
                                        style={{
                                            border: 0,
                                            width: '100%',
                                            height: '42px',
                                        }} 
                                        src="https://bandcamp.com/EmbeddedPlayer/album=1354859974/size=small/bgcol=333333/linkcol=e99708/track=2263198745/transparent=true/" 
                                        seamless
                                    >
                                        <a href="https://hotknivesworld.bandcamp.com/album/making-love-to-make-music-to-make-love-to">Making Love To Make Music To Make Love To by Hot Knives</a>
                                    </iframe>
                                </div>
                                <PlatformTray />
                            </div>
                        :   null
                }
            </main>
        </>
    )
}

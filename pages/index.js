import { Suspense } from 'react';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';

import Scene from '../components/Scene';
import Nav from '../components/Nav/Nav';

import styles from '../styles/Home.module.css';

export default function App() {

    return (
        <>
            <Head>
                <title>HOT KNIVES 3D WORLD | Heavy primitive psych, FM static riffage</title>
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
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <OrbitControls 
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2.5}
                    />
                </Canvas>
                <Loader />
                {
                    // (typeof window !== "undefined")
                    //     ?   <iframe 
                    //             style={{
                    //                 border: 0,
                    //                 width: '35%', 
                    //                 height: '42px',
                    //                 position: 'absolute',
                    //                 bottom: '1rem',
                    //                 left: '1rem',
                    //             }} 
                    //             src="https://bandcamp.com/EmbeddedPlayer/album=1354859974/size=small/bgcol=333333/linkcol=e99708/transparent=true/" 
                    //             seamless
                    //         >
                    //             <a href="https://hotknivesworld.bandcamp.com/album/making-love-to-make-music-to-make-love-to">Making Love To Make Music To Make Love To by Hot Knives</a>
                    //         </iframe>
                    //     : null
                }
            </main>
        </>
    )
}

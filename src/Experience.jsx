import { Center, OrbitControls, Sparkles, useGLTF, useTexture } from '@react-three/drei'

export default function Experience() {
    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false

    //importare i nodi del modello
    //al posto andare a trovare model.nodes, distructure model e scrivi nodes
    const { nodes } = useGLTF('./model/portal.glb')

    return <>

        <color args={['#030202']} attach="background" />
        <OrbitControls makeDefault />

        {/* importare Center dal drei per centrare il modello */}
        <Center>
            {/* nei modelli complessi non usiamo <Primitive /> ma creiamo mesh */}
            <mesh geometry={nodes.baked.geometry}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* importare la geometry della luceA & B */}
            <mesh
                geometry={nodes.poleLightA.geometry}
                position={nodes.poleLightA.position} //applicare la posizione giusta(come nel blender)
            >
                <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh
                geometry={nodes.poleLightB.geometry}
                position={nodes.poleLightB.position} //applicare la posizione giusta(come nel blender)
            >
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            {/* importare portalLight e applicare posizione e rotazione (come nel blender)*/}
            <mesh
                geometry={nodes.portalLight.geometry}
                position={nodes.portalLight.position}
                rotation={nodes.portalLight.rotation}
            >
            </mesh>

            {/* import Sparkles dal Drei che sono floating glowing particles*/}
            <Sparkles
                size={6}
                scale={[4, 2, 4]}//è la dimensiondel cubo che contiene le particelle 
                position-y={1}
                speed={0.2}
            />
        </Center>

    </>
}
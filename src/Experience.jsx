import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'

export default function Experience() {
    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false
    //al posto andare a trovare model.nodes, distructure model e scrivi nodes
    const { nodes } = useGLTF('./model/portal.glb')

    return <>
        <color args={['#030202']} attach="background" />
        <OrbitControls makeDefault />

        {/* nei modelli complessi non usiamo <Primitive /> ma creiamo mesh */}
        <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
        </mesh>

    </>
}
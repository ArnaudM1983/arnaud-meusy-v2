"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGLTF } from "@react-three/drei";

// Composant principal pour afficher le modèle
export default function Shapes() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        className="z-0 h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 5, 11], fov: 50, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Laptop />
          
          {/* Lumière directionnelle avec position modifiée */}
          <directionalLight
            position={[5, 10, 5]} // Position de la lumière directionnelle
            intensity={1} // Intensité de la lumière
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          
          <Environment preset="city" />
          <OrbitControls enableZoom={false}/> {/* Ajouter OrbitControls pour permettre l'interaction avec la caméra */}
        </Suspense>
      </Canvas>
    </div>
  );
}

// Composant pour afficher le modèle 3D du laptop
function Laptop() {
  // Charger le modèle 3D laptop.glb à partir du dossier public
  const { scene } = useGLTF("/laptop.glb");
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  // État pour gérer l'échelle du modèle 3D
  const [scale, setScale] = useState([1, 1, 1]);

  // Modifier l'échelle du modèle en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Si l'écran est petit, réduire la taille du modèle
        setScale([0.5, 0.5, 0.5]);
      } else {
        // Sur les écrans plus grands, garder la taille originale
        setScale([1, 1, 1]);
      }
    };

    // Ajouter l'écouteur d'événement lors du montage
    window.addEventListener("resize", handleResize);

    // Appeler la fonction au démarrage pour ajuster l'échelle dès le premier rendu
    handleResize();

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation d'apparition
  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });

      // Animation de rotation continue qui s'inverse à chaque cycle
      gsap.to(meshRef.current.rotation, {
        y: "-=2 * Math.PI", // Rotation continue sur l'axe Y
        duration: 10, // Durée d'une rotation complète
        repeat: -1, // Répéter indéfiniment
        yoyo: true, // Faire revenir l'animation dans l'autre sens après chaque cycle
        ease: "linear", // Rotation constante
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={scale}>
      {/* Ici, nous utilisons la scène du modèle GLB */}
      <primitive object={scene} visible={visible} />
    </group>
  );
}

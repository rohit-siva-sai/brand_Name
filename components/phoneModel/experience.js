import { Float, OrbitControls, PresentationControls, Sparkles } from "@react-three/drei";

import { Suspense } from "react";

import Placeholder from "./Placeholder";
import Phone from "./phone.js";



export default function Experience() {
   const pos=[2,-1.5,0]
   const pos1=[0,-1,0]
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.95]}
        config={{ mass: 2, tension: 200 }}
        // snap={{ mass: 4, tension: 400 }}
        
      />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
     
      <ambientLight intensity={0.8} />
      

      <Suspense fallback={<Placeholder position-y={-0.5} scale={[2, 3, 2]} />}>
        <Phone pos={pos1}  />
        {/* <Phone pos={pos} /> */}
      </Suspense>
    </>
  );
}

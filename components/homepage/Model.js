import React, { useEffect } from "react";

import { Canvas } from "@react-three/fiber";

import styles from "../../styles/About.module.css";

import Experience from "../phoneModel/experience";

const Model = () => {
  return (
    <div className={`${styles.maya} h-96 border border-red-700`}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6],
          // position: [0,0,0]
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default Model;

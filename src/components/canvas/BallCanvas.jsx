import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Ball from "./Ball";

export default function BallCanvas(props) {
  const { icon } = props;
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: false }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: Math.min(window.devicePixelRatio, 2),
  phi: 0,
  theta: 0.25,
  dark: 1,
  diffuse: 0.2,
  mapSamples: 30000,
  mapBrightness: 6,
  baseColor: [0.078, 0.447, 1], 
  markerColor: [2.6, 2.6, 2.6],
  glowColor: [0.078, 0.447, 1],
  markers: [
    { location: [40.0379, -75.3433], size: 0.02 }, // Villanova
    { location: [30.2672, -97.7431], size: 0.02 }, // Austin (Ping)
    { location: [40.7128, -74.006], size: 0.02, color: [3, 3, 3] }, // NYC
  ],
};

export default function Globe({
  config = GLOBE_CONFIG,
}: {
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const onRender = useCallback((state: any) => {
    phiRef.current += 0.003;
    state.phi = phiRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    },);

    canvasRef.current!.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, onRender]);

  return (
    <div className="relative aspect-square w-[300px] md:w-[380px] lg:w-[420px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}

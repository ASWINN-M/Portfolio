import React, { Component, Suspense, useEffect, useRef, useState } from "react";
import { Astronaut } from "../components/components/Astronaut";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/components/HeroText";
import ParallexBackground from "../components/components/ParallexBackground";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/components/Loader";

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallexBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {isVisible && (
          <CanvasErrorBoundary>
            <Canvas
              camera={{ position: [0, 1, 3] }}
              dpr={[1, isMobile ? 1 : 1.5]}
              gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
            >
              <Suspense fallback={<Loader />}>
                {isMobile ? (
                  <Astronaut scale={0.23} position={[0, -1.5, 0]} />
                ) : (
                  <Float speed={1} rotationIntensity={0.35} floatIntensity={0.5}>
                    <Astronaut />
                  </Float>
                )}
                {!isMobile && <Rig />}
              </Suspense>
            </Canvas>
          </CanvasErrorBoundary>
        )}
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
}

export default Hero;

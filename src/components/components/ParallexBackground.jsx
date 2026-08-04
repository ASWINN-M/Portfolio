import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React from "react";
import { asset } from "../../utils/asset";

const ParallexBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 25 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: `url(${asset("assets/sky.jpg")})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: `url(${asset("assets/mountain-3.png")})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        <motion.div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: `url(${asset("assets/planets.png")})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        <motion.div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: `url(${asset("assets/mountain-2.png")})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        <motion.div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: `url(${asset("assets/mountain-1.png")})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallexBackground;

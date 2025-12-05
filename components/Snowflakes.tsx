import { generateSnowflakes } from "@/constants/snowFlakes";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Snowflakes = () => {
  const flakes = useMemo(() => generateSnowflakes(30), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flakes.map((flake, i) => (
        <motion.div
          key={i}
          className="absolute -top-2.5 text-white"
          style={{
            left: `${flake.x}vw`,
            fontSize: `${flake.scale * 16}px`,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
};

export default Snowflakes;

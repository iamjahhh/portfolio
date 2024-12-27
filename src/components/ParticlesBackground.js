import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="particles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: darkMode ? "#ffffff" : "#000000",
          },
          links: {
            color: darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.8
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true,
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;

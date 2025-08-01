import { useMemo } from "react";
import cloud1 from "../../img/cloud1.png";
import cloud2 from "../../img/cloud2.png";
import island1 from "../../img/island1.png";
import island2 from "../../img/island2.png";
import island3 from "../../img/island3.png";
import island4 from "../../img/island4.png";
import island5 from "../../img/island5.png";
import apple from "../../img/apple.webp";
import playstore from "../../img/playstore.webp";

const NUM_CLOUDS = 25;

const generateClouds = () => {
  const clouds = [];
  for (let i = 0; i < NUM_CLOUDS; i++) {
    clouds.push({
      id: i,
      top: Math.random() * 95,
      left: Math.random() * 95,
      width: Math.floor(Math.random() * 120) + 30, // 30px a 50px
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 3,
      image: Math.random() > 0.5 ? cloud1 : cloud2,
    });
  }
  return clouds;
};

// Posiciones fijas para islas
const islandData = [
  { src: island1, top: "10%", left: "2%", width: 320 },
  { src: island2, top: "60%", left: "15%", width: 320 },
  { src: island3, top: "65%", left: "40%", width: 320 },
  { src: island4, top: "58%", left: "72%", width: 400 },
  { src: island5, top: "10%", left: "83%", width: 320 },
];

const Islands = () => {
  const clouds = useMemo(generateClouds, []);

  return (
    <div className="relative bg-[#09C4FF] w-full h-screen overflow-hidden">
      {/* Clouds flotantes */}
      {clouds.map((cloud) => (
        <img
          key={cloud.id}
          src={cloud.image}
          alt="cloud"
          style={{
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            width: `${cloud.width}px`,
            animation: `floatX ${cloud.duration}s ease-in-out ${cloud.delay}s infinite alternate`,
          }}
          className="absolute pointer-events-none"
        />
      ))}

      {/* Islas fijas */}
      {islandData.map((island, index) => (
        <img
          key={`island-${index}`}
          src={island.src}
          alt={`island-${index + 1}`}
          style={{
            top: island.top,
            left: island.left,
            width: `${island.width}px`,
            animation: `floatY ${5 + (index % 3)}s ease-in-out ${
              index * 0.3
            }s infinite alternate`,
          }}
          className="absolute pointer-events-none"
        />
      ))}

      <div className="absolute top-[-200px] left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <h1 className="text-[70px]  font-bold drop-shadow-lg">
          Finanzas a tu ritmo,
          <br />
          sin horarios ni fronteras
        </h1>

        <div className="flex flex-col items-center gap-3 mt-2 sm:mt-2  md:flex-row md:justify-center md:gap-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-300 shadow-md w-auto">
            <img src={apple} alt="Apple logo" className="w-6 sm:w-8 h-auto" />
            <div className="text-left leading-tight">
              <p className="text-xs sm:text-sm font-poppins font-medium text-black">
                Disponible en la
              </p>
              <p className="text-xs sm:text-sm font-poppins font-medium text-black">
                App Store
              </p>
            </div>
          </button>

          <button className="flex items-center gap-3 px-4 py-[12px] rounded-2xl bg-white border border-gray-300 shadow-md w-auto">
            <img
              src={playstore}
              alt="Playstore logo"
              className="w-6 sm:w-8 h-auto"
            />
            <div className="text-left leading-tight">
              <p className="text-xs sm:text-sm font-poppins font-medium text-black">
                Disponible en la
              </p>
              <p className="text-xs sm:text-sm font-poppins font-medium text-black">
                Google Play
              </p>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(40px);
          }
        }
        @keyframes floatY {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(30px);
          }
        }
      `}</style>
    </div>
  );
};

export default Islands;

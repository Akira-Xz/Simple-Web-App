import { useState } from "react";
import coin1 from "../../img/coin1.png";
import coin2 from "../../img/coin2.png";
import coin3 from "../../img/coin3.png";
import coin4 from "../../img/coin4.png";
import coin5 from "../../img/coin5.png";
import coin6 from "../../img/coin6.png";
import coin8 from "../../img/coin8.png";
import FaqAccordion from "../../layout/FaqAccordion";
import "./css/principal.css";

const CoinsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Posiciones y velocidades fijas
  const coins = [
    { src: coin1, top: "5%", left: "5%", speed: "2" },
    { src: coin2, top: "10%", left: "80%", speed: "3" },
    { src: coin3, top: "15%", left: "25%", speed: "1.5" },
    { src: coin4, top: "20%", left: "60%", speed: "2.8" },
    { src: coin5, top: "25%", left: "35%", speed: "2" },
    { src: coin6, top: "30%", left: "70%", speed: "1.2" },
    { src: coin8, top: "40%", left: "50%", speed: "3.1" },
    { src: coin1, top: "45%", left: "15%", speed: "1.8" },
    { src: coin2, top: "50%", left: "65%", speed: "2.6" },
    { src: coin3, top: "55%", left: "20%", speed: "2.1" },
    { src: coin4, top: "60%", left: "75%", speed: "1.7" },
    { src: coin5, top: "65%", left: "30%", speed: "2.9" },
    { src: coin6, top: "70%", left: "55%", speed: "1.3" },
    { src: coin8, top: "80%", left: "85%", speed: "1.9" },
    { src: coin1, top: "85%", left: "40%", speed: "3" },
    { src: coin2, top: "90%", left: "20%", speed: "1.6" },
    { src: coin3, top: "95%", left: "60%", speed: "2.2" },
    { src: coin4, top: "15%", left: "90%", speed: "1.4" },
    { src: coin5, top: "35%", left: "45%", speed: "2.3" },
    { src: coin6, top: "55%", left: "10%", speed: "2.7" },
    { src: coin8, top: "5%", left: "95%", speed: "3" },
    { src: coin1, top: "25%", left: "5%", speed: "2.2" },
    { src: coin2, top: "60%", left: "40%", speed: "1.3" },
    { src: coin3, top: "80%", left: "60%", speed: "2.5" },
    { src: coin4, top: "45%", left: "85%", speed: "2.1" },
    { src: coin5, top: "70%", left: "35%", speed: "1.9" },
    { src: coin6, top: "90%", left: "50%", speed: "2.6" },
  ];

  return (
    <div className="relative h-fit bg-no-repeat bg-center sm:bg-cover p-12 ">
      {/* Monedas animadas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        {coins.map((coin, index) => (
          <img
            key={index}
            src={coin.src}
            alt={`coin-${index}`}
            className="absolute w-[40px] sm:w-[60px]"
            style={{
              top: coin.top,
              left: coin.left,
            }}
            data-scroll
            data-scroll-speed={`-${coin.speed}`}
            data-scroll-direction="vertical"
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="font-poppins text-center sm:text-left relative z-20">
        <h1 className="text-[#4DA4FF] font-bold text-[44px] text-center sm:text-[80px] md:px-[18%] px-[1%] mt-[45px] pb-[3%]">
          ¡El primer juego que te ayuda a tener más dinero!
        </h1>
        <p className="text-[black] font-medium text-[18px] text-center px-8 sm:text-[24px] md:px-[19%] px-[4%]">
          Diseñamos Simple para que aprender finanzas personales no sea una
          carga, sino un reto que disfrutes completar todos los días. Todo está
          pensado para que avances a tu ritmo y construyas hábitos reales.
        </p>
      </div>

      {/* Grid de contenido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[115px] relative z-20">
        <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
          <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[-75px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
            Retos semanales
          </h2>
          <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[15%] px-[1%] pt-[20px]">
            Supera misiones simples que te ayudan a ahorrar sin darte cuenta.
          </p>
        </div>

        <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
          <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[60px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
            Sistema de logros
          </h2>
          <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[15%] px-[1%] pt-[20px]">
            Gana trofeos y premios virtuales por cada paso que des.
          </p>
        </div>

        <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
          <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[80px] md:mt-[30px] sm:whitespace-normal whitespace-nowrap">
            Cursos interactivos
          </h2>
          <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[10%] px-[5%] pt-[20px]">
            Aprende desde lo más básico hasta estrategias más avanzadas.
          </p>
        </div>
      </div>

      {/* Segundo grupo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-[175px] sm:pt-[75px] relative z-20">
        <div className="font-poppins text-center pl-4 sm:pl-[40px] md:pl-[250px] flex flex-col h-full">
          <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[30%] mt-[-15px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
            Comparte y compite
          </h2>
          <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[25%] px-[10%] pt-[20px]">
            Rétate con amigos y descubre quién ahorra mejor.
          </p>
        </div>

        <div className="font-poppins text-center pr-4 sm:pr-[40px] md:pr-[250px] flex flex-col h-full">
          <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[25%] mt-[80px] md:mt-[30px] sm:whitespace-normal whitespace-nowrap ml-[-20px]">
            Seguimiento de progreso
          </h2>
          <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[25%] px-[10%] pt-[20px]">
            Visualiza tu avance y celebra tus mejoras financieras.
          </p>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="mt-[30%] sm:px-8 md:px-[175px] relative z-20">
        <h1 className="text-4xl sm:text-7xl font-poppins font-bold text-center text-[#4DA4FF] mb-[5%]">
          Preguntas frecuentes
        </h1>
        <div
          id="Faq"
          className={`faq-container ${openIndex !== null ? "expanded" : ""}`}
        >
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default CoinsSection;

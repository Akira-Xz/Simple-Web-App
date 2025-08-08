import { useState } from "react";
import coin1 from "../../img/coin1.png";
import coin2 from "../../img/coin2.png";
import coin3 from "../../img/coin3.png";
import coin4 from "../../img/coin4.png";
import coin5 from "../../img/coin5.png";
import coin6 from "../../img/coin6.png";
import coin8 from "../../img/coin8.png";
import lentes from "../../img/lentes.png";
import banderita from "../../img/banderita.png";
import calculadora from "../../img/calculadora.png";
import hormiga from "../../img/hormiga.png";
import alcancia from "../../img/alcancia.png";
import FaqAccordion from "../../layout/FaqAccordion";
import vectorluca from "../../img/vectorluca.png";
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

  const cards = [
    {
      title:
        "Supera misiones simples que te ayudan a ahorrar sin darte cuenta.",
      img: lentes,
      widthClass: "w-[141px] md:w-[362px]",
      description: "Retos todas las semanas",
    },
    {
      title: "Gana trofeos y premios virtuales por cada paso que des.",
      img: banderita,
      widthClass: "w-[181px] md:w-[435px]",
      description: "Sistema de logros",
    },
    {
      title: "Aprende desde lo más básico hasta estrategias más avanzadas.",
      img: calculadora,
      widthClass: "w-[148px] md:w-[362px]",
      description: "Cursos interactivos",
    },
    {
      title: "Rétate con amigos y descubre quién ahorra mejor.",
      img: hormiga,
      widthClass: "w-[205px] md:w-[437px]",
      description: "Comparte y compite",
    },
    {
      title: "Visualiza tu avance y celebra tus mejoras financieras.",
      img: alcancia,
      widthClass: "w-[168px] md:w-[404px]",
      description: "Seguimiento de progreso",
    },
  ];

  return (
    <div className="relative h-fit bg-no-repeat bg-center sm:bg-cover py-12 px-0 ">
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
      <div className="font-poppins text-center sm:text-left relative z-20  px-12">
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

      <div className="relative z-20 w-full mt-[64px] pl-12">
        {/* Mobile: carrusel horizontal. Desktop: grid 3-2 */}
        <div className="sm:hidden overflow-x-auto">
          <div
            className="flex gap-4 scroll-pl-4 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="snap-start rounded-2xl flex flex-col items-center justify-center [perspective:1000px]"
              >
                <div className="relative min-w-[219px] h-[330px] rounded-xl shadow-md transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Cara frontal */}
                  <div className="absolute inset-0 flex items-center rounded-2xl bg-gradient-to-b from-[#028A0F] to-[#9BE7A9] text-white font-bold text-[18px] [backface-visibility:hidden] flex-col justify-between">
                    <p className="text-center text-[18px] font-medium px-[16px] pt-[16px] drop-shadow-lg">
                      {card.title}
                    </p>
                    {card.img && (
                      <img
                        src={card.img}
                        className={card.widthClass}
                        alt={card.title}
                      />
                    )}
                  </div>

                  {/* Cara trasera */}
                  <div className="absolute inset-0 flex flex-col py-[32px] px-[24px] items-start justify-between rounded-xl bg-[#062D66] text-white  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img
                      src={vectorluca}
                      alt=""
                      className="w-[50px] md:w-[90px] mx-0  md:block"
                    />
                    <p className="text-[20px] md:text-[44px] font-medium md:w-[250px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout 3 cards arriba, 2 centradas abajo */}
        <div className="hidden sm:flex flex-col gap-6 items-center  px-12">
          {/* Fila 1 */}
          <div className="grid grid-cols-3 gap-[33.33px] max-w-[1380px] px-4">
            {cards.slice(0, 3).map((card, index) => (
              <div key={index} className="group [perspective:1000px]">
                <div className="relative w-[400px] h-[600px] 2xl:w-[436px] 2xl:h-[660px] rounded-2xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Cara frontal */}
                  <div className="absolute inset-0 flex items-center  rounded-2xl bg-gradient-to-b from-[#028A0F] to-[#9BE7A9] text-white font-bold text-[18px] [backface-visibility:hidden]   flex-col justify-between">
                    <p className="text-center text-[24px] font-medium px-[34px] pt-[32px] drop-shadow-lg">
                      {card.title}
                    </p>
                    <img src={card.img} className={card.widthClass} />
                  </div>
                  {/* Cara trasera */}
                  <div className="absolute inset-0 py-[32px] px-[24px] flex flex-col items-start  rounded-2xl bg-[#062D66] text-white  [transform:rotateY(180deg)] [backface-visibility:hidden] justify-between">
                    <img
                      src={vectorluca}
                      alt=""
                      className="w-[90px] mx-0 hidden md:block"
                    />
                    <p className="text-[44px] font-medium w-[250px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fila 2 centrada */}
          <div className="flex justify-center gap-4 w-full px-4">
            {cards.slice(3).map((card, index) => (
              <div key={index} className="group [perspective:1000px]">
                <div className="relative w-[400px] h-[600px] 2xl:w-[436px] 2xl:h-[660px] rounded-2xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Cara frontal */}
                  <div className="absolute inset-0 flex items-center rounded-2xl bg-gradient-to-b from-[#028A0F] to-[#9BE7A9] text-white font-bold text-[18px] [backface-visibility:hidden] flex-col justify-between">
                    <p className="text-center text-[24px] font-medium px-[34px] pt-[32px] drop-shadow-lg">
                      {card.title}
                    </p>
                    <img src={card.img} className={card.widthClass} />
                  </div>

                  {/* Cara trasera */}
                  <div className="absolute inset-0 py-[32px] px-[24px] flex flex-col items-start  rounded-2xl bg-[#062D66] text-white  [transform:rotateY(180deg)] [backface-visibility:hidden] justify-between">
                    <img
                      src={vectorluca}
                      alt=""
                      className="w-[90px] mx-0 hidden md:block"
                    />
                    <p className="text-[44px] font-medium w-[250px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="mt-[30%] sm:px-8 md:px-[175px] relative z-20 px-12">
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

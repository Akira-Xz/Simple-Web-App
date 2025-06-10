import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import fondo_1 from "../img/fondo_1.webp";
import logo1 from "../img/logo1.webp";
import devicenoshadow from "../img/devicenoshadow.webp";
import qrcode from "../img/qrcode.webp";
import perfil from "../img/perfil.webp";
import luca1 from "../img/luca1.webp";
import luca4 from "../img/luca4.webp";
import luca2 from "../img/luca2.webp";
import frame_393_1 from "../img/frame_393_1.webp";
import apple from "../img/apple.webp";
import playstore from "../img/playstore.webp";
import group_50 from "../img/group_50.webp";
import device2 from "../img/device2.webp";
import fichas from "../img/fichas.webp";
import FaqAccordion from "./FaqAccordion";
import fichasHorizontales from "../img/fichasHorizontales.webp";
import fondofinal from "../img/fondofinal.webp";
import insta1 from "../img/insta1.webp";
import face1 from "../img/face1.webp";
import twitter1 from "../img/twitter1.webp";

const LayoutTest = (props) => {
  const { children } = props;
  return (
    <>
      <div>
        <div
          className="h-[1200px] bg-no-repeat  bg-center"
          style={{ backgroundImage: `url(${fondo_1})` }}
        >
          <div className="justify-between flex p-12">
            <img src={logo1} alt="" />
            <button className=" bg-[white] rounded-3xl text-[#1685FE] font-semibold w-[256px]">
              Descargar
            </button>
          </div>
          <div className="grid grid-cols-3 items-center justify-items-center  px-8 py-12 relative">
            {/* Columna 1: Texto AHORRAR y ES */}
            <div className="col-span-1 text-white font-bold text-center relative">
              {/* Texto AHORRAR: Posicionado un poco arriba de la imagen */}
              <div className="text-9xl leading-none absolute top-[-430px] left-[150px] transform ">
                AHORRAR
              </div>

              {/* Texto ES: Posicionado a la izquierda del teléfono */}
              <div className="text-9xl leading-none absolute right-[50%] left-[200px] transform  -translate-y-[200%]">
                ES
              </div>
            </div>

            {/* Columna 2: Teléfono */}
            <div className="col-span-1 z-20">
              <img
                src={devicenoshadow} // Imagen del teléfono
                alt="Phone App"
                className="w-80 shadow-md"
              />
            </div>

            {/* Columna 3: Texto SIMPLE + QR */}
            <div className="col-span-1 text-white text-center left-[30%] transform -translate-x-[45%] ">
              <img src={perfil} alt="" />
              <div className="text-9xl font-bold mb-4">SIMPLE</div>
              <div className="flex items-center justify-left space-x-4">
                {/* Contenedor para QR y texto */}
                <div className="flex items-center space-x-4">
                  {/* Imagen del QR */}
                  <img
                    src={qrcode} // Imagen del QR
                    alt="QR Code"
                    className="w-40 h-40 bg-white p-1"
                  />

                  {/* Texto junto al QR */}
                  <p className="text-lg text-left">
                    Un QR.
                    <br />
                    Una app.
                    <br />
                    Un nuevo hábito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-2xl italic font-serif">
          <p>
            <span className="bg-blue-100 text-blue-900 p-1 inline-block rounded-lg">
              “Ahorrar no es solo guardar dinero. Es construir la vida que
              quieres.
            </span>
            <br />
            <span className="bg-blue-100 text-blue-900 p-1 inline-block rounded-lg">
              Es tomar el control, reducir el estrés y darle propósito a cada
              peso.
            </span>
            <br />
            <span className="bg-blue-100 text-blue-900 p-1 inline-block rounded-lg">
              ¿Quién quieres ser, y cómo pueden tus finanzas ayudarte a llegar
              ahí?”
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-[10%] mb-[15%]">
          <div className="text-center">
            <img
              src={luca1}
              alt="Imagen 1"
              className="w-48 h-auto rounded-lg justify-self-center"
            />
            <h3 className="mt-2 text-2xl font-semibold font-poppins">
              A tu ritmo.
            </h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Personaliza tu forma de ahorrar y de administrar tus finanzas de
              manera sencilla. Personaliza tu perfil, personaliza a Luca,
              personaliza tu experiencia
            </p>
          </div>

          <div className="text-center">
            <img
              src={luca4}
              alt="Imagen 2"
              className="w-48 h-auto rounded-lg justify-self-center"
            />
            <h3 className="mt-2 text-2xl font-semibold font-poppins">
              Estamos contigo
            </h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Siempre vamos a cuidarte a ti y a tu dinero, por lo que te
              enviaremos recordatorios para que ahorres o gastes de manera
              inteligente.
            </p>
          </div>

          <div className="text-center">
            <img
              src={luca2}
              alt="Imagen 3"
              className="w-48 h-auto rounded-lg justify-self-center"
            />
            <h3 className="mt-2 text-2xl font-semibold font-poppins">
              FINANZAS SIMPLES
            </h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Gestiona tu dinero sin complicaciones. Ahorra, controla y mejora
              tus finanzas desde una sola app.
            </p>
          </div>
        </div>
        <div
          className="h-[1080px] bg-no-repeat  bg-center bg-contain"
          style={{
            backgroundImage: `url(${frame_393_1})`,
            backgroundSize: "calc(100% + 5px) auto",
          }}
        >
          <div className="flex justify-center align-center p-20 px-[16%] text-white font-poppins font-bold text-7xl">
            <p className="text-center">
              Finanzas a tu <br /> ritmo,sin horarios ni <br /> fronteras
            </p>
          </div>
          <div className="flex justify-center mt-[25px]">
            <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-300 shadow-md">
              <img src={apple} alt="Apple logo" className="w-12 h-auto" />
              <div className="text-left leading-tight">
                <p className="text-lg font-poppins font-medium">
                  Disponible en la
                </p>
                <p className="text-lg font-poppins font-medium">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-300 shadow-md ml-[16px]">
              <img
                src={playstore}
                alt="Playstore logo"
                className="w-12 h-auto"
              />
              <div className="text-left leading-tight">
                <p className="text-lg font-poppins font-medium">
                  Disponible en la
                </p>
                <p className="text-lg font-poppins font-medium">Google Play</p>
              </div>
            </button>
          </div>
        </div>
        <div
          className="h-screen bg-no-repeat bg-center bg-contain p-[150px] flex items-center justify-between"
          style={{
            backgroundImage: `url(${group_50})`,
            backgroundSize: "calc(100% + 5px) auto",
          }}
        >
          <div className="text-white font-poppins">
            <h1 className="font-bold text-[80px] leading-[1.1] tracking-wide mb-8">
              Aprende a ahorrar <br />
              sin aburrirte
            </h1>

            <p className="font-medium text-5xl leading-tight mb-10">
              Simple convierte la educación <br />
              financiera en una experiencia <br />
              divertida.
            </p>

            <p className="text-lg leading-relaxed">
              Con cursos{" "}
              <span className="font-semibold">
                dinámicos, retos y recompensas virtuales, <br />
                ahorrar y aprender
              </span>{" "}
              sobre finanzas nunca fue tan fácil (ni <br />
              tan entretenido).
            </p>
          </div>
          <div>
            <img src={device2} alt="" className="" />
          </div>
        </div>
        <div
          className="h-[3173px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${fichas})`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="font-poppins text-center">
            <h1 className="text-[#4DA4FF] font-bold text-[80px] pt-[5%] pb-[3%]">
              ¡El primer juego que te <br />
              ayuda a tener más dinero!
            </h1>
            <p className="text-[black] font-medium text-[24px]">
              Diseñamos Simple para que aprender finanzas personales no sea una
              carga, sino un reto <br />
              que disfrutes completar todos los días. Todo está pensado para que
              avances a tu ritmo y <br />
              construyas hábitos reales.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 pt-[175px] px-[175px]">
              <div className="font-poppins text-center px-[80px]">
                <h2 className="font-bold text-[44px] text-[#4DA4FF]">
                  Retos <br />
                  semanales
                </h2>
                <p className="font-medium text-[24px] text-[black] pt-[20px]">
                  Supera misiones simples <br />
                  que te ayudan a ahorrar <br />
                  sin darte cuenta.
                </p>
              </div>
              <div className="font-poppins text-center px-[80px]">
                <h2 className="font-bold text-[44px] text-[#4DA4FF]">
                  Sistema de <br />
                  logros
                </h2>
                <p className="font-medium text-[24px] text-[black] pt-[20px]">
                  Gana trofeos y premios <br />
                  virtuales por cada paso <br />
                  que des.
                </p>
              </div>
              <div className="font-poppins text-center px-[80px]">
                <h2 className="font-bold text-[44px] text-[#4DA4FF]">
                  Cursos <br />
                  Interactivos
                </h2>
                <p className="font-medium text-[24px] text-[black] pt-[20px]">
                  Aprende desde lo más <br />
                  básico hasta estrategias <br />
                  más avanzadas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-[175px] px-[175px]">
              <div className="font-poppins text-center pl-[250px]">
                <h2 className="font-bold text-[44px] text-[#4DA4FF]">
                  Retos <br />
                  semanales
                </h2>
                <p className="font-medium text-[24px] text-[black] pt-[20px]">
                  Supera misiones simples <br />
                  que te ayudan a ahorrar <br />
                  sin darte cuenta.
                </p>
              </div>
              <div className="font-poppins text-center pr-[250px]">
                <h2 className="font-bold text-[44px] text-[#4DA4FF]">
                  Sistema de <br />
                  logros
                </h2>
                <p className="font-medium text-[24px] text-[black] pt-[20px]">
                  Gana trofeos y premios <br />
                  virtuales por cada paso <br />
                  que des.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[40%]">
            <h1 className="text-7xl font-poppins font-bold text-center text-[#4DA4FF] mb-[5%]">
              Preguntas frecuentes
            </h1>
            <FaqAccordion></FaqAccordion>
          </div>
        </div>
        <img src={fichasHorizontales} alt="" className="w-[90%] mx-auto" />
        <div
          className="h-[1100px] bg-no-repeat bg-center bg-contain mt-[2%] flex flex-col  items-center"
          style={{
            backgroundImage: `url(${fondofinal})`,
            backgroundSize: "calc(100% + 15px) auto",
          }}
        >
          <h1 className="text-white font-bold text-7xl pt-[5%] pb-[3%] px-[25%] text-center font-poppins">
            Ya diste el primer paso, ahora ve por más
          </h1>
          <p className="text-white font-regular text-md pb-[3%] px-[35%] text-center font-poppins">
            cursos para aprender a ahorrar e invertir, aprender a ahorrar es
            solo el comienzo. Descubre nuestros cursos en Udemy y domina tus
            finanzas con contenido práctico, útil y hecho para ti.
          </p>
          <button className="bg-white rounded-3xl text-[#1685FE] font-bold w-[256px] h-[3rem] mb-[15%]">
            Saber más
          </button>
          <div className="grid grid-cols-2 gap-10 justify-between">
            {/* Simple Logo Section */}
            <div className="flex flex-col items-start text-left ">
              <img src={logo1} alt="Simple Logo" className="mb-4" />
              <p className="text-white font-poppins mb-4">Conoce más</p>
              <div className="flex gap-3 my-4 align-center">
                <a href="#" className="text-black">
                  <img src={insta1} alt="" />
                </a>
                <a href="#" className="text-black">
                  <img src={face1} alt="" />
                </a>
                <a href="#" className="text-black">
                  <img src={twitter1} alt="" />
                </a>
              </div>
              <button className="bg-transparent rounded-3xl text-white font-bold w-[256px] h-[3rem] mb-[3%] border-[3px] hover:bg-[#F0F0F0]">
                Descargar App
              </button>
              <p className="text-white text-lg">
                © 2025 SimpleApp. Todos los derechos reservados.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {/* Términos y privacidad */}
              <div>
                <h4 className="font-semibold mb-2 font-poppins text-[white] ">
                  Términos y privacidad
                </h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Términos de uso
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Política de privacidad
                    </a>
                  </li>
                </ul>
              </div>

              {/* Ayuda y soporte */}
              <div>
                <h3 className="font-semibold mb-2 font-poppins text-[white]">
                  Ayuda y soporte
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Centro de ayuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Soporte técnico
                    </a>
                  </li>
                </ul>

                <h3 className="font-semibold mb-2 font-poppins text-[white] mt-[10%]">
                  Aplicaciones
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Disponible para Android
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Disponible para iOS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-semibold mb-2 font-poppins text-[white]">
                  Social
                </h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[white] font-light"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutTest;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
import device3 from "../img/device3.webp";
import fichas from "../img/fichas.webp";
import FaqAccordion from "./FaqAccordion";
import fichasHorizontales from "../img/fichasHorizontales.webp";
import fondofinal from "../img/fondofinal.webp";
import insta1 from "../img/insta1.webp";
import face1 from "../img/face1.webp";
import twitter1 from "../img/twitter1.webp";
import tiktok from "../img/tiktok.webp";
import youtube from "../img/youtube.webp";
import deviceshadowx4 from "../img/deviceshadowx4.webp";
import finanzasatr from "../img/finanzasatr.webp";
import aprendeAA from "../img/aprendeAA.webp";
import fichasMovil from "../img/fichasMovil.webp";
import finalMovil from "../img/finalMovil.webp";
import logo2 from "../img/logo2.webp";
import downloadB from "../img/downloadB.webp";
import movilgroup from "../img/movilgroup.webp";
import terminos from "../Documentos/terminos.pdf";
import privacidad from "../Documentos/privacidad.pdf";

const LayoutTest = (props) => {
  const { children } = props;
  const [openIndex, setOpenIndex] = useState(null);
  


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado con el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el event listener para el cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="max-w-[1888px] mx-auto my-auto">
        <div
          className="sm:h-[1300px] bg-no-repeat sm:bg-top h-[900px] bg-bottom py-0"
          style={{ backgroundImage: `url(${fondo_1})` }}
        >
          <div className="justify-between flex p-12 sm:pb-[200px]">
            <img src={logo2} alt="" className="sm:w-32 w-24" />
            <button className="bg-[white] rounded-3xl text-[#1685FE] font-semibold sm:w-[256px] w-[75px]">
              <img
                src={downloadB}
                alt="Descargar"
                className="w-8 h-auto justify-self-center sm:hidden"
              />
              <span className="hidden sm:inline-block">Descargar</span>
            </button>
          </div>
          <img src={movilgroup} alt="" className="block sm:hidden mx-auto" />

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 items-center justify-items-center px-8 py-12 relative">
            {/* Columna 1: Texto AHORRAR y ES */}
            <div className="col-span-1 text-white font-bold text-center relative">
              {/* Texto AHORRAR: Posicionado un poco arriba de la imagen */}
              <div className="text-6xl sm:text-8xl md:text-9xl leading-none absolute top-[-430px] left-[150px] ">
                AHORRAR
              </div>

              {/* Texto ES: Posicionado a la izquierda del teléfono */}
              <div className="text-6xl sm:text-8xl md:text-9xl leading-none absolute right-[50%] left-[250px] transform -translate-y-[200%] top-[-50px]">
                ES
              </div>
            </div>

            {/* Columna 2: Teléfono */}
            <div className="col-span-1 z-20">
              <img
                src={devicenoshadow} // Imagen del teléfono
                alt="Phone App"
                className="w-64 sm:w-80 max-w-full"
              />
            </div>

            {/* Columna 3: Texto SIMPLE + QR */}
            <div className="col-span-1 text-white justify-items-left text-center left-[20%] transform -translate-x-[55%]">
              <img src={perfil} alt="" className="w-16 sm:w-32 mx-0" />
              <div className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4">
                SIMPLE
              </div>
              <div className="flex items-center justify-left space-x-4">
                {/* Contenedor para QR y texto */}
                <div className="flex items-center space-x-4">
                  {/* Imagen del QR */}
                  <img
                    src={qrcode} // Imagen del QR
                    alt="QR Code"
                    className="w-24 sm:w-40 h-24 sm:h-40 bg-white p-1"
                  />

                  {/* Texto junto al QR */}
                  <p className="text-sm sm:text-lg text-left">
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

        <div className="text-center text-2xl italic font-serif px-4 sm:px-8 md:px-12 ">
          <p>
            <span className="bg-blue-100 text-blue-900 p-1 inline-block rounded-lg">
              “Ahorrar no es solo guardar dinero. Es construir la vida que
              quieres.”
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center mt-[10%] mb-[15%]">
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
          className="h-[976px] bg-no-repeat bg-bottom bg-cover"
          style={{
            backgroundImage: `url(${
              windowWidth > 640 ? frame_393_1 : finanzasatr
            })`, // Cambiar la imagen dependiendo del tamaño de la ventana
          }}
        >
          <div className="flex justify-center items-center p-8 sm:p-12  text-white font-poppins font-bold text-4xl sm:text-[32px] md:text-7xl ">
            <p className="text-center leading-normal">
              Finanzas a tu <br /> ritmo, sin horarios ni <br /> fronteras
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 mt-2 sm:mt-2  md:flex-row md:justify-center md:gap-4">
            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-300 shadow-md w-auto">
              <img src={apple} alt="Apple logo" className="w-6 sm:w-8 h-auto" />
              <div className="text-left leading-tight">
                <p className="text-xs sm:text-sm font-poppins font-medium">
                  Disponible en la
                </p>
                <p className="text-xs sm:text-sm font-poppins font-medium">
                  App Store
                </p>
              </div>
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-300 shadow-md w-auto">
              <img
                src={playstore}
                alt="Playstore logo"
                className="w-6 sm:w-8 h-auto"
              />
              <div className="text-left leading-tight">
                <p className="text-xs sm:text-sm font-poppins font-medium">
                  Disponible en la
                </p>
                <p className="text-xs sm:text-sm font-poppins font-medium">
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>

        <div
          className="h-[1080px] bg-no-repeat bg-center bg-cover p-[16px] sm:p-[50px] flex flex-col md:flex-row items-center justify-between"
          style={{
            backgroundImage: `url(${group_50})`,
            backgroundSize: "calc(100% + 5px) 100%",
          }}
        >
          <div className="text-white font-poppins flex flex-col items-center md:items-start  px-[10%]">
            <h1 className="font-bold text-[40px] sm:text-[80px] leading-[1.1] tracking-wide mb-8 text-left md:text-left">
              Aprende a ahorrar <br />
              sin aburrirte
            </h1>

            <p className="font-medium text-2xl sm:text-5xl leading-tight mb-10 text-left md:text-left">
              Simple convierte la educación <br />
              financiera en una experiencia <br />
              divertida.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-left md:text-left">
              Con cursos{" "}
              <span className="font-semibold">
                dinámicos, retos y recompensas virtuales, <br />
                ahorrar y aprender
              </span>{" "}
              sobre finanzas nunca fue tan fácil (ni <br />
              tan entretenido).
            </p>
          </div>

          <div className="mt-[20px] sm:mt-[50px] flex justify-center items-center">
            {/* Imagen para pantallas móviles */}
            <img
              src={device3}
              alt="Device Mobile"
              className="w-[90%] sm:hidden"
            />

            {/* Imagen para pantallas más grandes */}
            <img
              src={device2}
              alt="Device"
              className="hidden sm:block w-[90%] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px]"
            />
          </div>
        </div>

        <div
          className="h-[2600px] bg-no-repeat bg-center sm:bg-cover p-12 sm:h-[2800px]"
          style={{
            backgroundImage: `url(${windowWidth > 640 ? fichas : fichasMovil})`,
            backgroundSize: windowWidth > 640 ? "100% auto" : "100% 100%", // En móviles se ajusta a todo el ancho y alto de la pantalla
          }}
        >
          <div className="font-poppins text-center sm:text-left">
            <h1 className="text-[#4DA4FF] font-bold text-[44px] text-center sm:text-[80px] md:px-[18%] px-[1%] mt-[45px] pb-[3%]">
              ¡El primer juego que te ayuda a tener más dinero!
            </h1>
            <p className="text-[black] font-medium text-[18px] text-center px-8 sm:text-[24px] md:px-[19%] px-[4%]">
              Diseñamos Simple para que aprender finanzas personales no sea una
              carga, sino un reto que disfrutes completar todos los días. Todo
              está pensado para que avances a tu ritmo y construyas hábitos
              reales.
            </p>
          </div>

          {/* Grid de contenido */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[115px]">
            {/* Primer bloque */}
            <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
              <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[-75px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
                Retos semanales
              </h2>
              <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[15%] px-[1%] pt-[20px]">
                Supera misiones simples que te ayudan a ahorrar sin darte
                cuenta.
              </p>
            </div>

            {/* Segundo bloque */}
            <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
              <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[45px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
                Sistema de logros
              </h2>
              <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[15%] px-[1%] pt-[20px]">
                Gana trofeos y premios virtuales por cada paso que des.
              </p>
            </div>

            {/* Tercer bloque */}
            <div className="font-poppins text-center px-4 sm:px-8 md:px-[80px] flex flex-col h-full">
              <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[20%] mt-[80px] md:mt-[30px] sm:whitespace-normal whitespace-nowrap">
                Cursos interactivos
              </h2>
              <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[10%] px-[5%] pt-[20px]">
                Aprende desde lo más básico hasta estrategias más avanzadas.
              </p>
            </div>
          </div>

          {/* Segundo grupo de bloques con 2 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-[175px] sm:pt-[75px]">
            {/* Primer bloque */}
            <div className="font-poppins text-center pl-4 sm:pl-[40px] md:pl-[250px] flex flex-col h-full">
              <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[30%] mt-[-80px] md:mt-[40px] sm:whitespace-normal whitespace-nowrap">
                Comparte y compite
              </h2>
              <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[25%] px-[10%] pt-[20px]">
                Rétate con amigos y descubre quién ahorra mejor.
              </p>
            </div>

            {/* Segundo bloque */}
            <div className="font-poppins text-center pr-4 sm:pr-[40px] md:pr-[250px] flex flex-col h-full">
              <h2 className="font-bold text-[28px] sm:text-[44px] text-[#4DA4FF] md:px-[25%] mt-[80px] md:mt-[30px] sm:whitespace-normal whitespace-nowrap ml-[-20px]">
                Seguimiento de progreso
              </h2>
              <p className="font-medium text-[16px] sm:text-[24px] text-[black] md:px-[25%] px-[10%] pt-[20px]">
                Visualiza tu avance y celebra tus mejoras financieras.
              </p>
            </div>
          </div>

          {/* Sección de Preguntas Frecuentes */}
          <div className="mt-[40%]  sm:px-8 md:px-[175px]">
            <h1 className="text-4xl sm:text-7xl font-poppins font-bold text-center text-[#4DA4FF] mb-[5%]">
              Preguntas frecuentes
            </h1>
            <div
              id="Faq"
              className={`faq-container ${
                openIndex !== null ? "expanded" : ""
              }`}
            >
              <FaqAccordion />
            </div>
          </div>
        </div>

        <img
          src={fichasHorizontales}
          alt=""
          className="w-[90%] mx-auto hidden md:block "
        />

        <div
          className="md:h-[1100px] bg-no-repeat bg-center bg-contain mt-[2%] flex flex-col items-center h-[2547px]"
          style={{
            backgroundImage: `url(${
              windowWidth > 640 ? fondofinal : finalMovil
            })`,
            backgroundSize:
              windowWidth > 640 ? "calc(100% + 20px) 100%" : "100% 100%", // En móviles se ajusta a todo el ancho y alto de la pantalla
          }}
        >
          <h1 className="text-white font-bold leading-relaxed text-5xl sm:text-7xl pt-[5%] pb-[3%] px-[4%] text-center font-poppins md:px-[25%]">
            Ya diste el primer paso, ahora ve por más
          </h1>

          <p className="text-white font-regular leading-relaxed text-xl pb-[2%] px-[15%] text-center font-poppins sm:px-[35%]">
            Cursos para aprender a ahorrar e invertir, aprender a ahorrar es
            solo el comienzo. Descubre nuestros cursos en Udemy y domina tus
            finanzas con contenido práctico, útil y hecho para ti.
          </p>

          <button className="bg-white rounded-3xl text-[#1685FE] font-bold w-[256px] mb-[800px] h-[3.5rem] md:mb-[15%]">
            Saber más
          </button>

          <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 gap-10 justify-around w-full">
            {/* Simple Logo Section */}
            <div className="flex flex-col items-start text-left sm:items-start sm:text-left px-[20%]">
  <img src={logo1} alt="Simple Logo" className="mb-4" />
  <p className="text-[black] font-poppins mb-4">Conoce más</p>
  <div className="flex gap-3 my-4 justify-start">
    <a href="#" className="text-[black]">
      <img src={tiktok} alt="" />
    </a>
    <a href="#" className="text-[black]">
      <img src={insta1} alt="" />
    </a>
    <a href="#" className="text-[black]">
      <img src={face1} alt="" />
    </a>
    <a href="#" className="text-[black]">
      <img src={youtube} alt="" />
    </a>
    <a href="#" className="text-[black]">
      <img src={twitter1} alt="" />
    </a>
  </div>
  <button className="bg-transparent rounded-3xl text-[black] font-bold w-[256px] h-[3rem] mb-[3%] border-[3px] border-[black] hover:bg-[#4C4C4C] hover:bg-opacity-50">
    Descargar App
  </button>
  <p className="text-[black] text-lg px-[15%] sm:px-[0]">
    © 2025 SimpleApp. Todos los derechos reservados.
  </p>
</div>


            {/* Footer Links */}
            <div className="flex flex-col sm:grid sm:grid-cols-4 gap-8 text-center sm:text-left">
              {/* Términos y privacidad */}
              <div>
                <h4 className="font-semibold mb-2 font-poppins text-[black]">
                  Términos y privacidad
                </h4>
                <ul>
                  <li>
                    <a
                      href={terminos}
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Términos de uso
                    </a>
                  </li>
                  <li>
                    <a
                      href={privacidad}
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Política de privacidad
                    </a>
                  </li>
                </ul>
              </div>

              {/* Ayuda y soporte */}
              <div>
                <h3 className="font-semibold mb-2 font-poppins text-[black]">
                  Ayuda y soporte
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Centro de ayuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Faq"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Soporte técnico
                    </a>
                  </li>
                </ul>

                <h3 className="font-semibold mb-2 font-poppins text-[black] mt-[10%]">
                  Aplicaciones
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Disponible para Android
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Disponible para iOS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-semibold mb-2 font-poppins text-[black]">
                  Social
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/simple_app_/"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@app_simple"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/lappsimple"
                      className="hover:underline font-poppins text-[black] font-light"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@app_simple"
                      className="hover:underline font-poppins text-[black] font-light"
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

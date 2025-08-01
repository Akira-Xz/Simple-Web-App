import insta1 from "../../img/insta1.webp";
import face1 from "../../img/face1.webp";
import twitter1 from "../../img/twitter1.webp";
import tiktok from "../../img/tiktok.webp";
import youtube from "../../img/youtube.webp";
import logo1 from "../../img/logo1.webp";

import end from "../../img/end.png";
import terminos from "../../Documentos/terminos.pdf";
import privacidad from "../../Documentos/privacidad.pdf";
const Footer = () => {
  return (
    <div className="relative md:h-[1100px] mt-[2%] flex flex-col items-center h-[2330px] bg-blueSimple z-10 overflow-hidden">
      {/* Imagen al fondo */}
      <img
        src={end}
        alt="footer"
        className="absolute bottom-0 left-[-3px]  object-fill z-0"
      />

      <h1 className="text-white font-bold leading-relaxed text-5xl sm:text-7xl pt-[5%] pb-[3%] px-[4%] text-center font-poppins md:px-[25%] z-10">
        Ya diste el primer paso, ahora ve por más
      </h1>

      <p className="text-white font-regular leading-relaxed text-xl pb-[2%] px-[15%] text-center font-poppins sm:px-[35%]">
        Cursos para aprender a ahorrar e invertir, aprender a ahorrar es solo el
        comienzo. Descubre nuestros cursos en Udemy y domina tus finanzas con
        contenido práctico, útil y hecho para ti.
      </p>

      <button className="bg-white rounded-3xl text-[#1685FE] font-bold w-[256px] mb-[800px] h-[3.5rem] md:mb-[15%]">
        Saber más
      </button>

        <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 gap-10 justify-around w-full z-10">
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
  );
};
export default Footer;

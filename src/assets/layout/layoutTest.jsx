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
            <h3 className="mt-2 text-2xl font-semibold font-poppins">A tu ritmo.</h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Personaliza tu forma de ahorrar y de administrar tus finanzas de manera sencilla. Personaliza tu perfil, personaliza a Luca, personaliza tu experiencia
            </p>
          </div>

          <div className="text-center">
            <img
              src={luca4}
              alt="Imagen 2"
              className="w-48 h-auto rounded-lg justify-self-center"
            />
            <h3 className="mt-2 text-2xl font-semibold font-poppins">Estamos contigo</h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Siempre vamos a cuidarte a ti y a tu dinero, por lo que te enviaremos recordatorios para que ahorres o gastes de manera inteligente.
            </p>
          </div>

          <div className="text-center">
            <img
              src={luca2}
              alt="Imagen 3"
              className="w-48 h-auto rounded-lg justify-self-center"
            />
            <h3 className="mt-2 text-2xl font-semibold font-poppins">FINANZAS SIMPLES</h3>
            <p className="mt-1 text-gray-600 text-lg font-poppins font-regular px-[16%]">
              Gestiona tu dinero sin complicaciones. Ahorra, controla y mejora tus finanzas desde una sola app. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutTest;

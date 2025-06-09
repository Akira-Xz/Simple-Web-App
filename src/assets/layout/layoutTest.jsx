import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import fondo_1 from "../img/fondo_1.webp";
import logo1 from "../img/logo1.webp";
import devicenoshadow from "../img/devicenoshadow.webp";
import qrcode from "../img/qrcode.webp";
import perfil from "../img/perfil.webp";

const LayoutTest = (props) => {
  const { children } = props;
  return (
    <>
      <div>
        <div
          className="h-screen bg-fit bg-center"
          style={{ backgroundImage: `url(${fondo_1})` }}
        >
          <div className="justify-between flex p-12">
            <img src={logo1} alt="" />
            <button className=" bg-[white] rounded-3xl text-[#1685FE] font-semibold w-[256px]">
              Descargar
            </button>
          </div>
          <div className="flex justify-center space-x-12">
            {/* Sección de texto */}
            <div className="text-white text-6xl font-bold space-y-4">
              <div className="flex space-x-2">
                <span className="text-xl">AHORRAR</span>
                <span className="text-6xl">ES</span>
              </div>
              <div className="relative">
              <img
                src={devicenoshadow} // Cambia la ruta de la imagen del teléfono
                alt="Phone App"
                className="w-80"
              />
              <img src={perfil} alt="" />
              <div className="text-7xl">SIMPLE</div>
            </div>

            {/* Sección de la imagen del teléfono */}
            

              {/* Sección del QR Code */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <img
                  src={qrcode} // Cambia la ruta del QR
                  alt="QR Code"
                  className="w-20 h-20 bg-[white] p-1"
                />
                <p className="text-center text-white text-sm mt-2">
                  Un QR.
                  <br /> Una app.
                  <br />
                  Un nuevo hábito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutTest;

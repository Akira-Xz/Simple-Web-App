import devicenoshadow from "../../img/devicenoshadow.webp";
import qrcode from "../../img/qrcode.webp";
import perfil from "../../img/perfil.webp";
import "./css/principal.css";

const Principal = () => {
  return (
    <div className=" md:grid grid-cols-1 md:grid-cols-3 items-center justify-items-center px-8 py-[48px] relative mt-[50px] md:mt-[100px]">
      {/* Columna 1: Texto AHORRAR y ES */}
      <div className="col-span-1 text-white font-bold text-center relative">
        <div className="text-6xl sm:text-8xl md:text-9xl leading-none absolute top-[-90px] left-[-120px] md:top-[-430px] md:left-[150px]">
          AHORRAR
        </div>
        <div className="text-6xl sm:text-8xl md:text-9xl leading-none absolute top-[90px] left-[-125px] sm:top-[100px] sm:left-[-120px] md:top-[-50px] md:left-[250px] transform -translate-y-[200%]">
          ES
        </div>

        <div className="w-[67px]  ">
          <img
            src={perfil}
            alt=""
            className="w-[100%] absolute top-[50px] left-[-120px] sm:left-8  md:hidden"
          />
        </div>

        <div className="md:hidden flex flex-col leading-none absolute top-[530px] left-[-125px]  md:top-[-50px] md:left-[250px] transform -translate-y-[200%]">
          <img src={qrcode} alt="QR Code" className="w-[59px] bg-white p-1" />
          <p className="text-sm sm:text-lg text-left font-medium">
            Un QR.
            <br />
            Una app.
            <br />
            Un nuevo hábito.
          </p>
        </div>
      </div>

      {/* Columna 2: Teléfono */}
      <div className="col-span-1 z-20">
        <img
          src={devicenoshadow}
          alt="Phone App"
          className="w-64 sm:w-80 max-w-full mt-[-50px] ml-[40px] md:ml-0"
        />
      </div>

      {/* Columna 3: Texto SLIDE + QR */}
      <div className=" col-span-1 text-white justify-items-left text-center transform -translate-x-[10%]">
        <img
          src={perfil}
          alt=""
          className="w-16 sm:w-32 mx-0 hidden md:block"
        />

        {/* Sliding text */}
        <div className="h-[101px] overflow-hidden mb-4 ml-[120px] md:ml-0">
          <div className="flex flex-col animate-slide">
            <div className="h-[100px] flex items-center justify-start  text-6xl sm:text-8xl md:text-9xl font-bold text-left">
              DIVERTIDO
            </div>
            <div className="h-[100px] flex items-center justify-start  text-6xl sm:text-8xl md:text-9xl font-bold  text-left">
              INTELIGENTE
            </div>
            <div className="h-[100px] flex items-center justify-start  text-6xl sm:text-8xl md:text-9xl font-bold  text-left">
              SIMPLE
            </div>
          </div>
        </div>

        {/* QR + texto */}
        <div className="hidden md:flex items-center justify-left space-x-4">
          <div className="flex items-center space-x-4">
            <img
              src={qrcode}
              alt="QR Code"
              className="w-24 sm:w-40 h-24 sm:h-40 bg-white p-1"
            />
            <p className="text-sm sm:text-lg text-left font-medium">
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
  );
};

export default Principal;

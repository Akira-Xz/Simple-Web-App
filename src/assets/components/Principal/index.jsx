import devicenoshadow from "../../img/devicenoshadow.webp";
import qrcode from "../../img/qrcode.webp";
import perfil from "../../img/perfil.webp";
import "./css/principal.css";

const Principal = () => {
  return (
    <div className="  m-0 mx-auto md:grid grid-cols-1 md:grid-cols-3 items-center justify-items-center px-8 py-[48px] relative mt-[50px] md:mt-[100px]">
      {/* Columna 1: Texto AHORRAR y ES */}
      <div className="col-span-1 text-white font-bold text-center relative">
        <div className="text-6xl md:text-8xl 2xl:text-9xl  leading-none absolute md:left-[90px] 2xl:left-[150px] top-[-90px]  md:top-[-430px] ">
          AHORRAR
        </div>
        <div className="text-6xl md:text-8xl 2xl:text-9xl eading-none absolute md:left-[180px] 2xl:left-[250px] top-[100px] md:top-[-150px] 2xl:top-[-60px]  sm:left-[-120px] transform -translate-y-[200%]">
          ES
        </div>

        <div className="md:w-[20px] xl:w-[67px]  ">
          <img
            src={perfil}
            alt=""
            className=" w-[70px] xl:w-[100%] absolute top-[50px] sm:left-8 md:left-[20px] 2xl:left-[-120px]  md:hidden"
          />
        </div>

        <div className="md:hidden flex flex-col leading-none absolute top-[530px] left-[-125px]  md:top-[-50px] md:left-[250px] transform -translate-y-[200%]">
          <img
            src={qrcode}
            alt="QR Code"
            className="w-[59px] ml-[110px] bg-white p-1"
          />
          <p className="text-sm sm:text-lg text-left font-medium ml-[110px] pt-[10px]">
            Un QR.
            <br />
            Una app.
            <br />
            Un nuevo hábito.
          </p>
        </div>
      </div>

      {/* Columna 2: Teléfono */}
      <div className="col-span-1 z-20 mt-[-60px] ml-[50px] md:mt-[-120px] md:ml-[-100px] 2xl:mt-0 2xl:ml-0">
        <img
          src={devicenoshadow}
          alt="Phone App"
          className="w-[300px] md:w-[300px] 2xl:w-[345px] ml-[20px] md:ml-0"
        />
      </div>

      {/* Columna 3: Texto SLIDE + QR */}
      <div className="w-[500px] md:w-[130%] text-white justify-items-left text-center mr-[20%] mt-[-30px] md:mt-0">
        <img
          src={perfil}
          alt=""
          className="w-16 sm:w-32 mx-0 hidden md:block"
        />

        {/* Sliding text */}
        <div className="h-[105px] overflow-hidden mb-4 ml-[-10px] md:ml-0 md:pl-[40px] ">
          <div className="flex flex-col animate-slide">
            <div className="h-[100px] flex items-center justify-start text-6xl  md:text-[95px]  2xl:text-[110px]  2xl:text font-bold text-left">
              DIVERTIDO
            </div>
            <div className="h-[100px] flex items-center justify-start text-6xl md:text-[90px] 2xl:text-[110px]  font-bold  text-left">
              INTELIGENTE
            </div>
            <div className="h-[100px] flex items-center justify-start text-6xl  md:text-[95px]  2xl:text-[110px]  font-bold  text-left">
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

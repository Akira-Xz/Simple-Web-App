import examplemob from "../../img/examplemob.png";

export const Banner = () => {
  return (
    <div
      className="h-fit bg-[#4BA4FF] bg-no-repeat bg-center bg-cover p-[16px] sm:p-[50px] flex flex-col md:flex-row items-center justify-between"
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
    

        {/* Imagen para pantallas más grandes */}
        <img
          src={examplemob}
          alt="Device"
          className=" sm:block w-[90%] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] 2xl:w-[700px]"
        />
      </div>
    </div>
  );
};
export default Banner;

import escalera from "../../img/Escalera.svg";
const Quote = () => {
  return (
    <div
      className="relative flex px-4 sm:px-8 md:px-12 md:mt-[100px] gap-[20px] font-semibold leading-snug "
      data-scroll
    >
      {/* Contenedor de texto (con altura grande para generar scroll) */}
      <div className="flex-1 font-poppins text-4xl">
        <div className="h-[300dvh] flex flex-col justify-between py-[50px]">
          <div className="h-screen flex items-center">
            <h5>
              <span className="italic font-bold">Ahorrar </span>{" "}
              <span className="italic font-normal">
                no es solo guardar dinero. Es{" "}
              </span>
              <span className="italic font-bold">construir</span> la vida que
              quieres.
            </h5>
          </div>
          <div className="h-screen flex items-center">
            <h5>
              <span className="italic font-bold">¿Quién quieres ser</span>,
              <span className="italic font-normal">
                {" "}
                y cómo pueden tus finanzas ayudarte a llegar ahí ?
              </span>
            </h5>
          </div>
          <div className="h-screen flex items-center">
            <h5>
              Es <span className="italic font-bold">tomar el control,</span>
              reducir el estrés y darle{" "}
              <span className="italic font-bold">propósito</span> a cada peso.
            </h5>
          </div>
        </div>
      </div>

      {/* Contenedor del sticky con Locomotive */}
      <div
        className="w-1/2 relative"
        data-scroll
        data-scroll-target="#sticky-container"
      >
        <div id="sticky-container" className="relative h-[300dvh]">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky-container"
            className=" h-screen w-full flex items-center justify-center"
          >
            <img
              src={escalera}
              data-scroll
              className="absolute mt-[90%]  md:mt-[70%] py-[70%] w-[70%] md:w-[30%] z-[-1]"
              data-scroll-direction="vertical"
              data-scroll-speed={5}
            ></img>

            <iframe
              src="/animations/luca-escalando.html"
              title="Animación Luca"
              className="w-full h-full pointer-events-none"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

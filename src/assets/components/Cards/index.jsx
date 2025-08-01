import luca1 from "../../img/luca1.webp";
import luca4 from "../../img/luca4.webp";
import luca2 from "../../img/luca2.webp";
const Cards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 items-center justify-items-center mt-[10%] mb-[15%]">
      {/* Tarjeta 1 */}
      <article className="text-center  md:hover:scale-[105%] transition-transform duration-300">
        <figure>
          <img
            src={luca1}
            alt="Personaliza tu experiencia financiera"
            className="w-48 h-auto rounded-lg mx-auto"
          />
        </figure>
        <header>
          <h3 className="mt-2 text-2xl font-semibold font-poppins">
            A tu ritmo.
          </h3>
        </header>
        <p className="mt-1 text-gray-600 text-lg font-regular font-poppins px-[16%]">
          Personaliza tu forma de ahorrar y administrar tus finanzas de manera
          sencilla. Personaliza tu perfil, personaliza a Luca, personaliza tu
          experiencia.
        </p>
      </article>

      {/* Tarjeta 2 */}
      <article className="text-center md:hover:scale-[105%] transition-transform duration-300">
        <figure>
          <img
            src={luca4}
            alt="Soporte financiero constante"
            className="w-48 h-auto rounded-lg mx-auto"
          />
        </figure>
        <header>
          <h3 className="mt-2 text-2xl font-semibold font-poppins">
            Estamos contigo
          </h3>
        </header>
        <p className="mt-1 text-gray-600 text-lg font-regular font-poppins px-[16%]">
          Siempre vamos a cuidarte a ti y a tu dinero. Te enviaremos
          recordatorios para que ahorres o gastes de manera inteligente.
        </p>
      </article>

      {/* Tarjeta 3 */}
      <article className="text-center  md:hover:scale-[105%] transition-transform duration-300">
        <figure>
          <img
            src={luca2}
            alt="App de finanzas simples"
            className="w-48 h-auto rounded-lg mx-auto"
          />
        </figure>
        <header>
          <h3 className="mt-2 text-2xl font-semibold font-poppins">
            Finanzas simples
          </h3>
        </header>
        <p className="mt-1 text-gray-600 text-lg font-regular font-poppins px-[16%]">
          Gestiona tu dinero sin complicaciones. Ahorra, controla y mejora tus
          finanzas desde una sola app.
        </p>
      </article>
    </section>
  );
};
export default Cards;

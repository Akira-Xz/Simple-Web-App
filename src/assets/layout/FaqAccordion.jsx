import { useState } from 'react';

const FaqAccordion = () => {
  // Estado para manejar qué pregunta está abierta
  const [openIndex, setOpenIndex] = useState(null);

  // Lista de preguntas y respuestas
  const faqs = [
    {
      question: "¿Qué es Simple?",
      answer: "Simple es una aplicación móvil que puedes utilizar como herramienta para gestionar tus finanzas personales. En esta primera versión podrás utilizar la aplicación para ahorrar una cantidad en específica o crear tu fondo de emergencias.",
    },
    {
      question: "¿Para qué existe Simple®?",
      answer: "El equipo de Simple está convencido que existe aún mucho por hacer en el ámbito de la educación financiera en México. Es por esto que hemos decidido crear Simple®, una aplicación que busca ayudarte con tus finanzas y lograr un cambio real en la inclusión financiera.",
    },
    {
      question: "¿Cómo me puedo contactar con ustedes?",
      answer: "Puedes brindarnos una sugerencia en Configuración > Soporte > Sugerencias, o también, para mantenerte en contacto con nosotros, te ofrecemos los siguientes canales de comunicación:",
      answer2: "Correo: contacto@app-simple.com Facebook: @lappsimple Instagram: @simple_app_"
    },
    {
      question: "¿A partir de qué edad puedo usar la app?",
      answer: "Desde los 13 años en adelante puede utilizarse la app, especialmente para aprender sobre educación financiera. De 18 años en adelante la app funciona como una herramienta financiera para la gestión de las finanzas personales. ",
    },
    {
      question: "¿En qué países está disponible?",
      answer: "Actualmente la aplicación solo está disponible para México a nivel nacional. Estamos trabajando para ampliarlo a nivel Latinoamérica. ",
    },
    {
      question: "¿La empresa o la app administra mi dinero?",
      answer: "No realmente. Simple, o la app, no están destinadas para administrar o tener tu dinero o patrimonio. Solo te ayudamos con la gestión del mismo, sin embargo te sugerimos guardar tu dinero en una institución que brinde te proporcione una tarjeta de débito, como un banco.",
    },
    {
      question: "¿Es gratis usar la app?",
      answer: "Sí, el uso de la aplicación es totalmente gratuito.  Simple ofrece, a su vez, cursos de educación financiera (para aprender a ahorrar e invertir), estos tienen un costo y se compran en Udemy.  De igual forma, en la app existe la opción de tener el Plan Plus, que incluye clases para aprender a gestionar tus finanzas personales y un chat financiero para resolver dudas 24/7",
    },
  ];

  const handleToggle = (index) => {
    // Si la misma pregunta se clickea, se cierra. Si no, se abre la nueva.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[160vh] mx-auto">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left px-4 py-2 font-semibold text-gray-800 bg-gray-100 rounded-lg focus:outline-none h-[5rem] font-poppins"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center justify-between">
                <span>{faq.question}</span>
                <svg
                  className={`h-4 w-4 transform ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            {openIndex === index && (
              <div className="faq-content px-4 py-3 text-gray-800 bg-gray-100 rounded-b-lg mt-[-1%] overflow-hidden transition-all duration-300 max-h-[500px]">
                {faq.answer}
                <br />
                {faq.answer2}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;

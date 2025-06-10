import { useState } from 'react';

const FaqAccordion = () => {
  // Estado para manejar qué pregunta está abierta
  const [openIndex, setOpenIndex] = useState(null);

  // Lista de preguntas y respuestas
  const faqs = [
    {
      question: "¿Qué es Simple?",
      answer: "Simple es una app que te ayuda a gestionar tu dinero de manera fácil y segura.",
    },
    {
      question: "¿Para qué existe Simple®?",
      answer: "Simple existe para facilitarte el acceso y control sobre tus finanzas.",
    },
    {
      question: "¿Cómo me puedo contactar con ustedes?",
      answer: "Puedes contactarnos a través de nuestro formulario en línea o por correo electrónico.",
    },
    {
      question: "¿A partir de qué edad puedo usar la app?",
      answer: "La app está disponible para usuarios mayores de 18 años.",
    },
    {
      question: "¿En qué países está disponible?",
      answer: "Está disponible en varios países de América Latina.",
    },
    {
      question: "¿La empresa o la app administra mi dinero?",
      answer: "No, Simple solo te ayuda a gestionar tu dinero, no lo administra.",
    },
    {
      question: "¿Es gratis usar la app?",
      answer: "Sí, la app es completamente gratuita.",
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
              <div className="px-4 py-3 text-gray-800 bg-gray-100 rounded-b-lg mt-[-1%]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;

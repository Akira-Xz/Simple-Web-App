import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import fondo_1 from "../img/fondo_1.webp";
import logo1 from "../img/logo1.webp";

import insta1 from "../img/insta1.webp";
import face1 from "../img/face1.webp";
import twitter1 from "../img/twitter1.webp";
import tiktok from "../img/tiktok.webp";
import youtube from "../img/youtube.webp";

import terminos from "../Documentos/terminos.pdf";
import privacidad from "../Documentos/privacidad.pdf";
import Navbar from "../components/Navbar";
import Principal from "../components/Principal";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import Quote from "../components/Quote";
import Islands from "../components/Islands";
import Cards from "../components/Cards";
import Banner from "../components/banner";
import CoinsSection from "../components/coinssection";
import Footer from "../components/footer";

const LayoutTest = (props) => {
  const { children } = props;
  const [openIndex, setOpenIndex] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxHeight, setMaxHeight] = useState(1080);

  useEffect(() => {
    // Función para actualizar el estado con el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el event listener para el cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setMaxHeight(window.innerHeight);
    };

    updateHeight(); // Establecer al montar
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const scrollRef = useRef(null); // referencia al scroll container

  useEffect(() => {
    if (!scrollRef.current) return;

    const width = window.innerWidth;
    let lerpValue = 0.15;

    if (width >= 1440) {
      // PC/monitor grande
      lerpValue = 0.08;
    } else if (width >= 1024 && width < 1440) {
      // Laptop
      lerpValue = 0.14; // más fluido pero sin tanto delay
    } else {
      // Tablet/móvil
      lerpValue = 0.1;
    }

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: lerpValue,
      tablet: { smooth: true, lerp: 0.12 },
      smartphone: { smooth: true, lerp: 0.12 },
    });

    setTimeout(() => scroll.update(), 500);

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        data-scroll-container
        className="mx-auto max-w-[1990px]"
      >
        <div
          className="bg-cover bg-no-repeat bg-center h-[100vh] "
          style={{
            height: `${maxHeight + 200}px`,
            backgroundImage: `url(${fondo_1})`,
          }}
        >
          <Navbar />
          <div className="flex flex-col items-center">
            <Principal />
          </div>
        </div>

        <Quote />

        <Cards />

        <Islands />

        <Banner />

        <CoinsSection />

        <Footer />
      </div>
    </>
  );
};

export default LayoutTest;

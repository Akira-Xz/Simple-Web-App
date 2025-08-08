import logo2 from "../../img/logo2.webp";
import DownloadIcon from "@mui/icons-material/Download";
import { useMediaQuery } from "@mui/material";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:639px)");

  return (
    <nav className="justify-between flex px-10 py-5 md:p-12 items-center ">
      <a href="#">
        <img src={logo2} alt="Logo" className="sm:w-32 w-24" />
      </a>

      <button
        className="relative  overflow-hidden bg-white font-semibold !h-[48px] w-[72px] md:w-[256px] rounded-[32px] text-blueSimple shadow-2xl transition-all duration-200
        before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
        before:h-0 before:w-0 before:rounded-sm before:bg-blueSimple before:duration-300 before:ease-out
        before:z-0 hover:text-white hover:shadow-indigo-600 hover:before:h-[265px] hover:before:w-[256px] hover:before:opacity-80 hover:border-2 hover:border-white
        "
      >
        <span className="relative z-10">
          {isMobile ? (
            <DownloadIcon className="text-blueSimple" />
          ) : (
            <p>Descargar</p>
          )}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;

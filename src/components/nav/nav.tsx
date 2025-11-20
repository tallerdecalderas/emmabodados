import React, { useState } from "react";
import { ImageUtils } from "@/utils/imgUtils";
import { allImages } from "@/types/imgtype";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-full mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo (izquierda, más grande en desktop) */}
        <div className="flex items-start md:items-center md:flex-1">
          <ImageUtils
            src={allImages.logo}
            alt="Emm Abogados Logo"
            className="
              w-32 md:w-40 h-auto
              -mt-2 -ml-2
              md:mt-0 md:ml-0
            "
          />
        </div>

        {/* Menú DESKTOP centrado */}
        <div className="hidden md:flex md:flex-1 justify-center">
          <ul className="flex gap-8 text-inkBlue font-medium">
            <li>
              <a href="#inicio" className="hover:opacity-70 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:opacity-70 transition">
                Áreas de práctica
              </a>
            </li>
            <li>
              <a href="#estudio" className="hover:opacity-70 transition">
                Nuestro estudio
              </a>
            </li>
            <li>
              <a href="#miembros" className="hover:opacity-70 transition">
                Miembros del equipo
              </a>
            </li>
          </ul>
        </div>

        {/* Derecha: botón desktop + hamburguesa mobile */}
        <div className="flex items-center justify-end md:flex-1 gap-4">
          {/* Botón DESKTOP */}
          <button
            className="hidden md:inline-flex bg-navyDeep text-cloudGray px-4 py-2 rounded-3xl 
            hover:bg-skyBlue transition"
          >
            Contáctanos
          </button>

          {/* Botón hamburguesa MOBILE */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
          >
            <span className="w-6 h-0.5 bg-inkBlue"></span>
            <span className="w-6 h-0.5 bg-inkBlue"></span>
            <span className="w-6 h-0.5 bg-inkBlue"></span>
          </button>
        </div>
      </div>

      {/* Menú desplegable MOBILE (sin cambios) */}
      {isOpen && (
        <div
          className="
            md:hidden
            absolute top-16 right-0
            w-[40%]
            bg-navyDeep/20 backdrop-blur-sm rounded-4xl
          "
        >
          <div className="px-6 pt-3 pb-6 flex flex-col gap-3 text-softGray font-medium">
            <a
              href="#inicio"
              className="hover:opacity-70 transition text-outline-black"
            >
              Inicio
            </a>
            <a
              href="#areas"
              className="hover:opacity-70 transition text-outline-black"
            >
              Áreas de práctica
            </a>
            <a
              href="#estudio"
              className="hover:opacity-70 transition text-outline-black"
            >
              Nuestro estudio
            </a>
            <a
              href="#miembros"
              className="hover:opacity-70 transition text-outline-black"
            >
              Miembros del equipo
            </a>

            <button
              className="mt-2 bg-navyDeep text-cloudGray px-4 py-2 rounded-3xl 
              hover:bg-skyBlue transition self-center"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

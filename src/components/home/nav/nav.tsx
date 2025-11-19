import React from "react";
import { ImageUtils } from "@/utils/imgUtils";
import { allImages } from "@/types/imgtype";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-full mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <ImageUtils
            src={allImages.logo}
            alt="Emma Bodados Logo"
            className="w-32 h-auto"
          />
        </div>

        {/* Menú central */}
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

        {/* Botón derecho */}
        <button
          className="bg-navyDeep text-cloudGray  px-4 py-2 rounded-3xl 
          hover:bg-skyBlue"
        >
          Contáctanos
        </button>

      </div>
    </nav>
  );
}

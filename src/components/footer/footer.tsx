import { ImageUtils } from "@/utils/imgUtils"
import { allImages } from "@/types/imgtype"

export const Footer = () => {
  return (
    <footer className="bg-[#122C4F] text-white py-8 px-4 sm:grid sm:place-items-center">
      <div className="grid place-content-center">
        <div className="flex flex-wrap">

          <div className="text-center">
            <ImageUtils
              src={allImages.logoFooter}
              alt="Logo Emma Bodados"
              className="sm:w-60 h-40"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
            <div className="space-y-2 text-gray-200">
              <p className="flex flex-col md:flex-row md:items-center gap-1">
                <span className="font-medium">Dirección:</span>
                <span>Reconquista 336, piso 6, oficina P6</span>
              </p>
              <p>Buenos Aires - (CP000)</p>
              <p>
                <span className="font-medium">Teléfono:</span> 54 9 0000 0000
              </p>
              <p>
                <span className="font-medium">Mail:</span>
                contacto@emmabogados.com
              </p>
            </div>
          </div>
          <div className=" p-6">
            <h3 className="text-xl font-bold mb-4 text-white">
              Áreas de Práctica
            </h3>
            <div className="space-y-1 text-gray-200">
              <p>Compliance</p>
              <p>Derecho penal empresario</p>
              <p>Sumarios y procedimientos administrativos</p>
              <p>Derecho penal</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} EMM Abogados. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

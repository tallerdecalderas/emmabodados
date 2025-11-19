import { useForm } from "@/hooks";
import { sendEmail } from "@/services/form";
import type { FormType } from "@/types/form";
import { useState } from "react";
import { Popup } from "../popup/popup";

const initialState: FormType = {
    nombre_empresa: "",
    email: "",
    telefono: Number(""),
    motivo: "",
    urgencia: "",
    jurisdiccion: "",
    notificaciones: "",
};

export const Form = () => {
    const { handleChange, resetForm,form } = useForm(initialState);
    const [popup, setPopup] = useState<{ title: string; message: string; type: "success" | "error" } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.nombre_empresa || !form.email) {
            return setPopup({
                title: "Campos requeridos",
                message: "Por favor completa nombre y email",
                type: "error",
            });
        }

        try {
            await sendEmail(form);

            setPopup({
                title: "Éxito",
                message: "Email enviado correctamente",
                type: "success",
            });

            resetForm();
        } catch {
            setPopup({
                title: "Error",
                message: "No se pudo enviar el email. Intenta nuevamente.",
                type: "error",
            });
        }
    };


    return (
        <section className="relative grid place-content-center pt-6 bg-zinc-400">
            <div className="bg-headerblue text-white p-4 rounded-t-lg">
                Envianos tu consulta
            </div>

            <form className="bg-amber-50 p-4" onSubmit={handleSubmit}>

                <div className="flex flex-col pt-8">
                    <span className="font-semibold">Nombre y empresa</span>
                    <label className="p-1">
                        <input
                            type="text"
                            name="nombre_empresa"
                            placeholder="Ej. Julia - AYMA S.A."
                            className="p-1 border rounded-full border-blue-400 text-center"
                            value={form.nombre_empresa}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold">E-mail</span>
                    <label className="p-1">
                        <input
                            type="email"
                            name="email"
                            placeholder="Ej. julia@ayma.com"
                            className="p-1 border rounded-full border-blue-400 text-center"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold">Telefono / Whatsapp</span>
                    <label className="p-1">
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Ej. +54 9 11 1234 5678"
                            className="p-1 border rounded-full border-blue-400 text-center"
                            value={form.telefono}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold">Motivo / Area</span>
                    <label className="p-1">
                        <input
                            type="text"
                            name="motivo"
                            placeholder="Compliance, Panel Económico"
                            className="p-1 border rounded-full border-blue-400 text-center"
                            value={form.motivo}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="mb-2 font-semibold">Urgencia</span>

                    <div className="flex gap-6 p-2">
                        {["baja", "media", "alta"].map((u) => (
                            <label key={u} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="urgencia"
                                    value={u}
                                    checked={form.urgencia === u}
                                    onChange={handleChange}
                                />
                                {u}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold">Jurisdicciones</span>
                    <label className="p-1">
                        <input
                            type="text"
                            name="jurisdiccion"
                            placeholder="AFIP, CNV, BCRA..."
                            className="p-1 border rounded-full border-blue-400 text-center"
                            value={form.jurisdiccion}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold">
                        ¿Tuviste notificaciones / sumario?
                    </span>

                    <div className="flex gap-6 p-2">
                        {["si", "no"].map((op) => (
                            <label key={op} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="notificaciones"
                                    value={op}
                                    checked={form.notificaciones === op}
                                    onChange={handleChange}
                                />
                                {op}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col pt-8">
                    <button
                        type="submit"
                        className="bg-headerblue text-white p-2 rounded-full mt-4 hover:bg-blue-700 transition-colors"
                    >
                        Enviar consulta
                    </button>
                </div>
                {popup && (
                    <Popup
                        title={popup.title}
                        message={popup.message}
                        type={popup.type}
                        onClose={() => setPopup(null)}
                    />
                )}
            </form>
        </section>
    );
};

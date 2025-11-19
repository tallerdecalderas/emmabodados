import { useState } from "react";
import type{ FormType } from "@/types/form";

export const useForm = (initialState: FormType) => {
  const [form, setForm] = useState<FormType>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => setForm(initialState);

  return { form, handleChange, resetForm, setForm};
};

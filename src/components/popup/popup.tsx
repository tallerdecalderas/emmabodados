import type{ FC } from "react";

type PopupProps = {
  title: string;
  message: string;
  type?: "success" | "error" | "warning";
  onClose: () => void;
};

export const Popup: FC<PopupProps> = ({ title, message, type = "success", onClose }) => {
  const bgColor =
    type === "success" ? "bg-green-500" :
    type === "error" ? "bg-red-500" :
    "bg-yellow-500";

  return (
    <div className={`fixed top-5 right-5 p-4 rounded shadow-lg text-white ${bgColor}`}>
      <div className="flex justify-between items-center">
        <strong>{title}</strong>
        <button onClick={onClose} className="ml-4 font-bold">X</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

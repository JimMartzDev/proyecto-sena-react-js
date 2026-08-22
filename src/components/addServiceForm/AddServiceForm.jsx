import { useState } from "react";
import InputAddServiceForm from "./components/inputAddServiceForm/InputAddServiceForm";

export default function AddServiceForm(props) {
  const [urlImg, setUrlImg] = useState("");
  const [desc, setDesc] = useState("");
  const [serv, setServ] = useState("");
  const [costo, setCosto] = useState("");

  const { onSave } = props;

  const manejarImg = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrlImg(url);
    }
  };

  const manejarForm = (e) => {
    e.preventDefault();
    const result = {
      servicio: serv,
      descripcion: desc,
      costo: costo,
      imagen: urlImg,
    };
    console.log("Ejecutando desde AddServiceForm.jsx");
    onSave(result);
  };

  const Etiqueta = (props) => {
    const { htmlFor, nombre } = props;
    return (
      <label htmlFor={htmlFor} className="text-xs text-gray-600 font-bold">
        {nombre}
      </label>
    );
  };

  return (
    <form
      onSubmit={manejarForm}
      className="bg-white rounded-lg shadow p-4 border border-[#f3f4f6] flex flex-col gap-4 "
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full">
          <Etiqueta htmlFor="servicio" nombre="Nombre del servicio" />
          <InputAddServiceForm
            required
            id="servicio"
            placeholder="Ej. Corte de cabello"
            value={serv}
            onChange={(e) => setServ(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Etiqueta htmlFor="descripcion" nombre="Descripción" />
          <textarea
            required
            id="descripcion"
            className=" w-full h-16 bg-gray-50 rounded-lg border border-[#e5e7eb] px-2.5 py-1.5  focus:border-gray-400 focus:outline-none"
            placeholder="Describe el servicio..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full">
          <Etiqueta htmlFor="costo" nombre="Costo" />
          <InputAddServiceForm
            required
            id="costo"
            placeholder="$ 0"
            type="number"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
          />
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-1 gap-4 items-center  text-gray-500">
          <label
            htmlFor="seleccionarImg"
            className="bg-gray-50 border border-[#e5e7eb] focus:border-gray-400 focus:outline-none rounded-lg w-44 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-100 active:bg-gray-300 select-none transition shadow-md duration-150 ease-in-out hover:shadow-lg active:scale-95 active:shadow-sm"
          >
            Seleccionar imagen
          </label>
          <input
            type="file"
            className="hidden pl-2"
            accept="image/*"
            id="seleccionarImg"
            onChange={manejarImg}
          />
          {urlImg ? (
            <img className="h-9 w-9" src={urlImg} alt="Imagen seleccionada" />
          ) : (
            <span>Ningún archivo seleccionado</span>
          )}
        </div>
        <div className="w-52 text-gray-500">
          <button
            type="submit"
            className="color text-white h-9 w-48 bg-green-500 border rounded-lg font-bold cursor-pointer focus:outline-none flex justify-center items-center hover:bg-green-700 active:bg-green-600 select-none transition shadow-md duration-150 ease-in-out hover:shadow-lg active:scale-95 active:shadow-sm text-sm"
          >
            GUARDAR SERVICIO
          </button>
        </div>
      </div>
    </form>
  );
}

import { useState } from "react";
import InputAddServiceForm from "./components/inputAddServiceForm/InputAddServiceForm";

export default function AddServiceForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [urlImg, setUrlImg] = useState("");

  let urlPrueba = "";

  const manejarImg = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrlImg(url);
    }
  };

  const manejarImg2 = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      urlPrueba = url;
    }
  };

  const manejarForm = (event) => {
    event.preventDefault();
  };

  const controlarInputUsuario = (event) => {
    setUser(event.target.value);
  };

  const mostrarUsuario = () => {
    // console.log(user);
    // console.log(pass);
    console.log("Hola Michael");
  };

  const copia = () => {
    mostrarUsuario();
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
    <div className="bg-white rounded-lg shadow p-4 border border-[#f3f4f6] flex flex-col gap-4 ">
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full">
          <Etiqueta htmlFor="servicio" nombre="Nombre del servicio" />
          <InputAddServiceForm
            id="servicio"
            placeholder="Ej. Corte de cabello"
          />
        </div>

        <div className="w-full">
          <Etiqueta htmlFor="descripcion" nombre="Descripción" />
          <textarea
            id="descripcion"
            className=" w-full h-16 bg-gray-50 rounded-lg border border-[#e5e7eb] px-2.5 py-1.5  focus:border-gray-400 focus:outline-none"
            placeholder="Describe el servicio..."
          ></textarea>
        </div>
        <div className="w-full">
          <Etiqueta htmlFor="costo" nombre="Costo" />
          <InputAddServiceForm id="costo" placeholder="$ 0" type="number" />
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
          <button className="" onClick={() => console.log(urlPrueba)}>
            Guardar servicio
          </button>
        </div>
      </div>
      {/* <form onSubmit={manejarForm}>

            <input type="text" name="usuario"  value={user} className="border border-black" onChange={controlarInputUsuario} />
            <input type="text" name="password"  value={pass}  onChange={(e)=>{setPass(e.target.value)}} className="border border-black" />
            <button type="submit" >aaaaaaa</button>
            <button onClick={()=>copia(mostrarUsuario)}>bbbbb</button>
        </form> */}
    </div>
  );
}

import { useState } from "react";
import InputAddServiceForm from "./components/inputAddServiceForm/InputAddServiceForm";

export default function AddServiceForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

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
      <label htmlFor={htmlFor} className="text-xs text-gray-600">
        {nombre}
      </label>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-[#f3f4f6] flex gap-4">
      <div className="w-full">
        <Etiqueta htmlFor="servicio" nombre="Nombre del servicio" />
        <InputAddServiceForm id="servicio" placeholder="Ej. Corte de cabello" />
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

      {/* <form onSubmit={manejarForm}>

            <input type="text" name="usuario"  value={user} className="border border-black" onChange={controlarInputUsuario} />
            <input type="text" name="password"  value={pass}  onChange={(e)=>{setPass(e.target.value)}} className="border border-black" />
            <button type="submit" >aaaaaaa</button>
            <button onClick={()=>copia(mostrarUsuario)}>bbbbb</button>
        </form> */}
    </div>
  );
}

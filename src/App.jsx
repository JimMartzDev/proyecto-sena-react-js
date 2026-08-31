import "./App.css";
import { useState } from "react";
import AddServiceForm from "./components/addServiceForm/AddServiceForm";
import CardRegisteredService from "./components/cardRegisteredService/CardRegisteredService";

function App() {
  const [servicios, setServicios] = useState([]);

  const handleForm = (e) => {
    setServicios((prev) => [e, ...prev]);
    console.log(e);
    console.log("Ejecutando desde App.jsx");
  };

  const handleDelete = (indexEliminar) => {
    const listaActualizada = servicios.toSpliced(indexEliminar, 1);
    setServicios(listaActualizada);
    console.log("Eliminado con éxito");
  };

  const totalServicios = servicios.length;
  let mensaje = "";
  if (totalServicios === 0) {
    mensaje = "SIN SERVICIOS AÚN";
  } else if (totalServicios === 1) {
    mensaje = "1 SERVICIO AGREGADO";
  } else {
    mensaje = `${totalServicios} SERVICIOS AGREGADOS`;
  }

  return (
    <div className="h-dvh w-dvw bg-[#f3f4f6] flex gap-4 flex-col items-center  pb-6">
      <header className="flex justify-between w-full bg-white shadow mb-6 h-12 items-center px-5">
        <img className="w-28 h-auto" src="/logo.png" alt="" />
        <span className="text-lg text-gray-500">Registro de servicios</span>
      </header>
      <div className=" w-3/4">
        <AddServiceForm onSave={handleForm} />
      </div>
      <div className="w-3/4 flex h-4 gap-6 items-center">
        <hr className="flex-1 border-[#e5e7eb] h-px" />
        <span className="text-[#9ca3af] text-xs text-center whitespace-nowrap">
          {mensaje}
        </span>
        <hr className="flex-1 border-[#e5e7eb] h-px" />
      </div>
      <div className="w-3/4 h-full flex gap-4 flex-wrap overflow-y-auto">
        {servicios.map((servicio, i) => {
          return (
            <CardRegisteredService
              servicio={servicio.servicio}
              imagen={servicio.imagen}
              descripcion={servicio.descripcion}
              costo={servicio.costo}
              posicion={i}
              onEliminar={handleDelete}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

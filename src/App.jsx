import "./App.css";
import { useState } from "react";
import AddServiceForm from "./components/addServiceForm/AddServiceForm";
import CardRegisteredService from "./components/cardRegisteredService/CardRegisteredService";

function App() {
  const [serv, setServ] = useState("");

  const manejarForm = (e) => {
    setServ(e.servicio);
    console.log(e);
    console.log("Ejecutando desde App.jsx");
  };
  return (
    <div className="h-dvh w-dvw bg-[#f3f4f6] flex gap-4 flex-col items-center  pb-6">
      <header className="flex justify-between w-full bg-white shadow mb-6 h-12 items-center px-5">
        <span>TurnApp</span>
        <span className="text-lg text-gray-500">Registro de servicios</span>
      </header>
      <div className=" w-3/4">
        <AddServiceForm onSave={manejarForm} />
      </div>
      <div className="w-3/4 flex h-4 gap-6 items-center">
        <hr className="flex-1 border-[#e5e7eb] h-px" />
        <span className="text-[#9ca3af] text-xs text-center whitespace-nowrap">
          SIN SERVICIOS AUN
        </span>
        <hr className="flex-1 border-[#e5e7eb] h-px" />
      </div>
      <div className="w-3/4 h-full ">
        <CardRegisteredService />
      </div>
    </div>
  );
}

export default App;

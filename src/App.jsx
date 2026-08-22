import "./App.css";
import { useState } from "react";
import AddServiceForm from "./components/addServiceForm/AddServiceForm";

function App() {
  const [serv, setServ] = useState("");

  const manejarForm = (e) => {
    setServ(e.servicio);
    console.log(e);
    console.log("Ejecutando desde App.jsx");
  };
  return (
    <div className="h-dvh w-dvw bg-[#f3f4f6] flex  flex-col items-center ">
      <header className="flex justify-between w-full bg-white shadow mb-6 h-12 items-center px-5">
        <span>TurnApp</span>
        <span className="text-lg text-gray-500">Registro de servicios</span>
      </header>
      <div className=" w-3/4">
        <AddServiceForm onSave={manejarForm} />
      </div>
      <span>{serv}</span>
    </div>
  );
}

export default App;

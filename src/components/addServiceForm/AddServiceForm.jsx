import { useState } from "react";
import InputAddServiceForm from "./components/inputAddServiceForm/InputAddServiceForm";

export default function AddServiceForm(params) {

const [user,setUser] = useState("");
const [pass, setPass] = useState(""); 


const manejarForm = (event) =>{
event.preventDefault();

}   

const controlarInputUsuario = (event) => {setUser(event.target.value);}


const mostrarUsuario = () =>{
    // console.log(user);
    // console.log(pass);
    console.log("Hola Michael");
}

const copia = () => {
  mostrarUsuario();
}

 
    return <div>
        <InputAddServiceForm placeholder="Ej. Corte de cabello" />
        
        <InputAddServiceForm placeholder="$ 0" type="number"  />
       
        {/* <form onSubmit={manejarForm}>

            <input type="text" name="usuario"  value={user} className="border border-black" onChange={controlarInputUsuario} />
            <input type="text" name="password"  value={pass}  onChange={(e)=>{setPass(e.target.value)}} className="border border-black" />
            <button type="submit" onClick={mostrarUsuario}>aaaaaaa</button>
            <button onClick={()=>copia(mostrarUsuario)}>bbbbb</button>
        </form> */}
    </div>
}


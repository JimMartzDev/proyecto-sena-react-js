


import './App.css'
import AddServiceForm from './components/addServiceForm/AddServiceForm'

function App() {


  return (
    <div className='h-dvh w-dvw bg-[#f3f4f6] flex  flex-col items-center ' >
      <header className='flex justify-between w-full bg-white shadow mb-6 h-12 items-center px-5'><span>TurnApp</span><span className='text-lg text-gray-500'>Registro de servicios</span></header>
      <div className=' w-3/4'>
        <AddServiceForm/> 
      </div>
      

    </div>

  )
}

export default App

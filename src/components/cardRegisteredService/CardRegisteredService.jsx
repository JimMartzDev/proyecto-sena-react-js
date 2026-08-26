export default function CardRegisteredService(params) {
  const { className, ...rest } = params;
  return (
    <div className="bg-[#f3f4f6] h-48 w-48 rounded-lg text-xs ">
      <div className="h-24 w-48 ">Imagen</div>
      <div className="flex flex-col h-14 ">
        <span>Servicio</span>
        <span>Descripción</span>
      </div>
      <div className="flex justify-between items-center">
        <span>$15.000</span>
        <button
          type="submit"
          className="text-gray-500 border  border-gray-600 h-6 w-16 bg-transparent rounded-md cursor-pointer focus:outline-none flex justify-center items-center hover:text-red-600 hover:border-red-600 select-none transition shadow-md duration-150 ease-in-out hover:shadow-lg active:scale-95 active:shadow-sm "
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

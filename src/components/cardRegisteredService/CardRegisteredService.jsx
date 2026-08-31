export default function CardRegisteredService(params) {
  const {
    imagen,
    servicio,
    descripcion,
    costo,
    posicion,
    onEliminar,
    ...rest
  } = params;

  const costoFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(Number(costo));

  return (
    <div className="bg-white h-48 w-48 rounded-lg text-xs p-2 ">
      <img src={imagen} alt="" className="h-24 w-48 " />
      <div className="flex flex-col h-14 gap-1 w-full ">
        <span className="truncate cursor-help" title={servicio}>
          {servicio}
        </span>
        <span
          className="text-gray-500 truncate w-full cursor-help"
          title={descripcion}
        >
          {descripcion}
        </span>
      </div>
      <div className="flex justify-between items-center text-green-500 font-bold">
        <span>{costoFormateado}</span>
        <button
          onClick={() => onEliminar(posicion)}
          type="submit"
          className="text-gray-500 border  border-gray-200 h-5 w-16 bg-transparent rounded-md cursor-pointer focus:outline-none flex justify-center items-center hover:text-red-600 hover:border-red-600 transition shadow-md duration-150 ease-in-out hover:shadow-lg active:scale-95 active:shadow-sm font-light text-[10px]"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

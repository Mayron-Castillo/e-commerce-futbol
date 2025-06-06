import { useNavigate } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";

// Componente que representa una tarjeta de producto
function CardProduct({ producto, onAgregar, setMensaje, setTipoMensaje }) {
  const navigate = useNavigate();
  // Estado para la talla seleccionada del producto
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  // Función para navegar al detalle del producto al hacer clic en la tarjeta
  const handleClick = useCallback(
    (e) => {
      if (e.target.closest("button")) return;
      navigate(`/producto/${producto.id}`);
    },
    [navigate, producto.id]
  );

  // Función para agregar el producto al carrito
  const handleAgregar = useCallback(() => {
    // Validación de talla seleccionada
    if (!tallaSeleccionada) {
      setTipoMensaje("error");
      setMensaje("Por favor selecciona una talla");
      setTimeout(() => {
        setMensaje(null);
      }, 3000);
      return;
    }
    // Agregar producto con talla seleccionada al carrito
    onAgregar({ ...producto, talla: tallaSeleccionada });
    setTallaSeleccionada(null);
  }, [tallaSeleccionada, producto, onAgregar, setMensaje, setTipoMensaje]);

  // Función para manejar la selección de talla
  const handleTallaClick = useCallback((e, talla) => {
    e.stopPropagation();
    setTallaSeleccionada(talla);
  }, []);

  // Lista de tallas disponibles memorizada
  const tallas = useMemo(() => ["S", "M", "L", "XL"], []);

  return (
    <div className="group bg-white rounded-xl shadow-lg text-center md:text-left hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Contenedor de la imagen con efecto hover */}
      <div className="relative cursor-pointer" onClick={handleClick}>
        {/* Etiqueta de "Ver detalles" */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Ver detalles
        </div>

        {/* Contenedor de la imagen */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* Imagen del producto */}
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-[350px] object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Información del producto */}
      <div className="p-6">
        {/* Nombre del producto */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {producto.nombre}
        </h3>
        {/* Precio del producto */}
        <p className="text-2xl font-semibold text-blue-600 mb-4">
          ${producto.precio.toFixed(2)}
        </p>

        {/* Selector de tallas */}
        <div className="mb-4">
          <div className="flex gap-2 justify-center md:justify-start">
            {tallas.map((talla) => (
              <button
                key={talla}
                onClick={(e) => handleTallaClick(e, talla)}
                className={`w-10 h-10 border-2 rounded-lg transition-colors cursor-pointer ${
                  tallaSeleccionada === talla
                    ? "border-blue-500 text-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>

        {/* Botón para agregar al carrito */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAgregar();
          }}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium
            hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            active:transform active:translate-y-0 cursor-pointer"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default CardProduct;

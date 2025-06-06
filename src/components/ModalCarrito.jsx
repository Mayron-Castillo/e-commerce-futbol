// Componente modal que muestra el contenido del carrito de compras
function ModalCarrito({ carrito, onCerrar, onEliminar, onPagar }) {
  // Cálculo del total a pagar sumando el precio de cada item por su cantidad
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    // Overlay del modal con fondo semi-transparente
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Contenedor principal del modal */}
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto">
        {/* Encabezado del modal con título y botón de cierre */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrito de Compras</h2>
          <button
            onClick={onCerrar}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido condicional basado en si el carrito está vacío */}
        {carrito.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            El carrito está vacío
          </p>
        ) : (
          <>
            {/* Lista de productos en el carrito */}
            <div className="space-y-4">
              {carrito.map((item) => (
                <div
                  key={`${item.id}-${item.talla}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  {/* Imagen del producto */}
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-20 h-20 object-contain"
                  />
                  {/* Información del producto */}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.nombre}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">
                        Cantidad: {item.cantidad}
                      </span>
                      <span>•</span>
                      <span className="font-medium">Talla: {item.talla}</span>
                    </div>
                    <p className="text-blue-600 font-semibold">
                      ${item.precio.toFixed(2)} c/u
                    </p>
                  </div>
                  {/* Botón para eliminar el producto */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEliminar(item.id, item.talla)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        className="w-5 h-5 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sección de total y botón de pago */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>
              {/* Botón para proceder al pago */}
              <button
                onClick={onPagar}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors"
              >
                Proceder al Pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalCarrito;

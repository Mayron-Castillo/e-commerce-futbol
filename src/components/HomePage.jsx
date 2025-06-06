// Componente principal que muestra la página de inicio con productos y carrito
import CardProducto from "./CardProduct";
import ModalCarrito from "./ModalCarrito";
import Footer from "./Footer";
import productos from "../data/productos";

function HomePage({
  carrito,
  setCarrito,
  mostrarCarrito,
  setMostrarCarrito,
  mensaje,
  setMensaje,
  tipoMensaje,
  setTipoMensaje,
}) {
  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    // Validación de talla antes de agregar al carrito
    if (!producto.talla) {
      alert("Por favor selecciona una talla");
      return;
    }

    // Actualización del carrito
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(
        (item) => item.id === producto.id && item.talla === producto.talla
      );
      if (existe) {
        // Incrementar cantidad si el producto ya existe
        return prevCarrito.map((item) =>
          item.id === producto.id && item.talla === producto.talla
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Agregar nuevo producto con cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });

    // Mostrar mensaje de confirmación
    setTipoMensaje("info");
    setMensaje(
      `${producto.nombre} (Talla: ${producto.talla}) agregado al carrito`
    );
    setTimeout(() => {
      setMensaje(null);
    }, 3000);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Sistema de notificaciones*/}
        {mensaje && (
          <div className="fixed top-20 right-4 z-50 animate-slide-in">
            <div
              className={`flex items-center p-3 rounded-lg shadow-lg max-w-sm ${
                tipoMensaje === "success"
                  ? "bg-green-500 text-white"
                  : tipoMensaje === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {/* Iconos según el tipo de mensaje */}
              <div className="mr-3 flex-shrink-0">
                {tipoMensaje === "success" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : tipoMensaje === "error" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                )}
              </div>

              {/* Contenido del mensaje */}
              <div className="flex-1">
                <p className="font-medium text-sm">{mensaje}</p>
                {tipoMensaje === "info" && (
                  <p className="text-xs opacity-90">
                    Puedes ver tu carrito en el menú superior
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Grid de productos con diseño responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <CardProducto
              key={producto.id}
              producto={producto}
              onAgregar={agregarAlCarrito}
              setMensaje={setMensaje}
              setTipoMensaje={setTipoMensaje}
            />
          ))}
        </div>

        {/* Modal del carrito de compras */}
        {mostrarCarrito && (
          <ModalCarrito
            carrito={carrito}
            onCerrar={() => setMostrarCarrito(false)}
            onEliminar={(id, talla) => {
              // Función para eliminar o reducir cantidad de productos
              setCarrito((prevCarrito) =>
                prevCarrito
                  .map((item) => {
                    if (item.id === id && item.talla === talla) {
                      if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                      }
                      return null;
                    }
                    return item;
                  })
                  .filter(Boolean)
              );
            }}
            onPagar={() => {
              // Función para procesar el pago
              setCarrito([]);
              localStorage.removeItem("carrito");
              setTipoMensaje("success");
              setMensaje("¡Pago realizado con éxito!");
              setMostrarCarrito(false);
              setTimeout(() => {
                setMensaje(null);
              }, 3000);
            }}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

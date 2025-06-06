import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";

// Componente para mostrar los detalles de los productos
function ProductDetail() {
  // Hooks para obtener el ID del producto y la función de navegación
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar el producto por ID
  const producto = productos.find((p) => p.id === parseInt(id));

  // Si no se encuentra el producto, mostrar mensaje de error
  if (!producto) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Producto no encontrado
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 pt-24">
      <div className="container mx-auto px-4">
        {/* Botón para volver a la tienda */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver a la tienda
        </button>

        {/* Contenedor principal del detalle del producto */}
        <div className="bg-white rounded-xl shadow-lg overflow-x-hidden max-w-6xl mx-auto">
          <div className="md:flex h-[600px]">
            {/* Sección de la imagen del producto */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="max-h-[500px] w-auto object-contain"
                />
              </div>
            </div>

            {/* Sección de información del producto */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                {/* Nombre y precio del producto */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {producto.nombre}
                </h1>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    ${producto.precio.toFixed(2)}
                  </span>
                </div>

                {/* Descripción del producto */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Descripción
                  </h3>
                  <p className="text-gray-600">
                    Camiseta oficial de alta calidad. Material transpirable y
                    cómodo para uso diario y deportivo. Incluye detalles del
                    equipo y tecnología de última generación para el máximo
                    rendimiento.
                  </p>
                </div>

                {/* Características del producto */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Características
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Material 100% poliéster de alta calidad
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Tecnología de secado rápido
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Diseño oficial del equipo
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Lavable en máquina
                    </li>
                  </ul>
                </div>
              </div>

              {/* Botón para volver a la tienda */}
              <button
                onClick={() => navigate("/")}
                className="w-full bg-blue-600 text-white cursor-pointer py-3 rounded-lg font-medium
                  hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Volver a la tienda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

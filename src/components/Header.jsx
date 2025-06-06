import React, { useState, useCallback } from "react";

// Componente de encabezado que maneja la navegación y el carrito
function Header({ onVerCarrito, cantidadCarrito }) {
  // Estado para controlar la visibilidad del menú en celular
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú en el celular
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Función para desplazarse suavemente al inicio de la página
  const scrollToTop = useCallback(
    (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (isMenuOpen) {
        toggleMenu();
      }
    },
    [isMenuOpen, toggleMenu]
  );

  return (
    <header className="bg-gradient-to-r fixed top-0 left-0 right-0 z-50 from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo y nombre de la tienda */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">⚽</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tienda Fútbol
            </h1>
          </div>

          {/* Navegación para dispositivos de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Inicio
            </a>
            {/* Botón del carrito con contador de items */}
            <button
              onClick={onVerCarrito}
              className="flex items-center space-x-2 bg-white/10 cursor-pointer hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-200 relative group"
            >
              <span>Carrito</span>
              <span className="text-xl">🛒</span>
              {/* Indicador de cantidad de items en el carrito */}
              {cantidadCarrito > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  {cantidadCarrito}
                </span>
              )}
            </button>
          </nav>

          {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl hover:text-gray-300 transition-colors duration-200"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil con overlay y animaciones */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        {/* Panel lateral del menú del celular */}
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Encabezado del menú de celular */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menú</h2>
              <button
                onClick={toggleMenu}
                className="text-2xl hover:text-gray-300 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            {/* Navegación del menú de celular */}
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                onClick={(e) => {
                  scrollToTop(e);
                  toggleMenu();
                }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Inicio
              </a>
              {/* Botón del carrito en el menú de celular */}
              <button
                onClick={() => {
                  onVerCarrito();
                  toggleMenu();
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Carrito</span>
                <span className="text-xl">🛒</span>
                {/* Indicador de cantidad en el menú de celular */}
                {cantidadCarrito > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cantidadCarrito}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

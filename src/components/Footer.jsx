import React from "react";

// Componente de pie de página que muestra información de contacto y enlaces
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Grid principal con 4 columnas en desktop y 1 en celular */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección de logo y descripción de la tienda */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">⚽</div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tienda Fútbol
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              hic aliquid exercitationem maiores nemo repellat inventore ipsam
              iste earum perspiciatis architecto vel eveniet, quos atque,
              delectus pariatur velit illum temporibus.
            </p>
          </div>

          {/* Sección de enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vuelve al inicio</h3>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Inicio
            </a>
          </div>

          {/* Sección de información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <span>Costa Rica</span>
              </li>
              <li className="flex items-center gap-4">
                <span>📞</span>
                <span>1234 1234</span>
              </li>
              <li className="flex items-center gap-4">
                <span>✉️</span>
                <span>12mayron12@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales con enlaces a perfiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi GitHub y LinkedIn</h3>
            <div className="flex gap-4">
              {/* Enlace a LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mayron-castillo/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* Enlace a GitHub */}
              <a
                href="https://github.com/Mayron-Castillo"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sección de derechos de autor */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center w-full">
              Hecho por Mayron - 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

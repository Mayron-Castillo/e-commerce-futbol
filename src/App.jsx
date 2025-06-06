import { Routes, Route } from "react-router-dom";
import "./index.css";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import HomePage from "./components/HomePage";

function App() {
  // Estado del carrito de compras, inicializado desde localStorage si existe
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");

  //total de items en el carrito
  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  // Effect para cuando el localStorage cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Agregar productos al carrito
  const agregarAlCarrito = useCallback((producto) => {
    // Validación de talla
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
        // Si el producto existe, incrementa la cantidad
        return prevCarrito.map((item) =>
          item.id === producto.id && item.talla === producto.talla
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si el producto no existe, agregarlo con cantidad 1
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header con contador del carrito */}
      <Header
        onVerCarrito={() => setMostrarCarrito(true)}
        cantidadCarrito={cantidadTotal}
      />

      {/* Sistema de rutas de la aplicación */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              carrito={carrito}
              setCarrito={setCarrito}
              mostrarCarrito={mostrarCarrito}
              setMostrarCarrito={setMostrarCarrito}
              mensaje={mensaje}
              setMensaje={setMensaje}
              tipoMensaje={tipoMensaje}
              setTipoMensaje={setTipoMensaje}
            />
          }
        />
        <Route
          path="/producto/:id"
          element={<ProductDetail onAgregar={agregarAlCarrito} />}
        />
      </Routes>
    </div>
  );
}

export default App;

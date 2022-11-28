import Header from "./components/layout/Header";
import Produtos from "./components/layout/produtos/Produtos";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import { useContext, useState } from "react";
import CompraFinalizada from "./components/cart/CompraFinalizada/CompraFinalizada";
import { ColorModeContext } from "./context/ColorModeContext";
import "./App.css";

function App() {
  const [cartVisivel, setCartVisivel] = useState(false);
  const [compraFinalizadaModal, setCompraFinalizadaModal] = useState(false);
  const { isDarkMode } = useContext(ColorModeContext);

  const closeCartHandler = () => {
    setCartVisivel(false);
  };
  const showCartHandler = () => {
    setCartVisivel(true);
  };
  const closeFinalModalHandler = () => {
    setCompraFinalizadaModal(false);
  };
  const showFinalModalHandler = () => {
    setCompraFinalizadaModal(true);
  };
  return (
    <div className={`app ${isDarkMode ? "darkMode" : ""}`}>
      {cartVisivel && (
        <Cart onClose={closeCartHandler} onShowFinal={showFinalModalHandler} />
      )}
      {compraFinalizadaModal && (
        <CompraFinalizada onClose={closeFinalModalHandler} />
      )}
      <Header onShow={showCartHandler} />
      <Produtos />
      <Footer />
    </div>
  );
}

export default App;

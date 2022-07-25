import Header from './components/layout/Header'
import Produtos from './components/layout/produtos/Produtos'
import Footer from './components/layout/Footer'
import Cart from './components/cart/Cart';
import { useState } from 'react';
import CompraFinalizada from './components/cart/CompraFinalizada/CompraFinalizada';

function App() {

  const [cartVisivel, setCartVisivel] = useState(false);
  const [compraFinalizadaModal, setCompraFinalizadaModal] = useState(false);

  const closeCartHandler = () => {
    setCartVisivel(false)
  }
  const showCartHandler = () => {
    setCartVisivel(true)
  }
  const closeFinalModalHandler = () => {
    setCompraFinalizadaModal(false)
  }
  const showFinalModalHandler = () => {
    setCompraFinalizadaModal(true)
  }
  return (
    <>
      {cartVisivel && <Cart onClose={closeCartHandler} onShowFinal={showFinalModalHandler} />}
      {compraFinalizadaModal && <CompraFinalizada onClose={closeFinalModalHandler} />}
      <Header onShow={showCartHandler} />
      <Produtos />
      <Footer />
    </>
  )
}

export default App;

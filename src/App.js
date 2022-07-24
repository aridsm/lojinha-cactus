import Header from './components/layout/Header'
import Produtos from './components/layout/produtos/Produtos'
import Footer from './components/layout/Footer'
import Cart from './components/cart/Cart';
import { useState } from 'react';

function App() {

  const [cartVisivel, setCartVisivel] = useState(false);

  const closeHandler = () => {
    setCartVisivel(false)
  }
  const showHandler = () => {
    setCartVisivel(true)
  }
  return (
    <>
      {cartVisivel && <Cart onClose={closeHandler} />}
      <Header onShow={showHandler} />
      <Produtos />
      <Footer />
    </>
  )
}

export default App;

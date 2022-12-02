import Header from "./components/layout/Header";
import Products from "./components/layout/products/Products";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import { useContext, useState } from "react";
import PurchaseSuccess from "./components/cart/finishedPurchase/PurchaseSuccess";
import { ColorModeContext } from "./context/ColorModeContext";
import "./App.css";
import Alert from "./components/alert/Alert";
import { AlertContext } from "./context/AlertContext";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [purchaseFinishedModal, setPurchaseFinishedModal] = useState(false);
  const { isDarkMode } = useContext(ColorModeContext);
  const { alertIsShown, alertContent } = useContext(AlertContext);

  const closeCartHandler = () => {
    setIsCartVisible(false);
  };
  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const closeFinalModalHandler = () => {
    setPurchaseFinishedModal(false);
  };
  const showFinalModalHandler = () => {
    setPurchaseFinishedModal(true);
  };
  return (
    <>
      <Alert alertIsShown={alertIsShown} content={alertContent} />
      <div className={`app ${isDarkMode ? "darkMode" : ""}`}>
        {isCartVisible && (
          <Cart
            onClose={closeCartHandler}
            onShowFinal={showFinalModalHandler}
          />
        )}
        {purchaseFinishedModal && (
          <PurchaseSuccess onClose={closeFinalModalHandler} />
        )}
        <Header onShow={showCartHandler} />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;

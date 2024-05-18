import "./App.css";
import CartProvider from "./context/CartProvider";
import StickyProvider from "./context/StickyProvider";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <CartProvider>
      <StickyProvider>
        <RoutesApp />
        {/* <div className="App"></div> */}
      </StickyProvider>
    </CartProvider>
  );
}

export default App;

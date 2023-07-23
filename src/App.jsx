import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Menu from "./pages/Menu";
import Cart from "./components/Cart";
import CartFooter from "./components/CartFooter";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <CartFooter />
    </Router>
  );
}

export default App;

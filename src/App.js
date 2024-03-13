import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetais } from "./pages/ProductDetais";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <CartSidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetais />}></Route>
      </Routes>
    </div>
  );
}

export default App;

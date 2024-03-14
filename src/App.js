import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

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
      </Routes>
    </div>
  );
}

export default App;

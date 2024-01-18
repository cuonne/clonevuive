import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/success" element={<Success />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

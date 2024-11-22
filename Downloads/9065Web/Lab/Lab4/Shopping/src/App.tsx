import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Desktop from "./pages/Desktop";
import Laptop from "./pages/Laptop";
import Monitor from "./pages/Monitor";
import Accessories from "./pages/Accessories"
import ProductDetail from "./pages/ProductDetail";



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Desktop />} />
          <Route path="Laptop" element={<Laptop />} />
          <Route path="Monitor" element={<Monitor />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
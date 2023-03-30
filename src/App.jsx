import React from 'react';
import LandingPage from './containers/LandingPage';
import ProductPage from './containers/Products';
import NotFoundPage from './containers/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import CreateProductPage from './containers/Products/create';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/create" element={<CreateProductPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import LandingPage from './containers/LandingPage';
import ProductPage from './containers/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

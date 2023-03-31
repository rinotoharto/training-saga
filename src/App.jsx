import React, { useContext, useEffect } from "react";
import LandingPage from "./containers/LandingPage";
import ProductPage from "./containers/Products";
import NotFoundPage from "./containers/NotFoundPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import CreateProductPage from "./containers/Products/create";
import { AuthContext } from "./contexts/AuthContext";
import LoginPage from "./containers/LoginPage";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) =>
    currentUser ? children : <Navigate to={"/login"} />;
  const CheckAuth = ({ children }) =>
    currentUser ? <Navigate to={"/"} /> : children;
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/create"
            element={
              <ProtectedRoute>
                <CreateProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <CheckAuth>
                <LoginPage />
              </CheckAuth>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

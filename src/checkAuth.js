import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const CheckAuth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("userProfile"));
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/");
    }
  });
  return <>{children}</>;
};

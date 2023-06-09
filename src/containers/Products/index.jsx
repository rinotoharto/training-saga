import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../store/actions";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const [findProduct, setFindProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  useEffect(() => {
    if (searchProduct.length > 0) {
      const product = products?.products?.filter((e) =>
        e.title.toLowerCase().includes(searchProduct)
      );
      console.log(product);
      console.log(searchProduct);
      setFindProduct(product);
    } else {
      setFindProduct(products);
    }
  }, [searchProduct]);

  const logout = () => {
    localStorage.removeItem("userProfile");
    window.location.reload();
  };

  return (
    <>
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
      <div>Product Page</div>
      <Link to={"/products/create"}>
        <button className="btn btn-success">Create Product</button>
      </Link>
      <div className="mb-3">
        <label htmlFor="exampleInputFindProduct1" className="form-label">
          Search
        </label>
        <input
          onChange={(e) => setSearchProduct(e.target.value)}
          type="FindProduct"
          className="form-control"
          id="exampleInputFindProduct1"
          aria-describedby="FindProductHelp"
        />
      </div>
      {findProduct ? <Cards data={products} /> : <Cards data={findProduct} />}
    </>
  );
};

export default ProductPage;

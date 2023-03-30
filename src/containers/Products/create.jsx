import { useState } from "react";
import Input from "../../components/Input";
import axios from "../../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../store/actions";
import { encryptData } from "../../utils/encryptionHelper";

export default function CreateProductPage() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const products = useSelector((state) => state.productReducer.products);
  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  const onSubmit = (e) => {
    const encryptedData = {
      title: encryptData(data.title),
      description: encryptData(data.description),
      thumbnail: encryptData(data.thumbnail),
    };
    dispatch(postProduct(encryptedData));
    e.preventDefault();
  };
  console.log(data);
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input id={"title"} label={"Title"} type={"text"} onChange={onChange} />
        <Input
          id={"description"}
          label={"Description"}
          type={"text"}
          onChange={onChange}
        />
        <Input
          id={"thumbnail"}
          label={"Thumbnail"}
          type={"text"}
          onChange={onChange}
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

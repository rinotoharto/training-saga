import { useState } from "react";
import Input from "../../components/Input";
import axios from "../../lib/axios";

export default function CreateProductPage() {
  const [data, setData] = useState();
  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  const onSubmit = (e) => {
    axios
      .post("posts", data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };
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

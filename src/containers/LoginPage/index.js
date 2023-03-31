import { useState } from "react";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { postUser } from "../../store/actions";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  const onSubmit = (e) => {
    dispatch(
      postUser(data, () => {
        console.log("pindah")
        navigate("/");
        window.location.reload();
      })
    );
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          id={"username"}
          label={"Username"}
          type={"text"}
          onChange={onChange}
        />
        <Input
          id={"password"}
          label={"Password"}
          type={"password"}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

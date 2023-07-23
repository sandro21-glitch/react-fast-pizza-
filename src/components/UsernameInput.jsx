import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const UsernameInput = () => {
  const { userName } = useSelector((store) => store.user);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserName = (e) => {
    e.preventDefault();

    if (name === "") return;
    navigate("/menu");
    dispatch(getUser(name));
  };

  if (userName) {
    return null;
  }

  return (
    <form className="text-center" onSubmit={(e) => handleUserName(e)}>
      <p className="mb-5">👋 Welcome! Please start by telling us your name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="your full name"
        className="border w-72 px-5 py-3 bg-white rounded-3xl focus:outline-lightYellow focus:outline-offset-2 outline-2 transition-all ease-linear duration-150"
      />
    </form>
  );
};

export default UsernameInput;

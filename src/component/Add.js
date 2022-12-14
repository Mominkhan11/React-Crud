import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { username, email, phone } = data;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", data);
    alert("successfully added user");
    navigate("/");
  };
  return (
    <div className="add w-full">
      <h2 className="text-center text-pink-600 text-4xl py-4 font-bold">
        Add User
      </h2>
      <form
        className="w-full  flex flex-col items-center justify-center "
        onSubmit={onsubmit}
      >
        <div>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter Name...."
            className="border border-gray-500 rounded outline-none px-20 py-2"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email...."
            className="border border-gray-500 my-8 rounded outline-none px-20 py-2"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="Enter Phone...."
            className="border border-gray-500 rounded outline-none px-20 py-2"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="submit"
            className="w-full  bg-indigo-500 text-white px-20 rounded py-3 mt-8 font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default Add;

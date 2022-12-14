import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
    if (window.confirm("Want to update added user ?")) {
      await axios.put(`http://localhost:5000/users/${id}`, data);

      navigate("/");
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    setData(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);
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
            className="w-full  bg-indigo-500 text-white px-20 rounded py-3 mt-8 font-bold cursor-pointer "
            value="Update User"
          />
        </div>
      </form>
      <div className="text-center">
        <Link to="/">
          <i className="fa-solid fa-arrow-left text-center bg-pink-600 px-20 text-white py-3 mt-3 rounded"></i>
        </Link>
      </div>
    </div>
  );
};

export default Edit;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  const loadusers = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    loadusers();
  }, []);
  return (
    <div className="">
      <table className="w-full text-center ">
        <tbody>
          <tr className=" border border-gray-600"> {user.id}</tr>
          <tr className=" border border-gray-600">{user.username}</tr>
          <tr className=" border border-gray-600">{user.email}</tr>
          <tr className=" border border-gray-600">{user.phone}</tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-20">
        <Link to="/">
          {" "}
          <i className="fa-solid fa-arrow-left  bg-pink-600 px-12 py-3 text-white "></i>
        </Link>
      </div>
    </div>
  );
};

export default View;

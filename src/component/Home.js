import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setUsers(result.data);
  };

  useEffect(() => {
    loadusers();
  }, []);

  const deleteUser = async (id) => {
    if (window.confirm("Really want to delete user")) {
      await axios.delete(`http://localhost:5000/users/${id}`);
    }
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold uppercase py-5 text-pink-600">
        Crud List
      </h2>
      <table className="w-full text-center border-gray-400  ">
        <thead>
          <tr>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              ID
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              Name
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              Email
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              Phone
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              Edit
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              Delete
            </th>
            <th className="p-3 text-sm text-gray-700  border border-gray-500">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr className="odd:bg-gray-200" key={index + 1}>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700   border border-gray-500">
                  {user.username}
                </td>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  {user.email}
                </td>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  {user.phone}
                </td>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  <Link to={`/edit-user/${user.id}`}>
                    <i className="fa-solid fa-pen-square text-green-600"></i>
                  </Link>
                </td>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  <i
                    className="fa-solid fa-trash text-red-600 "
                    onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
                <td className="p-3 text-sm text-gray-700  border border-gray-500 ">
                  <Link to={`/view-user/${user.id}`}>
                    <i className="fa-solid fa-eye text-indigo-600 "></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

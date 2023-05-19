import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyDataShow from "./MyToyDataShow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:3000/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);
  return (
    <div className="py-5 w-10/12 mx-auto">
      <h1 className="text-center text-5xl font-bold my-10">
        My Total Toys : {myToys.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>ToyName</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {myToys.map((myToy) => (
              <MyToyDataShow key={myToy._id} myToy={myToy}></MyToyDataShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

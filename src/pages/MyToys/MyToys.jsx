import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyDataShow from "./MyToyDataShow";
import Swal from "sweetalert2";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete",
      text: "Are you sure you want to delete the toy ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Delete Successfully",
                icon: "success",
                confirmButtonText: "Done",
              });
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      } else {
        Swal.fire({
          text: "Delete canceled",
          icon: "error",
          confirmButtonText: "OKK",
        });
      }
    });

    // if (proceed) {
    //   fetch(`http://localhost:3000/toy/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.deletedCount > 0) {
    //         Swal.fire({
    //           title: "Delete",
    //           text: "Are You Sure you want to delete",
    //           icon: "question",
    //           confirmButtonText: "Done",
    //         });
    //         const remaining = myToys.filter((myToy) => myToy._id !== id);
    //         setMyToys(remaining);
    //       }
    //     });
    // }
  };

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
              <MyToyDataShow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToyDataShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

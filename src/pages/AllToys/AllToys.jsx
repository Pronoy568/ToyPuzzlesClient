import React, { useEffect, useState } from "react";
import AllToyDataShow from "./AllToyDataShow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  const url = `http://localhost:3000/toys`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const limitToy = ToySplit(data, 20)[0];
        setAllToys(limitToy);
      });
  }, [url]);

  // Function to split the toy
  function ToySplit(array, toySplitSize) {
    const toySplit = [];
    for (let i = 0; i < array.length; i += toySplitSize) {
      const chunk = array.slice(i, i + toySplitSize);
      toySplit.push(chunk);
    }
    return toySplit;
  }

  return (
    <div className="py-5 w-10/12 mx-auto">
      <h1 className="text-center text-5xl font-bold my-10">Here All Toys</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>ToyName</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Details Info.</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {allToys.map((allToy) => (
              <AllToyDataShow key={allToy._id} allToy={allToy}></AllToyDataShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

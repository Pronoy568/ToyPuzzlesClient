import React, { useEffect, useState } from "react";
import AllToyDataShow from "./AllToyDataShow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messageRightToy, setMessageRightToy] = useState("");

  const url = `http://localhost:3000/toys`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const limitToy = ToySplit(data, 20)[0];
        const filteredToys = limitToy.filter((toy) =>
          toy.ToyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredToys.length == 0) {
          setMessageRightToy("Not found any Toy this Name");
        } else {
          setMessageRightToy("");
        }
        setAllToys(filteredToys);
      });
  }, [url, searchTerm]);

  // Function to split the toy
  function ToySplit(array, toySplitSize) {
    const toySplit = [];
    for (let i = 0; i < array.length; i += toySplitSize) {
      const chunk = array.slice(i, i + toySplitSize);
      toySplit.push(chunk);
    }
    return toySplit;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="py-5 w-10/12 mx-auto">
      <h1 className="text-center text-5xl font-bold mb-10">Here All Toys</h1>
      {/* Search field */}
      <div className="text-center mb-5">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by toy name"
        />
      </div>
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

            {allToys?.map((allToy) => (
              <AllToyDataShow key={allToy._id} allToy={allToy}></AllToyDataShow>
            ))}
          </tbody>
        </table>
        {messageRightToy && (
          <p className="text-center text-xl my-10 text-orange-700">
            {messageRightToy}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllToys;

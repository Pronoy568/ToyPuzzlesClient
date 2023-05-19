import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  const url = `http://localhost:3000/toys`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const limitToy = ToySplit(data, 10)[0];
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
      <h1 className="text-center text-5xl font-bold my-10">
        Here All Toys : {allToys.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

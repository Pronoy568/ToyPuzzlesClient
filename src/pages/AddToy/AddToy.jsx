import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/myToys";

  const handleAddToys = (event) => {
    event.preventDefault();

    const form = event.target;

    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const ToyName = form.ToyName.value;
    const price = form.price.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const available = form.available.value;
    const image = form.image.value;
    const details = form.details.value;

    const newToys = {
      sellerName,
      sellerEmail,
      ToyName,
      price,
      category,
      quantity,
      rating,
      available,
      image,
      details,
    };

    // send data to the server
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        form.reset();
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="bg-[#d9d9d9b7] px-24 py-10">
      <h1 className="md:text-5xl text-3xl font-extrabold text-center mb-5">
        Add a Toy
      </h1>
      <form onSubmit={handleAddToys}>
        {/* Seller Name and Email */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Seller Email"
                name="sellerEmail"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Toy name and price */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Toy Name"
                name="ToyName"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Category and Quantity */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Logic">Logic</option>
              <option value="3D">3D</option>
              <option value="Wooden">Wooden</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Rating and Available */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Available</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available"
                name="available"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* Form Image URL & Details */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details Description"
                name="details"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Add Toy" />
      </form>
    </div>
  );
};

export default AddToy;

// import React from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// const AddToy = () => {
//   const navigate = useNavigate();
//   const from = "/myToys";

//   const handleAddToys = (event) => {
//     event.preventDefault();

//     const form = event.target;

//     const ToyName = form.ToyName.value;
//     const price = form.price.value;
//     const category = form.category.value;
//     const quantity = form.quantity.value;

//     const newToys = {
//       ToyName,
//       price,
//       category,
//       quantity,
//     };

//     // send data to the server
//     fetch("http://localhost:3000/toys", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newToys),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Added Successfully",
//             icon: "success",
//             confirmButtonText: "Done",
//           });
//         }
//         form.reset();
//         navigate(from, { replace: true });
//       });
//   };

//   return (
//     <div className="bg-[#d9d9d9b7] px-24 py-10">
//       <h1 className="md:text-5xl text-3xl font-extrabold text-center mb-5">
//         Add a Toy
//       </h1>
//       <form onSubmit={handleAddToys}>
//         {/* Toy name and price */}
//         <div className="md:flex mb-6">
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text">Toy Name</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 placeholder="Toy Name"
//                 name="ToyName"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </label>
//           </div>
//           <div className="form-control md:w-1/2 md:ml-4">
//             <label className="label">
//               <span className="label-text">Price</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 placeholder="Price"
//                 name="price"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </label>
//           </div>
//         </div>
//         {/* Category and Quantity */}
//         <div className="md:flex mb-6">
//           <div className="form-control md:w-1/2">
//             <label className="label">
//               <span className="label-text">Category</span>
//             </label>
//             <label className="select select-bordered w-full">
//               <select name="category" required>
//                 <option value="">-- Select Category --</option>
//                 <option value="Logic">Logic</option>
//                 <option value="3D">3D</option>
//                 <option value="Wooden">Wooden</option>
//               </select>
//             </label>
//           </div>
//           <div className="form-control md:w-1/2 md:ml-4">
//             <label className="label">
//               <span className="label-text">Quantity</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 placeholder="Quantity"
//                 name="quantity"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </label>
//           </div>
//         </div>
//         <input type="submit" className="btn btn-block" value="Add Toy" />
//       </form>
//     </div>
//   );
// };

// export default AddToy;

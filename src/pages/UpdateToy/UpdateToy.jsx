import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toyData = useLoaderData();
  const navigate = useNavigate();
  const from = "/myToys";

  const {
    _id,
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
  } = toyData;

  const handleUpdateToy = (event) => {
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

    const UpdateToy = {
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
    fetch(`http://localhost:3000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div className="bg-[#f3f3f382] px-24 py-10">
      <h1 className="md:text-5xl text-3xl font-extrabold text-center mb-5">
        Update Toy
      </h1>
      <form onSubmit={handleUpdateToy}>
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
                defaultValue={sellerName}
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
                defaultValue={sellerEmail}
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
                defaultValue={ToyName}
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
                defaultValue={price}
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
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
                required
              />
            </label>
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
                defaultValue={quantity}
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
                defaultValue={rating}
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
                defaultValue={available}
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
                defaultValue={image}
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
                defaultValue={details}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Update" />
      </form>
    </div>
  );
};

export default UpdateToy;

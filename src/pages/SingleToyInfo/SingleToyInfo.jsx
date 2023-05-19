import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyInfo = () => {
  const ToyData = useLoaderData();
  const {
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
  } = ToyData;
  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="pb-10">
        <h1 className="text-center text-5xl mb-5 italic font-semibold">
          <span className="text-gray-500 underline decoration-base-300 decoration-wavy underline-offset-8">
            Details Information of
          </span>{" "}
          <span className="text-blue-900 underline decoration-sky-200 decoration-wavy underline-offset-8">
            {ToyName}
          </span>
        </h1>
      </div>
      <div className="md:flex justify-center">
        <div>
          <img
            className="rounded-3xl w-full h-full"
            src={image}
            alt={ToyName}
          />
        </div>
        <div className="text-2xl ms-5 space-y-1 bg-gray-100 p-3 rounded-xl">
          <h1>
            <span className="font-medium text-blue-900">ToyName:</span>{" "}
            <span className="text-gray-600">{ToyName}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">SellerName:</span>{" "}
            <span className="text-gray-600">{sellerName}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">SellerEmail:</span>{" "}
            <span className="text-gray-600">{sellerEmail}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Category:</span>{" "}
            <span className="text-gray-600">{category}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Price:</span>{" "}
            <span className="text-gray-600">{price}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Quantity:</span>{" "}
            <span className="text-gray-600">{quantity}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Available:</span>{" "}
            <span className="text-gray-600">{available}</span>
          </h1>
          <h1>
            <span className="font-medium text-blue-900">Rating:</span>{" "}
            <span className="text-gray-600">{rating}</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 w-2/4 mx-auto">
        {/* The button to open modal */}
        <label
          htmlFor="my-modal"
          className="btn btn-block btn-active btn-ghost"
        >
          Details
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center p-4">
          <h1 className="text-3xl font-bold mb-3">{ToyName}</h1>
          <h1 className="text-justify">{details}</h1>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyInfo;

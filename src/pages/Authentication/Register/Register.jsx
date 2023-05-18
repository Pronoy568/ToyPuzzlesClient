import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import GoogleLogin from "../../share/GoogleLogin/GoogleLogin";
import img from "../../../assets/mixed/register.jpg";

const Register = () => {
  const { createUser, Logout, profileUpdate } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const from = "/login";

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccessMessage("Registration Successfully !!!");
        setErrorMessage("");
        form.reset();
        Logout();
        updateUserData(user, name, photoURL);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setSuccessMessage("");
      });
  };

  const updateUserData = (user, name, photo) => {
    profileUpdate(user, name, photo)
      .then(() => {
        setSuccessMessage("Profile Updated!!!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-1/2 w-4/5 md:mr-12">
          <img src={img} alt="image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Registration</h1>

            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                  name="photo"
                  required
                />
                <p className="my-3 text-center">
                  Already have an account ?{" "}
                  <Link className="text-orange-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
                {successMessage && (
                  <p className="text-green-600 mb-2 text-center">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-600 mb-2 text-center">
                    {errorMessage}
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>

            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

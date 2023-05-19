import React, { useContext } from "react";
import img from "../../../assets/mixed/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../share/GoogleLogin/GoogleLogin";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setSuccessMessage("Login Successfully !!!");
        setErrorMessage("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setSuccessMessage("");
      });
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 w-4/5 md:mr-12">
          <img className="rounded-3xl" src={img} alt="image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p
                  className="relative -top-9 left-72 text-gray-400"
                  checked={showPassword}
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </p>
                <p className="text-center my-3">
                  New to ToyPuzzle ?{" "}
                  <Link className="text-orange-600 font-bold" to="/register">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
              {successMessage && (
                <p className="text-green-600 mb-2 text-center">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 mb-2 text-center">{errorMessage}</p>
              )}
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
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

export default Login;

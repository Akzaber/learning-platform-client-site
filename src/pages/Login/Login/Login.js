import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleUserLogIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();

    signInWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col md:w-9/12 w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-full shadow-xl bg-base-100">
          <form onSubmit={handleUserLogIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered rounded-xl"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-xl"
                  required
                />
                <label className="label text-red-600">
                  <p>{error}</p>
                </label>
                <label className="label">
                  <p>
                    Don't have an account?{" "}
                    <Link className="underline" to="/register">
                      Please Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="w-full rounded-xl py-3 bg-sky-600 font-semibold text-white uppercase"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="mt-6 form-control">
            <button
              onClick={handleSignInWithGoogle}
              className="rounded-xl py-3 bg-base-300 font-semibold text-black uppercase"
            >
              Continue With Google
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleGithubSignIn}
              className="w-full rounded-xl py-3 bg-black font-semibold text-white uppercase"
            >
              Continue With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

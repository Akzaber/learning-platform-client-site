import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col w-9/12">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-full shadow-xl bg-base-100">
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered rounded-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered rounded-xl"
                />
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
                <button className="w-full rounded-xl py-3 bg-sky-600 font-semibold text-white uppercase">
                  Login
                </button>
              </div>
              <div className="mt-6 form-control">
                <button className="rounded-xl py-3 bg-base-300 font-semibold text-black uppercase">
                  Continue With Google
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="w-full rounded-xl py-3 bg-black font-semibold text-white uppercase">
                  Continue With Github
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

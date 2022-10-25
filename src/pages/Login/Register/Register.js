import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col w-9/12">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card w-full shadow-xl bg-base-100">
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered rounded-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered rounded-xl"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered rounded-xl"
                  required
                />
                <label className="label">
                  <p>
                    Already have an account?{" "}
                    <Link className="underline" to="/login">
                      Log in
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="w-full rounded-xl py-3 bg-sky-600 font-semibold text-white uppercase">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/all-image/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  return (
    <div className="banner2">
      <div className="h-[100vh] flex justify-center items-center w-full font-poppins">
        <form>
          <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <img className="h-10 block mx-auto" src={logo} alt="" />
            <div className="space-y-4 mt-10">
              <div>
                <input
                  placeholder="Name"
                  type="text"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>

              <div>
                <input
                  placeholder="Password"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Confrim Password"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>
           

            <button className="mt-5 w-full text-white bg-rose-700 font-semibold py-2 rounded-md  tracking-wide">
              Register
                      </button>
                      <p className="text-center mt-3">
              <small>
                Already have an account ?{" "}
                <Link className="text-rose-500" to="/login">
                  Login
                </Link>
              </small>
            </p>
            {/* or section  */}
           <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

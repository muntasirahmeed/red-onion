import React, { useState } from "react";
import logo from "../../Images/all-image/logo2.png";
import { ShoppingCartIcon, XIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Navber = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="max-w-[1280px] mx-auto  bg-gray-100 w-full top-0 left-0">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div className="">
          <img
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute flex  right-8 top-6 cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div
          className={`md:flex  md:items-center space-x-0 md:space-x-6 md:pb-0 pt-8 md:pt-0 pb-10 absolute md:static   bg-gray-100 md:z-auto z-[2] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all space-y-5 md:space-y-0 duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
          }`}
        >
          <span className="">
            {" "}
            <ShoppingCartIcon className="w-6 text-gray-600"></ShoppingCartIcon>{" "}
          </span>

          {user ? (
            ""
          ) : (
            <span
              onClick={() => navigate("/login")}
              className="block font-semibold text-lg text-gray-600 cursor-pointer"
            >
              Login
            </span>
          )}

          {user ? (
            <button
              onClick={logout}
              className="bg-rose-700 text-white py-2 px-6 rounded-full  hover:bg-rose-700 duration-300 font-semibold ease-in-out"
            >
              SignOut
            </button>
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className="bg-rose-700 text-white py-2 px-6 rounded-full  hover:bg-rose-700 duration-300 font-semibold ease-in-out"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;

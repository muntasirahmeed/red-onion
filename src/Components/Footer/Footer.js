import React from "react";
import logo from "../../Images/all-image/logo.png";
const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-8 ">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex flex-col md:flex-row  md:justify-between items-center w-full space-y-10 md:space-y-0">
          <div className="w-full md:w-6/12 ">
            <img className="h-10 block mx-auto md:mx-0" src={logo} alt="" />
          </div>
          <div className="flex text-gray-300 font-poppins text-sm w-full  md:w-6/12 justify-around ">
            <div className="flex flex-col  space-y-3 cursor-pointer">
              <span>About online food</span>
              <span>Read our blogs</span>
              <span>Sign up to Deliver</span>
              <span>Add you resturent</span>
            </div>
            <div className="flex flex-col space-y-3  cursor-pointer">
              <span className="">Get help</span>
              <span className="">Read FQAs</span>
              <span className="">View all sites</span>
              <span className="">Resturents near me</span>
            </div>
          </div>
        </div>
        <div className="font-poppins text-gray-400 flex justify-between items-center mt-10 space-x-5">
          <p className="w-6/12 text-sm"> Copyright &copy; 2022 Red Onion </p>
          <div className="flex space-x-6 text-center md:text-left font-poppins text-sm w-6/12 justify-around px-10">
            <p>Privacy Policy</p>
            <p>Trems of Use</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

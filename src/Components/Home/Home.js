import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Header/Navber";
import Information from "../Information/Information";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <Navber></Navber>
      <div className="home  flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center  md:text-4xl text-gray-600 mb-8 pt-5 font-poppins font-semibold">
          Best Food waitting for you belly
        </h1>
        <div className="md:mb-28 lg:mb-0 xl:mb-0">
          <input
            type="text"
            className="bg-gray-100 w-8/12  md:w-12/12 mx-auto focus:outline-none h-10 ring-1 ring-slate-300  rounded-tl-full rounded-bl-full px-4 font-semibold input-element font-poppins text-sm "
            placeholder=" Search Food"
          />
          <button className="bg-rose-600 text-white py-2 px-6   hover:bg-rose-700 duration-300 font-semibold ease-in-out button-element text-sm ring-2  ring-gray-300 ring-offset-2 rounded-tr-full  rounded-br-full">
            Search
          </button>
        </div>
      </div>
      <div className="mt-10">
        <NavigationBar></NavigationBar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <button className="bg-rose-700  mx-auto text-white py-2 px-6 rounded-md hover:bg-rose-800 items-center font-poppins duration-300 font-semibold ease-in-out flex  mb-10">
        Checkout Your Food{" "}
        <ArrowRightIcon className="w-6 ml-4"></ArrowRightIcon>
      </button>
      <Information></Information>
      <Footer></Footer>
    </div>
  );
};

export default Home;

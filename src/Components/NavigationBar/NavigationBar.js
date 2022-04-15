import React from "react";
import { Outlet } from "react-router-dom";

import CustomLink from "../CustomLink/CustomLink";

const NavigationBar = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center font-semibold text-gray-600 text-xl font-poppins">
        <CustomLink className="mx-5 md:mx-10  " to="/breakfast">
          Breakfast
        </CustomLink>
        <CustomLink className="mx-5 md:mx-10" to="/lunch">
          Lunch
        </CustomLink>
        <CustomLink className="mx-5 md:mx-10" to="dinner">
          Dinner
        </CustomLink>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default NavigationBar;

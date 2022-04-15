import React from "react";
import { ArrowRightIcon, TruckIcon } from "@heroicons/react/solid";
const SingleInfo = ({ info }) => {
  const { image, title } = info;
  return (
    <div className="w-[400px] mx-auto">
      <img className="" src={image} alt="" />
      <div className="flex item-start pt-5 ml-5">
        <span className="">
          <TruckIcon className="w-10 text-white bg-rose-700 rounded-full p-2"></TruckIcon>{" "}
        </span>
        <div className="ml-3 font-poppins">
                  <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
                  <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam iusto officiis nemo quia  </p>
                  <span className="flex items-center text-sm mt-4 text-blue-700">See More <ArrowRightIcon className="w-6 ml-3 text-white rounded-full p-1 bg-green-600"></ArrowRightIcon> </span>
        </div>
      </div>
    </div>
  );
};

export default SingleInfo;

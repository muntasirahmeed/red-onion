import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const BreakFast = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-20">
        {breakfast.map((food) => (
          <SingleFood key={food.id} food={food}></SingleFood>
        ))}
          </div>
          {/* <button className="bg-rose-700  mx-auto text-white py-2 px-6 rounded-md hover:bg-rose-800 items-center font-poppins duration-300 font-semibold ease-in-out flex  mb-10">
            Checkout Your Food <ArrowRightIcon className="w-6 ml-4"></ArrowRightIcon>
          </button> */}
    </div>
  );
};

export default BreakFast;

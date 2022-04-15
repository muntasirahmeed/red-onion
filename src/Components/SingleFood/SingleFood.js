import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFood = ({ food }) => {
  const { id, name, price, image, tagLine } = food;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/fooddetails/${id}`)}
      className="flex flex-col w-[340px] pb-6 bg-gray-100  items-center font-poppins hover:shadow-lg rounded cursor-pointer "
    >
      <img className="w-[260px] h-[260px]" src={image} alt="" />
      <h1 className="text-xl font-semibold text-gray-600 mt-5 text-center">
        {name}
      </h1>
      <h2 className="text-xs text-gray-500 mb-3">{tagLine}</h2>
      <h1 className="text-xl font-bold text-gray-600 font-poppins">${price}</h1>
    </div>
  );
};

export default SingleFood;

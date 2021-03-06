import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const [orderCount, setOrdercCount] = useState(1);
  
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/allfoods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const match = foods.find((food) => food?.id == id);
  const orderPrice = orderCount * match?.price;
  const totalPrice = orderPrice.toFixed(2)
  const increaseOrder = () => setOrdercCount(orderCount + 1);
  const decreaseOrder = () => {
    if (orderCount > 1) {
      setOrdercCount(orderCount - 1);
    }
  };
  return (
    <div className=" max-w-[1124px] font-poppins mx-auto   bg-gray-100">
      <div className=" space-y-5 h-full md:h-[80vh] md:space-y-0 flex flex-col-reverse lg:flex-row justify-center items-center my-10 px-10">
        <div className="w-full md:w-5/12 mx-auto text-center md:text-left mt-5 md:mt-0">
          <h1 className="text-3xl mb-4 text-gray-700 font-semibold font-mono">
            {match?.name}
          </h1>
          <p className="text-normal text-gray-600 mt-2">
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary.
          </p>
          <div className="flex items-center space-x-28 mt-8 text-gray-700 justify-center lg:justify-start">
            <p className=" text-3xl font-semibold w-[80px] ">${totalPrice}</p>
            <div className="flex items-center bg-gray-200 rounded-full  space-x-4 py-2 px-4">
              <p>
                {" "}
                <MinusIcon
                  onClick={decreaseOrder}
                  className="w-5"
                ></MinusIcon>{" "}
              </p>
              <p>{orderCount}</p>
              <p>
                {" "}
                <PlusIcon
                  onClick={increaseOrder}
                  className="w-5 text-rose-600"
                ></PlusIcon>{" "}
              </p>
            </div>
          </div>
          <button className="bg-rose-700 text-white py-2 px-6 rounded-full  hover:bg-rose-700 duration-300 mt-5 mx-auto lg:mx-0 ease-in-out flex  items-center ">
            <ShoppingCartIcon className="w-5 mr-3"></ShoppingCartIcon> Add
          </button>
        </div>
        <div className="w-full md:w-7/12 md:mx-auto">
          <img className="w-[500px] block ml-auto " src={match?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

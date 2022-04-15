import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import SingleFood from "../SingleFood/SingleFood";
import {
    ArrowRightIcon
  } from "@heroicons/react/solid";

const Dinner = () => {
  const [dinners, setDinners] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
    setSpinner(false);
  }, []);
  return (
    <>
      {spinner ? (
        <Loading></Loading>
      ) : (
        <div className="max-w-[1280px] mx-auto bg-gray-100 duration-500 ease-in-out ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-20">
            {dinners.map((food) => (
              <SingleFood key={food.id} food={food}></SingleFood>
            ))}
          </div>
          
        </div>
      )}
    </>
  );
};

export default Dinner;

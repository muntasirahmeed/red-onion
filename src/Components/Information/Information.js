import React from "react";
import SingleInfo from "./SingleInfo/SingleInfo";
import img1 from "../../Images/all-image/adult-blur-blurred-background-687824.png";
import img2 from "../../Images/all-image/architecture-building-city-2047397.png";
import img3 from "../../Images/all-image/chef-cook-food-33614.png";
const Information = () => {
  let infos = [
    { id: 1, image: img1, title: "Fast Delivery" },
    { id: 2, image: img3, title: "A Good Auto Responder" },
    { id: 3, image: img2, title: "Home Delivery" },
  ];
  return (
    <div className="max-w-[1280px] mx-auto mb-16 bg-gray-100">
      <div className="w-5/12 mx-auto md:mx-0  my-10 pl-5">
        <h1 className="text-3xl font-semibold  font-poppins text-center md:text-left mb-5 text-gray-700">
          Why you choose us{" "}
        </h1>
        <p className="font-poppins text-sm text-gray-600 text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          deleniti adipisci recusandae voluptates illum distinctio pariatur
          itaque
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {infos.map((info) => (
          <SingleInfo key={info.id} info={info}></SingleInfo>
        ))}
      </div>
    </div>
  );
};

export default Information;

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Header/Navber";
import HomeScreen from "../HomeScreen/HomeScreen";
import Information from "../Information/Information";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <HomeScreen></HomeScreen>
      <div className="mt-10">
        <NavigationBar></NavigationBar>
      </div>
      <Information></Information>
    </div>
  );
};

export default Home;

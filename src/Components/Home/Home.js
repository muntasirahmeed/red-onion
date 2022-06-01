import React from "react";
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

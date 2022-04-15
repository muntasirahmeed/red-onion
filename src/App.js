import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Lunches from "./Components/Lunches/Lunches";
import Dinner from "./Components/Dinners/Dinner";
import BreakFast from "./Components/BreakFast/BreakFast";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import Navber from "./Components/Header/Navber";
import Footer from "./Components/Footer/Footer";
import FoodDetails from "./Components/FoodDetails/FoodDetails";

function App() {
  return (
    <div className="bg-gray-100">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Lunches></Lunches>}></Route>
          <Route path="/lunch" element={<Lunches></Lunches>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
          <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        </Route>
        <Route
          path="/fooddetails/:id"
          element={<FoodDetails></FoodDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

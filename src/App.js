import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Lunches from "./Components/Lunches/Lunches";
import Dinner from "./Components/Dinners/Dinner";
import BreakFast from "./Components/BreakFast/BreakFast";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/lunch" element={<Lunches></Lunches>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
          <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

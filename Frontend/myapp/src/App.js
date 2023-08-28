import Body from "./components/Body";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <Body />
        <Card />
        {/* <Shimmer /> */}
        <Outlet />
      </div>
    </>
  );
}

export default App;

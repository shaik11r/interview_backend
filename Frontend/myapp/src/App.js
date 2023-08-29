import Body from "./components/Body";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <Body />
        <Card />
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default App;

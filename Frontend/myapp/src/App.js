import Question from "./components/Question";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import "./App.css";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <Body/>
        <Category/>
        <Question />
      </div>
    </>
  );
}

export default App;

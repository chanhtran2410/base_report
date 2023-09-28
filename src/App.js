
import NavBar from "./components/NavBar";
import Abstract from "./components/Abstract";
import Motivation from "./components/Motivation";
import Content from "./components/Content";
import './App.css';

function App() {
  return (
    <div className="mainboard">
      <NavBar />
      <Abstract />
      <Motivation />
      <Content />

    </div>

  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routers from "./components/Routers";

function App() {
  return (
    <Router>
      <Navigation />
      <Routers />
    </Router>
  );
}

export default App;

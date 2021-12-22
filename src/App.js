import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
// import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}

export default App;

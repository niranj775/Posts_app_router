import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";
import Post from "./Post";

function Routers() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route
        path="/home"
        render={(routerConfig) => <Home name="Home" {...routerConfig} />}
      />
      <Route path="/posts/:id" component={Post} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routers;

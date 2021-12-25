import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      {/*Navigation*/}
      <NavLink activeClassName="link" to="/home">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} to="/posts">
        Posts
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} to="/post">
        Post
      </NavLink>
    </>
  );
}

export default Navigation;

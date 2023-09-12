import { createEffect, createSignal } from "solid-js";
import "./NavBar.css";
import NavLink from "../NavLink/NavLink";

function NavBar() {
  return (
    <div id="navbar">
      <h1 id="logo" href={"movie-list"}>
        Movies
      </h1>
      <div id="links-container">
        <NavLink linkName={"Home"} goTo={"movie-list"} />
        <NavLink linkName={"Favourites"} goTo={"favourites"} />
      </div>
    </div>
  );
}

export default NavBar;

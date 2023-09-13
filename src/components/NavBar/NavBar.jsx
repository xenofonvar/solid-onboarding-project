import "./NavBar.css";
import { A } from "@solidjs/router";

function NavBar() {
  return (
    <div id="navbar">
      <h1 id="logo" href={"movie-list"}>
        Movies
      </h1>
      <div id="links-container">
        <A activeClass="nav-link-active" class="nav-link" href={"/"}>
          Home
        </A>
        <A activeClass="nav-link-active" class="nav-link" href={"/favourites"}>
          Favourites
        </A>
      </div>
    </div>
  );
}

export default NavBar;

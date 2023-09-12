import { A } from "@solidjs/router";
import "./NavLink.css";
import { createEffect, createSignal } from "solid-js";

function NavLink({ linkName, goTo }) {
  const [isActive, setIsActive] = createSignal(
    window.location.pathname.includes(goTo)
  );
  createEffect(() => {
    setIsActive(window.location.pathname.includes(goTo));
  });
  return (
    <A class={isActive() ? "nav-link-active" : ""} id="nav-link" href={goTo}>
      <h2>{linkName}</h2>
    </A>
  );
}

export default NavLink;

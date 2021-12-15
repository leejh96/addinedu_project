import React from "react";
import NavbarComponent from "../../components/common/NavbarComponent";

function NavbarContainer({ isLoggedIn, user }) {
  return <NavbarComponent isLoggedIn={isLoggedIn} user={user} />;
}

export default NavbarContainer;

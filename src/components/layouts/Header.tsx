import React from "react";
import Logo from "../commons/Logo";
import GithubLogo from "../commons/Github-Logo";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <Logo />
      <GithubLogo />
    </header>
  );
};

export default Header;

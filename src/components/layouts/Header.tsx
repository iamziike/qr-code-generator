import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../commons/Logo";
import GithubLogo from "../commons/Github-Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <GithubLogo />
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div>QrGen</div>
      <Link href="https://iamziike.vercel.app" className="bounce">
        <Image
          src="/assets/github.png"
          alt="Github Icon"
          width={20}
          height={21.5}
        />
      </Link>
    </header>
  );
};

export default Header;

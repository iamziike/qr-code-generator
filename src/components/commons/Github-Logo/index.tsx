import React from "react";
import Image from "next/image";
import Link from "next/link";

const GithubLogo = () => {
  return (
    <Link href="https://github.com/iamziike" className="bounce">
      <Image
        src="/assets/github.png"
        alt="Github Icon"
        width={20}
        height={21.5}
      />
    </Link>
  );
};

export default GithubLogo;

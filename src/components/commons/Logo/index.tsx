import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-decoration-none">
      <h5 className="text-black">QrGen</h5>
    </Link>
  );
};

export default Logo;

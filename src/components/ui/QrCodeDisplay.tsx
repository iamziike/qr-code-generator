"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import Button from "../commons/Button";
import Image from "next/image";

interface Props {
  url: string;
  imgSrc: string;
}

const QrCodeDisplay: FC<Props> = ({ url, imgSrc }) => {
  useEffect(() => {}, []);

  if (url) {
    return (
      <section className="text-center">
        <h3 className="mb-4">Share QR-Code with Friends</h3>
        <Link className="text-decoration-none text-black" href={url}>
          <Image src={imgSrc} alt="" width={359} height={359} />
          <p className="text-gray">{url}</p>
        </Link>
        <Button
          className="bg-black text-white px-5"
          style={{ fontFamily: `var(--potter-one)` }}
        >
          Share
        </Button>
      </section>
    );
  }

  location.assign("/");

  return <></>;
};

export default QrCodeDisplay;

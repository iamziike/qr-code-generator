"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "../commons/ShareButton";

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
        <ShareButton
          shareData={{
            title: "QR Code",
            text: "A Qr was shared to you",
            url: window.location.href,
          }}
          label="Share this"
        />
      </section>
    );
  }

  location.assign("/");

  return <></>;
};

export default QrCodeDisplay;

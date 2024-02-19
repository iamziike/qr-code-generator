import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import ShareImageButton from "../commons/ShareImageButton";

interface Props {
  url: string;
  imgSrc: string;
}

const QrCodeDisplay: FC<Props> = ({ url, imgSrc }) => {
  if (url) {
    return (
      <section className="text-center">
        <h3 className="mb-4">Share QR-Code with Friends</h3>
        <Link className="text-decoration-none text-black" href={url}>
          <Image src={imgSrc} alt="" width={359} height={359} />
          <p className="text-gray">{url}</p>
        </Link>
        <ShareImageButton imageSrc={imgSrc} label="Share this" />
      </section>
    );
  }

  return <React.Fragment />;
};

export default QrCodeDisplay;

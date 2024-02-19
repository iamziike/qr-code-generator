import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "../commons/ShareButton";
import { headers } from "next/headers";

interface Props {
  url: string;
  imgSrc: string;
}

const QrCodeDisplay: FC<Props> = ({ url, imgSrc }) => {
  const headersList = headers();
  const domain = headersList.get("host");

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
            url: `${domain}/url?id=${url}`,
          }}
          label="Share this"
        />
      </section>
    );
  }

  // redirect("/");
};

export default QrCodeDisplay;

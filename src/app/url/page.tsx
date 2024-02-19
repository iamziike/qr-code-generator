import React from "react";
import QRCode from "qrcode";
import QrCodeDetails from "@/components/ui/QrCodeDisplay";
import { PageComponent } from "@/models";

const Page: PageComponent = async ({ searchParams }) => {
  const { id: url } = searchParams;
  const imgSrc = url
    ? await QRCode.toDataURL(url ?? "", {
        width: 360,
        margin: 1,
      })
    : "";

  return <QrCodeDetails url={url ?? ""} imgSrc={imgSrc} />;
};

export default Page;

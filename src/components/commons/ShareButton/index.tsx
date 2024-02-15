import React, { FC } from "react";
import Button from "../Button";
import toast from "react-hot-toast";

interface Props {
  label?: string;
  shareData: ShareData;
}

const ShareButton: FC<Props> = ({ label = "Share", shareData }) => {
  return (
    <Button
      className="bg-black text-white px-5"
      style={{ fontFamily: `var(--potter-one)` }}
      onClick={() => {
        if (navigator.share) {
          navigator.share(shareData);
        } else {
          toast.error("Web Share API not supported in your browser");
        }
      }}
    >
      {label}
    </Button>
  );
};

export default ShareButton;

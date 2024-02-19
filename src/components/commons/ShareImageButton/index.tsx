"use client";

import React, { FC } from "react";
import Button from "../Button";
import useShareImage from "@/utils/hooks/useShareImage";

interface Props {
  label?: string;
  imageSrc: string;
}

const ShareImageButton: FC<Props> = ({ label = "Share", imageSrc }) => {
  const { shareImage } = useShareImage();

  return (
    <Button
      className="bg-black text-white px-5"
      style={{ fontFamily: `var(--potter-one)` }}
      onClick={() => {
        shareImage(imageSrc);
      }}
    >
      {label}
    </Button>
  );
};

export default ShareImageButton;

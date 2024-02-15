"use client";

import clsx from "clsx";
import styles from "./index.module.scss";
import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={clsx(`${props?.className} ${styles?.button}`, {
        [styles?.["button--disabled"]]: props?.disabled,
      })}
    />
  );
};

export default Button;

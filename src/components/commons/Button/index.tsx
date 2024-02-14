"use client";

import styles from "./index.module.scss";
import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ ...props }) => {
  return <button {...props} className={styles?.button} />;
};

export default Button;

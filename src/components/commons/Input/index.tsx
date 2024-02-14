"use client";

import styles from "./index.module.scss";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <input {...props} className={styles?.input} />
    </div>
  );
};

export default Input;

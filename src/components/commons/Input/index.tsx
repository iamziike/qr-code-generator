"use client";

import FormFieldErrorDisplay from "../FormFieldErrorDisplay/FormFieldErrorDisplay";
import styles from "./index.module.scss";
import React, { FC } from "react";
import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isTouched?: boolean;
  error?: string;
}

const Input: FC<Props> = ({ error, isTouched, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        {...props}
        className={clsx(styles?.input, {
          [styles?.["input--error"]]: isTouched && error,
        })}
      />
      {isTouched && (
        <FormFieldErrorDisplay error={error} style={{ position: "absolute" }} />
      )}
    </div>
  );
};

export default Input;

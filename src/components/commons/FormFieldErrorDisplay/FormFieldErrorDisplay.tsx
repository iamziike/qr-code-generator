import React from "react";

interface Props {
  error?: string | boolean | React.ReactElement;
  style?: React.CSSProperties;
}

const FormFieldErrorDisplay: React.FC<Props> = ({ error, style }) => {
  return (
    error && (
      <div
        style={{
          position: "relative",
          color: "#dc3545",
          fontSize: "0.875rem",
          fontFamily: "var(--poppins)",
          ...style,
        }}
      >
        <p
          // style={{ position: "absolute", top: "0", left: "5px" }}
          style={{
            marginBottom: "0",
            paddingTop: "0.25rem",
            fontSize: "0.875rem",
          }}
        >
          {error}
        </p>
      </div>
    )
  );
};

export default FormFieldErrorDisplay;

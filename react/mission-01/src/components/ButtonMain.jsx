import React from "react";

const styleButton = {
  border: "none",
  width: "100%",
  padding: "8px 16px",
  borderRadius: "4px",
  fontSize: "1rem",
  fontWeight: "600",
};

const stylePrimary = {
  backgroundColor: "#396CEF",
  color: "white",
};

const styleSecondary = {
  backgroundColor: "#E9E9E9",
  color: "#181818",
};

export const ButtonMain = ({ primary = false, onClick, text, isValid }) => {
  const style = {
    ...styleButton,
    ...(primary ? stylePrimary : styleSecondary),
  };

  return (
    <button style={style} onClick={onClick} disabled={!isValid}>
      {text}
    </button>
  );
};

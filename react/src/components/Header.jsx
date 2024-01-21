import React from "react";

const styleContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBlock: "0.75rem",
  position: "sticky",
};

export const Header = () => {
  return (
    <div style={styleContainer}>
      <svg role="button" width="24" height="24" viewBox="0 0 22 22">
        <use href="/assets/_sprite.svg#direction" />
      </svg>
      <svg role="button" width="24" height="24" viewBox="0 0 22 22">
        <use href="/assets/_sprite.svg#close" />
      </svg>
    </div>
  );
};

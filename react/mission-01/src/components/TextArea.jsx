import React from "react";

const styleWrapper = { display: "flex", flexDirection: "column", gap: "4px", marginBlock: "12px" };
const styleLabel = { fontWeight: "600", fontSize: "0.875rem", marginBottom: "4px" };
const styleTextarea = {
  border: "1px solid #9DA1B4",
  borderRadius: "4px",
  padding: "8px 4px",
  width: "100%",
  minHeight: "150px",
};
const styleSpan = { color: "#9DA1B4", alignSelf: "flex-end", fontSize: "0.875rem" };

export const Textarea = ({ id, label, text = "여기에 글을 입력해주세요", max = 10, ariaLabel }) => {
  return (
    <div style={styleWrapper}>
      <label style={styleLabel} htmlFor={id}>
        {label}
      </label>
      <textarea id={id} style={styleTextarea} placeholder={text} maxLength={max} aria-label={ariaLabel} />
      <span style={styleSpan} aria-hidden={true}>
        0/{max}
      </span>
    </div>
  );
};

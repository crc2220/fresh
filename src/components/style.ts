import * as React from "react";
export const fContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
export const fRow: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};
export const fGrowOne: React.CSSProperties = {
  flexGrow: 1,
};
export const fBasisHalf: React.CSSProperties = {
  flexBasis: "50%",
};
export const box: React.CSSProperties = {
  border: "1px dashed black",
  fontFamily: "Space Mono, serif",
  fontSize: "24px",
};

export const input: React.CSSProperties = {
  padding: "5px 10px",
  border: "4px solid red",
  fontSize: "24px",
};

export const pointer: React.CSSProperties = {
  cursor: "pointer",
};

export const button: React.CSSProperties = {
  padding: "6px 10px",
  border: "4px solid red",
  fontSize: "22px",
  fontStyle: "uppercase",
  color: "white",
  background: "red",
  textTransform: "uppercase",
  fontWeight: "bold",
  cursor: "pointer",
};

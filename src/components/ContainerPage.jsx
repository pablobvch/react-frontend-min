import React from "react";

export const ContainerPage = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <hr />
      {children}
    </>
  );
};

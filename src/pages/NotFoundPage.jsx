import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPage } from "../components/ContainerPage";

const handleOnClick = (navigate) => {
  navigate("/home", {
    replace: true
  });
};

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerPage title={"Not Found Page"}>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleOnClick(navigate);
        }}
      >
        Return to Home Page
      </button>
    </ContainerPage>
  );
};

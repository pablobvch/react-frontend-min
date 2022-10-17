import React from "react";
import { ContainerPage } from "../components/ContainerPage";

export const HomePage = () => {
  return (
    <ContainerPage title={"Home Page"}>
      <p>
        Please visit the menu links to visualize every one of the components. If
        you want, you can modify the URL to test the router. You'll be forwarded
        to the Not Found Page if the route is not defined.
      </p>
    </ContainerPage>
  );
};

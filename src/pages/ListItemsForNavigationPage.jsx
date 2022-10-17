import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { ListItemsForNavigation } from "../components/ListItemsForNavigation";

export const ListItemsForNavigationPage = () => {
  return (
    <ContainerPage title={"List Items Page"}>
      <ListItemsForNavigation />
    </ContainerPage>
  );
};

import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { TeamsList } from "../components/TeamsList";

export const TeamsListPage = () => {
  return (
    <ContainerPage title={"Teams List Page"}>
      <TeamsList />
    </ContainerPage>
  );
};

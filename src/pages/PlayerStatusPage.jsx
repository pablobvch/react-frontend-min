import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { PlayerStatus } from "../components/PlayerStatus";

export const PlayerStatusPage = () => {
  return (
    <ContainerPage title={"Player Status Page"}>
      <PlayerStatus />
    </ContainerPage>
  );
};

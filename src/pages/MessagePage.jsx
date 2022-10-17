import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { Message } from "../components/Message";

export const MessagePage = () => {
  return (
    <ContainerPage title={"Message Page"}>
      <Message />
    </ContainerPage>
  );
};

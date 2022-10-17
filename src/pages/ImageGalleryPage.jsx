import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { ImageGallery } from "../components/ImageGallery";
import { getLinks } from "../helpers/getLinks";

export const ImageGalleryPage = () => {
  return (
    <ContainerPage title={"Image Gallery Page"}>
      <ImageGallery links={getLinks()} />
    </ContainerPage>
  );
};

import React, { useMemo } from "react";
import { ContainerPage } from "../components/ContainerPage";
import { ImageGallery } from "../components/ImageGallery";
import { getLinks } from "../helpers/getLinks";

export const ImageGalleryPage = () => {
  const links = useMemo(() => getLinks(), []);

  return (
    <ContainerPage title={"Image Gallery Page"}>
      <ImageGallery links={links} />
    </ContainerPage>
  );
};

import React from "react";
import { ContainerPage } from "../components/ContainerPage";
import { Grocery } from "../components/Grocery";
import { PRODUCTS } from "../data/products";

export const GroceryPage = () => {
  return (
    <ContainerPage title={"Grocery Page"}>
      <Grocery products={PRODUCTS} />
    </ContainerPage>
  );
};

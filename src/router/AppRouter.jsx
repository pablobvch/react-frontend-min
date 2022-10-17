import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { FocusableInputPage } from "../pages/FocusableInputPage";
import { GroceryPage } from "../pages/GroceryPage";
import { HomePage } from "../pages/HomePage";
import { ImageGalleryPage } from "../pages/ImageGalleryPage";
import { ListItemsForNavigationPage } from "../pages/ListItemsForNavigationPage";
import { MessagePage } from "../pages/MessagePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PlayerStatusPage } from "../pages/PlayerStatusPage";
import { RatingPage } from "../pages/RatingPage";
import { TeamsListPage } from "../pages/TeamsListPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Navigate to={"/home"} />}></Route>
          <Route path={"/home"} element={<HomePage />}></Route>
          <Route path={"/focusable"} element={<FocusableInputPage />}></Route>
          <Route path={"/grocery"} element={<GroceryPage />}></Route>
          <Route path={"/image-gallery"} element={<ImageGalleryPage />}></Route>
          <Route
            path={"/list-items"}
            element={<ListItemsForNavigationPage />}
          ></Route>
          <Route path={"/message"} element={<MessagePage />}></Route>
          <Route path={"/player-status"} element={<PlayerStatusPage />}></Route>
          <Route path={"/rating"} element={<RatingPage />}></Route>
          <Route path={"/teams-list"} element={<TeamsListPage />}></Route>
          <Route path={"/*"} element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

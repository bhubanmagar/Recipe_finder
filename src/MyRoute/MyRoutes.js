import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/Home/Home";
import ViewPage from "../Pages/View/ViewPage";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;

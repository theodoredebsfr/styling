import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/home";
import Exercise from "./src/pages/Exercise";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="exercise" element={<Exercise />} />
    </Routes>
  );
};

export default MainRoutes;

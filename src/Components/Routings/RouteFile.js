import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponents from "./FourthComponents";
import FiveComponet from "./FiveComponet";
import PageNotFound from "./PageNotFound";

const RouteFile = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstComponent />} />
      <Route path="/Second" element={<SecondComponent />}></Route>
      <Route path="/Third" element={<ThirdComponent />} />
      <Route path="/Four" element={<FourthComponents />}></Route>
      <Route path="/Five" element={<FiveComponet />} />
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default RouteFile;

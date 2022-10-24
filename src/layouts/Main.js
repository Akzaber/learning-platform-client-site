import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Header></Header>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div className="md:w-9/12 md:mx-auto mx-4">
      <Header></Header>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;

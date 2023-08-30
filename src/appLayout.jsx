import React from "react";
import AppBar from "./components/appbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;

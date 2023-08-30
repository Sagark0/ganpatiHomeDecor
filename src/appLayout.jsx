import React from "react";
import AppBar from "./components/appbar";
import Footer from "./components/footer";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

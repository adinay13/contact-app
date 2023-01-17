import React from "react";
import Header from "./Header";

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ marginBottom: 60 }}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;

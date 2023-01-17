import React from "react";
import logo from "../img/Group.svg";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img src={logo} alt=""></img>
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Ubuntu", fontWeight: 400, fontSize: 32 }}
          >
            MyContacts
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

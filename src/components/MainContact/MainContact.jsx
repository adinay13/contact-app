import React from "react";
import { Box, Container, IconButton } from "@mui/material";

import avatar from "../../img/avatar.jpg";
import favorite from "../../img/favorite-heart.svg";

import ContactForm from "./ContactForm";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContact = () => {
  const state = useSelector((state) => state);
  const { id } = useParams();

  return state.data
    .filter((contact) => contact.id === +id.slice(1))
    .map((contact) => (
      <Container>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "41px 0 41px" }}
        >
          <img
            src={contact.image}
            alt="avatar"
            style={{ width: "228px", borderRadius: "4px" }}
          />
          <IconButton sx={{ width: 70, height: 64.4, marginLeft: "26px" }}>
            <img src={favorite} alt="favorite" style={{ width: "100%" }} />
          </IconButton>
        </Box>
        <ContactForm />
      </Container>
    ));
};

export default MainContact;

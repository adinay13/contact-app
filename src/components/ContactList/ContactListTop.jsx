import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import favorite from "../../img/favorite-heart.svg";
import sortAZ from "../../img/sort-AZ.svg";
import sortZA from "../../img/sort-ZA.svg";

import { useDispatch } from "react-redux";

import {
  GetUsersAll,
  searchContact,
  sortAz,
  sortZa,
} from "../../redux/actions";

const ContactListTop = (props) => {
  const dispatch = useDispatch();

  const filteringAzOnClick = () => {
    dispatch(sortAz());
    console.log("sortAZ");
  };
  const filteringZaOnClick = () => {
    dispatch(sortZa());
    console.log("sortZA");
  };

  const handleSearch = (event) => {
    dispatch(searchContact(event));
  };

  const blur = () => {
    dispatch(GetUsersAll());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        m: "47px 0 30px",
      }}
    >
      <TextField
        placeholder="type to search..."
        type="search"
        sx={{
          width: 551,
        }}
        id="search"
        onChange={(event) => handleSearch(event.target.value)}
        onBlur={(event) => blur(event.target.value)}
      />
      <Box>
        <IconButton onClick={() => props.showFavorites()}>
          <img src={favorite} alt="heart"></img>
        </IconButton>
        <IconButton onClick={filteringAzOnClick}>
          <img src={sortAZ} alt="sortAZ"></img>
        </IconButton>
        <IconButton onClick={filteringZaOnClick}>
          <img src={sortZA} alt="sortZA"></img>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactListTop;

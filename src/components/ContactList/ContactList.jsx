import React, { useState, useEffect } from "react";
import ContactListTop from "./ContactListTop";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ContactListContent from "./ContactListContent";

import { GetUsersAll } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const contactsFilterAZ = (a, b, i) => {
  const nameA = a[i];
  const nameB = b[i];

  if (nameA < nameB) {
    return 1;
  }

  if (nameA > nameB) {
    return -1;
  } else {
    return 0;
  }
};

const contactsFilterZA = (a, b, i) => {
  const nameA = a[i];
  const nameB = b[i];

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
};

const ContactList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  console.log("state", state);

  const [favorite, setFavorite] = useState(true);

  const [favoritesId, setFavoriteId] = useState([]);
  localStorage.setItem("Favorite", JSON.stringify(favoritesId));

  useEffect(() => {
    const getData = localStorage.getItem("LocalStorageData");
    if (!getData) {
      dispatch(GetUsersAll());
    }
  }, []);

  const addFavorite = ({ id }) => {
    const result = [...favoritesId, id];
    setFavoriteId(result);
  };

  const removeFavorite = ({ id }) => {
    const result = [...favoritesId].filter((favoriteId) => favoriteId !== id);
    setFavoriteId(result);
  };

  const showFavorites = () => {
    setFavorite(!favorite);
    if (favorite) {
      const favoriteList = localStorage.getItem("Favorite");
      if (!favoriteList) {
        alert("There is no Favourite contact");
      }
    }
  };

  const filteringAzOnClick = () => {
    return dataList.sort((a, b) => {
      return contactsFilterAZ(a, b, "firstName");
    });
  };
  const filteringZaOnClick = () => {
    return dataList.sort((a, b) => {
      return contactsFilterZA(a, b, "firstName");
    });
  };

  const favoriteList = JSON.parse(localStorage.getItem("Favorite"));

  function renderFavorite(list = [], data) {
    if (list) {
      const favoriteData = data.filter((contact, i) => {
        return contact.id === list[i];
      });

      return favoriteData;
    }
  }

  let dataList = favorite ? state : renderFavorite(favoriteList, state);

  return state.loading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : state.error ? (
    <Box>
      <Typography component="h1">{state.error}</Typography>
    </Box>
  ) : (
    <>
      <ContactListTop showFavorites={() => showFavorites()} />
      <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
        {dataList.map((contact) => (
          <Grid item key={contact.id}>
            <ContactListContent
              key={contact.id}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              city={contact.city}
              country={contact.country}
              phoneNumber={contact.phoneNumber}
              website={contact.website}
              email={contact.email}
              image={contact.image}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              // toggle={toggle}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ContactList;

import React, { useState } from "react";
import "./ContactListContent.css";
import ContactImg from "../../img/contact-img.jpg";
import favorite from "../../img/favorite-transparent.svg";
import location from "../../img/location.svg";
import email from "../../img/email.svg";
import internet from "../../img/internet.svg";
import smartphone from "../../img/smartphone.svg";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  background: "#212121",
  color: "#fff",
  "&:hover": {
    background: "#414042",
  },
}));

const ContactListContent = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle);
    return !toggle ? props.addFavorite(props) : props.removeFavorite(props);
  };

  const addToggleFunc = () => {
    setToggle(!toggle);
    return props.addFavorite(props);
  };

  const remoteToggleFunc = () => {
    setToggle(toggle);
    return props.removeFavorite(props);
  };

  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          weight="100%"
          height="136"
          image={props.image}
          alt="img"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Ubuntu",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              {props.firstName} {props.lastName}
            </Typography>
            <IconButton onClick={toggleFunc}>
              <FavoriteIcon
                alt="favorite"
                // className={toggleProps}
                className={toggle ? "red__favorite" : "white__favorite"}
              ></FavoriteIcon>
            </IconButton>
          </Box>
          <Typography
            variant="ul"
            component="ul"
            color="#000"
            sx={{
              listStyle: "none",
              fontFamily: "Ubuntu",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: "14.94px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={location} alt="" />
              {props.city} city, {props.country}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={smartphone} alt="" />
              {props.phoneNumber}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={internet} alt="" />
              {props.website}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={email} alt="" />
              {props.email}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Link to={`/item:${props.id}`} style={{ textDecoration: "none" }}>
          <StyledButton
            size="small"
            color="primary"
            sx={{
              fontSize: 14,
              textTransform: "lowercase",
              fontFamily: "Ubuntu",
              fontWeight: 400,
            }}
          >
            show
          </StyledButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ContactListContent;

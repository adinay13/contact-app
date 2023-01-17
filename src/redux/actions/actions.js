import {
  REQUEST_DATA_USERS,
  GET_SUCCESS_USERS_DATA,
  GET_FAIL_USERS_DATA,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
  SORT_A_Z,
  SORT_Z_A,
} from "./types";

const url =
  "https://my-json-server.typicode.com/RomanChasovitin/demo-api/users";

const getUsers = () => {
  return {
    type: REQUEST_DATA_USERS,
  };
};

export const getSucces = (data) => {
  return {
    type: GET_SUCCESS_USERS_DATA,
    payload: data,
  };
};

export const getFail = (error) => {
  return {
    GET_FAIL_USERS_DATA,
    payload: error,
  };
};

export const updateContact = (payload) => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};

export const searchContact = (payload) => {
  return {
    type: SEARCH_CONTACT,
    payload,
  };
};

export const sortAz = () => {
  return {
    type: SORT_A_Z,
  };
};

export const sortZa = () => {
  return {
    type: SORT_Z_A,
  };
};

export const GetUsersAll = () => {
  return (dispatch) => {
    dispatch(getUsers());
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        dispatch(getSucces(data.data));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(getFail(error.message));
      });
  };
};

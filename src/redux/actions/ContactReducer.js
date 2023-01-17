import {
  REQUEST_DATA_USERS,
  GET_SUCCESS_USERS_DATA,
  GET_FAIL_USERS_DATA,
  SORT_A_Z,
  SORT_Z_A,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
} from "./types";

const initialState = {
  data: [],
  loading: "false",
  error: "",
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_SUCCESS_USERS_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };

    case GET_FAIL_USERS_DATA:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    case UPDATE_CONTACT:
      const newData = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.removeItem("localStorageData");
      localStorage.setItem("localStorageData", JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };

    case SEARCH_CONTACT:
      return {
        ...state,
        data: state.data.filter((item) => {
          const firstNameAndLastName = `${item.firstName} ${item.lastName}`;
          return firstNameAndLastName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };

    case SORT_A_Z:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          return contactsFilterAZ(a, b, "firstName");
        }),
      };

    case SORT_Z_A:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          return contactsFilterZA(a, b, "firstName");
        }),
      };

    default:
      return state;
  }
};

export default reducer;

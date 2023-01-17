import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./ContactReducer";

const setLocalStorageData = (store) => {
  try {
    const data = JSON.stringify(store);
    localStorage.setItem("LocalStorageData", data);
  } catch (error) {
    console.log("Error", error);
  }
};

const getLocalStorageData = () => {
  try {
    const data = localStorage.getItem("LocalStorageData");

    if (data === null) {
      console.log("В localStorage ничего нет!");
      return undefined;
    }

    return JSON.parse(data);
  } catch (error) {
    console.log("Error", error);
  }
};

const store = createStore(
  reducer,
  getLocalStorageData(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => setLocalStorageData(store.getState()));

export default store;

import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import MainContact from "./components/MainContact/MainContact";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactList />} />
          <Route path="/item:id" element={<MainContact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import Login from "./components/Login";
import Profile from "./components/ProfileListing";
import User from "./components/UserDetails";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="profiles" element={<Profile />} />
      <Route path="user/:id" element={<User />} />
    </Routes>
  );
}

export default App;

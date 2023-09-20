// lib
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import FourZeroFour from "./pages/FourZeroFour";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/account/signup" element={<Register />} />
      <Route path="/account/signin" element={<Login />} />
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
};

export default App;

// lib
import { Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import FourZeroFour from "./pages/FourZeroFour";

const App = () => {
  return (
    <Routes>
      <Route path="/know-us" element={<LandingPage />} />
      <Route index element={<Home />} />
      <Route path="/account/signup" element={<Register />} />
      <Route path="/account/signin" element={<Login />} />
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
};

export default App;

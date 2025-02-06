import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";
import Start from "./pages/Start";
import UserProtectedWrapper from "./routes/UserProtectedWrapper";
import UserLogout from "./components/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./routes/CaptainProtectedWrapper";
import CaptainLogout from "./components/CaptainLogout";

const App = () => {
  const user = useContext(UserDataContext);
  // console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/user/logout"
        element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
      />
      <Route path="/captain/login" element={<CaptainLogin />} />
      <Route path="/captain/signup" element={<CaptainSignup />} />
      <Route
        path="/captainHome"
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }
      />
      <Route
        path="/captain/logout"
        element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

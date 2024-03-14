import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Private } from "./Private";
import { New } from "../pages/New";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route path="/signUp" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />

      <Route
        path="/new"
        element={
          <Private>
            <New />
          </Private>
        }
      />

      <Route
        path="/new/:id"
        element={
          <Private>
            <New />
          </Private>
        }
      />

      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

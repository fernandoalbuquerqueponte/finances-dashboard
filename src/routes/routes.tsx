import { Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Private } from "./Private";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={
                <Private>
                    <Dashboard />
                </Private>
            } />
        </Routes>
    )
}

export default AppRoutes;
import { Route, Routes, RouterProvider } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    )
}

export default AppRoutes;
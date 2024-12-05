import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import SetupPfpPage from "../pages/SetupAccount/profilePic"; // Keeping the SetupPfpPage import
import Profile from "../pages/Profile/Profile"; // Keeping the Profile import

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Keeping both setup and profile routes */}
                <Route path="/setup/description" element={<SetupDescriptionPage />} />
                <Route path="/setup/pfp" element={<SetupPfpPage />} />
                <Route path="/profile" element={<Profile />} /> {/* Adding the profile route */}
            </Routes>
        </BrowserRouter>
    );
}

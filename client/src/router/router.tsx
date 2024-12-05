import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import SetupLoginPage from "../pages/SetupAccount/login";
import SetupRegisterPage from "../pages/SetupAccount/register";
import SetupSkillSyncPage from "../pages/SetupAccount/skill_sync";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/setup" element={<SetupDescriptionPage />} />
                <Route path="/login" element={<SetupLoginPage />} />
                <Route path="/register" element={<SetupRegisterPage />} />
                <Route path="/skill_sync" element={<SetupSkillSyncPage />} />
            </Routes>
        </BrowserRouter>
    );
}

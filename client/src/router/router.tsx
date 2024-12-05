import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import LoginPage from "../pages/Login/login";
import RegisterPage from "../pages/Register/register";
import SkillSyncPage from "../pages/Skill-Sync/skill_sync";

export default function MainRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/setup" element = {<SetupDescriptionPage />} />
                <Route path="/login" element = {<LoginPage />} />
                <Route path="/register" element = {<RegisterPage />} />
                <Route path="/skill_sync" element = {<SkillSyncPage />} />
            </Routes>
        </BrowserRouter>
    )
}

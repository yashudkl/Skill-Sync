import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import LoginPage from "../pages/Login/login";
import RegisterPage from "../pages/Register/register";
import SkillSyncPage from "../pages/Skill-Sync/skill_sync";
import Profile from "../pages/Profile/Profile"; // Keeping the Profile import
import SetupPfpPage from "../pages/SetupAccount/profilePic";
import SetupSkillsSelectionPage from "../pages/SetupAccount/SkillsSelection";
import CreateTeam from "../pages/CreateTeam/createTeam";
import JoinTeam from "../pages/JoinTeam/joinTeam";
import MainLayout from "../layout/mainLayout"; // Main layout for navigation
import FoundSomeone from "../pages/FoundSomeone/FoundSomeone"; // Main layout for navigation

export default function MainRouter()
{
    return (
        <BrowserRouter>
            <Routes>
{/* Main Layout wraps around all pages to include the Navbar */}
<Route path="/" element={<MainLayout />}>
          {/* Index or Home Route */}
          <Route index element={<div>HEY</div>} /> {/* Default Route */}
          <Route path="profile" element={<Profile />} />
          <Route path="createTeam" element={<CreateTeam />} />
          <Route path="joinTeam" element={<JoinTeam />} />
        </Route>

        {/* Setup Routes (These could be outside the MainLayout if they don't need the Navbar) */}
       
        <Route path="/setup/description" element={<SetupDescriptionPage />} />
        <Route path="/setup/pfp" element={<SetupPfpPage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/register" element = {<RegisterPage />} />
        <Route path="/skill_sync" element = {<SkillSyncPage />} />
        <Route path="/foundsomeone" element = {<FoundSomeone />} />
        <Route path="/setup/skills" element={<SetupSkillsSelectionPage />} />

            </Routes>
        </BrowserRouter>
    )
}


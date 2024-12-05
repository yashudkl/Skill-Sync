import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import Profile from "../pages/Profile/Profile"; // Keeping the Profile import
import SetupPfpPage from "../pages/SetupAccount/profilePic";
import SetupSkillsSelectionPage from "../pages/SetupAccount/SkillsSelection";
import CreateTeam from "../pages/CreateTeam/createTeam"; // Create Team route
import MainLayout from "../layout/mainLayout"; // Main layout for navigation

export default function MainRouter() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<div>HEY</div>} /> {/* Default Route */}
          <Route path = "profile" element={<Profile />} /> {/* Default Route */}
        </Route>
        {/* Setup Routes */}
        <Route path="/setup/description" element={<SetupDescriptionPage />} />
        <Route path="/setup/pfp" element={<SetupPfpPage />} />
        <Route path="/setup/skills" element={<SetupSkillsSelectionPage />} />

        {/* Profile Route */}
        <Route path="/profile" element={<Profile />} />

        {/* Create Team Route */}
        <Route path="/createTeam" element={<CreateTeam />} />

        {/* Main Layout with nested routes */}
        
      </Routes>
    </BrowserRouter>
  );
}

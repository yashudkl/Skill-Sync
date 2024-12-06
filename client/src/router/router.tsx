import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthFormContext } from "@/contexts/authFormContext";
import { toastError } from "@/lib/toast.lib";

import SetupDescriptionPage from "../pages/SetupAccount/description";
import LoginPage from "../pages/Login/login";
import RegisterPage from "../pages/Register/register";
import SkillSyncPage from "../pages/Skill-Sync/skill_sync";
import Profile from "../pages/Profile/Profile";
import SetupPfpPage from "../pages/SetupAccount/profilePic";
import SetupSkillsSelectionPage from "../pages/SetupAccount/SkillsSelection";
import CreateTeam from "../pages/CreateTeam/createTeam";
import JoinTeam from "../pages/JoinTeam/joinTeam";
import FindingSomeone from "../pages/Finding/FoundSomeone";
import MemberSelected from "../pages/Finding/MemberSelected";
import MoreMemberSelected from "../pages/Finding/MoreMemberSelected";
import TeamDashboard from "../pages/TeamDashboard/team-dashboard";
import MainLayout from "../layout/mainLayout";

export default function MainRouter() {
  const { getStatus, currentUser, setCurrentUser } = useAuthFormContext();
  const [loading, setLoading] = useState(true);

  const checkStatus = async () => {
    try {
      const res = await getStatus();
      if (res.error) {
        setLoading(false);
        return;
      }
      setCurrentUser(res.result);
    } catch (err) {
      toastError("Failed to fetch user status");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  if (loading) return <>Loading...</>;

  if (currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          {/* Main Layout wraps around all pages to include the Navbar */}
          <Route path="/" element={<MainLayout />}>
            {/* Index or Home Route */}
            <Route index element={<SkillSyncPage />} /> {/* Default Route */}
            <Route path="profile" element={<Profile />} />
            <Route path="create-team" element={<CreateTeam />} />
            <Route path="join-team" element={<JoinTeam />} />
            <Route path="FindingSomeone" element={<FindingSomeone />} />
            <Route path="MemberSelected" element={<MemberSelected />} />
            <Route path="MoreMemberSelected" element={<MoreMemberSelected />} />
            <Route path="TeamDashboard" element={<TeamDashboard />} />
          </Route>

          {/* Setup Routes */}
          <Route path="/setup/description" element={<SetupDescriptionPage />} />
          <Route path="/setup/pfp" element={<SetupPfpPage />} />
          <Route path="/setup/skills" element={<SetupSkillsSelectionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>HEY</div>} />
          <Route path="profile" element={<Profile />} />
          <Route path="createTeam" element={<CreateTeam />} />
          <Route path="joinTeam" element={<JoinTeam />} />
          <Route path="FindingSomeone" element={<FindingSomeone />} />
          <Route path="MemberSelected" element={<MemberSelected />} />
          <Route path="MoreMemberSelected" element={<MoreMemberSelected />} />
          <Route path="TeamDashboard" element={<TeamDashboard />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}


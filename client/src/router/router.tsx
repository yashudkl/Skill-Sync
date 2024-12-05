import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useAuthFormContext } from "@/contexts/authFormContext";
import { toastError } from "@/lib/toast.lib";

export default function MainRouter()
{
    const {getStatus, currentUser, setCurrentUser} = useAuthFormContext()
    const [loading, setLoading] = useState(true);
    const checkStatus = async() => {
        const res = await getStatus();
        if(res.error) {
            setLoading(false)
            return
        }
        setCurrentUser(res.result)
        setLoading(false)
    }
    useEffect(()=>{
        checkStatus()
    }, [])
    if(loading) return <>Loading...</>
    if(currentUser){
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
              <Route path="teams" element={<>TEAMSSSSS</>} />
            </Route>
    
            {/* Setup Routes (These could be outside the MainLayout if they don't need the Navbar) */}
           
            <Route path="/setup/description" element={<SetupDescriptionPage />} />
            <Route path="/setup/pfp" element={<SetupPfpPage />} />
            <Route path="/login" element = {<LoginPage />} />
            <Route path="/register" element = {<RegisterPage />} />
            <Route path="/setup/skills" element={<SetupSkillsSelectionPage />} />
    
                </Routes>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Routes>

       

        <Route path="/login" element = {<LoginPage />} />
        <Route path="/register" element = {<RegisterPage />} />
        <Route path = "*" element={<Navigate to = "/login" />} />

            </Routes>
        </BrowserRouter>
    )
}


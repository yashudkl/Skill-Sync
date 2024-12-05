import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import Profile from "../pages/Profile/Profile";

export default function MainRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/setup" element = {<SetupDescriptionPage />} />
                <Route path="/profile" element = {<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";
import SetupPfpPage from "../pages/SetupAccount/profilePic";

export default function MainRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/setup/description" element = {<SetupDescriptionPage />} />
                <Route path="/setup/pfp" element = {<SetupPfpPage />} />
            </Routes>
        </BrowserRouter>
    )
}
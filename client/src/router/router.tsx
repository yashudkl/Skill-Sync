import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetupDescriptionPage from "../pages/SetupAccount/description";

export default function MainRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/setup" element = {<SetupDescriptionPage />} />
            </Routes>
        </BrowserRouter>
    )
}
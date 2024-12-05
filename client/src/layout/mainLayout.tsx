import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav";

export default function MainLayout()
{
    return(
        <div>
            <Outlet />
            <NavBar />
        </div>
    )
}
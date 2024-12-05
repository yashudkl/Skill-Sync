import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav";

export default function MainLayout()
{
    console.log("Hello")
    return(
        <div>
            <Outlet />
            <NavBar />
        </div>
    )
}
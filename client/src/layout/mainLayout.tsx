import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav";

export default function MainLayout()
{
    return(
        <div>
            <div className="pb-[80px] min-h-screen">
                <Outlet />
            </div>
            
            <NavBar />
        </div>
    )
}
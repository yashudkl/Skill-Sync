import { NavLink } from "react-router-dom"
import { cn } from "../lib/cn"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function NavBar()
{
    return(
        <nav className="fixed w-full h-[80px] px-4 border-t-[1px] border-t-c_gray-200 bottom-0 flex items-center bg-white">
            <NavItem Icon={ShuffleIcon} label="Connect" to="/" />
            <NavItem Icon={PeopleIcon} label="Teams" to="/teams" />
            <NavItem Icon={AccountCircleIcon} label="Profile" to="/profile" />
        </nav>
    )
}

interface Props {
    label: string,
    to: string,
    Icon: any
}

function NavItem({Icon, to, label}: Props)
{
    return(
        <NavLink to = {to} className={({isActive})=>cn("flex flex-col space-y-2 flex-1 items-center text-c_gray-500", isActive && "text-primary-blue-900")}>
            <Icon />
            <div>{label}</div>
        </NavLink>
    )
}
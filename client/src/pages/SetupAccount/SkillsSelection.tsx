import AvatarInput from "../../components/AvatarInput";
import Button from "../../components/Button";
import CustomInput from "../../components/input";
import SearchIcon from '@mui/icons-material/Search';
export default function SetupSkillsSelectionPage() {
    return (
        <div className="p-6 flex w-screen h-screen flex-col space-y-4">
            <div className="flex py-2">
                <h1 className="text-4xl text-c_gray-600 font-medium">Setup Account</h1>
            </div>
            
            <form className="flex flex-col space-y-4">
                <div className="font-medium text-c_gray-600">
                    Select Skills
                </div>
                <div>
                    <CustomInput icon = {SearchIcon} placeholder="Search..."/>
                </div>
            </form>
            <div>
                <Item />
            </div>
        </div>
    )
}

function Item(){
    return(
        <div className="flex">
            <div>React Native</div>
            <div className="">
                <Button className="">Add</Button>
            </div>
        </div>
    )
}
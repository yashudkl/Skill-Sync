import AvatarInput from "../../components/AvatarInput";
import Button from "../../components/Button";
import CustomInput from "../../components/input";
import SearchIcon from '@mui/icons-material/Search';
import { communitySkills } from "../../lib/skills";
export default function SetupSkillsSelectionPage() {
    return (
        <div className="p-6 flex w-screen h-screen flex-col space-y-6">
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
            <div className="flex flex-col space-y-4 flex-1 overflow-scroll">
                {
                    communitySkills.map(x=><Item label={x} />)
                }
            </div>
            <div>
                <Button>Next</Button>
            </div>
        </div>
    )
}
interface Props {
    label: string,
}
function Item({label}: Props){
    return(
        <div className="flex justify-between items-center text-c_gray-700 font-medium">
            <div>{label}</div>
            <Button className="w-auto px-4 py-1 font-normal text-sm">Add</Button>
        </div>
    )
}
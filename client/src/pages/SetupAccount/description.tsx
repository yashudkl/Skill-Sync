import CustomInput from "../../components/input";
import PersonIcon from '@mui/icons-material/Person';
import CustomTextArea from "../../components/textarea";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
// import CustomTextArea from "../../components/textarea";
export default function SetupDescriptionPage(){
    const navigate = useNavigate();
    return(
        <>
            <div className="p-6 flex w-screen h-screen flex-col space-y-4">
                <div className = "flex py-2">
                    <h1 className="text-4xl text-c_gray-600 font-medium">Setup Account</h1>
                </div>
                <div className="font-medium text-c_gray-600">
                    Add a description about yourself
                </div>
                <form className="flex flex-col w-full flex-1">
                    <div className="h-[490px] w-full">
                        <CustomTextArea placeholder="Describe..." />
                    </div>
                    <div className="mt-auto">
                        <Button onClick={()=>navigate("/setup/skills")}>Next</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
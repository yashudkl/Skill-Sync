import { useNavigate } from "react-router-dom";
import AvatarInput from "../../components/AvatarInput";
import Button from "../../components/Button";
import { useAuthFormContext } from "../../contexts/authFormContext";

export default function SetupPfpPage() {
    const navigate = useNavigate()
    const {setupState, setSetupState} = useAuthFormContext()
    return (
        <div className="p-6 flex w-screen h-screen flex-col space-y-4">
            <div className="flex py-2">
                <h1 className="text-4xl text-c_gray-600 font-medium">Setup Account</h1>
            </div>
            
            <form className="flex-1 flex flex-col">
                <div className="flex justify-center items-center flex-1 flex-col space-y-8">

                    <div className="font-medium text-c_gray-600">
                    Choose Profile Picutre
                    </div>
                    <div className="flex items-center justify-center">
                        <AvatarInput onUrlChange={(url)=>setSetupState({...setupState, pfp_url:  url})} imageSrc={setupState.pfp_url} onImageChange={(image)=>setSetupState({...setupState, pfp_file: image})} />
                    </div>
                </div>
                <div className="mt-auto flex">
                    <Button onClick={()=>navigate("/setup/description")}>Next</Button>
                </div>
            </form>
        </div>
    )
}
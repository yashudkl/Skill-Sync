import AvatarInput from "../../components/AvatarInput";
import Button from "../../components/Button";

export default function SetupPfpPage() {
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
                        <AvatarInput />
                    </div>
                </div>
                <div className="mt-auto flex">
                    <Button>Next</Button>
                </div>
            </form>
        </div>
    )
}
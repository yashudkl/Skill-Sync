import React from "react";
import CustomInput from "../../components/input";
import { AccountCircle, Lock } from "@mui/icons-material"; // Import MUI icons
import loginImg from '../../assets/register.png';
import Button from "../../components/Button";
import { useAuthFormContext } from "../../contexts/authFormContext";
import { toastError } from "../../lib/toast.lib";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
   
    const {signup, setSignupState, signupState} = useAuthFormContext();
    const navigate = useNavigate();
    const onSignUp = async(e: any) => {
        e.preventDefault();
        const res = await signup();
        if(res.error){
            toastError(res.message);
            return;
        }
        navigate("/")
    }
    return (
        <div className="p-6 flex flex-col w-screen h-screen justify-between">
            
            {/* image section */}
            <div className="mb-8 flex-1">
                <img 
                    src={loginImg} 
                    alt="Description" 
                    className="w-full  h-[full] object-cover" 
                />
            </div>

            {/* login section */}
            <div className="flex flex-col items-start flex-1">

                    <h1 className="text-4xl text-[#066F8C] font-medium mb-4">Register</h1>


                    <div className="font-medium text-c_gray-600 mb-6">
                        Please Register to login
                    </div>


                {/* Login Form */}
                <form className="w-full space-y-3">

                    <CustomInput 
                        icon={AccountCircle} 
                        type="text" 
                        placeholder="Username" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                        onChange={(e)=>setSignupState({...signupState, user_name: e.target.value})}

                    />
                    
                    <CustomInput 
                        icon={AccountCircle} 
                        type="text" 
                        placeholder="Full Name" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                        onChange={(e)=>setSignupState({...signupState, full_name: e.target.value})}
                        
                    />
                    
                    <CustomInput 
                        icon={AccountCircle} 
                        type="mail" 
                        placeholder="Email" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                        onChange={(e)=>setSignupState({...signupState, email: e.target.value})}

                    />



                    <CustomInput 
                        icon={Lock} 
                        type="password" 
                        placeholder="Password" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mt-2 w-full"
                        onChange={(e)=>setSignupState({...signupState, password: e.target.value})}

                    />
                    

                    <Button onClick={onSignUp}>Signup</Button>
<div className= "mt-1 text-center ">
                    <p className="login-footer font-medium text-c_gray-600 mt-4 mb-4 text-center">
                       Already have an account?{' '}
                        <a href="/login" className="text-[#066F8C]">Login</a>
                    </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

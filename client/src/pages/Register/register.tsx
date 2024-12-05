import React from "react";
import CustomInput from "../../components/input";
import { AccountCircle, Lock } from "@mui/icons-material"; // Import MUI icons
import loginImg from '../../assets/register.png';

export default function LoginPage() {
    return (
        <div className="p-6 flex flex-col w-screen h-screen justify-between">
            
            {/* image section */}
            <div className="w-full mb-8">
                <img 
                    src={loginImg} 
                    alt="Description" 
                    className="w-full h-[60vh] object-cover" 
                />
            </div>

            {/* login section */}
            <div className="flex flex-col items-start w-full">

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
                    />
                    
                    <CustomInput 
                        icon={AccountCircle} 
                        type="text" 
                        placeholder="Full Name" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                    />
                    
                    <CustomInput 
                        icon={AccountCircle} 
                        type="mail" 
                        placeholder="Email" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                    />



                    <CustomInput 
                        icon={Lock} 
                        type="password" 
                        placeholder="Password" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mt-2 w-full"
                    />
                    

                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg mt-4">
                        Register
                    </button>
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

import React from "react";
import CustomInput from "../../components/input";
import { AccountCircle, Lock } from "@mui/icons-material"; // Import MUI icons
import loginImg from '../../assets/login_img.png';

export default function LoginPage() {
    return (
        <div className="p-6 flex flex-col w-screen h-screen justify-between">
            
            {/* image section */}
            <div className="w-full mb-8">
                <img 
                    src={loginImg} 
                    alt="Description" 
                    className="w-full h-[50vh] object-cover" 
                />
            </div>

            {/* login section */}
            <div className="flex flex-col items-start w-full">

                    <h1 className="text-4xl text-[#066F8C] font-medium mb-2">Login</h1>


                    <div className="font-medium text-c_gray-600 mb-6">
                        Please SignIn to continue
                    </div>


                {/* Login Form */}
                <form className="w-full space-y-4">

                    <CustomInput 
                        icon={AccountCircle} 
                        type="text" 
                        placeholder="Username" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mb-1 w-full"
                    />
                    

                    <CustomInput 
                        icon={Lock} 
                        type="password" 
                        placeholder="Password" 
                        className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 mt-2 w-full"
                    />
                    

                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg mt-4">
                        Login
                    </button>

                    <p className="login-footer font-medium text-c_gray-600 mt-4 text-center">
                        Don't have an account?{' '}
                        <a href="/register" className="text-[#066F8C]">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

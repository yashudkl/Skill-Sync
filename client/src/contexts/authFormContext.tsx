import React, { createContext, useContext, useState, ReactNode } from "react";
import myAxios from "../api/axios";
import { toastError } from "@/lib/toast.lib";

interface LoginState {
    user_name: string;
    password: string;
}

interface SignupState {
    full_name: string;
    email: string;
    user_name: string;
    password: string;
}

interface SetupState {
    bio: string;
    skills: string[];
    pfp_url: string;
    pfp_file: File | null;
}

interface AuthContextType {
    loginState: LoginState;
    setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
    signupState: SignupState;
    setSignupState: React.Dispatch<React.SetStateAction<SignupState>>;
    setupState: SetupState;
    currentUser: User|undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<User|undefined>>;
    setSetupState: React.Dispatch<React.SetStateAction<SetupState>>;
    login: ()=>Promise<ApiResponse<User>>;
    signup: ()=>Promise<ApiResponse<User>>;
    setupAccount: ()=>Promise<ApiResponse<User>>;
    getStatus: ()=>Promise<ApiResponse<User>>;
}

// Create the context with a default value of undefined (we'll check for that)
const AuthFormContext = createContext<AuthContextType | undefined>(undefined);

// The AuthFormContextProvider component will provide the values to the context
export const AuthFormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loginState, setLoginState] = useState<LoginState>({ user_name: "", password: "" });
    const [signupState, setSignupState] = useState<SignupState>({ full_name: "", email: "", user_name: "", password: "" });
    const [setupState, setSetupState] = useState<SetupState>({ bio: "", skills: [] as string[], pfp_url: "", pfp_file: null as null | File });
    const [currentUser, setCurrentUser] = useState<User>();
    const getStatus = async() => {
        const res = await myAxios.get("/api/auth/status");
        return res.data as ApiResponse<User>;
    }
    const login = async() => {
        const res = await myAxios.post("/api/auth/login", loginState);
        return res.data as ApiResponse<User>;
    }
    const signup = async() => {
        const res = await myAxios.post("/api/auth/signup", signupState);
        return res.data as ApiResponse<User>;
    }
    const setupAccount = async() => {
        const formData = new FormData();
        formData.append("bio", setupState.bio);
        formData.append("skills", JSON.stringify(setupState.skills)); // Convert the skills array to a JSON string
        formData.append("pfp_url", setupState.pfp_url);
        console.log(setupState)
        if (!setupState.pfp_file){
            return {
                error: true,
                message: "Upload Pfp"
            } as ApiResponse<User>
            };
        formData.append("pfp_file", setupState.pfp_file);
        const res = await myAxios.post("/api/auth/setup", formData);
        return res.data as ApiResponse<User>

    }
    const values = {
        loginState,
        setLoginState,
        signupState,
        setSignupState,
        setupState,
        setSetupState,
        login,
        signup,
        setupAccount,
        currentUser,
        setCurrentUser,
        getStatus
    };

    return (
        <AuthFormContext.Provider value={values}>
            {children}
        </AuthFormContext.Provider>
    );
};

// A custom hook to use the context
export const useAuthFormContext = (): AuthContextType => {
    const context = useContext(AuthFormContext);
    if (!context) {
        throw new Error("useAuthFormContext must be used within an AuthFormContextProvider");
    }
    return context;
};

import React, { createContext, useContext, useState, ReactNode } from "react";
import myAxios from "../api/axios";

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
    setSetupState: React.Dispatch<React.SetStateAction<SetupState>>;
    login: ()=>Promise<ApiResponse>;
    signup: ()=>Promise<ApiResponse>;
}

// Create the context with a default value of undefined (we'll check for that)
const AuthFormContext = createContext<AuthContextType | undefined>(undefined);

// The AuthFormContextProvider component will provide the values to the context
export const AuthFormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loginState, setLoginState] = useState<LoginState>({ user_name: "", password: "" });
    const [signupState, setSignupState] = useState<SignupState>({ full_name: "", email: "", user_name: "", password: "" });
    const [setupState, setSetupState] = useState<SetupState>({ bio: "", skills: [] as string[], pfp_url: "", pfp_file: null as null | File });
    const login = async() => {
        const res = await myAxios.post("/api/auth/login", loginState);
        return res.data as ApiResponse;
    }
    const signup = async() => {
        const res = await myAxios.post("/api/auth/signup", signupState);
        return res.data as ApiResponse;
    }
    const values = {
        loginState,
        setLoginState,
        signupState,
        setSignupState,
        setupState,
        setSetupState,
        login,
        signup
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

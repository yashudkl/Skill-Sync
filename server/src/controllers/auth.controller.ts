import { AUTH_JWT } from "../lib/CONSTANTS";
import JsonResponse from "../lib/jsonReponse";
import { User } from "../models/Users";
import { Controller } from "../types/controller";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const generateToken = (user_id: string) => jwt.sign({ user_id }, AUTH_JWT, { expiresIn: '10d' });
const expiresIn = 60 * 60 * 24 * 14 * 1000;
const options = { maxAge: expiresIn, httpOnly: false };

export const loginController: Controller = async(req, res) => {
    const jsonResponse = new JsonResponse(res);
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) return jsonResponse.clientError("No user found");
        const isPasswordValid = await bcrypt.compare(password, user.password as string);
        if (!isPasswordValid) {
            return jsonResponse.clientError('Invalid password');
        }
        const token = generateToken(user.id);
        res.cookie("session", token, options);
        const savedUser = user.toJSON() as any;
        delete savedUser.password;
        delete savedUser.email;
        jsonResponse.success(savedUser);
    } catch (error) {
        console.log(error);
        jsonResponse.serverError();
    }
}

export const signupController: Controller = async(req, res) => {
    const jsonResponse = new JsonResponse(res);
    try {
        
        const { password, ...restBody } = req.body;
        const user_name = restBody.user_name.toLowerCase();
        restBody.user_name = restBody.user_name.toLowerCase()
        if(user_name.length < 3) return jsonResponse.clientError("Username should be more than 3 letters") 
        const foundUser = await User.findOne({user_name});
        if(foundUser) return jsonResponse.clientError("Username already taken");
        if(!password) return jsonResponse.clientError("Please enter password");
        if(password.length < 8) return jsonResponse.clientError("Password should be more than 8 charecters");
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            password: hashedPassword,
            ...restBody
        }) 
        await user.save();
        const savedUser = user.toJSON() as any;
        delete savedUser.password;
        delete savedUser.email;
        const token = generateToken(user.id);
        res.cookie("session", token, options);
        jsonResponse.success(savedUser);
    } catch (error) {
        console.log(error);
        jsonResponse.serverError();
    }
}


export const getLoginStatus: Controller = async(req, res) => {
    const jsonResponse = new JsonResponse(res);
    try {
        jsonResponse.success(res.locals.user);
    } catch (error) {
        console.log(error);
        jsonResponse.serverError();
    }
}

export const authenticateUser: Controller = async(req, res, next) => {
    const jsonResponse = new JsonResponse(res);
    try {
        const token = req.cookies.session;
        if(!token) return jsonResponse.notAuthorized();
        const { user_id } = jwt.verify(token, AUTH_JWT) as any;
        if(!user_id) return jsonResponse.notAuthorized();
        const user = await User.findById(user_id).select("-password -email");
        if(!user) return jsonResponse.clientError("User not found");
        res.locals.user = user.toJSON();
        next?.();
    }catch(error){
        console.log(error);
        jsonResponse.serverError();
    }
}

export const checkAccountSetup: Controller = async(req, res, next) => {
    const jsonResponse = new JsonResponse(res);
    try {
        const user = res.locals.user;
        if(!user.account_setup) return jsonResponse.notAuthorized("Please setup your account");
        next?.();
    } catch (error) {
        console.log(error);
        jsonResponse.serverError();
    }
}
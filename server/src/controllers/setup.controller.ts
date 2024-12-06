

import sharp from "sharp";
import { Controller } from "../types/controller";
import JsonResponse from "../lib/jsonReponse";
import { upload, uploadPfpToCloud } from "../lib/upload.lib";
import { User } from "../models/Users";


export const setupAccountController: Controller = async(req, res) => {
    upload(req, res, async err=>{
        const { _id } = res.locals.user
        const jsonResponse = new JsonResponse(res);
        try {
            if(err) return jsonResponse.serverError();
            req.body.skills = JSON.parse(req.body.skills);
            if(req.body.skills?.length < 1) return jsonResponse.clientError("Please select atleast one skills");
            if(req.body.bio?.length < 10) return jsonResponse.clientError("Please write description of atleast 10 charecter");
            const file = (req.files as Express.Multer.File[])[0];
            if(!file) return jsonResponse.clientError("No file provided");
            if(!file.mimetype.includes("image")) return jsonResponse.clientError("Unsupported image type");
            const buffer = await sharp(file.buffer).jpeg({quality: 70}).toBuffer();
            const url = await uploadPfpToCloud(_id, buffer);
            console.log(url)
            await User.findByIdAndUpdate(_id, {
                $set: {
                    ...req.body,
                    pfp_url: url,
                }
            })
            jsonResponse.success(await User.findOne());
        } catch (error) {
            console.log(error)
            return jsonResponse.serverError();
        }
    })
}
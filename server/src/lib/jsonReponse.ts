import { Response } from "express";

export default class JsonResponse {
    constructor(private res: Response){}
    
    public success(result: any = {}, message: string = "success"){
        this.res.status(200).json({
            error: false,
            status: 200,
            result,
            message
        })
    }
    public serverError(message: string = "Internal Server Error", result: any = null){
        this.res.status(200).json({
            error: true,
            status: 500,
            result,
            message
        })
    }
    public notFound(message: string){
        this.res.status(200).json({
            error: true,
            status: 404,
            result: null,
            message
        })
    }
    public notAuthorized(message: string = "Not authorized"){
        this.res.status(200).json({
            error: true,
            status: 401,
            result: null,
            message
        })
    }
    public clientError(message: string, result: any = null){
        this.res.status(200).json({
            error: true,
            status: 400,
            result,
            message
        })
    }
}
import { NextFunction, Request, Response } from "express";

declare type Controller = (req: Request, res: Response, next?: NextFunction) => void;
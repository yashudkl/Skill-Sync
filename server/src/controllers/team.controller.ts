import JsonResponse from "../lib/jsonReponse";
import { Team } from "../models/Team";
import { Controller } from "../types/controller";

export const createTeamController: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    try {
        const body = req.body;
        const team = new Team(body);
        await team.save();
        jsonReponse.success(team);
    } catch (error) {
        console.log(error);
        jsonReponse.serverError();
    }
}
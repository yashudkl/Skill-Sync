import JsonResponse from "../lib/jsonReponse";
import { Team } from "../models/Team";
import { User } from "../models/Users";
import { Controller } from "../types/controller";
import { ObjectId } from "mongoose";
export const createTeamController: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    try {
        const body = req.body;
        delete body._id;
        const team = new Team(body);
        team.user_id = res.locals.user._id;
        await team.save();
        jsonReponse.success(team);
    } catch (error) {
        console.log(error);
        jsonReponse.serverError();
    }
}

export const joinTeamController: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    try {
        const body = req.body;
        const category = body.category;
        const team = await Team.findOne({category});
        if(!team) return jsonReponse.clientError("No team found, create your own instead");
        await team.updateOne({
            $addToSet: {foundUsers: res.locals.user._id}
        })
        jsonReponse.success(team);
    } catch (error) {
        console.log(error)
        jsonReponse.serverError();
    }
}


export const getCurrentUserTeamsController: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    try {
        const _id = res.locals.user._id;
        const teams = await Team.find({user_id: _id});
        jsonReponse.success(teams);
    } catch (error) {
        console.log(error)
        jsonReponse.serverError();
    } 
}

export const getFoundUser: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    const team_id = req.params.id;
    try {
        const _id = res.locals.user._id;
        const team = await Team.findById(team_id);
        if(!team) return jsonReponse.clientError("Invalid Team Id");
        const user_ids = team.foundUsers;
        // const users = await User.aggregate([
        //     {
        //         $match: {
        //             _id: {$in: user_ids}
        //         }
        //     }
        // ])
        const users = await User.find({_id: {$in: user_ids}})
        console.log(users)
        jsonReponse.success(users);
    } catch (error) {
        console.log(error)
        jsonReponse.serverError();
    } 
}

export const acceptUser: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    const user_id = req.params.user_id;
    const team_id = req.params.team_id;
    try {
        await Team.findByIdAndUpdate(team_id, {
            $addToSet: {
                team_members: user_id
            },
            $pull: {
                foundUsers: user_id
            }
        })
        jsonReponse.success()
    } catch (error) {
        console.log(error)
        jsonReponse.serverError();
    }
}

export const declineUser: Controller = async(req, res) => {
    const jsonReponse = new JsonResponse(res);
    const user_id = req.params.user_id;
    const team_id = req.params.team_id;
    try {
        await Team.findByIdAndUpdate(team_id, {
            $addToSet: {
                rejectedUsers: user_id
            },
            $pull: {
                foundUsers: user_id
            }
        })
        jsonReponse.success()
    } catch (error) {
        console.log(error)
        jsonReponse.serverError();
    }
}
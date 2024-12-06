import React from "react";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FindImg from "../../assets/find.png"
import JoinImg from "../../assets/join.png"
import CreateImg from "../../assets/create.png"
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (


        <div className="p-6 flex w-screen flex-col space-y-4 h-full">
            <div className="flex py-2">
                <h1 className="text-4xl text-[#066F8C] font-bold mb-2">Skill Sync</h1>
                <NavLink to = "/manage/teams" className="flex justify-center items-center ml-auto text-secondary-green-900">
                    <CircleNotificationsIcon fontSize="large" />
                </NavLink>
            </div>
            <div className="font-medium text-c_gray-600  mb-2">
                Choose your option below to start your dream projects.
            </div>

            <hr />

            {/* Boxes Section */}


            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">




                <NavLink to = "join-team" className="flex-1 bg-white p-6 rounded-lg border-2  w-full space-y-4">
                    <img
                        src={JoinImg}
                        alt="Description"
                        className="w-full h-[20vh] object-cover"
                    />
                    <h2 className="text-xl font-bold text-[#066F8C] mb-2 ">Join a Team</h2>
                    <p className="text-gray-600">
                        Randomly join a team, based on your preferences.
                    </p>
                </NavLink>





                <NavLink to = "create-team" className="flex-1 bg-white p-6 rounded-lg  w-full border-2 space-y-4">
                    <img
                        src={CreateImg}
                        alt="Description"
                        className="w-full h-[20vh] object-cover"
                    />
                    <h2 className="text-xl font-bold text-[#066F8C] mb-2">Create a Team</h2>
                    <p className="text-gray-600">
                        Create a team and find members based on preferences.
                    </p>
                </NavLink>





{/* 
                <div className="flex-1 bg-white p-6 rounded-lg  w-full border-2 space-y-4">
                    <img
                        src={FindImg}
                        alt="Description"
                        className="w-full h-[25vh] object-cover"
                    />
                    <h2 className="text-xl font-bold text-[#066F8C] mb-2">Find a Team</h2>
                    <p className="text-gray-600 mb-4">
                        Manually search for a team to join.
                    </p>
                </div> */}
                <hr />
                <div>


                </div>
            </div>
        </div>
    );
}


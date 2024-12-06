import myAxios from "@/api/axios";
import { toastError } from "@/lib/toast.lib";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function TeamList() {
    const [teams, setTeams] = useState<Team[]>([]);
    const findTeam = async() => {
        const res = await myAxios.get("/api/team/current");
        const data = res.data as ApiResponse<Team[]>;
        if(data.error) return toastError("Unable to fetch teams")
        if(data.result.length <= 0) return toastError("You dont have any teams");
        setTeams(data.result)
    }
    useEffect(()=>{
        findTeam()
    }, [])
    return (
        <div className="flex flex-col bg-white min-h-screen">
            <div className="w-full bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <ArrowBackIosIcon className="text-[#066F8C]" />
                    <span className="ml-2 text-xl font-medium text-[#066F8C] font-poppins">
                        Back
                    </span>
                </div>


                <h1 className="text-[30px] font-medium mt-4 text-[#066F8C] font-poppins">
                    Teams
                </h1>

                <div className="flex flex-col py-4 border-b-[1px] border-c_gray-200">
                    {
                        teams.map((x, i)=> <TeamItem no = {i}  data={x} key={x._id} />)
                    }
                   
                </div>

            </div>
        </div>
    );
}

function TeamItem({data, no}: {data: Team, no: number}){
    return(
        <NavLink to = {data._id} className="flex space-x-4">
            <div className="flex h-full justify-center items-center text-xl text-c_gray-600 font-bold">
                {no + 1}
            </div>
            <div className="flex space-y-2 flex-col">
                <h1 className="text-xl font-medium text-c_gray-700">{data.team_name}</h1>
                <p className="text-sm text-c_gray-600 font-medium">{data.description}</p>
                <p className="text-sm text-c_gray-600">Category: {data.category}</p>
                <p className="text-sm text-c_gray-500">Found Members: {data.foundUsers.length}</p>
            </div>
        </NavLink>
    )
}
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Input from '../../components/input';
import { useParams } from "react-router-dom";
import myAxios from "@/api/axios";
import { toastError } from "@/lib/toast.lib";

const FoundSomeone: React.FC = () => {


  // state to hold user data

  const {id} = useParams();
  
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  // fetch user data

  const getUser = async() => {
    setLoading(true);
    const res = await myAxios.get("/api/team/found/"+id);
    const data = res.data as ApiResponse<User[]>;
    setLoading(false)
    if(data.error) return toastError(data.message)
    setUser(data.result[0]);
  }

  const onAccept = async() => {
    if(!user) return;
    const res = await myAxios.put(`/api/team/accept/${id}/${user._id}`);
    const data = res.data as ApiResponse;
    if(data.error) return toastError(data.message);
    getUser()
  }

  const onDecline = async() => {
    if(!user) return;
    const res = await myAxios.put(`/api/team/decline/${id}/${user._id}`);
    const data = res.data as ApiResponse;
    if(data.error) return toastError(data.message);
    getUser()
  }
  useEffect(() => {
    getUser()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if(!user) return <div>No User Found</div>

  return (
    <div className="flex flex-col bg-[#F8F8FD] min-h-screen">
    
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        
        <div className="flex items-center mb-4">
          <ArrowBackIosIcon className="text-[#066F8C]" />
          <span className="ml-2 text-xl font-medium text-[#066F8C] font-poppins">
            Back
          </span>
        </div>

        
        <h1 className="text-[30px] font-medium mt-4 text-[#066F8C] font-poppins">
          Found Someone
        </h1>

        {/* divider */}
        <hr className="mt-2 border-gray-300" />
    
        <div className="text-center">
          <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mt-5"
            src={user?.pfp_url || "https://via.placeholder.com/150"} // Dynamically load profile image
            alt="Profile"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-700">{user?.full_name}</h1>
        </div>

        <div className="mt-6">
          <p className="text-[16px] text-[#384B6B] font-poppins mt-2">
            {user?.bio || "This user has no bio."} {/* Display user bio */}
          </p>
        </div>

        <div className="space-y-5 mt-6">
          <p className="text-[16px] font-bold mt-4 text-[#066F8C] font-poppins">
            Skills
          </p>

          {/* skills as read only inputs */}

          {user?.skills && user.skills.length > 0 ? (
            user.skills.map((skill, index) => (
              <Input
                key={index}
                value={skill} 
                readOnly={true} 
                className="text-[#066F8C] bg-gray-100 border-gray-300 cursor-not-allowed"
              />
            ))
          ) : (
            <p>No skills available</p>
          )}
        </div>

        {/* See Profile Link */}



        {user && (
          <div className="mt-4">
            <a
              href={`/profile/${user._id}`}
              className="text-blue-500 text-sm font-medium underline"
            >
              See Profile
            </a>
          </div>
        )}

        <div className="flex justify-between space-x-4 w-full mt-8">
          <button onClick={onAccept} className="bg-[#066F8C] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C]">
            Accept
          </button>
          <button onClick={onDecline} className="bg-[#066F8C] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C]">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoundSomeone;

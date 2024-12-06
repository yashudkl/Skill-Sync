import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from 'react-router-dom';

const MemberSelected: React.FC = () => {


  const [users, setUsers] = useState<{ id: string; name: string; profilePicture: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    const mockUsers = [
      {
        id: "123",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150"
      },
      {
        id: "124",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150"
      },
      {
        id: "125",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150"
      },
      {
        id: "126",
        name: "The Lits",
        profilePicture: "https://via.placeholder.com/150"
      }
    ];


    setTimeout(() => {
      setUsers(mockUsers); 
      setLoading(false);  
    }, 500);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-[#F8F8FD] min-h-screen">
      <div className="w-full bg-white rounded-lg p-6">
        <div className="flex items-center mb-4">
          <ArrowBackIosIcon className="text-[#066F8C]" />
          <span className="ml-2 text-xl font-medium text-[#066F8C] font-poppins">
            Back
          </span>
        </div>

        <h1 className="text-[28px] font-medium mt-4 mb-4 text-[#066F8C] font-poppins">
          Member Selected
        </h1>
        <hr />





        <div className="mt-4 grid grid-cols-2 gap-8">
          {users.map((user) => (
            <div key={user.id} className="text-center">
              <img
                className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mt-5"
                src={user.profilePicture || "https://via.placeholder.com/150"}
                alt={`${user.name}'s Profile`}
              />
              <h1 className="text-2xl font-bold mt-4 mb-4 text-gray-700">{user.name}</h1>
              <div className="mt-4">
                <Link to={`/profile/${user.id}`}>
                  <a className="text-blue-500 text-sm font-medium underline">
                    See Profile
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-[#066F8C] text-xl font-bold text-center mt-20">
          Congratulations!
        </h1>

        <div className="flex justify-center items-center mt-10 mb-20">
          <Link to="/team-dashboard">
            <button className="bg-[#066F8C] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C]">
              View Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberSelected;

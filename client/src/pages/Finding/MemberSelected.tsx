import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MemberSelected: React.FC = () => {


  // state to hold user data


  const [user, setUser] = useState<{
    id: string;
    name: string;
    bio: string;
    profilePicture: string;
    skills: string[];
  } | null>(null);


  // simulate fetching data with mock data


  useEffect(() => {
    const mockUser = {
      id: "123",
      name: "The Lits",
      bio: "Hello! I'm a software engineer passionate about building intuitive and dynamic web applications. I enjoy solving complex problems and learning new technologies.",
      profilePicture: "https://via.placeholder.com/150", // Mock profile picture URL
      skills: ["JavaScript", "React", "Node.js"], // Mock skills
    };

    setTimeout(() => {
      setUser(mockUser);
    }, 500); 
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-[#F8F8FD] min-h-screen">
      <div className="w-full bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center mb-4">
          <ArrowBackIosIcon className="text-[#066F8C]" />
          <span className="ml-2 text-xl font-medium text-[#066F8C] font-poppins">
            Back
          </span>
        </div>

        <h1 className="text-[28px] font-medium mt-4 text-[#066F8C] font-poppins">
          Member Selected
        </h1>
        <hr className="my-4" />

        <div className="text-center">
          <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mt-5"
            src={user.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <h1 className="text-2xl font-bold mt-4 mb-4 text-gray-700">{user.name}</h1>
        </div>

        <hr className="my-4" />

        <div className="mt-6">
          <p className="text-[16px] text-[#384B6B] font-poppins mt-2">{user.bio}</p>
        </div>

        <h2 className="mt-6 text-[#066F8C] font-bold text-xl">Skills</h2>
        {user.skills && user.skills.length > 0 ? (
          user.skills.map((skill, index) => (
            <div key={index} className="mt-2 text-[#066F8C]">
              {skill}
            </div>
          ))
        ) : (
          <p>No skills available</p>
        )}

        <div className="mt-4">
          <a
            href={`/profile/${user.id}`}
            className="text-blue-500 text-sm font-medium underline"
          >
            See Profile
          </a>
        </div>

        <h1 className="text-[#066F8C] text-xl font-bold text-center mt-10 mb-0">
          Congratulations!
        </h1>
      </div>
    </div>
  );
};

export default MemberSelected;

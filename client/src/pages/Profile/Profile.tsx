import React from 'react';
import Button from '../../components/Button';
const Profile: React.FC = () => {
  return (
    <div className="flex flex-col  bg-[#F8F8FD]">
      <div className="w-full h-screen bg-white shadow-md rounded-lg p-6">
        <h1 className="text-[40px] font-bold mt-4 text-[#066F8C] font-poppins">
          Your Profile
        </h1>
        <p className="text-[16px] font-medium  mt-4 text-[#384B6B] font-poppins">
          Customize your profile
        </p>
        <div className="text-center">
          <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mt-5"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-700">John Doe</h1>
        </div>

        <div className="mt-6">
        
          <p className="text-[16px]  text-[#384B6B] font-poppins mt-2">
            Hello! I'm a software engineer passionate about building intuitive and dynamic web applications. I enjoy solving complex problems and learning new technologies.
          </p>
        </div>
        <div className="flex justify-between space-x-4 w-full mt-8">
  <button className="bg-[#066F8C] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C]">
    My Skills
  </button>
  <button className="bg-[#066F8C] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C]">
    Recent Teamup
  </button>
</div>
<div>
<Button className="bg-[#35b3f2] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#066F8C] focus:outline-none focus:ring-2 focus:ring-[#066F8C] mt-[8rem]">
            Edit Profile
          </Button>
</div>


    
      </div>
    </div>
  );
};

export default Profile;

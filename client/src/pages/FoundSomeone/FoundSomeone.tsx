import React from "react";
import Button from '../../components/Button';
import Input from '../../components/input';
const FoundSomeone = () => {
   return (
    <div className="flex flex-col  bg-[#F8F8FD]">
      <div className=" w-full h-screen bg-white shadow-md  p-6">
        <h1 className="text-[40px] font-bold mt-4 text-[#066F8C] font-poppins">
          Found Someone
        </h1>
        <p>Looks like you have got teammates</p>
        <div className='space-y-5'>
        <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mt-5"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-700 text-center">John Doe</h1>
        <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
          Skills
        </p>
        <Input placeholder='Skill 1'/>
        <Input placeholder='Skill 2'/>
        <p className="text-[16px] font-bold mt-4 text-[#] font-poppins text-[#066F8C] ">
          See Profile
        </p>
  

        </div>




    
      </div>
    </div>
  );
};

export default FoundSomeone;
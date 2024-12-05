import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/input';
import CustomTextArea from '../../components/textarea';
const joinTeam: React.FC = () => {
  return (
    <div className="flex flex-col  bg-[#F8F8FD]">
      <div className=" w-full h-screen bg-white shadow-md  p-6">
        <h1 className="text-[40px] font-bold mt-4 text-[#066F8C] font-poppins">
          Join A Team 
        </h1>
        <p>Randomly join a team based on your preferences</p>
        <div className='space-y-2'>
        <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
          Enter your category
        </p>
        <Input placeholder='Select your category'/>

        <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
          Select Skills Required 
        </p>
        <Input placeholder='Skill 1'/>
        <Input placeholder='Skill 2'/>
        <Input placeholder='Skill 3'/>
        <Input placeholder='Skill 4'/>
        <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
          Number of team members  
        </p>
        <Input placeholder='Enter Number'/>

        </div>
     <Button className='mt-4'>Join </Button>



    
      </div>
    </div>
  );
};

export default joinTeam;
        
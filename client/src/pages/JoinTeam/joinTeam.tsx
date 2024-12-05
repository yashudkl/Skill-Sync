import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/input';
import CustomTextArea from '../../components/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/categories';
const joinTeam: React.FC = () => {
  return (
    <div className="flex flex-col  bg-[#F8F8FD] h-[91.1vh]">
      <div className=" w-full h-full bg-white shadow-md  p-6 flex flex-col">
        <h1 className="text-[40px] font-bold text-[#066F8C] font-poppins">
          Join A Team
        </h1>
        <p>Randomly join a team based on your preferences</p>
        <div className='space-y-5 flex flex-col'>
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Enter your category
          </p>
          <Select>
            <SelectTrigger className="w-full h-[50px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {
                CATEGORIES.map(x=>( <SelectItem value={x}>{x}</SelectItem>))
              }
             
            </SelectContent>
          </Select>
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Number of team members
          </p>
          <Input placeholder='Enter Number' />

        </div>
        <Button className='mt-auto'>Join </Button>
      </div>
    </div>
  );
};

export default joinTeam;

import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/input';
import CustomTextArea from '../../components/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/categories';
const createTeam: React.FC = () => {
  return (
    <div className="flex flex-col  bg-[#F8F8FD]">
      <div className=" w-full h-screen bg-white shadow-md  p-6">
        <h1 className="text-[40px] font-bold text-[#066F8C] font-poppins">
          Create your Team
        </h1>
        <div className='space-y-2'>
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Team Name
          </p>
          <Input placeholder='Name' />
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Team Description
          </p>
          <div className='h-[300px]'>

            <CustomTextArea className='' placeholder='What do you need team for?' />
          </div>
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
        <Button className='mt-4'>Join </Button>




      </div>
    </div>
  );
};

export default createTeam;

import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/input';
import CustomTextArea from '../../components/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/categories';
import myAxios from '@/api/axios';
import { toastError, toastSuccess } from '@/lib/toast.lib';
const joinTeam: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const onJoin = async(e: any) => {
    e.preventDefault();
    const res = await myAxios.post("/api/team/join", {category});
    const data = res.data as ApiResponse<Team>;
    if(data.error){
      return toastError(data.message);
    }
    toastSuccess(`Joined Team - ${data.result.team_name}`)
  } 
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
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-full h-[50px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {
                CATEGORIES.map(x=>( <SelectItem value={x}>{x}</SelectItem>))
              }
             
            </SelectContent>
          </Select>
        </div>
        <Button className='mt-auto' onClick={onJoin}>Join </Button>
      </div>
    </div>
  );
};

export default joinTeam;

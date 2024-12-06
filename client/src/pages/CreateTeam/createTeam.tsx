import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/input';
import CustomTextArea from '../../components/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/categories';
import myAxios from '@/api/axios';
import { toastError } from '@/lib/toast.lib';
import { useNavigate } from 'react-router-dom';
const createTeam: React.FC = () => {
  const [data, setData] = useState<Team>({
    category: "",
    description: "",
    team_members: [],
    team_name: ""
  })
  const navigate = useNavigate();
  const onSubmit = async(e: any) => {
    e.preventDefault()
    const res = await myAxios.post("/api/team/create", data);
    const resData = res.data as ApiResponse<Team>;
    if(resData.error){
      return toastError(resData.message);
    }
    navigate("/teams")
  }
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
          <Input placeholder='Name' onChange={(e)=>setData({...data, team_name: e.target.value})} />
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Team Description
          </p>
          <div className='h-[300px]'>

            <CustomTextArea className='' placeholder='What do you need team for?' onChange={(e)=>setData({...data, description: e.target.value})}/>
          </div>
          <p className="text-[16px] font-bold mt-4 text-[#384B6B] font-poppins">
            Enter your category
          </p>
          <Select onValueChange={(value)=>setData({...data, category: value})}>
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
        <Button className='mt-4' onClick={onSubmit}>CREATE</Button>




      </div>
    </div>
  );
};

export default createTeam;

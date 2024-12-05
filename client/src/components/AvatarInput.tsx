import { useId, useState } from "react"
import AddIcon from '@mui/icons-material/Add';

interface Props {
    imageSrc?: string,
    onImageChange?: (image: File) => void;
    onUrlChange?: (url: string)=>void;
}
export default function AvatarInput({imageSrc, onImageChange, onUrlChange}: Props){
    const id = useId();
    const [src, setSrc] = useState(imageSrc);
    const handleChange = (e: any) => {
        const file = e.target.files[0] as File|null;
        if(!file) return;
        const src = URL.createObjectURL(file);
        onUrlChange?.(src);
        setSrc(src);
        onImageChange?.(file)
    }
    return(
        <>
            <input hidden type = "file" id = {id}  accept="image/*" onChange={handleChange}/>
            <label className="bg-c_gray-200 w-[170px] h-[170px] rounded-full flex justify-center items-center overflow-hidden border-4 border-c_gray-500" htmlFor = {id}>
                {src?(<img className="w-[inherit] h-[inherit] rounded-full object-cover" src = {src} />):(<AddIcon className="text-c_gray-500 !text-4xl" />)}
            </label>
        </>
    )
}
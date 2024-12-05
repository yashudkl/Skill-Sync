import { cn } from "../lib/cn"

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: any
}

export default function CustomInput(Props: Props)
{
    return(
        <div className={cn("bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2", Props.className)}>
            {Props.icon && <Props.icon className = "!text-c_gray-600"/>}
            <input {...Props} className="bg-transparent placeholder:text-c_gray-600"/>
        </div>
    )
}
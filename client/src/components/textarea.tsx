interface Props extends  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

}

export default function CustomTextArea(Props: Props)
{
    return(
        <div className="bg-c_gray-200 p-4 rounded-3xl text-c_gray-700 flex flex-row space-x-2 h-full w-full flex-1">
            
            <textarea  {...Props} className="bg-transparent placeholder:text-c_gray-600 w-full h-full"/>
        </div>
    )
}
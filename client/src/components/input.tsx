interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}
export default function CustomInput(props: Props)
{
    return(
        <div className="bg-c_gray-500">
            <input {...props} className=""/>
        </div>
    )
}
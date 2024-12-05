interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}
export default function CustomInput(props: Props)
{
    return(
        <div>
            <input {...props} className=""/>
        </div>
    )
}
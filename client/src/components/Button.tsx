interface Props extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}
export default function Button(Props: Props){
    return(

        <button {...Props} className="w-full py-4 bg-primary-blue-900 text-white font-bold rounded-2xl">{Props.children}</button>
    )
}
import { cn } from "../lib/cn";

interface Props extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}
export default function Button(Props: Props){
    return(

        <button {...Props} className={cn("w-full py-4 bg-primary-blue-900 text-white font-bold rounded-2xl", Props.className)}>{Props.children}</button>
    )
}
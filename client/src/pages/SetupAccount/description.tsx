import CustomInput from "../../components/input";
import PersonIcon from '@mui/icons-material/Person';
export default function SetupDescriptionPage(){
    return(
        <>
            <CustomInput placeholder="Describe yourself..." icon={PersonIcon} />
        </>
    )
}
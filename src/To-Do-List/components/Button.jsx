import { useNavigate } from "react-router-dom";

export const Button = ({color, hover, message, navigateTo}) => {
    const navigate = useNavigate();

    return (
        <button className={`w-40 min-h-[50px] rounded-xl m-5 mt-10 border-none ${color} text-white ${hover}`} onClick={() => {navigate(navigateTo)}}>{message}</button>
    );
}
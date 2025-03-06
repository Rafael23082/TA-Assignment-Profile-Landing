import { useNavigate } from "react-router-dom";

export const Button = ({color, hover, message, navigateTo}) => {
    const navigate = useNavigate();

    return (
        <button className={`border w-40 h-[9vh] rounded-xl m-5 mt-10 border-none ${color} text-white ${hover}`} onClick={() => {navigate(navigateTo)}}>{message}</button>
    );
}
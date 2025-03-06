import { Header } from "./Header";
import { DescriptionText } from "./DescriptionText";

export const CompetitionInfo = ({competition}) => {
    return(
    <div className="w-[80%] justify-self-center min-h-[50vh] h-auto flex flex-col gap-14 mt-[5em] items-center md:flex-row md:mt-4">    
            <div className="w-[28%] min-w-70 bg-gray-400 rounded-[10px] h-[40vh] shrink-0 sm:min-w-60"></div>
            <div className="w-[80%] flex flex-col justify-center h-auto md:w-[72%]">
                <Header text={`${competition.title}`}></Header>
                <DescriptionText text={`Category: ${competition.category}`} color="#818181" />
                <DescriptionText text={`${competition.description}`} color="#000000" />
                <DescriptionText text={`Date: ${competition.date}`} color="#818181" />
                <button className="w-25 bg-[#DD3833] text-[#FFFFFF] font-semibold h-9 mt-5 rounded-[10px] hover:bg-[#5A0000] duration-300">Register</button>
            </div>
        </div>
    );
}


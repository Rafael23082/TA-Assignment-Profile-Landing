import { CompetitionInfo } from "./CompetitionInfo";

export const CompetitionsList = ({competitionList}) => {
    return (
        <>
        <div className="pb-20">
            {competitionList.map((competition) => (
                <CompetitionInfo competition={competition} />
            ))}
        </div>
        </>
    );
}
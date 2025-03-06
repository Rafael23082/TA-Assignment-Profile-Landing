import { CompetitionsList } from "./CompetitionsList";
import { Navbar } from "./Navbar";

export const CompetitionsPage = ({competitionList}) => {
    return (
        <>
            <Navbar />
            <CompetitionsList competitionList={competitionList} />
        </>
    );
};

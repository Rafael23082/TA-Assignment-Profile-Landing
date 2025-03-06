import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CompetitionsPage } from "./Components/CompetitionsPage";
import "./index.css"
import { useState } from "react";

function App(){
    const [competitions, setCompetitions] = useState([
        {
            title: "Traditional Chinese Songs Singing", 
            category: "Singing", 
            description: "This competition's theme revolves around singing Chinese traditional songs, where the committee will decide the songs for each contestant. The contestants will be given 30 minutes to prepare themselves, before recording them singing and submit it on the submission form provided.", 
            date: "Dec 21 - 25"
        },
        {
            title: "Traditional Chinese Songs Singing", 
            category: "Singing", 
            description: "This competition's theme revolves around singing Chinese traditional songs, where the committee will decide the songs for each contestant. The contestants will be given 30 minutes to prepare themselves, before recording them singing and submit it on the submission form provided.", 
            date: "Dec 21 - 25"
        }
    ]);

    return( 
        <Router>
            <Routes>
                <Route path="/" element={<CompetitionsPage competitionList = {competitions} />}></Route>
            </Routes>
        </Router>
        
    );
}

export default App;
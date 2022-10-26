import React from "react";
import { QuizContext } from "../Helpers/Context";
import "./endpage.css";

function Endpage()
{

    
    

    const {gameState,setgameState,score,setScore}=React.useContext(QuizContext);
    function Restart()
    {
        setgameState("menu");
        setScore(0);
    }

    return(<div >
        <div className="endpage">
       <div> Your final score is : </div>
       <div>{score}</div>
       </div>
       <div><button id="restart" onClick={Restart}>Play again</button></div>
    


    </div>);
}

export default Endpage;
import React, { useContext } from "react";
import axios from 'axios';
import { QuizContext } from "../Helpers/Context";
import Quiz from "./Quiz";

function Menu()
{

    const {gameState,setgameState}=React.useContext(QuizContext);
   
    return(
    <div>
      
      <div id="score">Score : -</div>
      <button id="letsstart" onClick={()=>{setgameState("quiz")}}>Let's get Started</button>
        
    </div>);
}

export default Menu;
import React from "react";
import "./Quiz.css";
import axios from 'axios';
import {useLocation} from "react-router-dom"
import Api from "../Api";
import { Button } from "@mui/material";
import { QuizContext } from "../Helpers/Context";

function Quiz()
{
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  const [currques,setcurrques]=React.useState(0);
  const [pick,setpick]=React.useState("");
 
  const { loading, data } = Api();
  const [disable,setdisable]=React.useState(false);
  const {gameState,setgameState,score,setScore}=React.useContext(QuizContext);

  
  const Question=({data,answers,number})=>
  {
  
  
      return(<div>
  <div className="quizpage">
              <div id="question">{data[number].question}</div>
              <div id="placeoptions">
              <div style={{marginTop:"20px"}}><button className="options" onClick={()=>{setpick(answers.at(0))}} disabled={disable}>{answers.at(0)}</button></div>
              <div><button className="options" onClick={()=>{setpick(answers.at(1))}} disabled={disable}>{answers.at(1)}</button></div>
              <div><button className="options"onClick={()=>{setpick(answers.at(2))}} disabled={disable}>{answers.at(2)}</button></div>
              <div><button className="options" onClick={()=>{setpick(answers.at(3))}} disabled={disable}>{answers.at(3)}</button></div>
              </div>
              <div>{data[currques].correct_answer}
              </div>
              
              </div>
      </div>)
  }
 
  React.useEffect(()=>
  {
    if(!loading)
    {
      if(pick === data[currques].correct_answer)
      {
        setScore(score+5);
        
        
      }
      else
      {
        setScore(score-1);
      }
      setdisable(true);
    }
  },[pick])

if(loading){
 return <p style={{fontFamily:"monospace", fontSize:"30px"}}>Loading... </p>
}

function Previous()
{
  if(currques!==0)
  {
    setcurrques(currques-1);
    setdisable(true);
  }
  
}

function Next()
{
  if(currques!==10){
    setcurrques(currques+1);
    setdisable(false);
    
  }
  
}


function Finished()
{
  localStorage.setItem("score",score);
  setgameState("endpage");
  
}

 const answers=[];
 answers.push(data[currques].correct_answer);
 answers.push(data[currques].incorrect_answers[0]);
 answers.push(data[currques].incorrect_answers[1]);
 answers.push(data[currques].incorrect_answers[2]);
 shuffle(answers);
console.log(answers);

 
        return(
        <div >
          <div id="score">Score : {score} </div>
          <Question data={data} answers={answers} number={currques}/>
           {currques===0 ? (<div></div>) : (<div id="previousdiv"><button id="previous"   onClick={Previous} >Previous</button></div> ) }
            {currques===data.length-1 ? (<div id="nextdiv"><button id="next" onClick={Finished}>Finished</button></div>) :( <div id="nextdiv"><button id="next" onClick={Next}>Next</button></div>) }
            

            
        </div>
        )
}
export default Quiz;
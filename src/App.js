
import axios from 'axios';
import './App.css';
import React, { useContext } from 'react';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Endpage from './Components/Endpage';
import { QuizContext } from './Helpers/Context';

import { BrowserRouter,Route,Routes} from 'react-router-dom';

import Api from './Api';
import { Container } from '@mui/system';


function App() {
 
  
  const [gameState,setgameState]=React.useState("menu");
  const [score,setScore]=React.useState(0);
  return (
    <div className="App">

      {/* <Container maxWidth="md"> */}
        <div id='quiz'>Quiz App</div>
        
        <QuizContext.Provider value={{gameState,setgameState,score,setScore}}>
        {gameState === "menu" && <Menu/>}
        {gameState==="quiz" && <Quiz/>}
        {gameState==="endpage" && <Endpage/>}
        </QuizContext.Provider>
        {/* </Container> */}

      
         
        
    </div>
  );
}

export default App;

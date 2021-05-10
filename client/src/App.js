import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './screens/Landing';
import { getAllConsoles, getAllGames, verifyUser } from './services';
import {useState, useEffect} from 'react'
import BacklogGallery from './screens/BacklogGallery';
import GameDetails from './screens/GameDetails';
import EditGame from './screens/EditGame';
import AddGame from './screens/AddGame';
import AddConsole from './screens/AddConsole';
import AddBackLog from './screens/AddBackLog';



function App() {
  
  const [games, setGames] = useState([])
  const [consoles, setConsoles] = useState([])
  const [currentUser, setCurrentUser] = useState(null);

  const fetchGames = async () => {
    const data = await getAllGames();
    // console.log(data)
    setGames(data)
  }
  const fetchConsoles = async () => {
    const data = await getAllConsoles();
    // console.log(data)
    setConsoles(data)
  }
  useEffect(() => {
    verify();
    fetchConsoles();
    fetchGames();

  },[]);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user)
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing verify={verify}/>
        </Route>
        <Route exact path ="/backlogs">
          <BacklogGallery currentUser={currentUser} />
        </Route>
        <Route path="/game-details/:id">
          <GameDetails games={games}/>
        </Route>
        <Route path="/edit-game">
          <EditGame  />
        </Route>
        <Route path="/add-game/">
          <AddGame />
        </Route>
        <Route path="/add-console/">
          <AddConsole />
        </Route>
        <Route path="/add-backlogs">
          <AddBackLog games={games} consoles={consoles}/>
        </Route>
        
     </Switch>
    </div>
  );
}

export default App;

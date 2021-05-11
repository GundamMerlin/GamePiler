import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './screens/Landing';
import { getAllConsoles, getAllGames, getGame, verifyUser } from './services';
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
    setGames(data)
  }
  const fetchConsoles = async () => {
    const data = await getAllConsoles();
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
          <Landing verify={verify} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        </Route>
        <Route exact path ="/backlogs">
          <BacklogGallery currentUser={currentUser} games={games} />
        </Route>
        <Route exact path="/games/:id">
          <GameDetails games={games} currentUser={currentUser}/>
        </Route>
        <Route path="/edit-game">
          <EditGame currentUser={currentUser} games={games}/>
        </Route>
        <Route path="/add-game/">
          <AddGame currentUser={currentUser}/>
        </Route>
        <Route path="/add-console/">
          <AddConsole currentUser={currentUser}/>
        </Route>
        <Route path="/add-backlogs">
          <AddBackLog games={games} consoles={consoles} currentUser={currentUser}/>
        </Route>
        
     </Switch>
    </div>
  );
}

export default App;
